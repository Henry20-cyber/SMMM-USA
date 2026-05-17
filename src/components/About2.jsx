// import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Animation presets for consistency
  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut' } 
    }
  };

  // Custom inline theme variables mapped to standard strings for safety
  const theme = {
    gold: '#c9a84c',
    navy: '#0a192f',
    navyLight: '#172a45',
    marianBlue: '#1e3a8a',
  };

  return (
    <section id="about" className="py-28 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInVariant}
          className="text-center mb-16"
        >
          {/* Section Label */}
          <p className="flex justify-center items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">
            About Us
          </p>
          <h2 
            className="text-4xl md:text-5xl mb-6 font-semibold tracking-wide"
            style={{ fontFamily: "'Cinzel', serif", color: theme.navy }}
          >
            Who We Are
          </h2>
          {/* Gold Divider */}
          <div className="w-16 h-[2px] mx-auto" style={{ backgroundColor: theme.gold }} />
        </motion.div>

        {/* Content Split Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content Text Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInVariant}
          >
            <p 
              className="mb-4"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '0.62rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: theme.gold,
              }}
            >
              Est. October 25, 1970
            </p>
            
            <h3 
              className="text-2xl font-semibold mb-5 leading-snug"
              style={{ fontFamily: "'Cinzel', serif", color: theme.navy }}
            >
              The First Indigenous Male Religious Order in West Africa
            </h3>
            
            {/* Left Aligned Divider */}
            <div className="w-12 h-[2px] mb-6" style={{ backgroundColor: theme.gold }} />
            
            <p className="mb-4 text-[1.05rem] leading-relaxed text-slate-700">
              Sons of Mary Mother of Mercy (SMMM) is a Religious Congregation of priests and lay brothers 
              founded by Most Rev. Anthony Gogo Nwedo, C.S.Sp., of blessed memory — the pioneer bishop of 
              Umuahia Diocese — whose vision reached beyond his time.
            </p>
            
            <p className="text-[1.05rem] leading-relaxed text-slate-700">
              Through the intercession of Mary, Mother of Mercy, the mission has spread across Africa, 
              North America, Europe, and the Philippines — and the American Region stands as a testament 
              to that enduring vision.
            </p>
            
            {/* Interactive Call To Action Buttons */}
            <div className="flex gap-4 mt-8 flex-wrap">
              <a 
                href="#history" 
                className="px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 border hover:opacity-90 shadow-sm"
                style={{ backgroundColor: theme.gold, color: 'white', borderColor: theme.gold, fontFamily: "'Cinzel', serif" }}
              >
                Our History
              </a>
              <a 
                href="#charism" 
                className="px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 border bg-transparent hover:bg-slate-100"
                style={{ borderColor: theme.gold, color: theme.gold, fontFamily: "'Cinzel', serif" }}
              >
                Our Charism
              </a>
            </div>
          </motion.div>

          {/* Right: Founder Card Graphic */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInVariant}
            className="relative group"
          >
            {/* Main Navy Box Container */}
            <div 
              className="p-10 relative overflow-hidden shadow-xl"
              style={{ background: theme.navy }}
            >
              {/* Background Circular Vector Ornaments */}
              <div className="absolute -top-4 -right-4 w-[120px] h-[120px] border rounded-full opacity-10 pointer-events-none" style={{ borderColor: theme.gold }} />
              <div className="absolute -bottom-8 -left-8 w-[160px] h-[160px] border rounded-full opacity-5 pointer-events-none" style={{ borderColor: theme.gold }} />
              
              <p 
                className="mb-4 text-[0.6rem] tracking-[0.2em] uppercase font-medium"
                style={{ fontFamily: "'Cinzel', serif", color: theme.gold }}
              >
                Our Father Founder
              </p>
              
              {/* Stylized Avatar Frame Placeholder */}
              <div 
                className="w-[90px] h-[90px] rounded-full border-[3px] flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-105"
                style={{ 
                  background: `linear-gradient(135deg, ${theme.marianBlue}, ${theme.navyLight})`, 
                  borderColor: theme.gold 
                }}
              >
                {/* Embedded SVG Mitre Portrait Cross */}
                <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 opacity-80">
                  <circle cx="20" cy="14" r="8" stroke={theme.gold} strokeWidth="1.5" fill="none"/>
                  <path d="M4 36 C4 28, 36 28, 36 36" stroke={theme.gold} strokeWidth="1.5" fill="none"/>
                  <path d="M14 8 L20 2 L26 8" stroke={theme.gold} strokeWidth="1.2" fill="none"/>
                </svg>
              </div>
              
              <h4 
                className="text-[1.05rem] text-white font-semibold mb-1"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Most Rev. Anthony Gogo Nwedo
              </h4>
              
              <p 
                className="text-[0.85rem] italic mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: 'rgba(201,168,76,0.6)' }}
              >
                C.S.Sp. — Founder, of Blessed Memory
              </p>
              
              <p 
                className="text-[1rem] leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: 'rgba(250,246,238,0.65)' }}
              >
                "A visionary leader who saw beyond his time — he had the vision that a time would come when the 
                congregation would have its members on mission all over the world."
              </p>
              
              {/* Artistic Cross Accent Graphic */}
              <div className="absolute bottom-6 right-6 opacity-10 pointer-events-none">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <line x1="16" y1="2" x2="16" y2="30" stroke={theme.gold} strokeWidth="2"/>
                  <line x1="4" y1="10" x2="28" y2="10" stroke={theme.gold} strokeWidth="2"/>
                </svg>
              </div>
            </div>
            
            {/* Layered Off-center Accent Border Box */}
            <div 
              className="absolute top-[12px] left-[12px] right-[-12px] bottom-[-12px] border -z-10 pointer-events-none" 
              style={{ borderColor: 'rgba(201,168,76,0.15)' }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;