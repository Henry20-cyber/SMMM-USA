import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from '../components/Navbar.jsx';
import img from '../assets/vectors/logo.jpg';
import habit from '../assets/vectors/88.png';
import wp7 from '../assets/priests/image(07).jpg';
import wp8 from '../assets/priests/image(11).jpg';
import wp2 from '../assets/priests/image(14).jpg';

// Hero images (you can replace with your own assets)
const HERO_IMAGES = [
  wp2,
  wp8,
  wp7,
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
    <section className="relative h-dvh flex items-center overflow-hidden">
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
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-md bg-red-500"
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
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-md bg-red-500"
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

          {/* RIGHT COLUMN: RELIGIOUS HABIT - ENLARGED & MODERNIZED */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={revealVariant}
            className="space-y-8"
          >
            <div>
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
            </div>

            {/* ENLARGED HABIT IMAGE - Primary Focus */}
            <div className="flex justify-center">
              <div 
                className="relative rounded-2xl bg-gradient-to-br from-white to-blue-50 p-4 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                style={{ border: `1px solid ${theme.borderLight}` }}
              >
                <img 
                  src={habit} 
                  alt="Religious Habit of the Sons of Mary Mother of Mercy - Detailed view of white soutane with blue buttons and cord" 
                  className="w-full max-w-[360px] md:max-w-[420px] lg:max-w-[480px] h-auto object-contain rounded-lg"
                  style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.05))' }}
                />
                {/* Optional decorative badge */}
                <div className="absolute -top-3 -right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Sacred Vestment
                </div>
              </div>
            </div>

            {/* Descriptive content - stacks beautifully below the enlarged image */}
            <div className="space-y-6">
              <p className="text-[1rem] leading-relaxed" style={{ color: theme.textMuted }}>
                We wear a <strong style={{ color: theme.black }}>white soutane</strong> with <strong style={{ color: theme.bluePrimary }}>twenty-one blue buttons</strong> and a <strong style={{ color: theme.bluePrimary }}>blue cord cincture</strong> with tassels.
              </p>
              
              <div className="flex flex-col gap-4">
                <div 
                  className="p-5 rounded-xl border-l-[4px] transition-all hover:translate-x-1"
                  style={{ backgroundColor: theme.bgBlueSoft, borderLeftColor: theme.bluePrimary }}
                >
                  <p 
                    className="text-sm font-bold mb-2 tracking-wider uppercase"
                    style={{ fontFamily: "'Cinzel', serif", color: theme.bluePrimary }}
                  >
                    21 Blue Buttons
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: theme.textMuted }}>
                    14 Stations of the Cross + 7 Sorrows of the Blessed Virgin Mary — a constant meditation on Christ’s passion and Our Lady’s suffering.
                  </p>
                </div>
                
                <div 
                  className="p-5 rounded-xl border-l-[4px] transition-all hover:translate-x-1"
                  style={{ backgroundColor: theme.bgBlueSoft, borderLeftColor: theme.bluePrimary }}
                >
                  <p 
                    className="text-sm font-bold mb-2 tracking-wider uppercase"
                    style={{ fontFamily: "'Cinzel', serif", color: theme.bluePrimary }}
                  >
                    3 Knots on the Cincture
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: theme.textMuted }}>
                    Mercy as Compassion · Forgiveness · Kindness — the triple cord that binds us to our merciful mission.
                  </p>
                </div>
              </div>

              {/* Colors Breakdown Box - Elevated Design */}
              <div 
                className="mt-8 p-6 bg-white shadow-md rounded-2xl transition-all hover:shadow-lg"
                style={{ border: `1px solid ${theme.borderLight}` }}
              >
                <p 
                  className="text-xs font-bold tracking-widest uppercase mb-5 flex items-center gap-2"
                  style={{ fontFamily: "'Cinzel', serif", color: theme.bluePrimary }}
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Colors & Their Meaning
                </p>
                <div className="flex gap-x-8 gap-y-4 flex-wrap">
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full border shadow-sm" style={{ backgroundColor: theme.white, borderColor: theme.borderLight }} />
                    <span className="text-sm font-medium" style={{ color: theme.textDark }}>White — Purity & Openness</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full shadow-sm" style={{ backgroundColor: '#dc2626' }} />
                    <span className="text-sm font-medium" style={{ color: '#b91c1c' }}>Red — Love & Martyrdom</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full shadow-sm" style={{ backgroundColor: '#2563eb' }} />
                    <span className="text-sm font-medium" style={{ color: '#1e3a8a' }}>Blue — The Blessed Virgin Mary</span>
                  </div>
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