import { motion } from 'framer-motion';
import ibe from '../assets/images/priest(08).png';
import img from '../assets/images/priest(15).png';
import img2 from '../assets/images/priest(24).jpg';

const Superiors = () => {
  // Blue variants, white, black
  const theme = {
    blueDeep: '#1e3a8a',    // deep royal blue
    bluePrimary: '#2563eb', // primary vibrant blue
    blueLight: '#60a5fa',   // light accent blue
    white: '#ffffff',
    black: '#111111',
    offWhite: '#f8fafc',    // cool off-white / light slate
    grayLight: '#e2e8f0'
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section className="py-28 px-6" style={{ backgroundColor: theme.offWhite }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          {...fadeIn}
        >
          <h2 
            className="text-4xl md:text-5xl font-semibold mb-4 tracking-wide"
            style={{ fontFamily: "'Cinzel', serif", color: theme.bluePrimary }}
          >
            Our Regional Executives
          </h2>
      
          <div className="w-16 h-[2px] mx-auto mt-6" style={{ backgroundColor: theme.blueLight }} />
        </motion.div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Superior Card 1 */}
          <motion.div 
            className="p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            style={{ backgroundColor: theme.white }}
            {...fadeIn}
          >
            <img 
              className="w-full aspect-[3/4] object-cover rounded mb-6" 
              alt="Very Rev. Dr. Anselm Ugochukwu Ibe, SMMM - Regional Superior" 
              src={ibe}
            />
            <div className="text-center">
              <h4 
                className="text-xl font-semibold mb-1"
                style={{ fontFamily: "'Cinzel', serif", color: theme.bluePrimary }}
              >
                Very Rev. Dr. Anselm Ugochukwu Ibe, SMMM
              </h4>
              <p className="text-sm font-medium mb-1" style={{ color: theme.blueLight }}>
                Regional Superior
              </p>
             
            </div>
          </motion.div>

          {/* Superior Card 2 */}
          <motion.div 
            className="p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            style={{ backgroundColor: theme.white }}
            {...fadeIn}
          >
            <img 
              className="w-full aspect-[3/4] object-cover rounded mb-6" 
              alt="Rev. Fr. Michael Okafor, SMMM - Regional Bursar" 
              src={img}
            />
            <div className="text-center">
              <h4 
                className="text-xl font-semibold mb-1"
                style={{ fontFamily: "'Cinzel', serif", color: theme.bluePrimary }}
              >
                Rev. Fr. Michael Okafor, SMMM
              </h4>
              <p className="text-sm font-medium mb-1" style={{ color: theme.blueLight }}>
                Regional Bursar
              </p>
             
            </div>
          </motion.div>

          {/* Superior Card 3 */}
          <motion.div 
            className="p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            style={{ backgroundColor: theme.white }}
            {...fadeIn}
          >
            <img 
              className="w-full aspect-[3/4] object-cover rounded mb-6" 
              alt="Rev. Fr. Thaddeus Agbasonu, SMMM - Regional Secretary" 
              src={img2}
            />
            <div className="text-center">
              <h4 
                className="text-xl font-semibold mb-1"
                style={{ fontFamily: "'Cinzel', serif", color: theme.bluePrimary }}
              >
                Rev. Fr. Thaddeus Agbasonu, SMMM
              </h4>
              <p className="text-sm font-medium mb-1" style={{ color: theme.blueLight }}>
                Regional Secretary
              </p>
             
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Superiors;