import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from '../components/Navbar';
import wp1 from '../assets/priests/image(09).jpg';
import wp2 from '../assets/priests/image(14).jpg';
import wp3 from '../assets/wallpapers/wp(5).jpg';
import wp4 from '../assets/priests/image(17).jpg';
import wp7 from '../assets/priests/image(07).jpg';
import wp8 from '../assets/wallpapers/wp(9).jpg';

const HERO_IMAGES = [wp3, wp4, wp1, wp8, wp2, wp7];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Prayer = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans antialiased">
      {/* Exact Screen-Fitting Hero Section */}
      <section className="relative w-full h-screen h-[100dvh] flex flex-col justify-between overflow-hidden">
        {/* Carousel Background */}
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={HERO_IMAGES[currentImageIndex]}
            alt="Prayer backdrop"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Top Navbar Container */}
        <div className="relative z-20 w-full">
          <NavBar />
        </div>

        {/* Left-Aligned Hero Content with Added Padding */}
        <div className="relative z-10 w-full px-8 sm:px-12 md:px-16 lg:px-24 py-6 my-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-xl lg:max-w-2xl text-left"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="material-symbols-outlined text-[#60a5fa] text-3xl sm:text-4xl mb-3 block"
            >
              church
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-['Cinzel'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white mb-4"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}
            >
              Prayer for Beatification
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="font-['EB_Garamond',serif] text-base sm:text-lg text-slate-200/90 max-w-xl italic mb-6 font-normal leading-normal"
            >
              For the cause of the beatification of Bishop Anthony Gogo Nwedo, CSSp
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-start">
              <motion.a
                href="#prayer-text"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#0077ec] hover:bg-blue-600 text-white font-medium px-5 py-2.5 rounded-full shadow-md transition duration-300 flex items-center gap-2 text-xs sm:text-sm tracking-wide"
              >
                <span className="material-symbols-outlined text-lg">auto_stories</span> Pray With Us
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom spacer */}
        <div className="relative z-10 py-4"></div>
      </section>

      {/* Main Content Container */}
      <div className="bg-gradient-to-br from-[#0B132B] via-[#1e3a8a] to-[#004B87]">
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 w-full flex-grow">
          
          {/* Quote Block */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="bg-white/10 backdrop-blur-md rounded-xl p-5 md:p-6 text-center relative overflow-hidden mb-12 shadow-sm border-l-4 border-[#60a5fa]"
          >
            <span className="material-symbols-outlined text-[#60a5fa] text-2xl mb-2 block opacity-80">format_quote</span>
            <p className="font-['EB_Garamond',serif] text-lg sm:text-xl text-slate-100 italic leading-snug max-w-xl mx-auto font-normal">
              "Dedicated to winning souls for Christ and fostering holiness of life through tireless evangelization."
            </p>
          </motion.div>

          {/* Prayer Document Card */}
          <motion.section
            id="prayer-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden scroll-mt-8 mb-8"
          >
            <div className="p-6 md:p-8 border-b border-slate-100 text-center bg-slate-50/60">
              <span className="material-symbols-outlined text-[#0077ec] text-2xl mb-2">menu_book</span>
              <h2 className="font-['Cinzel'] text-sm sm:text-base md:text-lg font-bold tracking-wider text-[#0B132B] uppercase leading-relaxed max-w-xl mx-auto">
                Prayer for the Cause of the Beatification of Bishop Anthony Gogo Nwedo, CSSp
              </h2>
              <div className="w-10 h-0.5 bg-[#0077ec] mx-auto mt-3 rounded-full"></div>
            </div>

            <div className="p-6 sm:p-8 md:p-10 space-y-6 font-['EB_Garamond',serif] text-slate-800 text-base sm:text-lg leading-relaxed font-normal tracking-normal max-w-2xl mx-auto">
              <p className="first-letter:text-3xl first-letter:font-['Cinzel'] first-letter:font-bold first-letter:text-[#0077ec] first-letter:mr-2 first-letter:float-left first-letter:leading-none">
                O God, You, who inspired your servant +Anthony Gogo Nwedo as the pioneer Bishop of the Diocese of Umuahia to dedicate his life selflessly to the course of winning souls for Christ and to found two religious Congregations for fostering holiness of life and the work of evangelization, hasten the day when the Church will be able to celebrate the saintliness of his life.
              </p>

              <p>
                May the example of his personal sanctification and commitment to the spreading of the Gospel among the poor lead a greater number of Christian to ever strive after holiness and devote themselves to the work of spreading the Gospel that the men and women of our time and the future generation may discover your infinite mercy revealed in Mary, our beloved Mother, and her Son, Jesus Christ our Lord, who lives and reigns with you in the unity of the Holy Spirit, One God, for ever and ever.
              </p>

              <p className="font-['Cinzel'] font-bold text-center text-lg sm:text-xl text-[#0077ec] tracking-[0.15em] pt-4 uppercase">
                AMEN!
              </p>
            </div>
          </motion.section>

        </main>
      </div>

      <footer className="w-full text-center py-6 text-xs font-sans text-slate-500 border-t border-slate-200 bg-slate-50">
        <p>&copy; {new Date().getFullYear()} Sons of Mary Mother of Mercy (SMMM). All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Prayer;