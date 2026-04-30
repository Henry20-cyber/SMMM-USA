import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "backOut" }}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100"
      >
        <div className="text-center mb-8">
          <motion.div 
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ yoyo: Infinity, duration: 2 }}
          >
            <span className="material-symbols-outlined text-blue-900 text-6xl">lock_person</span>
          </motion.div>
          <h2 className="text-3xl font-bold text-blue-900 font-['Noto_Serif'] mt-4">Admin Access</h2>
          <p className="text-slate-500 text-sm">Authorized personnel only</p>
        </div>
        
        <div className="space-y-4">
          <input 
            type="password" 
            placeholder="Enter Access Key"
            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-900 outline-none transition-all"
          />
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-primary text-on-secondary py-4 rounded-xl font-bold text-lg shadow-md hover:bg-blue-950 transition-colors"
          >
            Sign In
          </motion.button>
        </div>
        
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