import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import wp2 from '../assets/wallpapers/wp(2).jpg';
import wp3 from '../assets/priests/image(12).jpg';
import wp5 from '../assets/wallpapers/wp(5).jpg';
import wp7 from '../assets/priests/image(30).jpg';
import img1 from '../assets/priests/image(02).jpg';
import img3 from '../assets/priests/image(21).jpg';

const Hero = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], ['0%', '20%']);

  // Blue variants, white, black
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
    wp7,
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDg7rGbkSxtRi33eRjEeYidBr6pjcb1tbPePcGF4Wvt8XfBJVTD3scZ16a71r-WGGoEccaDERZZ3nSIm1O-zN04agoLlNYbjRpq_4VHbjuYNIo0OFRaiYkYGKh16B53KFCRzC5cprziLR2zr8UTavBG1zym8FmWUD95Hjbr3Gx-KV7ONKoRs_A0JBmlz5g7pc9Jh8g4pVp4AvcXvFRZdh5aRhb6XF6WjjP8PVXPFyTwzMj96KUmQsdRplaeUF5xtZtF-crMkmqGOZ8",
    
    wp3,
   
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
    initial: { opacity: 0, y: 25 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <motion.section 
      id="hero"
      className="relative min-h-screen md:h-[760px] flex items-center justify-center overflow-hidden px-4 py-20"
      style={{ backgroundColor: theme.blueDeep }}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
     <div className="absolute inset-0 z-0">
  <AnimatePresence mode="wait">
    <motion.img 
      key={currentImageIndex} 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }} 
      style={{ y: backgroundY }}
      className="w-full h-[120%] object-cover absolute top-0 left-0" 
      alt="Sacred backdrop rotation" 
      src={images[currentImageIndex]}
    />
  </AnimatePresence>

  {/* Dark overlay to improve text readability */}
  <div className="absolute inset-0 bg-black/70" />
</div>

      <div className="relative z-10 text-center px-4 md:px-8 max-w-5xl mx-auto flex flex-col items-center">
        
        <motion.span
          variants={elementVariants}
          className="text-[0.65rem] md:text-xs font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full border mb-6 backdrop-blur-sm shadow-sm"
          style={{ color: theme.blueLight, borderColor: `${theme.blueLight}80`, backgroundColor: `${theme.black}E6` }}
        >
          Welcome To The USA Region
        </motion.span>

        <motion.h1 
          className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-wide mb-6 leading-[1.15] text-white"
          style={{ fontFamily: "'Cinzel', serif" }}
          variants={elementVariants}
        >
          Sons of Mary <br />
          <span style={{ color: theme.blueLight }}>Mother of Mercy</span>
        </motion.h1>

        <motion.div 
          variants={elementVariants}
          className="gold-divider" 
          style={{ margin: "0 auto 1.8rem", width: '60px', height: '2px', backgroundColor: theme.blueLight }}
        />

        <motion.div 
          variants={elementVariants}
          style={{ 
            display: "inline-block", 
            border: `1px solid ${theme.blueLight}40`, 
            padding: "10px 28px", 
            marginBottom: "3rem", 
            backgroundColor: `${theme.black}CC`,
            borderRadius: "8px"
          }}
        >
          
          <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.9rem", letterSpacing: "0.1em", color: theme.white }}>...bearing witness to the mercy of God</p>
        </motion.div>
        
      </div>
    </motion.section>
  );
};

export default Hero;