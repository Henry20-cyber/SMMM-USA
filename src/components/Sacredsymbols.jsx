import { motion } from 'framer-motion';
import img from '../assets/logo.jpg';

const Sacredsymbols = () => {
  // Centralized theme colors matching your CSS variables
  const theme = {
    creamDark: '#f7f4eb', // Fallback for var(--cream-dark)
    gold: '#c9a84c',
    navy: '#0a192f',
    blueMarian: '#1e4d8c',
    redDeep: '#8b0000',
  };

  // Scroll animation variants
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
      style={{ backgroundColor: theme.creamDark, borderColor: 'rgba(201,168,76,0.15)' }}
      className="py-20 px-6 border-t"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* LEFT COLUMN: LOGO SYMBOLS */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={revealVariant}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
              Our Sacred Symbols
            </p>
            <h3 
              className="text-3xl font-semibold mb-6 tracking-wide"
              style={{ fontFamily: "'Cinzel', serif", color: theme.navy }}
            >
              The SMMM Logo
            </h3>
            
            {/* Left Divider */}
            <div className="w-12 h-[2px] mb-8" style={{ backgroundColor: theme.gold }} />

            {/* The Logo Container */}
            <div className="flex justify-center md:justify-start">
              <img 
                src={img} 
                alt="SMMM Official Congregation Logo" 
                className="w-full max-w-[240px] h-auto object-contain mb-8 rounded-xl shadow-sm border border-slate-200/60 bg-white p-2"
              />
            </div>

            {/* Symbol Items List */}
            <div className="flex flex-col gap-6">
              {/* Heart */}
              <div className="flex gap-5 items-start">
                <div 
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                  style={{ backgroundColor: theme.gold }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                    <path 
                      d="M12 21C12 21 3 14 3 8.5C3 6 5 4 7.5 4C9.24 4 10.91 4.93 12 6.36C13.09 4.93 14.76 4 16.5 4C19 4 21 6 21 8.5C21 14 12 21 12 21Z" 
                      stroke="white" 
                      strokeWidth="1.8" 
                      fill="rgba(255,255,255,0.2)"
                    />
                  </svg>
                </div>
                <div>
                  <h4 
                    className="text-sm font-semibold mb-1 tracking-wide"
                    style={{ fontFamily: "'Cinzel', serif", color: theme.navy }}
                  >
                    The Heart
                  </h4>
                  <p className="text-[0.95rem] text-slate-600 leading-relaxed">
                    Represents the Sacred Hearts of Jesus and Mary. We are called to witness to God's mercy through love and compassion.
                  </p>
                </div>
              </div>

              {/* Flame */}
              <div className="flex gap-5 items-start">
                <div 
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                  style={{ backgroundColor: theme.gold }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                    <path 
                      d="M12 22C12 22 5 17 5 11C5 8 8 5 12 5C12 5 10 8 12 10C14 8 16 6 16 6C16 6 19 9 19 13C19 18 12 22 12 22Z" 
                      stroke="white" 
                      strokeWidth="1.8" 
                      fill="rgba(255,255,255,0.2)"
                    />
                  </svg>
                </div>
                <div>
                  <h4 
                    className="text-sm font-semibold mb-1 tracking-wide"
                    style={{ fontFamily: "'Cinzel', serif", color: theme.navy }}
                  >
                    The Flame
                  </h4>
                  <p className="text-[0.95rem] text-slate-600 leading-relaxed">
                    Symbolizes the Flame of Love, modeled by Our Lady's courageous Fiat — burning zeal for the service of God and humanity.
                  </p>
                </div>
              </div>

              {/* Cross */}
              <div className="flex gap-5 items-start">
                <div 
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                  style={{ backgroundColor: theme.gold }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                    <line x1="12" y1="3" x2="12" y2="21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="5" y1="9" x2="19" y2="9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h4 
                    className="text-sm font-semibold mb-1 tracking-wide"
                    style={{ fontFamily: "'Cinzel', serif", color: theme.navy }}
                  >
                    The Cross
                  </h4>
                  <p className="text-[0.95rem] text-slate-600 leading-relaxed">
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
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
              Our Sacred Garment
            </p>
            <h3 
              className="text-3xl font-semibold mb-6 tracking-wide"
              style={{ fontFamily: "'Cinzel', serif", color: theme.navy }}
            >
              Our Religious Habit
            </h3>
            
            {/* Left Divider */}
            <div className="w-12 h-[2px] mb-8" style={{ backgroundColor: theme.gold }} />

            {/* Habit Graphic and Text Side by Side */}
            <div className="flex gap-8 flex-col sm:flex-row items-start">
              
              {/* Graphic Vector Element */}
              <div className="flex-shrink-0 w-24 mx-auto sm:mx-0">
                <svg 
                  viewBox="0 0 100 200" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-full drop-shadow-[0_8px_20px_rgba(10,22,40,0.12)]"
                >
                  {/* Soutane body */}
                  <path d="M20 40 L10 200 L90 200 L80 40 Z" fill="white" stroke="#e0d8c8" strokeWidth="1"/>
                  {/* Collar */}
                  <rect x="35" y="30" width="30" height="20" rx="2" fill="white" stroke="#e0d8c8" strokeWidth="1"/>
                  {/* Blue buttons */}
                  <circle cx="50" cy="45" r="3" fill={theme.blueMarian}/>
                  <circle cx="50" cy="55" r="3" fill={theme.blueMarian}/>
                  <circle cx="50" cy="65" r="3" fill={theme.blueMarian}/>
                  <circle cx="50" cy="75" r="3" fill={theme.blueMarian}/>
                  <circle cx="50" cy="85" r="3" fill={theme.blueMarian}/>
                  <circle cx="50" cy="95" r="3" fill={theme.blueMarian}/>
                  <circle cx="50" cy="105" r="3" fill={theme.blueMarian}/>
                  <circle cx="50" cy="115" r="3" fill={theme.blueMarian}/>
                  <circle cx="50" cy="125" r="3" fill={theme.blueMarian}/>
                  <circle cx="50" cy="135" r="3" fill={theme.blueMarian}/>
                  {/* Blue cincture/cord */}
                  <path d="M25 110 Q50 118 75 110" stroke={theme.blueMarian} strokeWidth="3" fill="none" strokeLinecap="round"/>
                  {/* Knots */}
                  <circle cx="40" cy="113" r="2.5" fill={theme.blueMarian} opacity="0.7"/>
                  <circle cx="50" cy="115" r="2.5" fill={theme.blueMarian} opacity="0.7"/>
                  <circle cx="60" cy="113" r="2.5" fill={theme.blueMarian} opacity="0.7"/>
                  {/* Tassels */}
                  <line x1="25" y1="110" x2="22" y2="130" stroke={theme.blueMarian} strokeWidth="2"/>
                  <line x1="23" y1="110" x2="19" y2="130" stroke={theme.blueMarian} strokeWidth="1.5" opacity="0.6"/>
                </svg>
              </div>

              {/* Descriptions List */}
              <div className="flex-1 w-full">
                <p className="text-[1rem] text-slate-600 mb-5 leading-relaxed">
                  We wear a <strong style={{ color: theme.navy }}>white soutane</strong> with <strong style={{ color: theme.blueMarian }}>twenty-one blue buttons</strong> and a <strong style={{ color: theme.blueMarian }}>blue cord cincture</strong> with tassels.
                </p>
                
                <div className="flex flex-col gap-3">
                  <div 
                    className="p-4 border-l-[3px]" 
                    style={{ backgroundColor: 'rgba(30,77,140,0.06)', borderLeftColor: theme.blueMarian }}
                  >
                    <p 
                      className="text-xs font-bold mb-1 tracking-wider uppercase" 
                      style={{ fontFamily: "'Cinzel', serif", color: theme.blueMarian }}
                    >
                      21 Blue Buttons
                    </p>
                    <p className="text-sm text-slate-600">
                      14 Stations of the Cross + 7 Sorrows of the Blessed Virgin Mary
                    </p>
                  </div>
                  
                  <div 
                    className="p-4 border-l-[3px]" 
                    style={{ backgroundColor: 'rgba(30,77,140,0.06)', borderLeftColor: theme.blueMarian }}
                  >
                    <p 
                      className="text-xs font-bold mb-1 tracking-wider uppercase" 
                      style={{ fontFamily: "'Cinzel', serif", color: theme.blueMarian }}
                    >
                      3 Knots on the Cincture
                    </p>
                    <p className="text-sm text-slate-600">
                      Mercy as Compassion · Forgiveness · Kindness
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Colors Breakdown Box */}
            <div 
              className="mt-8 p-6 bg-white shadow-sm border rounded-xl"
              style={{ borderColor: 'rgba(201,168,76,0.15)' }}
            >
              <p 
                className="text-xs font-bold tracking-widest uppercase mb-4"
                style={{ fontFamily: "'Cinzel', serif", color: theme.gold }}
              >
                Colors & Their Meaning
              </p>
              <div className="flex gap-x-6 gap-y-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full border border-slate-300 bg-white block" />
                  <span className="text-sm text-slate-600">White — Purity & Openness</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full block" style={{ backgroundColor: theme.redDeep }} />
                  <span className="text-sm text-slate-600">Red — Love & Martyrdom</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full block" style={{ backgroundColor: theme.blueMarian }} />
                  <span className="text-sm text-slate-600">Blue — The Blessed Virgin Mary</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Sacredsymbols;