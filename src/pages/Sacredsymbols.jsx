import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from '../components/Navbar.jsx';
import img from '../assets/logo.jpg';
import cincture from '../assets/cincture.png';

// Hero images (you can replace with your own assets)
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1548625361-155deee26575?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1515787366009-7cbdd2dc587b?auto=format&fit=crop&w=1600&q=80",
];

const Sacredsymbols = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Rotate hero images every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Blue, white, black palette
  const theme = {
    bluePrimary: '#2563eb',
    blueLight: '#60a5fa',
    blueDeep: '#1e3a8a',
    white: '#ffffff',
    black: '#111111',
    offWhite: '#f8fafc',
    textDark: '#0f172a',
    textMuted: '#475569',
    borderLight: 'rgba(37, 99, 235, 0.12)',
    bgBlueSoft: 'rgba(37, 99, 235, 0.06)'
  };

  const revealVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut' } 
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.offWhite }}>
      <NavBar />

      {/* ========== HERO SECTION ========== */}
      <section className="relative h-[500px] md:h-[600px] flex items-center overflow-hidden">
        {/* Rotating Background Images */}
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={HERO_IMAGES[currentImageIndex]}
            alt="Sacred symbols backdrop"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Left‑aligned text */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl lg:max-w-2xl"
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.3em] mb-3"
              style={{ color: theme.blueLight }}
            >
              Sacred Symbols & Garments
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-4"
              style={{ fontFamily: "'Cinzel', serif", textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
            >
              Signs of Our <br />
              <span style={{ color: theme.blueLight }}>Merciful Mission</span>
            </h1>
            <div
              className="w-16 h-[2px] mb-6"
              style={{ backgroundColor: theme.blueLight }}
            />
            <p className="text-white/90 text-xl leading-relaxed max-w-lg">
              Every symbol and garment we wear speaks of God’s mercy, our consecration,
              and the spiritual heritage of the Sons of Mary Mother of Mercy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========== MAIN CONTENT (existing layout) ========== */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* LEFT COLUMN: LOGO SYMBOLS */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={revealVariant}
          >
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: theme.bluePrimary }}>
              Our Sacred Symbols
            </p>
            <h3 
              className="text-3xl font-semibold mb-6 tracking-wide"
              style={{ fontFamily: "'Cinzel', serif", color: theme.black }}
            >
              The SMMM Logo
            </h3>
            
            <div className="w-12 h-[2px] mb-8" style={{ backgroundColor: theme.blueLight }} />

            <div className="flex justify-center md:justify-start">
              <img 
                src={img} 
                alt="SMMM Official Congregation Logo" 
                className="w-full max-w-[240px] h-auto object-contain mb-8 rounded-xl shadow-sm bg-white p-2"
                style={{ border: `1px solid ${theme.borderLight}` }}
              />
            </div>

            <div className="flex flex-col gap-6">
              {/* Heart */}
              <div className="flex gap-5 items-start">
                <div 
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                  style={{ backgroundColor: theme.bluePrimary }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                    <path 
                      d="M12 21C12 21 3 14 3 8.5C3 6 5 4 7.5 4C9.24 4 10.91 4.93 12 6.36C13.09 4.93 14.76 4 16.5 4C19 4 21 6 21 8.5C21 14 12 21 12 21Z" 
                      stroke={theme.white} 
                      strokeWidth="1.8" 
                      fill="rgba(255,255,255,0.2)"
                    />
                  </svg>
                </div>
                <div>
                  <h4 
                    className="text-sm font-semibold mb-1 tracking-wide"
                    style={{ fontFamily: "'Cinzel', serif", color: theme.black }}
                  >
                    The Heart
                  </h4>
                  <p className="text-[0.95rem] leading-relaxed" style={{ color: theme.textMuted }}>
                    Represents the Sacred Hearts of Jesus and Mary. We are called to witness to God's mercy through love and compassion.
                  </p>
                </div>
              </div>

              {/* Flame */}
              <div className="flex gap-5 items-start">
                <div 
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                  style={{ backgroundColor: theme.bluePrimary }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                    <path 
                      d="M12 22C12 22 5 17 5 11C5 8 8 5 12 5C12 5 10 8 12 10C14 8 16 6 16 6C16 6 19 9 19 13C19 18 12 22 12 22Z" 
                      stroke={theme.white} 
                      strokeWidth="1.8" 
                      fill="rgba(255,255,255,0.2)"
                    />
                  </svg>
                </div>
                <div>
                  <h4 
                    className="text-sm font-semibold mb-1 tracking-wide"
                    style={{ fontFamily: "'Cinzel', serif", color: theme.black }}
                  >
                    The Flame
                  </h4>
                  <p className="text-[0.95rem] leading-relaxed" style={{ color: theme.textMuted }}>
                    Symbolizes the Flame of Love, modeled by Our Lady's courageous Fiat — burning zeal for the service of God and humanity.
                  </p>
                </div>
              </div>

              {/* Cross */}
              <div className="flex gap-5 items-start">
                <div 
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                  style={{ backgroundColor: theme.bluePrimary }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                    <line x1="12" y1="3" x2="12" y2="21" stroke={theme.white} strokeWidth="2" strokeLinecap="round"/>
                    <line x1="5" y1="9" x2="19" y2="9" stroke={theme.white} strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h4 
                    className="text-sm font-semibold mb-1 tracking-wide"
                    style={{ fontFamily: "'Cinzel', serif", color: theme.black }}
                  >
                    The Cross
                  </h4>
                  <p className="text-[0.95rem] leading-relaxed" style={{ color: theme.textMuted }}>
                    The daily call to discipleship and self-denial — embodying charity, humility, prayer, and abandonment to the Father's will.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: RELIGIOUS HABIT */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={revealVariant}
          >
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: theme.bluePrimary }}>
              Our Sacred Garment
            </p>
            <h3 
              className="text-3xl font-semibold mb-6 tracking-wide"
              style={{ fontFamily: "'Cinzel', serif", color: theme.black }}
            >
              Our Religious Habit
            </h3>
            
            <div className="w-12 h-[2px] mb-8" style={{ backgroundColor: theme.blueLight }} />

            <div className="flex gap-8 flex-col sm:flex-row items-start">
              <div className="flex-shrink-0 w-32 sm:w-40 mx-auto sm:mx-0">
                <img 
                  src={cincture} 
                  alt="Religious Habit Cincture Cord" 
                  className="w-full h-auto object-contain"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>

              <div className="flex-1 w-full">
                <p className="text-[1rem] mb-5 leading-relaxed" style={{ color: theme.textMuted }}>
                  We wear a <strong style={{ color: theme.black }}>white soutane</strong> with <strong style={{ color: theme.bluePrimary }}>twenty-one blue buttons</strong> and a <strong style={{ color: theme.bluePrimary }}>blue cord cincture</strong> with tassels.
                </p>
                
                <div className="flex flex-col gap-3">
                  <div 
                    className="p-4 border-l-[3px]"
                    style={{ backgroundColor: theme.bgBlueSoft, borderLeftColor: theme.bluePrimary }}
                  >
                    <p 
                      className="text-xs font-bold mb-1 tracking-wider uppercase"
                      style={{ fontFamily: "'Cinzel', serif", color: theme.bluePrimary }}
                    >
                      21 Blue Buttons
                    </p>
                    <p className="text-sm" style={{ color: theme.textMuted }}>
                      14 Stations of the Cross + 7 Sorrows of the Blessed Virgin Mary
                    </p>
                  </div>
                  
                  <div 
                    className="p-4 border-l-[3px]"
                    style={{ backgroundColor: theme.bgBlueSoft, borderLeftColor: theme.bluePrimary }}
                  >
                    <p 
                      className="text-xs font-bold mb-1 tracking-wider uppercase"
                      style={{ fontFamily: "'Cinzel', serif", color: theme.bluePrimary }}
                    >
                      3 Knots on the Cincture
                    </p>
                    <p className="text-sm" style={{ color: theme.textMuted }}>
                      Mercy as Compassion · Forgiveness · Kindness
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Colors Breakdown Box */}
            <div 
              className="mt-8 p-6 bg-white shadow-sm border rounded-xl"
              style={{ borderColor: theme.borderLight }}
            >
              <p 
                className="text-xs font-bold tracking-widest uppercase mb-4"
                style={{ fontFamily: "'Cinzel', serif", color: theme.bluePrimary }}
              >
                Colors & Their Meaning
              </p>
              <div className="flex gap-x-6 gap-y-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full border block" style={{ backgroundColor: theme.white, borderColor: theme.borderLight }} />
                  <span className="text-sm" style={{ color: theme.textMuted }}>White — Purity & Openness</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full block bg-red-500" />
                  <span className="text-sm text-red-500" >Red — Love & Martyrdom</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full block bg-blue-500"  />
                  <span className="text-sm text-blue-500" >Blue — The Blessed Virgin Mary</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Footer */}
      <footer className="w-full text-center py-8 text-xs border-t" style={{ color: theme.textMuted, borderColor: theme.borderLight, backgroundColor: theme.white }}>
        <p>&copy; {new Date().getFullYear()} Sons of Mary Mother of Mercy (SMMM). All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Sacredsymbols;