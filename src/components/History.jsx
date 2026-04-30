// import React from 'react';
import { motion } from 'framer-motion';

const History = () => {
  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    exit: { opacity: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section className="bg-surface-container-low py-section-padding px-6">
      {/* Section Header */}
      <motion.div 
        className="max-w-3xl mx-auto text-center mb-16"
        {...fadeIn}
      >
        <h2 className="font-headline-md text-headline-md text-primary mb-4">Our History</h2>
        <div className="w-16 h-1 bg-secondary mx-auto"></div>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* 1970 */}
        <motion.div 
          className="flex flex-col md:flex-row gap-8 items-start"
          {...fadeIn}
        >
          <div className="md:w-1/4 pt-2">
            <span className="font-display-lg text-display-lg text-secondary opacity-30">1970</span>
          </div>
          <div className="md:w-3/4">
            <h3 className="font-headline-md text-xl text-primary mb-3">Foundation & Early Charism</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Founded by the Late Bishop Anthony Gogo Nwedo, CSSp, our congregation began with a simple but profound mandate: to be the hands and feet of God's mercy. The early years were marked by rigorous formation and a deep commitment to the poor.
            </p>
          </div>
        </motion.div>

        {/* 1995 */}
        <motion.div 
          className="flex flex-col md:flex-row gap-8 items-start"
          {...fadeIn}
        >
          <div className="md:w-1/4 pt-2">
            <span className="font-display-lg text-display-lg text-secondary opacity-30">1995</span>
          </div>
          <div className="md:w-3/4">
            <h3 className="font-headline-md text-xl text-primary mb-3">Expanding to the West</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Responding to the call for pastoral assistance, the first members of the SMMM arrived in the United States, bringing with them a unique spiritual heritage and a zeal for community building across various dioceses.
            </p>
          </div>
        </motion.div>

        {/* Today */}
        <motion.div 
          className="flex flex-col md:flex-row gap-8 items-start"
          {...fadeIn}
        >
          <div className="md:w-1/4 pt-2">
            <span className="font-display-lg text-display-lg text-secondary opacity-30">Today</span>
          </div>
          <div className="md:w-3/4 border-l-2 border-secondary/20 pl-8">
            <h3 className="font-headline-md text-xl text-primary mb-3">The Modern Chapter</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Now a well-established presence, the US Chapter continues to grow, serving in hospitals, parishes, and educational institutions, always carrying the banner of Mother Mary's compassion.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default History;