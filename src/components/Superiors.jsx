import { motion } from 'framer-motion';
import ibe from '../assets/images/priest(08).png';

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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9VlEB6ThPkVJaMEzyCos2tWk4cSe0CRZfT9QELRuVjkuhZRsTr-nc3tFNl6VfgVRWQ6X8Oulwri4mOmZDLcKz5xDKwCSykpEWubLHOhHIPOA6VVr2mtpt4nvYZe2V-ZDJBC9-KuUiQvH5aJuqyeL9zhkATATHCBkf849OPUM38ItOyD4nBt8YSmvUD9Xyq2Ea1azuZkZ9rowKYxWWA7fv9BXxilY23Eu-R7GHmOiArmgbi6Mc_iexN9D_PDv7W5hFMMnCpbTrCSw"
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ7cB0WioEHP4dDAvgLwb4vn9mUuVY5nc4RFTVSjCWI3lKBVHEG4dCmS1_fgQ63ZHBCsVRcoNZisTtbT9CyPWqwaE-oCiz-VlqTMuMXTIaWWgzG_ys2DMLJ9z78xHHn07usfbOAfueeLV_QOcxfBwZ_pTiHdnnmUie5TA_5VrLBbd4kBacfG4b-Z6xonA8QQjVWyxJj7E7AxidWb5Jx5Vw5T2ZiBms9ESRyPUMaUi0Vy0z9Slq1eRvf0-Slfhkc3UWAjS1JEAiN20"
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