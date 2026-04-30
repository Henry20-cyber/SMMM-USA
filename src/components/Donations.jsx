// import React from 'react';
import { motion } from 'framer-motion';

const Donations = () => {
  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    exit: { opacity: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <motion.section 
      className="py-section-padding px-6"
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
    >
      <motion.div 
        variants={fadeIn}
        className="max-w-5xl mx-auto bg-primary rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
      >
        {/* Image Container */}
        <div className="md:w-1/2 relative h-64 md:h-auto">
          <img 
            className="absolute inset-0 w-full h-full object-cover" 
            alt="close-up of hands holding a small flickering candle in a dark space, representing hope and support" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1cPwZrTRKQMsiFMo6-1wLu1rnX1W9X6g1yrCPtwkC_TG3v3p70LhZdIUWWm7-PGGW9hRSmssnR1qwPBiE13_dTXKa7fGIb5VhUtMpgOtjta0MbLvG3vY6GkMVh9a9bt7MEHinGoXkC30-_RIO9pNQ1ocYXNElfbcqWktjHJKe7ELKKNDdsU_JyVJMptoqSbdhg5BeP5T1VcooTeX9J97wZFvBev1KKi6FCDxaW1zRfYu3Ntq_043uYIfedyFAsciKM3DQ4cSn_0Y"
          />
          <div className="absolute inset-0 bg-primary/20"></div>
        </div>

        {/* Content Container */}
        <div className="md:w-1/2 p-12 flex flex-col justify-center">
          <h2 className="font-headline-md text-white mb-6">
            Support Our Mission of Mercy
          </h2>
          <p className="font-body-md text-white/80 mb-8 leading-relaxed">
            Your generosity allows us to continue our spiritual outreach and social programs across the United States. Every donation directly impacts our ability to serve the marginalized and provide pastoral care.
          </p>
          <button className="bg-secondary text-on-secondary px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary-container hover:text-on-secondary-container transition-all self-start">
            Donate Now
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Donations;