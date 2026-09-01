import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

import wp2 from '../assets/wallpapers/wp(2).jpg';
// import wp3 from '../assets/priests/image(12).jpg';
import wp5 from '../assets/wallpapers/wp(5).jpg';
// import wp7 from '../assets/priests/image(30).jpg';
import img1 from '../assets/priests/image(02).jpg';
import img3 from '../assets/priests/image(21).jpg';

const Hero = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], ['0%', '5%']);

  const theme = {
    blueDeep: '#1e3a8a',
    bluePrimary: '#2563eb',
    blueLight: '#60a5fa',
    white: '#ffffff',
    black: '#111111',
    offWhite: '#f8fafc'
  };

  const images = [
    img3,
    wp2,
    wp5,
    img1,
    // wp7,
    // wp3,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  const containerVariants = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const elementVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <motion.section 
      id="hero"
      className="relative w-full max-w-full h-[100dvh] min-h-[550px] overflow-hidden flex items-center justify-center px-4 sm:px-6 md:px-8"
      style={{ 
        backgroundColor: theme.blueDeep,
        clipPath: 'inset(0)',
        isolation: 'isolate' // Prevents transform overflow bleeding on laptop GPUs
      }}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {/* Background Slideshow Container */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="popLayout">
          <div key={currentImageIndex} className="absolute inset-0 w-full h-full overflow-hidden">
            
            {/* Layer 1: Blurred Ambient Background (Fills horizontal space for tall portrait photos) */}
            <motion.img 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6, transition: { duration: 1.5 } }}
              exit={{ opacity: 0, transition: { duration: 1.5 } }}
              className="w-full h-full object-cover blur-3xl scale-110 absolute top-0 left-0 max-w-full"
              alt=""
              src={images[currentImageIndex]}
            />

            {/* Layer 2: Main Controlled Image (Prevents over-zooming wide or tall photos) */}
            <motion.img 
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: {
                  opacity: { duration: 1.5, ease: "easeInOut" },
                  scale: { duration: 10, ease: "linear" }
                }
              }}
              exit={{ 
                opacity: 0, 
                scale: 1.01,
                transition: { duration: 1.5, ease: "easeInOut" }
              }}
              style={{ y: backgroundY }}
              className="w-full h-full object-cover object-center max-w-full absolute top-0 left-0" 
              alt="Sacred backdrop rotation" 
              src={images[currentImageIndex]}
            />
          </div>
        </AnimatePresence>

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/65 z-10 w-full h-full" />
      </div>

      {/* Main Content Box */}
      <div className="relative z-20 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        
        <motion.span
          variants={elementVariants}
          className="text-[0.65rem] xs:text-xs font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border mb-4 sm:mb-6 backdrop-blur-md shadow-sm"
          style={{ 
            color: theme.blueLight, 
            borderColor: `${theme.blueLight}80`, 
            backgroundColor: `${theme.black}CC` 
          }}
        >
          Welcome To The USA Region
        </motion.span>

        <motion.h1 
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-wide mb-3 sm:mb-6 leading-[1.15] text-white"
          style={{ fontFamily: "'Cinzel', serif" }}
          variants={elementVariants}
        >
          Sons of Mary <br />
          <span style={{ color: theme.blueLight }}>Mother of Mercy</span>
        </motion.h1>

        <motion.div 
          variants={elementVariants}
          className="my-2 sm:my-4" 
          style={{ width: '60px', height: '2px', backgroundColor: theme.blueLight }}
        />

        <motion.div 
          variants={elementVariants}
          className="mt-2 sm:mt-4 px-4 py-2 sm:px-7 sm:py-3 rounded-lg border backdrop-blur-md"
          style={{ 
            borderColor: `${theme.blueLight}40`, 
            backgroundColor: `${theme.black}B3`
          }}
        >
          <p 
            className="text-[0.75rem] xs:text-xs sm:text-sm tracking-wider"
            style={{ fontFamily: "'Cinzel', serif", color: theme.white }}
          >
            ...bearing witness to the mercy of God
          </p>
        </motion.div>
        
      </div>
    </motion.section>
  );
};

export default Hero;