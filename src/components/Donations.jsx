import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DonationForm from './Donationform'; // Adjust path as needed

const Donations = () => {
  const [showForm, setShowForm] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: { duration: 0.5 }
  };

  return (
    <motion.section 
      className="py-section-padding px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto bg-primary rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[500px]">
        
        {/* Image Container */}
        <div className="md:w-1/2 relative h-64 md:h-auto">
          <img 
            className="absolute inset-0 w-full h-full object-cover" 
            alt="Hands holding a candle" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1cPwZrTRKQMsiFMo6-1wLu1rnX1W9X6g1yrCPtwkC_TG3v3p70LhZdIUWWm7-PGGW9hRSmssnR1qwPBiE13_dTXKa7fGIb5VhUtMpgOtjta0MbLvG3vY6GkMVh9a9bt7MEHinGoXkC30-_RIO9pNQ1ocYXNElfbcqWktjHJKe7ELKKNDdsU_JyVJMptoqSbdhg5BeP5T1VcooTeX9J97wZFvBev1KKi6FCDxaW1zRfYu3Ntq_043uYIfedyFAsciKM3DQ4cSn_0Y"
          />
          <div className="absolute inset-0 bg-primary/20"></div>
        </div>

        {/* Content Container */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-primary">
          <AnimatePresence mode="wait">
            {!showForm ? (
              <motion.div 
                key="content"
                variants={fadeIn}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <h2 className="font-headline-md text-white mb-6">
                  Support Our Mission of Mercy
                </h2>
                <p className="font-body-md text-white/80 mb-8 leading-relaxed">
                  Your generosity allows us to continue our spiritual outreach and social programs. Every donation directly impacts our ability to serve.
                </p>
                <button 
                  onClick={() => setShowForm(true)}
                  className="bg-secondary text-on-secondary px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary-container hover:text-on-secondary-container transition-all self-start"
                >
                  Donate Now
                </button>
              </motion.div>
            ) : (
              <motion.div 
                key="form"
                variants={fadeIn}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full"
              >
                <button 
                  onClick={() => setShowForm(false)}
                  className="text-white/60 hover:text-white mb-4 flex items-center gap-2 text-sm transition-colors"
                >
                  ← Back to info
                </button>
                <h3 className="text-2xl font-bold text-white mb-6">Make a Donation</h3>
                <DonationForm />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default Donations;