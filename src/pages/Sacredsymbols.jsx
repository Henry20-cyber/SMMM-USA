import { motion } from 'framer-motion';
import NavBar from '../components/Navbar.jsx';
import img from '../assets/logo.jpg';
import cincture from '../assets/cincture.png';

const Sacredsymbols = () => {
  // Green, white, black palette
  const theme = {
    greenPrimary: '#166534',
    greenLight: '#4ade80',
    greenDeep: '#064e3b',
    white: '#ffffff',
    black: '#111111',
    offWhite: '#fafaf5',
    textDark: '#1a1a1a',
    textMuted: '#4b5563',
    borderLight: 'rgba(22, 101, 52, 0.12)',
    bgGreenSoft: 'rgba(22, 101, 52, 0.06)'
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
    <section 
      style={{ backgroundColor: theme.offWhite, borderColor: theme.borderLight }}
      className="pt-24 border-t relative"
    >
      <NavBar />
      
      <div className="max-w-6xl mx-auto px-6 md:px-8 pb-24">
        <div className="grid md:grid-cols-2 gap-16 items-start mt-12">
          
          {/* LEFT COLUMN: LOGO SYMBOLS */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={revealVariant}
          >
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: theme.greenPrimary }}>
              Our Sacred Symbols
            </p>
            <h3 
              className="text-3xl font-semibold mb-6 tracking-wide"
              style={{ fontFamily: "'Cinzel', serif", color: theme.black }}
            >
              The SMMM Logo
            </h3>
            
            <div className="w-12 h-[2px] mb-8" style={{ backgroundColor: theme.greenLight }} />

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
                  style={{ backgroundColor: theme.greenPrimary }}
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
                  style={{ backgroundColor: theme.greenPrimary }}
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
                  style={{ backgroundColor: theme.greenPrimary }}
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
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: theme.greenPrimary }}>
              Our Sacred Garment
            </p>
            <h3 
              className="text-3xl font-semibold mb-6 tracking-wide"
              style={{ fontFamily: "'Cinzel', serif", color: theme.black }}
            >
              Our Religious Habit
            </h3>
            
            <div className="w-12 h-[2px] mb-8" style={{ backgroundColor: theme.greenLight }} />

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
                  We wear a <strong style={{ color: theme.black }}>white soutane</strong> with <strong style={{ color: theme.greenPrimary }}>twenty-one green buttons</strong> and a <strong style={{ color: theme.greenPrimary }}>green cord cincture</strong> with tassels.
                </p>
                
                <div className="flex flex-col gap-3">
                  <div 
                    className="p-4 border-l-[3px]"
                    style={{ backgroundColor: theme.bgGreenSoft, borderLeftColor: theme.greenPrimary }}
                  >
                    <p 
                      className="text-xs font-bold mb-1 tracking-wider uppercase"
                      style={{ fontFamily: "'Cinzel', serif", color: theme.greenPrimary }}
                    >
                      21 Green Buttons
                    </p>
                    <p className="text-sm" style={{ color: theme.textMuted }}>
                      14 Stations of the Cross + 7 Sorrows of the Blessed Virgin Mary
                    </p>
                  </div>
                  
                  <div 
                    className="p-4 border-l-[3px]"
                    style={{ backgroundColor: theme.bgGreenSoft, borderLeftColor: theme.greenPrimary }}
                  >
                    <p 
                      className="text-xs font-bold mb-1 tracking-wider uppercase"
                      style={{ fontFamily: "'Cinzel', serif", color: theme.greenPrimary }}
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
                style={{ fontFamily: "'Cinzel', serif", color: theme.greenPrimary }}
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

      {/* Footer - removed absolute positioning */}
      <footer className="w-full text-center py-8 text-xs border-t" style={{ color: theme.textMuted, borderColor: theme.borderLight, backgroundColor: theme.white }}>
        <p>&copy; {new Date().getFullYear()} Sons of Mary Mother of Mercy (SMMM). All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Sacredsymbols;