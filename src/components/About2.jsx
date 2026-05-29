// import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import img from '../assets/web-image.webp';

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
          <p className="flex justify-center items-center gap-2 mb-4 text-2xl font-bold uppercase tracking-widest text-slate-500">
            About Us
          </p>
          <h2 
            className="text-4xl md:text-5xl mb-6 font-semibold tracking-wide"
            style={{ fontFamily: "'Cinzel', serif", color: theme.navy }}>
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
              <Link 
                to="/History"
                className="px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 border hover:opacity-90 shadow-sm"
                style={{ backgroundColor: theme.gold, color: 'white', borderColor: theme.gold, fontFamily: "'Cinzel', serif" }}
              >
                Our History
              </Link>
              <Link 
                to="/Charism" 
                className="px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 border bg-transparent hover:bg-slate-100"
                style={{ borderColor: theme.gold, color: theme.gold, fontFamily: "'Cinzel', serif" }}
              >
                Our Charism
              </Link>
            </div>
          </motion.div>

          {/* Right: Redesigned Founder Card Profile */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInVariant}
            className="relative group"
          >
            {/* Main Aesthetic Card Container */}
            <div 
              className="relative overflow-hidden shadow-2xl rounded-sm transition-transform duration-500 hover:-translate-y-1"
              style={{ background: theme.navy }}
            >
              {/* Image Frame Section */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-900 border-b" style={{ borderColor: 'rgba(201,168,76,0.15)' }}>
                <img 
                  src={img} 
                  alt="Most Rev. Anthony Gogo Nwedo" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle dark gradient overlay over the image bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              </div>

              {/* Content Box Section */}
              <div className="p-8 relative">
                <p 
                  className="mb-2 text-[0.6rem] tracking-[0.2em] uppercase font-bold"
                  style={{ fontFamily: "'Cinzel', serif", color: theme.gold }}
                >
                  Our Father Founder
                </p>
                
                <h4 
                  className="text-xl text-white font-semibold mb-1 tracking-wide"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Most Rev. Anthony Gogo Nwedo
                </h4>
                
                
                <p 
                  className="text-[1rem] leading-relaxed relative z-10 font-light"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: 'rgba(250,246,238,0.75)' }}
                >
                  "A visionary leader who saw beyond his time — he had the vision that a time would come when the 
                  congregation would have its members on mission all over the world."
                </p>
                
                {/* Minimalist Watermark Cross Accent */}
                <div className="absolute bottom-6 right-6 opacity-10 pointer-events-none">
                  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                    <line x1="16" y1="2" x2="16" y2="30" stroke={theme.gold} strokeWidth="1.5"/>
                    <line x1="6" y1="11" x2="26" y2="11" stroke={theme.gold} strokeWidth="1.5"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Elegant Background Framing Offset */}
            <div 
              className="absolute top-[16px] left-[16px] right-[-16px] bottom-[-16px] border rounded-sm -z-10 pointer-events-none transition-all duration-500 group-hover:top-[20px] group-hover:left-[20px]" 
              style={{ borderColor: 'rgba(201,168,76,0.2)' }}
            />
          </motion.div>

        </div>
      </div>
      
    </section>
  );
};

export default About;
