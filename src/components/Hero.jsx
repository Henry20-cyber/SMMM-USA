import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const Hero = () => {
  // Hook to capture page scroll positioning for a premium background parallax effect
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], ['0%', '20%']);

  // Theme Constants matching the SMMM brand
  const theme = {
    gold: '#c9a84c',
    navy: '#0a192f',
    blueMarian: '#1e4d8c',
    goldPale: '#faf6ee' // Added fallback variable definition
  };

  // --- NEW FEATURE: 8 IMAGES EVERY 10 SECONDS ---
  const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDg7rGbkSxtRi33eRjEeYidBr6pjcb1tbPePcGF4Wvt8XfBJVTD3scZ16a71r-WGGoEccaDERZZ3nSIm1O-zN04agoLlNYbjRpq_4VHbjuYNIo0OFRaiYkYGKh16B53KFCRzC5cprziLR2zr8UTavBG1zym8FmWUD95Hjbr3Gx-KV7ONKoRs_A0JBmlz5g7pc9Jh8g4pVp4AvcXvFRZdh5aRhb6XF6WjjP8PVXPFyTwzMj96KUmQsdRplaeUF5xtZtF-crMkmqGOZ8",
    "https://images.unsplash.com/photo-1548625361-155defe219f2?q=80&w=1200", // Placeholder 2
    "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=1200", // Placeholder 3
    "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1200", // Placeholder 4
    "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=1200", // Placeholder 5
    "https://images.unsplash.com/photo-1545232979-8bf34eb9757b?q=80&w=1200", // Placeholder 6
    "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=80&w=1200", // Placeholder 7
    "https://images.unsplash.com/photo-1501393152198-34b240415948?q=80&w=1200"  // Placeholder 8
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 10000ms = 10 seconds

    return () => clearInterval(interval); // Clean up timer on unmount
  }, [images.length]);
  // ----------------------------------------------

  // Stagger Container Variant
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2, // Cascades animations cleanly downstream
      },
    },
  };

  // Upgraded Element Scale-and-Fade Variant
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
      className="relative min-h-screen md:h-[760px] flex items-center justify-center overflow-hidden px-4 py-20 bg-slate-950"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {/* Background Image Container with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img 
            key={currentImageIndex} // Key forces framer to animate when index shifts
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }} // Smooth crossfade over 1.5s
            style={{ y: backgroundY }}
            className="w-full h-[120%] object-cover absolute top-0 left-0" 
            alt="Sacred backdrop rotation showcasing holy spaces" 
            src={images[currentImageIndex]}
          />
        </AnimatePresence>
        
        {/* Layered Overlays for High-Contrast Text Visibility */}
        <div className="absolute inset-0 bg-slate-950/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/80" />
      </div>

      {/* Content Container (Fixed structure bug) */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Sacred Badge Indicator */}
        <motion.span
          variants={elementVariants}
          className="text-[0.65rem] md:text-xs font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full border mb-6 backdrop-blur-sm shadow-sm"
          style={{ color: theme.gold, borderColor: 'rgba(201, 168, 76, 0.3)', backgroundColor: 'rgba(10, 25, 47, 0.4)' }}
        >
          Welcome To The USA Region
        </motion.span>

        {/* Grand Title Heading */}
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-wide text-white mb-6 leading-[1.15]"
          style={{ fontFamily: "'Cinzel', serif" }}
          variants={elementVariants}
        >
          Sons of Mary <br />
          <span style={{ color: theme.gold }}>Mother of Mercy</span>
        </motion.h1>

        {/* Premium Divider Element */}
        <motion.div 
          variants={elementVariants}
          className="gold-divider" 
          style={{ margin: "0 auto 1.8rem", width: '60px', height: '2px', backgroundColor: theme.gold }}
        />


        {/* Motto Badge */}
        <motion.div 
          variants={elementVariants}
          style={{ display: "inline-block", border: "1px solid rgba(201,168,76,0.25)", padding: "10px 28px", marginBottom: "3rem", backgroundColor: "rgba(10, 25, 47, 0.2)" }}
        >
          <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "rgba(201,168,76,0.6)", textTransform: "uppercase" }}>Motto</p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", fontStyle: "italic", color: theme.goldPale }}>testimonium perhibere misericordiae Dei</p>
          <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.1em", color: "rgba(201,168,76,0.5)" }}>bearing witness to the mercy of God</p>
        </motion.div>
        
      </div>
    </motion.section>
  );
};

export default Hero;