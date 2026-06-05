import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import Logo from '../assets/logo2.png';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const menuItems = [
    {
      title: 'Our Identity',
      options: [
        { name: 'History', path: "/History" },
        { name: 'Sacred Symbols', path: "/sacredsymbols" },
        { name: 'Charism', path: "/charism" },
        { name: 'Apostolate', path: "/apostolate" },
        { name: 'Gallery', path: "/Gallery" },
        { name: 'Donations', path: "/donations" },
      ]
    },
  ];

  const handleNavigation = (path) => {
    closeMenus();

    if (path.includes('#')) {
      const [urlPath, hash] = path.split('#');
      
      if (window.location.pathname === urlPath) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate(urlPath, { state: { scrollToHash: hash } });
      }
    } else {
      navigate(path);
    }
  };

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
        className="fixed top-0 w-full h-17 z-50 border-b border-black/10 bg-white shadow-sm"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fadeVariants}
      >
        <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto">
          
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-black hover:bg-blue-50 rounded-md transition-colors"
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
            <Link 
              className="text-black hover:text-blue-700 font-['Noto_Serif'] text-lg transition-colors" 
              to="/"
              onClick={closeMenus}
            >
              Home
            </Link> 
            
            {menuItems.map((item) => (
              <div 
                key={item.title} 
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.title)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button 
                  onClick={() => toggleDropdown(item.title)}
                  className="flex items-center gap-1 text-black hover:text-blue-700 transition-colors font-['Noto_Serif'] text-lg antialiased tracking-tight py-2"
                >
                  {item.title}
                  <ChevronDown size={16} className={`transition-transform duration-300 ${openDropdown === item.title ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {openDropdown === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-0 w-48 bg-white border border-blue-50 shadow-xl rounded-xl py-2 overflow-hidden"
                    >
                      {item.options.map((option, idx) => (
                        <button 
                          key={`${option.name}-${idx}`} 
                          onClick={() => handleNavigation(option.path)}
                          className="w-full text-left block px-4 py-2 text-sm text-black/80 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        >
                          {option.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))} 

            <Link 
              className="text-black hover:text-blue-700 font-['Noto_Serif'] text-lg transition-colors" 
              to="/Priests"
              onClick={closeMenus}
            >
              Our Priests
            </Link>
            <Link 
              className="text-black hover:text-blue-700 font-['Noto_Serif'] text-lg transition-colors" 
              to="/Contact"
              onClick={closeMenus}
            >
              Contact Us
            </Link>
          </nav>

          {/* Action Button */}
          <motion.button 
            variants={fadeVariants}
            className="bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-300 shadow-sm"
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
              className="md:hidden bg-white border-t border-black/10 px-6 py-4 flex flex-col gap-4 overflow-hidden"
            >
              <Link to="/" onClick={closeMenus} className="text-black font-semibold hover:text-blue-700 transition-colors">
                Home
              </Link>
              {menuItems.map((item) => (
                <div key={item.title} className="flex flex-col gap-2">
                  <button 
                    onClick={() => toggleDropdown(item.title)}
                    className="flex justify-between items-center text-black font-semibold hover:text-blue-700 transition-colors"
                  >
                    {item.title}
                    <ChevronDown size={18} className={openDropdown === item.title ? 'rotate-180' : ''} />
                  </button>
                  
                  {openDropdown === item.title && (
                    <div className="pl-4 flex flex-col gap-2 border-l-2 border-blue-200 ml-1">
                      {item.options.map((opt, idx) => (
                        <button 
                          key={`${opt.name}-${idx}-mobile`} 
                          onClick={() => handleNavigation(opt.path)}
                          className="text-left text-black/70 py-1 text-sm hover:text-blue-700 transition-colors"
                        >
                          {opt.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link to="/Priests" onClick={closeMenus} className="text-black font-semibold hover:text-blue-700 transition-colors">
                Our Priests
              </Link>
              <Link to="/Contact" onClick={closeMenus} className="text-black font-semibold hover:text-blue-700 transition-colors">
                Contact Us
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </AnimatePresence>
  );
};

export default Header;