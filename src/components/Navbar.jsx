import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Logo from '../assets/logo2.png';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    {
      title: 'Home',
      options: [
        { name: 'News Post', path: "#" },
        { name: 'UI/UX Design', path: "#" },
        { name: 'Cloud Solutions', path: "#" }
      ]
    },
    {
      title: 'About Us',
      options: [
        { name: 'About', path: "#" },
        { name: 'Donations', path: "#" },
        { name: 'Gallery', path: "#" },
        { name: 'Admin Login', path: "/login" }
      ]
    }
  ];

  const toggleDropdown = (title) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  const closeMenus = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <AnimatePresence>
      <motion.header
        className="fixed top-0 w-full z-50 border-b border-blue-900/10 bg-white shadow-sm opacity-10"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fadeVariants}
      >
        <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto">
          
          {/* Left Section: Hamburger + Logo */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-blue-900 hover:bg-slate-100 rounded-md transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <motion.div className="flex items-center gap-3" variants={fadeVariants}>
              <Link to="/" onClick={closeMenus}>
                <img src={Logo} alt="SMMM Logo" className="h-12 w-12 object-contain" />
              </Link>
            </motion.div>
          </div>

          {/* Navigation (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 relative">
            

            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                <button 
                  onClick={() => toggleDropdown(item.title)}
                  onMouseEnter={() => setOpenDropdown(item.title)}
                  className="flex items-center gap-1 text-slate-600 hover:text-blue-900 transition-colors font-['Noto_Serif'] text-lg antialiased tracking-tight"
                >
                  {item.title}
                  <ChevronDown size={16} className={`transition-transform duration-300 ${openDropdown === item.title ? 'rotate-180' : ''}`} />
                </button>

                {/* Desktop Dropdown Menu */}
                <AnimatePresence>
                  {openDropdown === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      onMouseLeave={() => setOpenDropdown(null)}
                      className="absolute left-0 mt-2 w-48 bg-white border border-slate-100 shadow-xl rounded-xl py-2 overflow-hidden"
                    >
                      {item.options.map((option) => (
                        <Link 
                          key={option.name} 
                          to={option.path} 
                          onClick={closeMenus}
                          className="block px-4 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                        >
                          {option.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))} 

            <Link 
              className="text-slate-600 hover:text-blue-900 font-['Noto_Serif'] text-lg" 
              to="/mission"
              onClick={closeMenus}
            >
              Mission
            </Link>
          </nav>

          {/* Action Button */}
          <motion.button 
            variants={fadeVariants}
            className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-sm"
          >
            Donate
          </motion.button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4 overflow-hidden"
            >
              <Link to="/" onClick={closeMenus} className="text-blue-900 font-semibold">
                Home
              </Link>
              
              {menuItems.map((item) => (
                <div key={item.title} className="flex flex-col gap-2">
                  <button 
                    onClick={() => toggleDropdown(item.title)}
                    className="flex justify-between items-center text-slate-600 font-semibold"
                  >
                    {item.title}
                    <ChevronDown size={18} className={openDropdown === item.title ? 'rotate-180' : ''} />
                  </button>
                  
                  {openDropdown === item.title && (
                    <div className="pl-4 flex flex-col gap-2 border-l-2 border-slate-100 ml-1">
                      {item.options.map(opt => (
                        <Link 
                          key={opt.name} 
                          to={opt.path} 
                          onClick={closeMenus}
                          className="text-slate-500 py-1"
                        >
                          {opt.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link to="/mission" onClick={closeMenus} className="text-slate-600">
                Mission
              </Link>
              <Link to="/superiors" onClick={closeMenus} className="text-slate-600">
                Superiors
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </AnimatePresence>
  );
};

export default Header;