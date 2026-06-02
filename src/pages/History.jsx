import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import wp6 from '../assets/wallpapers/wp(6).jpg';
import wp3 from '../assets/wallpapers/wp(3).jpg';
import wp7 from '../assets/wallpapers/wp(7).jpg';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1600&q=80",
  wp6,
  wp7,  
  "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=1600&q=80", 
  wp3,
];

const REGIONAL_SUPERIORS = [
  { name: "Fr. Eugene Eburuche, SMMM", years: "1998-2009", isCurrent: false },
  { name: "Fr. Nelson Ogwuegbu (excardinated)", years: "2009-2010", isCurrent: false },
  { name: "Fr. Uche Iheke, SMMM", years: "2010-2012", isCurrent: false },
  { name: "Fr. John Agwu, SMMM", years: "2012-2015", isCurrent: false },
  { name: "Fr. Remigius Owoamanam, SMMM", years: "2015-2019", isCurrent: false },
  { name: "Fr. Marcellinus Ekenedo, SMMM", years: "2019-2021", isCurrent: false },
  { name: "Fr. Anselm Ugochukwu Ibe, SMMM", years: "2021-present", isCurrent: true }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};

export default function History() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Green, white, black palette
  const theme = {
    greenPrimary: '#166534',
    greenLight: '#4ade80',
    black: '#111111',
    white: '#ffffff',
    offWhite: '#fafaf5',
    textDark: '#1a1a1a',
    textBody: '#3E5A6C',
    borderLight: 'rgba(22, 101, 52, 0.12)'
  };

  return (
    <div className="min-h-screen flex flex-col justify-between antialiased" style={{ backgroundColor: theme.offWhite, color: theme.textDark }}>
      <Navbar />
      
      {/* ================= HERO SECTION: FULL-WIDTH BACKGROUND ================= */}
      <section className="relative min-h-[500px] sm:min-h-[600px] flex items-center overflow-hidden">
        {/* Rotating Background Images */}
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImageIndex}
            src={HERO_IMAGES[currentImageIndex]}
            alt="SMMM American Region history backdrop"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Dark overlay for text readability - increased opacity */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Content – left aligned on all devices */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl lg:max-w-2xl"
          >
            <span className="text-xs uppercase tracking-[0.25em] font-semibold mb-3 block" style={{ color: theme.greenLight }}>
              Sons of Mary Mother of Mercy
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
              Brief Information about the SMMM American Region
            </h1>
            <motion.div 
              className="mt-5 h-1 w-24 rounded-full"
              style={{ backgroundColor: theme.greenLight }}
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex-grow w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Historical Context */}
          <motion.div 
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm space-y-6"
            style={{ border: `1px solid ${theme.borderLight}` }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-bold tracking-tight pb-3" style={{ color: theme.greenPrimary, borderBottom: `1px solid ${theme.borderLight}` }}>
              Our Foundation & History
            </h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: theme.textBody }}>
              <p>
                Sons of Mary Mother of Mercy (SMMM) is a Religious Congregation of priests and lay brothers founded by Most Rev. Anthony Gogo Nwedo, C.S.Sp, of blessed memory, on October 25, 1970. It is the first indigenous male religious order in West Africa. The founder was the pioneer bishop of Umuahia Diocese, a visionary leader who saw beyond his time. He had the vision that a time would come when the congregation would have its members on mission all over the world.
              </p>
              <p>
                While founding the congregation, his primary goal was to form a male religious order to support him in meeting the local needs of the Umuahia Diocese. Today, through the intercession of Mary, Mother of Mercy, the mission has spread to several parts of the globe, including Africa (Nigeria, Cameroon, Ghana, and Burkina Faso), North America (Canada and the United States of America), Europe (Germany, Luxembourg, Austria, Switzerland, United Kingdom, Italy, Belgium, and the Republic of Ireland), and the Republic of the Philippines.
              </p>
              <p>
                Regarding the SMMM’s presence in the United States of America, the SMMM American Region began as a mustard seed and has since blossomed into a shrub with many branches. Specifically, it began on January 24, 1998, when Fr. Eugene Ujunwa Eburuche, SMMM, arrived in Indiana within the Diocese of Fort Wayne-South Bend. This occurred during the episcopate of Bishop John Michael D’Arcy—a good shepherd after the heart of Christ—who passed away on January 13, 2010.
              </p>
              <p>
                Due to the growing need for the Sacraments, Bishop D’Arcy invited Fr. MacDonald Kelechi Nwandu, SMMM, to join Fr. Eburuche on March 2, 2001. Together, they formed the first community of two brothers in Fort Wayne. Their mission there concluded on July 12, 2005, when permission for a new Mission was granted. Fr. Nwandu left for theological studies in Germany, while Fr. Eburuche moved to the Diocese of Fresno, California, for chaplaincy services.
              </p>
              <p>
                The Fresno mission opened new opportunities for ministry and friendship. Bishop John Steinbock and then-Vicar General Monsignor Myron J. Cotta (now Bishop of Stockton) welcomed the Order with open hearts. In September 2005, Fr. Nelson Okechi Ogwuegbu joined Fr. Eburuche to form a new community in Fresno. By the end of 2006, the USA Region had grown rapidly to include 15 priests.
              </p>
              <p>
                With the steady growth of our membership, our Superior General, the Very Reverend Dr. James Michael Okpala-Onwuka, SMMM, formally elevated our community to the status of a region, and Fr. Eugene became our pioneer Regional Superior. Consequently, the structural arrangements for effective leadership were set in motion as SMMM’s presence continued to be visibly acknowledged and represented through the members’ apostolate in various dioceses and hospital chaplaincies across the country. Interestingly, the first regional elections were held on February 10, 2009, at St. Genevieve’s Catholic Parish in Fresno, California. Fr. Nelson Ogwuegbu was elected and later ratified as the first elected Regional Superior on March 30, 2009, alongside Fr. Anselm Ibe as Secretary and Fr. Bartholomew Ifionu as Bursar.
              </p>
            </div>
          </motion.div>
          
          {/* Right Column */}
          <div className="space-y-8">
            
            {/* Current Status Card */}
            <motion.div 
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm space-y-6"
              style={{ border: `1px solid ${theme.borderLight}` }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-xl font-bold tracking-tight pb-3" style={{ color: theme.greenPrimary, borderBottom: `1px solid ${theme.borderLight}` }}>
                Current Status & Global Strength
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: theme.textBody }}>
                <p>
                  Currently, our members provide priestly ministry across various Archdioceses and Dioceses, including Fresno, CA; San Bernardino, CA; San Diego, CA; Boston, MA; Boise, ID; and Orlando, FL. Other members serve as Hospital, Veteran, and Prison Chaplains within the dioceses and archdioceses of Los Angeles, CA; San Francisco, CA; San Bernardino, CA; Syracuse, NY; Hartford, Connecticut; Miami, FL; St. Augustine, FL; and St. Petersburg, FL. Notably, our student members currently in the Philippines also belong to the USA Region.
                </p>
                <p>
                  The numerical strength of our Region is a true blessing, with 35 active members. In thanksgiving for God’s love and mercy, we celebrated the Silver Jubilee of our mission in the United States in 2023. This milestone was a moment to appreciate our 25-year journey as missionaries dedicated to God’s work. Our Superior General, Rev. Fr. Dr. Christian Okwuru, joined us for this epoch-making celebration, during which awards for exceptional leadership and missionary services were presented to Fr. Eugene Eburuche, Fr. Paulinus Iwuji, and Fr. Anselm Ibe.
                </p>
              </div>
              
              {/* Scripture Highlight */}
              <div className="border-l-4 pl-4 py-2 rounded-r-xl" style={{ borderLeftColor: theme.greenPrimary, backgroundColor: `${theme.greenPrimary}08` }}>
                <p className="text-base italic font-medium leading-relaxed" style={{ color: theme.textDark }}>
                  Following the mandate of our Lord Jesus Christ, we have, therefore, resolved to bring the Gospel to all nations: “Go and make disciples of all nations…” (Mt 28:19).
                </p>
              </div>
            </motion.div>
            
            {/* Regional Leadership Card */}
            <motion.div 
              className="p-6 sm:p-8 rounded-2xl shadow-md space-y-6"
              style={{ backgroundColor: theme.black, border: `1px solid ${theme.borderLight}` }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold tracking-tight" style={{ color: theme.greenLight }}>
                Past and Present Regional Superiors
              </h3>
              
              <motion.div 
                className="flex flex-col space-y-1 font-medium"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ color: theme.white }}
              >
                {REGIONAL_SUPERIORS.map((superior, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={itemVariants}
                    className={`flex justify-between items-center py-3 transition-colors ${
                      idx !== REGIONAL_SUPERIORS.length - 1 ? 'border-b' : ''
                    }`}
                    style={{ borderColor: `${theme.white}10`, color: superior.isCurrent ? theme.greenLight : theme.white }}
                  >
                    <span className={superior.isCurrent ? "font-semibold" : "font-normal"}>
                      {superior.name}
                    </span>
                    <span className={`text-xs px-3 py-1 rounded-full font-normal ${
                      superior.isCurrent 
                        ? 'bg-green-900/50 text-green-300 border border-green-800/80' 
                        : 'bg-white/10 text-white/60'
                    }`}>
                      {superior.years}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
          </div>
        </div>
      </main>
      
      <footer className="w-full text-center py-8 text-xs border-t" style={{ color: theme.textBody, borderColor: theme.borderLight, backgroundColor: theme.white }}>
        <p>&copy; {new Date().getFullYear()} Sons of Mary Mother of Mercy (SMMM). All rights reserved.</p>
      </footer>
    </div>
  );
}