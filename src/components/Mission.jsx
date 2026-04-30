// import React from 'react';
import { motion } from 'framer-motion';

const MissionVision = () => {
  // Simple fade variant
  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    exit: { opacity: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <motion.section 
      className="py-section-padding px-6 bg-white"
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <motion.div 
            variants={fadeIn}
            className="p-12 bg-primary text-on-primary rounded-xl flex flex-col items-center text-center"
          >
            <span className="material-symbols-outlined text-secondary text-5xl mb-6">
              explore
            </span>
            <h3 className="font-headline-md text-headline-md mb-6">
              Our Mission
            </h3>
            <p className="font-body-lg text-body-lg opacity-90 leading-relaxed">
              To bear witness to the Mercy of God by following the footsteps of Christ, the Merciful Savior, and Mary, our Mother of Mercy, through dedicated service to humanity.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            variants={fadeIn}
            className="p-12 border border-blue-900/10 rounded-xl flex flex-col items-center text-center bg-surface-container-lowest shadow-sm"
          >
            <span className="material-symbols-outlined text-secondary text-5xl mb-6">
              visibility
            </span>
            <h3 className="font-headline-md text-headline-md text-primary mb-6">
              Our Vision
            </h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              To create a world where the compassion of Mary is felt in every heart, transforming lives through prayer, education, and direct acts of charity.
            </p>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default MissionVision;