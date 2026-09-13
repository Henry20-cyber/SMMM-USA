import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "../components/Navbar";
import wp1 from "../assets/priests/image(09).jpg";
import wp2 from "../assets/priests/image(14).jpg";
import wp3 from "../assets/wallpapers/wp(5).jpg";
import wp4 from "../assets/priests/image(17).jpg";
import wp7 from "../assets/priests/image(07).jpg";
import wp8 from "../assets/wallpapers/wp(9).jpg";
import wp9 from "../assets/wallpapers/wp(11).webp";

const HERO_IMAGES = [wp4, wp1, wp2, wp3, wp7, wp8];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardHover = {
  y: -4,
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

const Donations = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [copySuccess, setCopySuccess] = useState(false);
  const [copyRoutingSuccess, setCopyRoutingSuccess] = useState(false);
  const [copyAllSuccess, setCopyAllSuccess] = useState(false);
  
  const copyTimeoutRef = useRef(null);
  const copyRoutingTimeoutRef = useRef(null);
  const copyAllTimeoutRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
      if (copyRoutingTimeoutRef.current) clearTimeout(copyRoutingTimeoutRef.current);
      if (copyAllTimeoutRef.current) clearTimeout(copyAllTimeoutRef.current);
    };
  }, []);

  const copyTextToClipboard = async (text, setSuccessState, timeoutRef) => {
    try {
      await navigator.clipboard.writeText(text);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setSuccessState(true);
      timeoutRef.current = setTimeout(() => setSuccessState(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const copyAccountNumber = () => 
    copyTextToClipboard("322336006", setCopySuccess, copyTimeoutRef);

  const copyRoutingNumber = () => 
    copyTextToClipboard("322271627", setCopyRoutingSuccess, copyRoutingTimeoutRef);

  const copyAllAccountDetails = () => {
    const detailsText = 
      "Bank Name: JPMorgan Chase Trust Bank\n" +
      "Account Name: Sons of Mary Mother of Mercy, SMMM\n" +
      "Account Number: 322336006\n" +
      "Routing Transit: 322271627";
    copyTextToClipboard(detailsText, setCopyAllSuccess, copyAllTimeoutRef);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B132B]">
      <NavBar />

      {/* Hero Section - Fixed Viewport Fitting */}
      <section className="relative h-screen min-h-[550px] max-h-[1080px] w-full flex items-center overflow-hidden pt-16 lg:pt-20">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={HERO_IMAGES[currentImageIndex]}
            alt="Mission appeal backdrop"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/35 z-0" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col justify-center h-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-xl lg:max-w-2xl my-auto"
          >
            <motion.span
              variants={fadeUp}
              className="material-symbols-outlined text-[#0077ec] text-3xl sm:text-4xl mb-2 block"
            >
              diversity_3
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-['Cinzel'] text-2xl sm:text-4xl lg:text-5xl font-bold tracking-wide leading-tight text-white mb-3"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
            >
              Help Bring a Priest <br className="hidden sm:inline" /> to the
              Altar
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-['Cormorant_Garamond'] text-lg sm:text-xl lg:text-2xl text-slate-200 max-w-xl italic mb-6 leading-snug"
            >
              Sponsor a Seminarian's Training & Build Vital Missions for
              Indigent Children
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <motion.a
                href="#remittance-details"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#0077ec] hover:bg-blue-600 text-white font-semibold px-5 py-3 rounded-full shadow-lg transition duration-300 flex items-center gap-2 text-xs sm:text-sm"
              >
                <span className="material-symbols-outlined text-lg">
                  account_balance
                </span>{" "}
                Direct Wire Info
              </motion.a>
              <motion.a
                href="#sponsorship-options"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white/10 hover:bg-white hover:text-[#0B132B] backdrop-blur-md border border-white/40 text-white font-semibold px-5 py-3 rounded-full transition duration-300 flex items-center gap-2 text-xs sm:text-sm"
              >
                <span className="material-symbols-outlined text-lg">
                  volunteer_activism
                </span>{" "}
                Sponsorship Tracks
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="bg-gradient-to-b from-[#0B132B] via-[#11224d] to-[#0B132B] flex-grow">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          {/* Inspirational Quote */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 sm:p-10 text-center border border-white/10 shadow-2xl mb-16 relative overflow-hidden"
          >
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#0077ec]/20 rounded-full blur-3xl pointer-events-none" />
            <span className="material-symbols-outlined text-[#0077ec] text-4xl mb-3 block">
              format_quote
            </span>
            <p className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl text-white italic leading-relaxed max-w-3xl mx-auto">
              "It is through the act of giving that we discover the true purpose
              of our lives."
            </p>
          </motion.div>

          {/* Featured Hero Media Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="mb-16 overflow-hidden rounded-2xl border border-white/15 shadow-2xl relative max-h-[420px]"
          >
            <img
              src={wp9}
              alt="SMMM Mission Community"
              className="w-full h-full object-cover object-center max-h-[420px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs uppercase tracking-widest text-[#0077ec] font-bold bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                Apostolic Impact
              </span>
            </div>
          </motion.div>

          {/* Mission Appeal Card (Split Image & Text) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="mb-16 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
              <div className="md:col-span-5 relative min-h-[280px] md:min-h-full">
                <img
                  src={wp8}
                  alt="SMMM Priestly Formation"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/80 via-transparent to-transparent md:hidden" />
              </div>

              <div className="md:col-span-7 p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-[#0077ec] text-2xl">
                    volunteer_activism
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0077ec] bg-[#0077ec]/10 px-3 py-1 rounded-full border border-[#0077ec]/20">
                    Our Mission Appeal
                  </span>
                </div>

                <p className="font-serif text-slate-200 text-base sm:text-lg leading-relaxed mb-4">
                  Missionary work relies on both field service and financial
                  contributions. Within the Sons of Mary Mother of Mercy (SMMM),
                  your donations are essential for advancing our mission
                  worldwide.
                </p>
                <p className="font-serif text-slate-300 text-base sm:text-lg leading-relaxed">
                  We invite you to participate in the formation of our future
                  clergy. At this time, the SMMM family is blessed with many
                  dedicated candidates pursuing vocations in both religious life
                  and ministerial priesthood.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sponsorship Tiers */}
          <motion.section
            id="sponsorship-options"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="mb-16 scroll-mt-10"
          >
            <div className="text-center mb-10">
              <h2 className="font-['Cinzel'] text-2xl md:text-3xl font-bold tracking-wide text-white mb-2">
                Select Your Support Commitment
              </h2>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Review our primary sponsorship tracks mapped directly from our
                regional donor programs.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Track 1 */}
              <motion.div
                variants={fadeUp}
                whileHover={cardHover}
                className="border border-slate-200/20 rounded-2xl p-6 sm:p-8 bg-white/95 backdrop-blur-sm flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-[#0077ec] text-2xl">
                      workspace_premium
                    </span>
                    <h4 className="font-['Cinzel'] font-bold text-base tracking-wide text-[#0B132B]">
                      Track 1: Priestly Formation
                    </h4>
                  </div>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    I wish to support the rigorous academic, spiritual, and
                    communal training of an upcoming priest with a gift of:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2">
                    {["$500", "$300", "$200", "Other"].map((amount) => (
                      <motion.div
                        key={amount}
                        whileHover={{ scale: 1.04, borderColor: "#0077ec" }}
                        whileTap={{ scale: 0.96 }}
                        className="border border-slate-300 rounded-lg py-2.5 text-center cursor-pointer bg-slate-50 font-mono text-sm font-bold text-[#0B132B] transition hover:border-[#0077ec] hover:bg-blue-50"
                      >
                        {amount}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Track 2 */}
              <motion.div
                variants={fadeUp}
                whileHover={cardHover}
                className="border border-slate-200/20 rounded-2xl p-6 sm:p-8 bg-white/95 backdrop-blur-sm flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-[#0077ec] text-2xl">
                      local_library
                    </span>
                    <h4 className="font-['Cinzel'] font-bold text-base tracking-wide text-[#0B132B]">
                      Track 2: Educational Missions
                    </h4>
                  </div>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    I wish to contribute to our educational missions and child
                    support programs in the amount of:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2">
                    {["$500", "$250", "$150", "Other"].map((amount) => (
                      <motion.div
                        key={amount}
                        whileHover={{ scale: 1.04, borderColor: "#0077ec" }}
                        whileTap={{ scale: 0.96 }}
                        className="border border-slate-300 rounded-lg py-2.5 text-center cursor-pointer bg-slate-50 font-mono text-sm font-bold text-[#0B132B] transition hover:border-[#0077ec] hover:bg-blue-50"
                      >
                        {amount}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Featured Annual Track */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 border-2 border-dashed border-[#0077ec]/50 bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-center"
            >
              <span className="inline-block bg-[#0077ec] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full mb-3">
                Featured Program
              </span>
              <h4 className="font-['Cinzel'] font-bold text-lg text-white mb-2">
                Full Annual Sponsorship Track
              </h4>
              <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Complete individual sponsorship options are cataloged at{" "}
                <strong className="text-white">$500 US annually</strong>. Please
                mention this track preference when completing your wire or
                physical check delivery.
              </p>
            </motion.div>
          </motion.section>

          {/* Remittance Details */}
          <motion.section
            id="remittance-details"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden scroll-mt-10"
          >
            <div className="p-8 sm:p-10 border-b border-slate-100 text-center bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h2 className="font-['Cinzel'] text-2xl font-bold tracking-wide text-[#0B132B] mb-2">
                  Direct Financial Remittance Details
                </h2>
                <p className="text-slate-500 text-sm max-w-lg">
                  Please utilize our verified banking or regional house routing
                  credentials below.
                </p>
              </div>
              <motion.button
                onClick={copyAllAccountDetails}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 bg-[#0B132B] hover:bg-[#0077ec] text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow transition duration-200 flex-shrink-0"
              >
                <span className="material-symbols-outlined text-sm">
                  {copyAllSuccess ? "check" : "content_copy"}
                </span>
                <span>{copyAllSuccess ? "Copied All Details!" : "Copy All Details"}</span>
              </motion.button>
            </div>

            <div className="p-8 sm:p-10 space-y-10">
              {/* Wire Transfer Details */}
              <div className="space-y-4">
                <h3 className="font-['Cinzel'] font-bold text-sm tracking-widest text-[#0B132B] uppercase flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#0077ec]">
                    account_balance
                  </span>{" "}
                  Bank Wire & Transfer Details
                </h3>

                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-slate-200">
                    <div className="p-4 text-xs font-bold font-['Cinzel'] text-slate-500 uppercase tracking-wider bg-slate-50">
                      Bank Name
                    </div>
                    <div className="p-4 sm:col-span-2 text-sm font-semibold text-[#0B132B]">
                      JPMorgan Chase Trust Bank
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-slate-200">
                    <div className="p-4 text-xs font-bold font-['Cinzel'] text-slate-500 uppercase tracking-wider bg-slate-50">
                      Account Name
                    </div>
                    <div className="p-4 sm:col-span-2 text-sm font-semibold text-[#0B132B]">
                      Sons of Mary Mother of Mercy, SMMM
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-slate-200">
                    <div className="p-4 text-xs font-bold font-['Cinzel'] text-slate-500 uppercase tracking-wider bg-slate-50">
                      Account Number
                    </div>
                    <div className="p-4 sm:col-span-2 text-sm font-mono font-bold text-[#0077ec] flex items-center justify-between">
                      <span>322336006</span>
                      <div className="flex items-center gap-2">
                        <motion.button
                          onClick={copyAccountNumber}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="relative flex items-center gap-1 text-[11px] font-sans font-medium text-[#0077ec] bg-blue-50 hover:bg-[#0077ec] hover:text-white px-3 py-1 border border-[#0077ec]/30 rounded transition duration-200"
                        >
                          <span className="material-symbols-outlined text-xs">
                            {copySuccess ? "check" : "content_copy"}
                          </span>
                          <span>{copySuccess ? "Copied" : "Copy"}</span>
                        </motion.button>
                        <span className="text-[10px] uppercase font-sans font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded border border-slate-200">
                          Checking
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3">
                    <div className="p-4 text-xs font-bold font-['Cinzel'] text-slate-500 uppercase tracking-wider bg-slate-50">
                      Routing Transit
                    </div>
                    <div className="p-4 sm:col-span-2 text-sm font-mono font-semibold text-[#0B132B] flex items-center justify-between">
                      <span>322271627</span>
                      <motion.button
                        onClick={copyRoutingNumber}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative flex items-center gap-1 text-[11px] font-sans font-medium text-[#0077ec] bg-blue-50 hover:bg-[#0077ec] hover:text-white px-3 py-1 border border-[#0077ec]/30 rounded transition duration-200"
                      >
                        <span className="material-symbols-outlined text-xs">
                          {copyRoutingSuccess ? "check" : "content_copy"}
                        </span>
                        <span>{copyRoutingSuccess ? "Copied" : "Copy"}</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[1px] bg-slate-200" />

              {/* Physical Check Option */}
              <div className="space-y-4">
                <h3 className="font-['Cinzel'] font-bold text-sm tracking-widest text-[#0B132B] uppercase flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#0077ec]">
                    mail
                  </span>{" "}
                  Remittance By Check
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  If making your contribution via physical check or draft order,
                  please make all payments payable to{" "}
                  <strong className="text-[#0B132B]">"SMMM USA Region"</strong>{" "}
                  and route them directly to our regional office:
                </p>
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#0077ec] text-3xl mt-0.5">
                    corporate_fare
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B132B] mb-1">
                      SMMM Regional House
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      1100 W. Hawaii Avenue,
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Nampa, Idaho, 83686
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="text-center space-y-3 py-4 border-t border-b border-slate-100 bg-blue-50/50 rounded-xl px-4">
                <p className="text-xs sm:text-sm text-slate-600 font-medium flex items-center justify-center gap-1.5 max-w-md mx-auto">
                  <span className="material-symbols-outlined text-base text-emerald-600 flex-shrink-0">
                    verified
                  </span>
                  <span>
                    You will receive an official tax receipt reflecting the
                    total value of your annual contributions.
                  </span>
                </p>
                <p className="font-['Cormorant_Garamond'] text-base sm:text-lg text-[#004B87] italic font-medium">
                  "Please know that we hold you in our prayers as you provide
                  this vital financial aid for our mission!"
                </p>
              </div>
            </div>
          </motion.section>
        </main>
      </div>

      <footer className="w-full text-center py-8 text-xs text-slate-400 border-t border-white/10 bg-[#070D1E]">
        <p>
          &copy; {new Date().getFullYear()} Sons of Mary Mother of Mercy (SMMM).
          All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Donations;