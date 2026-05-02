// import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Define the animation variant for a simple fade
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <motion.section 
      className="relative h-[707px] flex items-center justify-center overflow-hidden p-4"
      initial="initial"
      animate="animate"
    >
      {/* Background Image and Overlay */}
      <motion.div 
        className="absolute inset-0 z-0"
        variants={fadeIn}
      >
        <img 
          className="w-full h-full object-cover" 
          alt="stunning interior of a grand cathedral with light streaming through stained glass windows onto wooden pews and stone columns" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg7rGbkSxtRi33eRjEeYidBr6pjcb1tbPePcGF4Wvt8XfBJVTD3scZ16a71r-WGGoEccaDERZZ3nSIm1O-zN04agoLlNYbjRpq_4VHbjuYNIo0OFRaiYkYGKh16B53KFCRzC5cprziLR2zr8UTavBG1zym8FmWUD95Hjbr3Gx-KV7ONKoRs_A0JBmlz5g7pc9Jh8g4pVp4AvcXvFRZdh5aRhb6XF6WjjP8PVXPFyTwzMj96KUmQsdRplaeUF5xtZtF-crMkmqGOZ8"
        />
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 text-center md:px-8 max-w-5xl">
        <motion.h1 
          className="font-display-lg md:text-8xl text-5xl text-bold font-bebas text-display-lg text-white mb-6"
          variants={fadeIn}
        >
          Sons of Mary Mother of Mercy USA Region
        </motion.h1>

        <motion.p 
          className="font-body-lg text-body-lg text-white/90 mb-10 max-w-2xl mx-auto"
          variants={fadeIn}
        >
          Witnessing to the Mercy of God through spiritual dedication, communal service, and the compassionate heart of Mary.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={fadeIn}
        >
          <button className="text-blue-500 text-on-secondary px-8 py-4 rounded-lg font-label-sm hover:scale-[1.02] transition-transform shadow-lg">
            Learn More
          </button>
          <button className="border text-white px-8 py-4 rounded-lg font-label-sm hover:bg-white/10 transition-colors bg-blue-900">
            Our History
          </button>
        </motion.div>

        {/* Decorative Bar */}
        <motion.div 
          className="mt-12 w-24 h-1 bg-blue-500 mx-auto"
          variants={fadeIn}
        ></motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;