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

  const theme = {
    blueDeep: '#1e3a8a',
    bluePrimary: '#2563eb',
    blueLight: '#60a5fa',
    white: '#ffffff',
    black: '#111111',
    offWhite: '#f8fafc'
  };

  return (
    <section id="about" className="py-16 sm:py-24 md:py-28 px-4 sm:px-6 overflow-hidden" style={{ backgroundColor: theme.offWhite }}>
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInVariant}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="flex justify-center items-center gap-2 mb-3 text-lg sm:text-2xl font-bold uppercase tracking-widest" style={{ color: theme.bluePrimary }}>
            About Us
          </p>
          <div className="w-16 h-[2px] mx-auto" style={{ backgroundColor: theme.blueLight }} />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Text Content Block */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInVariant}
            className="flex flex-col items-start"
          >
            <h3 
              className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-5 leading-snug"
              style={{ fontFamily: "'Cinzel', serif", color: theme.black }}
            >
              The First Indigenous Male Religious Order in West Africa
            </h3>
            
            <div className="w-12 h-[2px] mb-6" style={{ backgroundColor: theme.blueLight }} />
            
            <p className="mb-4 text-sm sm:text-base leading-relaxed" style={{ color: theme.black }}>
              Sons of Mary Mother of Mercy (SMMM) is a Religious Congregation of priests and lay brothers 
              founded by Most Rev. Anthony Gogo Nwedo, C.S.Sp., of blessed memory — the pioneer bishop of 
              Umuahia Diocese — whose vision reached beyond his time.
            </p>
            
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: theme.black }}>
              Through the intercession of Mary, Mother of Mercy, the mission has spread across Africa, 
              North America, Europe, and Asia. The US Region stands as a testament 
              to that enduring vision.
            </p>
            
            <div className="flex gap-4 mt-8 flex-wrap w-full sm:w-auto">
              <Link 
                to="/History"
                className="w-full sm:w-auto text-center px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 border shadow-sm"
                style={{ backgroundColor: theme.bluePrimary, color: theme.white, borderColor: theme.bluePrimary, fontFamily: "'Cinzel', serif" }}
              >
                Our History
              </Link>
              <Link 
                to="/Charism" 
                className="w-full sm:w-auto text-center px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 border bg-transparent hover:bg-gray-100"
                style={{ borderColor: theme.blueLight, color: theme.bluePrimary, fontFamily: "'Cinzel', serif" }}
              >
                Our Charism
              </Link>
            </div>
          </motion.div>

          {/* Founder Card Block */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInVariant}
            className="relative group w-full"
          >
            <div 
              className="relative overflow-hidden shadow-2xl rounded-sm transition-transform duration-500 hover:-translate-y-1 w-full"
              style={{ background: theme.blueDeep }}
            >
              {/* Responsive Image Aspect Ratio Box */}
              <div 
                className="relative w-full h-64 sm:h-80 md:h-[340px] lg:h-[380px] overflow-hidden" 
                style={{ backgroundColor: theme.black, borderBottom: `1px solid ${theme.blueLight}20` }}
              >
                <img 
                  src={img} 
                  alt="Most Rev. Anthony Gogo Nwedo" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 max-w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>

              {/* Card Details */}
              <div className="p-5 sm:p-8 relative">
                <p 
                  className="mb-2 text-[0.6rem] tracking-[0.2em] uppercase font-bold"
                  style={{ fontFamily: "'Cinzel', serif", color: theme.blueLight }}
                >
                  Our Father Founder
                </p>
                
                <h4 
                  className="text-lg sm:text-xl text-white font-semibold mb-2 tracking-wide leading-snug"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Most Rev. Anthony Gogo Nwedo, CSSp
                </h4>
                
                <p 
                  className="text-sm sm:text-base leading-relaxed relative z-10 font-light"
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
            
            {/* Offset Accent Border (Hidden on extra small screens to avoid overflow) */}
            <div 
              className="hidden sm:block absolute top-[16px] left-[16px] right-[-12px] bottom-[-12px] border rounded-sm -z-10 pointer-events-none transition-all duration-500 group-hover:top-[20px] group-hover:left-[20px]" 
              style={{ borderColor: `${theme.blueLight}30` }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;