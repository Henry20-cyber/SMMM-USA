import { useState } from "react";
import { login } from "../services/auth";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/admin");
    } catch (err) {
      // It's usually better to use a state variable for errors 
      // instead of a blocking alert, but this works for now!
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "backOut" }}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100"
      >
        <form onSubmit={handleLogin}>
          <div className="text-center mb-8">
            <motion.div 
              // FIXED: Modern repeat syntax
              animate={{ rotate: [-10, 10] }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 2 
              }}
            >
              <span className="material-symbols-outlined text-blue-900 text-6xl">
                lock_person
              </span>
            </motion.div>
            <h2 className="text-3xl font-bold text-blue-900 font-['Noto_Serif'] mt-4">Admin Access</h2>
            <p className="text-slate-500 text-sm">Authorized personnel only</p>
          </div>
          
          <div className="space-y-4">
            <input
              value={email} // Added controlled value
              onChange={(e) => setEmail(e.target.value)} 
              type="email" 
              required
              placeholder="Email Address"
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-900 outline-none transition-all"
            />
            <input 
              value={password} // Added controlled value
              onChange={(e) => setPassword(e.target.value)}
              type="password" 
              required
              placeholder="Enter Password"
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-900 outline-none transition-all"
            />
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold text-lg shadow-md hover:bg-blue-950 transition-colors"
              type="submit"
            >
              Sign In
            </motion.button>
          </div>
        </form>
        
        <button 
          onClick={() => navigate('/')}
          className="w-full mt-6 text-slate-400 hover:text-blue-900 font-medium transition-colors"
        >
          Return to Website
        </button>
      </motion.div>
    </div>
  );
};

export default Login;