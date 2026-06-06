import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import img from '../assets/vectors/web-image.webp';

const About = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut' } 
    }
  };

  // Blue variants, white, black
  const theme = {
    blueDeep: '#1e3a8a',    // deep royal blue
    bluePrimary: '#2563eb', // primary vibrant blue
    blueLight: '#60a5fa',   // light accent blue
    white: '#ffffff',
    black: '#111111',
    offWhite: '#f8fafc'     // cool off-white / light slate
  };

  return (
    <section id="about" className="py-28 px-6" style={{ backgroundColor: theme.offWhite }}>
      <div className="max-w-6xl mx-auto">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInVariant}
          className="text-center mb-16"
        >
          <p className="flex justify-center items-center gap-2 mb-4 text-2xl font-bold uppercase tracking-widest" style={{ color: theme.bluePrimary }}>
            About Us
          </p>
          <h2 
            className="text-4xl md:text-5xl mb-6 font-semibold tracking-wide"
            style={{ fontFamily: "'Cinzel', serif", color: theme.black }}
          >
            {/* Title can be added here if needed */}
          </h2>
          <div className="w-16 h-[2px] mx-auto" style={{ backgroundColor: theme.blueLight }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInVariant}
          >
          
            
            <h3 
              className="text-2xl font-semibold mb-5 leading-snug"
              style={{ fontFamily: "'Cinzel', serif", color: theme.black }}
            >
              The First Indigenous Male Religious Order in West Africa
            </h3>
            
            <div className="w-12 h-[2px] mb-6" style={{ backgroundColor: theme.blueLight }} />
            
            <p className="mb-4 text-[1.05rem] leading-relaxed" style={{ color: theme.black }}>
              Sons of Mary Mother of Mercy (SMMM) is a Religious Congregation of priests and lay brothers 
              founded by Most Rev. Anthony Gogo Nwedo, C.S.Sp., of blessed memory — the pioneer bishop of 
              Umuahia Diocese — whose vision reached beyond his time.
            </p>
            
            <p className="text-[1.05rem] leading-relaxed" style={{ color: theme.black }}>
              Through the intercession of Mary, Mother of Mercy, the mission has spread across Africa, 
              North America, Europe, and Asia. The US Region stands as a testament 
              to that enduring vision.
            </p>
            
            <div className="flex gap-4 mt-8 flex-wrap">
              <Link 
                to="/History"
                className="px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 border shadow-sm"
                style={{ backgroundColor: theme.bluePrimary, color: theme.white, borderColor: theme.bluePrimary, fontFamily: "'Cinzel', serif" }}
              >
                Our History
              </Link>
              <Link 
                to="/Charism" 
                className="px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 border bg-transparent hover:bg-gray-100"
                style={{ borderColor: theme.blueLight, color: theme.bluePrimary, fontFamily: "'Cinzel', serif" }}
              >
                Our Charism
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInVariant}
            className="relative group"
          >
            <div 
              className="relative overflow-hidden shadow-2xl rounded-sm transition-transform duration-500 hover:-translate-y-1"
              style={{ background: theme.blueDeep }}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden" style={{ backgroundColor: theme.black, borderBottom: `1px solid ${theme.blueLight}20` }}>
                <img 
                  src={img} 
                  alt="Most Rev. Anthony Gogo Nwedo" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              <div className="p-8 relative">
                <p 
                  className="mb-2 text-[0.6rem] tracking-[0.2em] uppercase font-bold"
                  style={{ fontFamily: "'Cinzel', serif", color: theme.blueLight }}
                >
                  Our Father Founder
                </p>
                
                <h4 
                  className="text-xl text-white font-semibold mb-1 tracking-wide"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Most Rev. Anthony Gogo Nwedo, CSSp
                </h4>
                
                <p 
                  className="text-[1rem] leading-relaxed relative z-10 font-light"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: theme.offWhite }}
                >
                  "A visionary leader who saw beyond his time — he had the vision that a time would come when the 
                  congregation would have its members on mission all over the world."
                </p>
                
                <div className="absolute bottom-6 right-6 opacity-10 pointer-events-none">
                  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                    <line x1="16" y1="2" x2="16" y2="30" stroke={theme.blueLight} strokeWidth="1.5"/>
                    <line x1="6" y1="11" x2="26" y2="11" stroke={theme.blueLight} strokeWidth="1.5"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div 
              className="absolute top-[16px] left-[16px] right-[-16px] bottom-[-16px] border rounded-sm -z-10 pointer-events-none transition-all duration-500 group-hover:top-[20px] group-hover:left-[20px]" 
              style={{ borderColor: `${theme.blueLight}30` }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;