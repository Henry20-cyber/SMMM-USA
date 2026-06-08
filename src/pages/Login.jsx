import { useState, useEffect, useCallback, useRef } from "react";
import { supabase } from "../supabase/supabaseClient";
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// --- Configuration ---
const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_DURATION_MINUTES = 15;
const LOCKOUT_DURATION_MS = LOCKOUT_DURATION_MINUTES * 60 * 1000;

// Helper: simple password strength check (returns 0-4)
const checkPasswordStrength = (pwd) => {
  let score = 0;
  if (!pwd) return 0;
  if (pwd.length >= 8) score++;
  if (pwd.match(/[a-z]/) && pwd.match(/[A-Z]/)) score++;
  if (pwd.match(/\d/)) score++;
  if (pwd.match(/[^a-zA-Z\d]/)) score++;
  return Math.min(score, 4);
};

// Helper: get IP & location using ipapi.co
const getClientLocation = async () => {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const geo = await res.json();
    return {
      ip: geo.ip || "Unknown",
      location: geo.city ? `${geo.city}, ${geo.country_name}` : "Unknown Location",
    };
  } catch (err) {
    console.error("Geo fetch failed:", err);
    return { ip: "Unknown", location: "Unknown Location" };
  }
};

// --- Rate Limiting DB Functions ---
const recordLoginAttempt = async (email, success, ip, location) => {
  try {
    await supabase.from("login_attempts").insert({
      email: email.toLowerCase().trim(),
      ip,
      location,
      success,
      created_at: new Date().toISOString(),
    });
  } catch (err) {
    console.error("Failed to record login attempt:", err);
  }
};

const clearFailedAttempts = async (email) => {
  try {
    await supabase
      .from("login_attempts")
      .delete()
      .eq("email", email.toLowerCase().trim())
      .eq("success", false);
  } catch (err) {
    console.error("Failed to clear failed attempts:", err);
  }
};

// Returns: { isLocked, remainingSeconds, failedCount }
const getLockoutStatus = async (email) => {
  if (!email) return { isLocked: false, remainingSeconds: 0, failedCount: 0 };
  
  try {
    const cutoff = new Date(Date.now() - LOCKOUT_DURATION_MS).toISOString();
    const { data, error } = await supabase
      .from("login_attempts")
      .select("created_at")
      .eq("email", email.toLowerCase().trim())
      .eq("success", false)
      .gte("created_at", cutoff)
      .order("created_at", { ascending: true });

    if (error) throw error;
    const failedAttempts = data || [];
    const failedCount = failedAttempts.length;

    if (failedCount >= MAX_FAILED_ATTEMPTS) {
      const earliestAttempt = new Date(failedAttempts[0].created_at);
      const lockoutEnd = earliestAttempt.getTime() + LOCKOUT_DURATION_MS;
      const now = Date.now();
      if (now < lockoutEnd) {
        const remainingSeconds = Math.ceil((lockoutEnd - now) / 1000);
        return { isLocked: true, remainingSeconds, failedCount };
      }
    }
    return { isLocked: false, remainingSeconds: 0, failedCount };
  } catch (err) {
    console.error("Lockout check error:", err);
    return { isLocked: false, remainingSeconds: 0, failedCount: 0 };
  }
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [modal, setModal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Rate limiting state
  const [lockoutRemaining, setLockoutRemaining] = useState(0);
  const [failedAttemptCount, setFailedAttemptCount] = useState(0);
  
  const timerRef = useRef(null);
  const debounceRef = useRef(null);

  const refreshLockoutStatus = useCallback(async (currentEmail) => {
    if (!currentEmail) {
      setLockoutRemaining(0);
      setFailedAttemptCount(0);
      return;
    }
    const { isLocked, remainingSeconds, failedCount } = await getLockoutStatus(currentEmail);
    setFailedAttemptCount(failedCount);
    setLockoutRemaining(isLocked && remainingSeconds > 0 ? remainingSeconds : 0);
  }, []);

  // Debounced lockout check (2 seconds after user stops typing)
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      refreshLockoutStatus(email);
    }, 2000);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [email, refreshLockoutStatus]);

  // Countdown timer for lockout
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (lockoutRemaining > 0) {
      timerRef.current = setInterval(() => {
        setLockoutRemaining((prev) => {
          if (prev <= 1) {
            if (timerRef.current) clearInterval(timerRef.current);
            refreshLockoutStatus(email);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [lockoutRemaining, email, refreshLockoutStatus]);

  const logAdminLogin = async (user) => {
    try {
      const { ip, location } = await getClientLocation();
      await supabase.from("admin_logs").insert({
        user_id: user.id,
        email: user.email,
        ip: ip,
        location: location,
      });
    } catch (err) {
      console.error("Logging failed:", err);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    if (lockoutRemaining > 0) {
      const mins = Math.floor(lockoutRemaining / 60);
      const secs = lockoutRemaining % 60;
      setModal({
        type: "error",
        message: `Too many failed attempts. Please wait ${mins}m ${secs}s before trying again.`,
      });
      return;
    }

    setIsLoading(true);
    const { ip, location } = await getClientLocation();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      await recordLoginAttempt(email, false, ip, location);
      const { isLocked, remainingSeconds, failedCount } = await getLockoutStatus(email);
      setFailedAttemptCount(failedCount);
      if (isLocked && remainingSeconds > 0) setLockoutRemaining(remainingSeconds);
      setModal({ type: "error", message: `Login failed: ${error.message}` });
      setIsLoading(false);
      return;
    }

    // Success
    await clearFailedAttempts(email);
    await recordLoginAttempt(email, true, ip, location);
    await logAdminLogin(data.user);
    
    setModal({
      type: "success",
      message: "Welcome back! Redirecting to dashboard...",
    });

    setTimeout(() => {
      navigate("/admin/dashboard");
    }, 1200);
  };

  // Password strength (computed during render)
  const passwordStrength = checkPasswordStrength(password);
  const getStrengthLabel = () => {
    if (passwordStrength === 0) return "";
    if (passwordStrength === 1) return "Weak";
    if (passwordStrength === 2) return "Fair";
    if (passwordStrength === 3) return "Good";
    return "Strong";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100"
      >
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="text-center">
            <motion.div 
              animate={{ rotate: [-5, 5] }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 2.5 }}
              className="inline-block"
            >
              <span className="material-symbols-outlined text-blue-900 text-6xl">
                lock_person
              </span>
            </motion.div>
            <h2 className="text-3xl font-bold text-blue-900 mt-4 tracking-tight">Admin Access</h2>
            <p className="text-slate-400 text-sm mt-1 uppercase tracking-widest font-semibold">Secure Entry Only</p>
          </div>
          
          <div className="space-y-4">
            {/* Email Field */}
            <div className="relative">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                type="email" 
                required
                placeholder="Email Address"
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all pl-12"
                disabled={lockoutRemaining > 0}
              />
              <span className="material-symbols-outlined absolute left-4 top-4 text-slate-400">mail</span>
            </div>

            {/* Password Field with Strength Indicator */}
            <div className="relative">
              <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"} 
                required
                placeholder="Enter Password"
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all pl-12"
                disabled={lockoutRemaining > 0}
              />
              <span className="material-symbols-outlined absolute left-4 top-4 text-slate-400">lock</span>
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-slate-400 hover:text-blue-900 transition-colors"
                disabled={lockoutRemaining > 0}
              >
                <span className="material-symbols-outlined">
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>

            {/* Password strength bar */}
            {password && (
              <div className="mt-1">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-500">Password strength:</span>
                  <span className={`font-semibold ${
                    passwordStrength <= 1 ? "text-red-500" : passwordStrength === 2 ? "text-yellow-500" : "text-green-600"
                  }`}>{getStrengthLabel()}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-300 ${
                      passwordStrength === 0 ? "w-0" :
                      passwordStrength === 1 ? "w-1/4 bg-red-500" :
                      passwordStrength === 2 ? "w-2/4 bg-yellow-500" :
                      passwordStrength === 3 ? "w-3/4 bg-blue-500" : "w-full bg-green-600"
                    }`}
                  />
                </div>
              </div>
            )}

            {/* Rate Limit Warning / Timer */}
            {lockoutRemaining > 0 && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-center">
                <div className="flex items-center justify-center gap-2 text-red-700">
                  <span className="material-symbols-outlined">hourglass_empty</span>
                  <span className="font-mono font-bold">
                    Account temporarily locked: {Math.floor(lockoutRemaining / 60)}m {lockoutRemaining % 60}s
                  </span>
                </div>
                <p className="text-xs text-red-600 mt-1">Too many failed attempts. Try again after cooldown.</p>
              </div>
            )}

            {/* Failed attempts indicator */}
            {failedAttemptCount > 0 && lockoutRemaining === 0 && (
              <p className="text-xs text-amber-600 text-center">
                ⚠️ {failedAttemptCount} failed attempt{failedAttemptCount !== 1 ? "s" : ""}. After {MAX_FAILED_ATTEMPTS} attempts, account will be locked for {LOCKOUT_DURATION_MINUTES} minutes.
              </p>
            )}

            {/* Submit Button */}
            <motion.button 
              disabled={isLoading || lockoutRemaining > 0}
              whileHover={!(isLoading || lockoutRemaining > 0) ? { scale: 1.01 } : {}}
              whileTap={!(isLoading || lockoutRemaining > 0) ? { scale: 0.99 } : {}}
              className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-lg shadow-lg transition-all ${
                (isLoading || lockoutRemaining > 0) 
                  ? "bg-slate-400 cursor-not-allowed text-white" 
                  : "bg-blue-900 hover:bg-blue-950 text-white"
              }`}
              type="submit"
            >
              {isLoading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                  <span>Authenticating...</span>
                </>
              ) : lockoutRemaining > 0 ? (
                "Access Locked"
              ) : (
                "Sign In"
              )}
            </motion.button>
          </div>
        </form>
        
        <button 
          onClick={() => navigate('/')}
          className="w-full mt-8 text-slate-400 hover:text-blue-900 font-medium transition-colors text-sm flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Return to Website
        </button>
      </motion.div>

      {/* MODAL FEEDBACK */}
      <AnimatePresence>
        {modal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-6 z-50"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-sm text-center border border-slate-100"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                modal.type === "error" ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"
              }`}>
                <span className="material-symbols-outlined text-4xl">
                  {modal.type === "error" ? "error" : "check_circle"}
                </span>
              </div>
              <h3 className={`text-xl font-bold mb-2 ${modal.type === "error" ? "text-red-600" : "text-green-600"}`}>
                {modal.type === "error" ? "Access Denied" : "Authorized"}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{modal.message}</p>
              <button
                onClick={() => setModal(null)}
                className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                  modal.type === "error" 
                    ? "bg-slate-800 text-white hover:bg-slate-900" 
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                {modal.type === "error" ? "Try Again" : "Redirecting..."}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Login;