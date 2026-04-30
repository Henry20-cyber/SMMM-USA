import { useState } from 'react'; // Added useState for menu toggle
import '../App.css';
import Logo from '../assets/logo.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Standard icons for hamburger

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          
          {/* Left Section: Hamburger + Logo */}
          <div className="flex items-center gap-4">
            {/* Hamburger Button (Hidden on desktop) */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-blue-900 hover:bg-slate-100 rounded-md transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Logo Section */}
            <motion.div 
              className="flex items-center gap-3"
              variants={fadeVariants}
            >
              <img 
                src={Logo}
                alt="SMMM Logo"
                className="h-12 w-24 object-contain"
              />
            </motion.div>
          </div>

          {/* Navigation (Desktop) */}
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

        {/* Mobile Menu Dropdown (Optional logic) */}
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4"
          >
            <a href="#" className="text-blue-900 font-semibold">Home</a>
            <a href="#" className="text-slate-600">About Us</a>
            <a href="#" className="text-slate-600">Mission</a>
            <a href="#" className="text-slate-600">Superiors</a>
          </motion.div>
        )}
      </motion.header>
    </AnimatePresence>
  );
};

export default Header;