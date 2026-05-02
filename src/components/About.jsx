// import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/logo2.png';

const SymbolCard = ({ title, items, colorClass }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-6 rounded-2xl bg-white shadow-sm border border-outline-variant hover:shadow-md transition-all duration-300"
  >
    <h3 className={`font-bold text-xl mb-3 flex items-center gap-2 ${colorClass}`}>
      <span className="w-2 h-2 rounded-full bg-current"></span>
      {title}
    </h3>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="text-on-surface-variant text-sm leading-relaxed flex gap-2">
          <span className="text-secondary">•</span>
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const About = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.8 }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      className="py-20 px-6 bg-surface-container-lowest"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Image Side - Sticky on Desktop */}
        <motion.div className="lg:sticky lg:top-24" variants={itemVariants}>
          <div className="relative group">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-colors"></div>
            <img 
              className="rounded-3xl shadow-2xl relative z-10 w-full object-contain bg-white p-8 border border-outline-variant" 
              alt="SMMM Symbols" 
              src={Logo}
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
          </div>
          
          <div className="mt-8 p-6 bg-primary/5 rounded-2xl border-l-4 border-primary">
             <p className="italic text-primary font-serif">
              "Witnesses to God's mercy through love and compassion."
             </p>
          </div>
        </motion.div>

        {/* Content Side */}
        <div className="space-y-8">
          <motion.div variants={itemVariants}>
            <span className="text-secondary text-sm font-bold tracking-widest uppercase block mb-2">
              Our Identity
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-primary leading-tight mb-4">
              The Symbols of our Congregation
            </h2>
            <p className="text-on-surface-variant text-lg">
              Every element of our insignia carries a profound spiritual meaning, reflecting our dedication as Sons of Mary Mother of Mercy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div variants={itemVariants}>
              <SymbolCard 
                title="The Heart"
                colorClass="text-error"
                items={[
                  "Seat of Love and Mercy representing the Sacred Hearts.",
                  "A call to witness through compassion.",
                  "Honoring Mary as the first witness to Mercy."
                ]}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <SymbolCard 
                title="The Flame"
                colorClass="text-secondary"
                items={[
                  "The 'Flame of Love' modeled by Mary's Fiat.",
                  "Burning zeal for God, Church, and humanity.",
                  "Sacrificial service for the poor and needy."
                ]}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <SymbolCard 
                title="The Cross"
                colorClass="text-primary"
                items={[
                  "Daily call to discipleship and self-denial.",
                  "Embracing charity, humility, and prayer.",
                  "Abandonment to the Father's will."
                ]}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <SymbolCard 
                title="SMMM & Colors"
                colorClass="text-outline"
                items={[
                  "White: Purity and openness to the Spirit.",
                  "Red: Love and the spirit of martyrdom.",
                  "Blue: Devotion to the Blessed Virgin Mary."
                ]}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
