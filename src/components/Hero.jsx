import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  // Hook to capture page scroll positioning for a premium background parallax effect
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], ['0%', '20%']);

  // Theme Constants matching the SMMM brand
  const theme = {
    gold: '#c9a84c',
    navy: '#0a192f',
    blueMarian: '#1e4d8c',
  };

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
        <motion.img 
          style={{ y: backgroundY }}
          className="w-full h-[120%] object-cover absolute top-0 left-0" 
          alt="Interior of a grand cathedral with light streaming through stained glass windows" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg7rGbkSxtRi33eRjEeYidBr6pjcb1tbPePcGF4Wvt8XfBJVTD3scZ16a71r-WGGoEccaDERZZ3nSIm1O-zN04agoLlNYbjRpq_4VHbjuYNIo0OFRaiYkYGKh16B53KFCRzC5cprziLR2zr8UTavBG1zym8FmWUD95Hjbr3Gx-KV7ONKoRs_A0JBmlz5g7pc9Jh8g4pVp4AvcXvFRZdh5aRhb6XF6WjjP8PVXPFyTwzMj96KUmQsdRplaeUF5xtZtF-crMkmqGOZ8"
        />
        {/* Layered Overlays for High-Contrast Text Visibility */}
        <div className="absolute inset-0 bg-slate-950/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Sacred Badge Indicator */}
        <motion.span
          variants={elementVariants}
          className="text-[0.65rem] md:text-xs font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full border mb-6 backdrop-blur-sm shadow-sm"
          style={{ color: theme.gold, borderColor: 'rgba(201, 168, 76, 0.3)', backgroundColor: 'rgba(10, 25, 47, 0.4)' }}
        >
          Welcome To The American Region
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

        {/* Descriptive Statement */}
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-slate-200 mb-10 max-w-2xl font-medium leading-relaxed"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          variants={elementVariants}
        >
          Witnessing to the Mercy of God through spiritual dedication, communal service, and the compassionate heart of Mary.
        </motion.p>

        {/* Polished Call to Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
          variants={elementVariants}
        >
          <motion.a
            href="#about"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all shadow-lg border text-center"
            style={{ backgroundColor: theme.gold, color: 'white', borderColor: theme.gold, fontFamily: "'Cinzel', serif" }}
          >
            Learn More
          </motion.a>
          
          <motion.a
            href="#history"
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all border border-white text-white bg-transparent text-center"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Our History
          </motion.a>
        </motion.div>

        {/* Elegant Accent Divider */}
        <motion.div 
          className="mt-16 w-16 h-[2px]"
          style={{ backgroundColor: theme.gold }}
          variants={elementVariants}
        />
      </div>
    </motion.section>
  );
};

export default Hero;