import { useState } from "react";
import { supabase } from "../supabase/supabaseClient";
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [modal, setModal] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const logAdminLogin = async (user) => {
    try {
      const res = await fetch("https://ipapi.co");
      const geo = await res.json();

      await supabase.from("admin_logs").insert({
        user_id: user.id,
        email: user.email,
        ip: geo.ip || "Unknown",
        location: geo.city ? `${geo.city}, ${geo.country_name}` : "Unknown Location",
      });
    } catch (err) {
      console.error("Logging failed:", err);
      // We don't block the user if the geo-fencing/logging API fails
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setModal({ type: "error", message: error.message });
      setIsLoading(false);
      return;
    }

    // Run logging and then redirect
    await logAdminLogin(data.user);
    
    setModal({
      type: "success",
      message: "Welcome back! Redirecting to dashboard...",
    });

    setTimeout(() => {
      navigate("/admin/dashboard");
    }, 1200);
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
            <div className="relative">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                type="email" 
                required
                placeholder="Email Address"
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all pl-12"
              />
              <span className="material-symbols-outlined absolute left-4 top-4 text-slate-400">mail</span>
            </div>

            <div className="relative">
              <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"} 
                required
                placeholder="Enter Password"
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all pl-12"
              />
              <span className="material-symbols-outlined absolute left-4 top-4 text-slate-400">lock</span>
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-slate-400 hover:text-blue-900 transition-colors"
              >
                <span className="material-symbols-outlined">
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>

            <motion.button 
              disabled={isLoading}
              whileHover={!isLoading ? { scale: 1.01 } : {}}
              whileTap={!isLoading ? { scale: 0.99 } : {}}
              className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-lg shadow-lg transition-all ${
                isLoading 
                  ? "bg-slate-400 cursor-wait text-white" 
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
