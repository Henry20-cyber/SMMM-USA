// import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '../components/Navbar';

// Layout animation configurations
const fadeInContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] },
  },
};

export default function Donations() {
  return (
    <div className="bg-[#faf9f6] text-[#0a192f] antialiased font-sans min-h-screen flex flex-col justify-between">
      {/* Dynamic Font Styling Injector */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0');
        
        .font-cinzel { font-family: 'Cinzel', serif; }
        .font-garamond { font-family: 'Cormorant Garamond', serif; }
        
        .material-symbols-outlined {
          display: inline-block;
          vertical-align: middle;
        }
      `}} />
      
      <NavBar />
      
      <motion.main 
        initial="hidden"
        animate="visible"
        variants={fadeInContainer}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full flex-grow"
      >

        {/* Header Section */}
        <motion.header variants={fadeInUpVariant} className="text-center mb-16">
          <span className="text-[10px] tracking-[0.3em] font-cinzel font-bold text-[#c9a84c] uppercase mb-3 block">
            Sons of Mary Mother of Mercy &middot; American Region
          </span>
          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#003366] tracking-wide leading-tight">
            Help Bring a Priest to the Altar
          </h1>
          <p className="font-cinzel text-xs sm:text-sm text-[#6C757D] tracking-widest uppercase mt-2 font-medium">
            Direct Financial Remittance &amp; Support Options
          </p>
          <div className="w-16 h-[2px] bg-[#c9a84c] mx-auto mt-6"></div>
        </motion.header>

        {/* Quote Block */}
        <motion.div 
          variants={fadeInUpVariant} 
          className="bg-[#0a192f] rounded-2xl p-8 md:p-10 text-center relative overflow-hidden mb-12 shadow-xl border border-[rgba(201,168,76,0.15)]"
        >
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#c9a84c_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
          <span className="material-symbols-outlined text-[#c9a84c] text-3xl mb-4 block">format_quote</span>
          <p className="font-garamond text-xl sm:text-2xl text-slate-100 italic leading-relaxed max-w-2xl mx-auto">
            "It is through the act of giving that we discover the true purpose and care of our lives."
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: School Apostolate */}
          <motion.div 
            variants={fadeInUpVariant}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-white p-8 border border-[rgba(201,168,76,0.15)] rounded-xl shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 text-[#003366] mb-4">
                <span className="material-symbols-outlined text-2xl text-[#c9a84c]">school</span>
                <h3 className="font-cinzel font-bold text-sm tracking-widest uppercase">The School Apostolate</h3>
              </div>
              <p className="font-serif text-[15px] sm:text-base text-slate-600 leading-relaxed mb-4">
                The school apostolate is another core focus, allowing us to care for indigent children. Missionary work relies on both field service and financial contributions. Within the Sons of Mary Mother of Mercy (SMMM), your donations are essential for advancing our mission.
              </p>
              <p className="font-serif text-[15px] sm:text-base text-slate-600 leading-relaxed">
                We invite you to participate in the formation of our future clergy. At this time, the SMMM family is blessed with many dedicated candidates pursuing vocations in both religious life and ministerial priesthood.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Core Targets */}
          <motion.div 
            variants={fadeInUpVariant}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-white p-8 border border-[rgba(201,168,76,0.15)] rounded-xl shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 text-[#003366] mb-4">
                <span className="material-symbols-outlined text-2xl text-[#c9a84c]">assignment_turned_in</span>
                <h3 className="font-cinzel font-bold text-sm tracking-widest uppercase">Our Core Targets</h3>
              </div>
              <ul className="space-y-4 font-medium text-slate-700 text-sm sm:text-base">
                {[
                  "Constructing mission schools",
                  "Providing educational scholarships",
                  "Digitalizing classroom facilities",
                  "Supporting personnel in difficult mission regions",
                  "Teacher professional development"
                ].map((target, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#B22222] text-xs mt-1.5">fiber_manual_record</span>
                    <span>{target}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Remittance Block */}
        <motion.section 
          variants={fadeInUpVariant}
          className="bg-white border border-[rgba(201,168,76,0.15)] rounded-2xl shadow-md overflow-hidden"
        >
          <div className="p-8 md:p-12 border-b border-slate-100 text-center">
            <h2 className="font-cinzel text-xl md:text-2xl font-bold tracking-wide text-[#003366] mb-2">Support Remittance Details</h2>
            <p className="text-slate-500 text-xs sm:text-sm font-medium max-w-md mx-auto">You can make your direct financial contributions using the verified banking information or physical address parameters listed below.</p>
          </div>

          <div className="p-8 md:p-12 space-y-10">

            {/* Bank Transfer Details */}
            <div className="space-y-4">
              <h3 className="font-cinzel font-bold text-sm tracking-widest text-[#003366] uppercase flex items-center gap-2">
                <span className="material-symbols-outlined text-[#c9a84c]">account_balance</span> Bank Wire &amp; Transfer Details
              </h3>

              <div className="bg-[#F9F7F2]/50 border border-[rgba(201,168,76,0.15)]/40 rounded-xl overflow-hidden shadow-inner">
                <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-slate-200/60">
                  <div className="p-4 text-xs font-bold font-cinzel text-[#6C757D] uppercase tracking-wider bg-[#F9F7F2]/80 border-b sm:border-b-0 sm:border-r border-slate-200/60">Bank Name</div>
                  <div className="p-4 sm:col-span-2 text-sm font-semibold text-[#0a192f]">JPMorgan Chase Bank</div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-slate-200/60">
                  <div className="p-4 text-xs font-bold font-cinzel text-[#6C757D] uppercase tracking-wider bg-[#F9F7F2]/80 border-b sm:border-b-0 sm:border-r border-slate-200/60">Account Name</div>
                  <div className="p-4 sm:col-span-2 text-sm font-semibold text-[#0a192f]">Sons of Mary Mother of Mercy, SMMM</div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-slate-200/60">
                  <div className="p-4 text-xs font-bold font-cinzel text-[#6C757D] uppercase tracking-wider bg-[#F9F7F2]/80 border-b sm:border-b-0 sm:border-r border-slate-200/60">Account Number</div>
                  <div className="p-4 sm:col-span-2 text-sm font-mono font-bold text-[#003366] tracking-wide flex items-center justify-between">
                    <span>322271627</span>
                    <span className="text-[10px] uppercase font-sans font-medium text-[#6C757D] bg-white px-2 py-0.5 border border-slate-200 rounded">Checking</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3">
                  <div className="p-4 text-xs font-bold font-cinzel text-[#6C757D] uppercase tracking-wider bg-[#F9F7F2]/80 border-b sm:border-b-0 sm:border-r border-slate-200/60">Routing Transit</div>
                  <div className="p-4 sm:col-span-2 text-sm font-mono font-semibold text-[#0a192f]">003654</div>
                </div>
              </div>
            </div>

            <div className="h-[1px] bg-slate-100"></div>

            {/* Check Mailing Details */}
            <div className="space-y-4">
              <h3 className="font-cinzel font-bold text-sm tracking-widest text-[#003366] uppercase flex items-center gap-2">
                <span className="material-symbols-outlined text-[#c9a84c]">mail</span> Remittance By Check
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If making your contribution via physical check or draft order, please make all payments payable to <strong className="text-[#0a192f]">"SMMM American Region"</strong> and route them directly to our regional office:
              </p>

              <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-start gap-4 shadow-sm">
                <span className="material-symbols-outlined text-[#B22222] text-2xl mt-0.5">corporate_fare</span>
                <div>
                  <h4 className="text-sm font-bold text-[#0a192f] mb-0.5">SMMM Regional House Office</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">1550 N. Fresno Street,</p>
                  <p className="text-sm text-slate-600 leading-relaxed">Fresno, CA 93703</p>
                </div>
              </div>
            </div>

            {/* Verification & Footnote Note */}
            <div className="text-center space-y-3 py-2 border-t border-b border-slate-100">
              <p className="text-xs text-[#6C757D] font-medium flex items-center justify-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-emerald-600">verified</span>
                An official tax receipt for the total value of your annual donations will be dispatched to your address.
              </p>
              <p className="font-garamond text-base sm:text-lg text-[#003366] italic font-medium leading-relaxed">
                "We remain deeply grateful for your vital financial assistance and keep you in our prayers as you support this mission!"
              </p>
            </div>

          </div>
        </motion.section>

      </motion.main>

      {/* Footer */}
      <footer className="w-full text-center py-8 text-xs text-[#6C757D] border-t border-[rgba(201,168,76,0.15)] bg-white">
        <p>&copy; 2026 Sons of Mary Mother of Mercy (SMMM). All rights reserved.</p>
      </footer>
    </div>
  );
}