import { motion } from 'framer-motion';
import NavBar from '../components/Navbar';
import img from '../assets/vectors/web-image.webp';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Prayer = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans antialiased text-slate-900">
      {/* Full-Screen Hero Section (Taking up 100% of viewport height & width) */}
      <section className="relative w-full h-screen h-[100dvh] flex flex-col justify-between bg-white overflow-hidden">
        
        {/* Top Navbar Container */}
        <div className="relative z-20 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 shrink-0">
          <NavBar />
        </div>

        {/* Main 3-Div Graphic Layout (1 Outer Div containing 2 Nested Divs for Text and Image, vertically centered in the remaining full screen space) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Child Div */}
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="max-w-xl lg:max-w-2xl"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0077ec] text-xs font-semibold mb-6 tracking-wide"
              >
                <span className="material-symbols-outlined text-sm">church</span> 
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-['Cinzel'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.15]"
              >
                Prayer for <span className="text-[#0077ec]">Beatification</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="font-['EB_Garamond',serif] text-lg sm:text-xl text-slate-600 max-w-xl italic mb-8 font-normal leading-relaxed"
              >
                For the cause of the beatification of Bishop Anthony Gogo Nwedo, CSSp — dedicated to winning souls for Christ and fostering holiness of life.
              </motion.p>

            </motion.div>
          </div>

          {/* Right Image/Graphic Display Child Div */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-md bg-white p-4 rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100 group"
            >
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src={img}
                  alt="Bishop Anthony Gogo Nwedo graphic display"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />  
                </div>
            </motion.div>
          </div>

        </div>

        {/* Bottom spacing helper */}
        <div className="relative z-10 py-2 shrink-0"></div>
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
                O God, You, who inspired your servant Anthony Gogo Nwedo as the pioneer Bishop of the Diocese of Umuahia to dedicate his life selflessly to the course of winning souls for Christ and to found two religious Congregations for fostering holiness of life and the work of evangelization, hasten the day when the Church will be able to celebrate the saintliness of his life.
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