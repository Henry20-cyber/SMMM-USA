import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from '../components/Navbar';
import wp1 from '../assets/priests/image(09).jpg';
import wp2 from '../assets/priests/image(14).jpg';
import wp3 from '../assets/wallpapers/wp(5).jpg';
import wp8 from '../assets/wallpapers/wp(8).jpg';

// Hero images – replace with your own if needed
const HERO_IMAGES = [wp1, wp2, wp3];

// Animation variants (unchanged)
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const cardHover = {
  scale: 1.02,
  transition: { type: "spring", stiffness: 300, damping: 15 }
};

const Donations = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [copySuccess, setCopySuccess] = useState(false);
  const copyTimeoutRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
    };
  }, []);

  const copyAccountNumber = async () => {
    const accountNumber = "322336006";
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopySuccess(true);
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
      copyTimeoutRef.current = setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar />

      {/* Hero Section (unchanged) */}
      <section className="relative h-dvh md:min-h-[600px] flex items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={HERO_IMAGES[currentImageIndex]}
            alt="Mission appeal backdrop"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-xl lg:max-w-2xl"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="material-symbols-outlined text-[#0077ec] text-4xl sm:text-5xl mb-4 block"
            >
              diversity_3
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="font-['Cinzel'] text-3xl sm:text-4xl md:text-6xl font-bold tracking-wide leading-tight text-white mb-4"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
            >
              Help Bring a Priest <br className="hidden sm:inline" /> to the Altar
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="font-['Cormorant_Garamond'] text-xl sm:text-2xl text-slate-300 max-w-2xl italic mb-8"
            >
              Sponsor a Seminarian's Training & Build Vital Missions for Indigent Children
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <motion.a
                href="#remittance-details"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#0077ec] hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300 flex items-center gap-2 text-sm sm:text-base"
              >
                <span className="material-symbols-outlined text-xl">account_balance</span> View Remittance Info
              </motion.a>
              <motion.a
                href="#sponsorship-options"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white/80 hover:bg-white hover:text-[#0B132B] text-white font-semibold px-6 py-3 rounded-full transition duration-300 flex items-center gap-2 text-sm sm:text-base"
              >
                <span className="material-symbols-outlined text-xl">volunteer_activism</span> Donation Tiers
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content with Blue Gradient Background */}
      <div className="bg-gradient-to-br from-[#0B132B] via-[#1e3a8a] to-[#004B87]">
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 w-full flex-grow">
          
          {/* Quote block (unchanged) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center relative overflow-hidden mb-16 shadow-sm border-l-4 border-[#0077ec]"
          >
            <span className="material-symbols-outlined text-[#0077ec] text-3xl mb-2 block">format_quote</span>
            <p className="font-['Cormorant_Garamond'] text-xl sm:text-2xl text-white italic leading-relaxed max-w-2xl mx-auto">
              "It is through the act of giving that we discover the true purpose and care of our lives."
            </p>
          </motion.div>

          {/* ✨ CREATIVE NEW SECTION with Image + Text ✨ */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-white/5 to-white/[0.07] backdrop-blur-sm border border-white/20 shadow-xl"
          >
            <div className="flex flex-col md:flex-row md:items-stretch">
              {/* Image side - Creative visual */}
              <div className="md:w-2/5 relative overflow-hidden bg-[#0B132B]">
                <motion.img
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true }}
                  src={wp8}
                  alt="Hands holding a cross and rosary, symbolizing mission and giving"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 text-white/80 text-xs font-mono bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">
                  † Faith in Action
                </div>
              </div>

              {/* Text side - creative styling */}
              <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-[#0077ec] text-2xl">volunteer_activism</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0077ec] bg-white/20 px-3 py-1 rounded-full">Our Mission Appeal</span>
                </div>
                <p className="font-serif text-white text-base sm:text-lg leading-relaxed mb-4">
                  Missionary work relies on both field service and financial contributions. Within the Sons of Mary Mother of Mercy (SMMM), your donations are essential for advancing our mission.
                </p>
                <p className="font-serif text-white text-base sm:text-lg leading-relaxed">
                  We invite you to participate in the formation of our future clergy. At this time, the SMMM family is blessed with many dedicated candidates pursuing vocations in both religious life and ministerial priesthood.
                </p>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="mt-6 flex items-center gap-2 text-sm text-[#0077ec] font-medium"
                >
                  <span>Join the harvest of souls</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Two info cards (unchanged structure, but note the first card's text repeated? Actually original had similar text – I'll keep it as is) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            <motion.div
              variants={fadeUp}
              whileHover={cardHover}
              className="bg-white p-8 border border-[rgba(0,119,236,0.1)] rounded-xl shadow-sm flex flex-col justify-between transition hover:shadow-md"
            >
              <div>
                <div className="flex items-center gap-3 text-[#0B132B] mb-4">
                  <span className="material-symbols-outlined text-2xl text-[#0077ec]">school</span>
                  <h3 className="font-['Cinzel'] font-bold text-sm tracking-widest uppercase">The School Apostolate</h3>
                </div>
                <p className="font-serif text-[15px] sm:text-base text-slate-600 leading-relaxed mb-4">
                  The school apostolate is another core focus, allowing us to care for indigent children. Missionary work relies on both field service and financial contributions. Within the Sons of Mary Mother of Mercy (SMMM), your donations are essential for advancing our mission.
                </p>
                <p className="font-serif text-[15px] sm:text-base text-slate-600 leading-relaxed">
                  We invite you to participate in the formation of our future clergy. At this time, the SMMM family is blessed with many dedicated candidates pursuing vocations in both religious life and ministerial priesthood.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={cardHover}
              className="bg-white p-8 border border-[rgba(0,119,236,0.1)] rounded-xl shadow-sm flex flex-col justify-between transition hover:shadow-md"
            >
              <div>
                <div className="flex items-center gap-3 text-[#0B132B] mb-4">
                  <span className="material-symbols-outlined text-2xl text-[#0077ec]">assignment_turned_in</span>
                  <h3 className="font-['Cinzel'] font-bold text-sm tracking-widest uppercase">Our Core Targets</h3>
                </div>
                <p className="text-xs text-slate-500 mb-4 font-medium uppercase tracking-wider">Your contributions most effectively assist these areas:</p>
                <ul className="space-y-3 font-medium text-slate-700 text-sm sm:text-base">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#0077ec] text-xs mt-1.5">fiber_manual_record</span>
                    <span>Constructing mission schools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#0077ec] text-xs mt-1.5">fiber_manual_record</span>
                    <span>Providing educational scholarships</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#0077ec] text-xs mt-1.5">fiber_manual_record</span>
                    <span>Digitalizing classroom facilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#0077ec] text-xs mt-1.5">fiber_manual_record</span>
                    <span>Supporting personnel in difficult mission regions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#0077ec] text-xs mt-1.5">fiber_manual_record</span>
                    <span>Teacher professional development</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Sponsorship Options (unchanged) */}
          <motion.section
            id="sponsorship-options"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="mb-16 scroll-mt-6"
          >
            <div className="text-center mb-8">
              <h2 className="font-['Cinzel'] text-xl md:text-2xl font-bold tracking-wide text-white mb-2">Select Your Support Commitment</h2>
              <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto">Review our primary sponsorship tracks mapped directly from our regional donor programs.</p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="border border-slate-200 rounded-xl p-6 bg-white/95 backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-[#0077ec]">workspace_premium</span>
                    <h4 className="font-['Cinzel'] font-bold text-sm tracking-wide text-[#0B132B]">Track 1: Priestly Formation</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mb-6">I wish to support the rigorous academic, spiritual, and communal training of an upcoming priest with a gift of:</p>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {['$500', '$300', '$200', 'others'].map((amount) => (
                      <motion.div
                        key={amount}
                        whileHover={{ scale: 1.02, borderColor: "#0077ec" }}
                        whileTap={{ scale: 0.98 }}
                        className="border border-slate-300 rounded-lg p-2 text-center cursor-pointer bg-white font-mono text-xs sm:text-sm font-bold text-[#0B132B] shadow-sm transition hover:border-[#0077ec] hover:bg-[rgba(0,119,236,0.05)]"
                      >
                        {amount}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="border border-slate-200 rounded-xl p-6 bg-white/95 backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-[#0077ec]">local_library</span>
                    <h4 className="font-['Cinzel'] font-bold text-sm tracking-wide text-[#0B132B]">Track 2: Educational Missions</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mb-6">I wish to contribute to our educational missions in the amount of:</p>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {['$500', '$250', '$150', 'others'].map((amount) => (
                      <motion.div
                        key={amount}
                        whileHover={{ scale: 1.02, borderColor: "#0077ec" }}
                        whileTap={{ scale: 0.98 }}
                        className="border border-slate-300 rounded-lg p-2 text-center cursor-pointer bg-white font-mono text-xs sm:text-sm font-bold text-[#0B132B] shadow-sm transition hover:border-[#0077ec] hover:bg-[rgba(0,119,236,0.05)]"
                      >
                        {amount}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-6 border-2 border-dashed border-[#0077ec]/40 bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center"
            >
              <span className="inline-block bg-[#0077ec] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full mb-2">Featured Program</span>
              <h4 className="font-['Cinzel'] font-bold text-sm sm:text-base text-white">Full Annual Sponsorship Track</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl mx-auto">
                Complete individual sponsorship options are cataloged at <strong className="text-white font-semibold">$500 US annually</strong>. Please mention this track preference when completing your wire or physical check delivery.
              </p>
            </motion.div>
          </motion.section>

          {/* Remittance Details (unchanged except corrected account number) */}
          <motion.section
            id="remittance-details"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="bg-white border-2 border-[#0077ec]/20 rounded-2xl shadow-md overflow-hidden scroll-mt-6"
          >
            <div className="p-8 md:p-12 border-b border-slate-100 text-center bg-slate-50">
              <h2 className="font-['Cinzel'] text-xl md:text-2xl font-bold tracking-wide text-[#0B132B] mb-2">Direct Financial Remittance Details</h2>
              <p className="text-slate-500 text-xs sm:text-sm font-medium max-w-lg mx-auto">
               Please utilize our verified banking or regional house routing credentials below.
              </p>
            </div>

            <div className="p-8 md:p-12 space-y-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="font-['Cinzel'] font-bold text-sm tracking-widest text-[#0B132B] uppercase flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#0077ec]">account_balance</span> Bank Wire & Transfer Details
                </h3>

                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-slate-200">
                    <div className="p-4 text-xs font-bold font-['Cinzel'] text-slate-500 uppercase tracking-wider bg-slate-50 border-b sm:border-b-0 sm:border-r border-slate-200">Bank Name</div>
                    <div className="p-4 sm:col-span-2 text-sm font-semibold text-[#0B132B]">JPMorgan Chase Trust Bank</div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-slate-200">
                    <div className="p-4 text-xs font-bold font-['Cinzel'] text-slate-500 uppercase tracking-wider bg-slate-50 border-b sm:border-b-0 sm:border-r border-slate-200">Account Name</div>
                    <div className="p-4 sm:col-span-2 text-sm font-semibold text-[#0B132B]">Sons of Mary Mother of Mercy, SMMM</div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-slate-200">
                    <div className="p-4 text-xs font-bold font-['Cinzel'] text-slate-500 uppercase tracking-wider bg-slate-50 border-b sm:border-b-0 sm:border-r border-slate-200">Account Number</div>
                    <div className="p-4 sm:col-span-2 text-sm font-mono font-bold text-[#0077ec] tracking-wide flex items-center justify-between">
                      <span id="account-number">322336006</span>
                      <div className="flex items-center gap-2">
                        <motion.button
                          onClick={copyAccountNumber}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.95 }}
                          className="group relative flex items-center gap-1 text-[11px] font-sans font-medium text-[#0077ec] bg-blue-50 hover:bg-[#0077ec] hover:text-white px-2.5 py-1 border border-[#0077ec]/30 rounded transition-all duration-200"
                        >
                          <span className="material-symbols-outlined text-xs">{copySuccess ? 'check' : 'content_copy'}</span>
                          <span>{copySuccess ? 'Copied' : 'Copy'}</span>
                          {copySuccess && (
                            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#0B132B] text-white text-[10px] px-2 py-0.5 rounded whitespace-nowrap">Copied!</span>
                          )}
                        </motion.button>
                        <span className="text-[10px] uppercase font-sans font-medium text-slate-500 bg-slate-100 px-2 py-0.5 border border-slate-200 rounded">Checking</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3">
                    <div className="p-4 text-xs font-bold font-['Cinzel'] text-slate-500 uppercase tracking-wider bg-slate-50 border-b sm:border-b-0 sm:border-r border-slate-200">Routing Transit</div>
                    <div className="p-4 sm:col-span-2 text-sm font-mono font-semibold text-[#0B132B]">322271627</div>
                  </div>
                </div>
              </motion.div>

              <div className="h-[1px] bg-slate-200"></div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="font-['Cinzel'] font-bold text-sm tracking-widest text-[#0B132B] uppercase flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#0077ec]">mail</span> Remittance By Check
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  If making your contribution via physical check or draft order, please make all payments payable to <strong className="text-[#0B132B]">"SMMM USA Region"</strong> and route them directly to our regional office:
                </p>
                <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-start gap-4 shadow-sm">
                  <span className="material-symbols-outlined text-[#0077ec] text-2xl mt-0.5">corporate_fare</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B132B] mb-0.5">SMMM Regional House</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">1100 W. Hawaii Avenue,</p>
                    <p className="text-sm text-slate-600 leading-relaxed">Nampa, Idaho, 83686</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center space-y-4 py-4 border-t border-b border-slate-100 bg-slate-50/50 rounded-xl px-4"
              >
                <p className="text-xs sm:text-sm text-slate-600 font-medium flex items-center justify-center gap-1.5 max-w-md mx-auto">
                  <span className="material-symbols-outlined text-base text-emerald-600 flex-shrink-0">verified</span>
                  <span>You will receive an official tax receipt reflecting the total value of your annual, yearly contributions.</span>
                </p>
                <p className="font-['Cormorant_Garamond'] text-base sm:text-lg text-[#004B87] italic font-medium leading-relaxed">
                  "Please know that we hold you in our prayers as you provide this vital financial aid for our mission!"
                </p>
              </motion.div>
            </div>
          </motion.section>
        </main>
      </div>

      <footer className="w-full text-center py-8 text-xs text-slate-500 border-t border-slate-200 bg-slate-50">
        <p>&copy; {new Date().getFullYear()} Sons of Mary Mother of Mercy (SMMM). All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Donations;