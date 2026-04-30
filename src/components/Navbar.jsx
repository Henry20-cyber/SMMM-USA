//import React from 'react';
import '../App.css';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <AnimatePresence>
      <motion.header
        className="fixed top-0 w-full z-50 border-b border-blue-900/10 bg-white shadow-sm"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fadeVariants}
      >
        <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto">
          {/* Logo Section */}
          <motion.div 
            className="flex items-center gap-3"
            variants={fadeVariants}
          >
            <span className="material-symbols-outlined text-blue-900 text-3xl">
              church
            </span>
            <span className="text-2xl font-bold text-blue-900 font-['Noto_Serif']">
              SMMM
            </span>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <motion.a 
              variants={fadeVariants}
              className="text-blue-900 border-b-2 border-yellow-600 font-semibold font-['Noto_Serif'] text-lg antialiased tracking-tight" 
              href="#"
            >
              Home
            </motion.a>
            <motion.a 
              variants={fadeVariants}
              className="text-slate-600 hover:text-blue-900 transition-colors font-['Noto_Serif'] text-lg antialiased tracking-tight" 
              href="#"
            >
              About Us
            </motion.a>
            <motion.a 
              variants={fadeVariants}
              className="text-slate-600 hover:text-blue-900 transition-colors font-['Noto_Serif'] text-lg antialiased tracking-tight" 
              href="#"
            >
              Mission
            </motion.a>
            <motion.a 
              variants={fadeVariants}
              className="text-slate-600 hover:text-blue-900 transition-colors font-['Noto_Serif'] text-lg antialiased tracking-tight" 
              href="#"
            >
              Superiors
            </motion.a>
          </nav>

          {/* Action Button */}
          <motion.button 
            variants={fadeVariants}
            className="bg-secondary text-on-secondary px-6 py-2 rounded-lg font-label-sm hover:opacity-90 transition-all duration-300 shadow-sm"
          >
            Donate
          </motion.button>
        </div>
      </motion.header>
    </AnimatePresence>
  );
};

export default Header;