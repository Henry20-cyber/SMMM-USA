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
  // Green, white, black palette
  const theme = {
    greenPrimary: '#166534',
    greenLight: '#4ade80',
    greenDeep: '#064e3b',
    white: '#ffffff',
    black: '#111111',
    offWhite: '#fafaf5',
    textDark: '#1a1a1a',
    textMuted: '#4b5563',
    textLight: '#6c757d',
    borderLight: 'rgba(22, 101, 52, 0.12)'
  };

  return (
    <div className="min-h-screen flex flex-col justify-between antialiased" style={{ backgroundColor: theme.offWhite, color: theme.textDark }}>
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

          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide leading-tight" style={{ color: theme.black }}>
            Help Bring a Priest to the Altar
          </h1>
          <p className="font-cinzel text-xs sm:text-sm tracking-widest uppercase mt-2 font-medium" style={{ color: theme.textMuted }}>
            Direct Financial Remittance &amp; Support Options
          </p>
          <div className="w-16 h-[2px] mx-auto mt-6" style={{ backgroundColor: theme.greenLight }}></div>
        </motion.header>

        {/* Quote Block */}
        <motion.div 
          variants={fadeInUpVariant} 
          className="rounded-2xl p-8 md:p-10 text-center relative overflow-hidden mb-12 shadow-xl"
          style={{ backgroundColor: theme.greenDeep, border: `1px solid ${theme.borderLight}` }}
        >
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#4ade80_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
          <span className="material-symbols-outlined text-3xl mb-4 block" style={{ color: theme.greenLight }}>format_quote</span>
          <p className="font-garamond text-xl sm:text-2xl text-white italic leading-relaxed max-w-2xl mx-auto">
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
            className="bg-white p-8 rounded-xl shadow-sm flex flex-col justify-between"
            style={{ border: `1px solid ${theme.borderLight}` }}
          >
            <div>
              <div className="flex items-center gap-3 mb-4" style={{ color: theme.black }}>
                <span className="material-symbols-outlined text-2xl" style={{ color: theme.greenLight }}>school</span>
                <h3 className="font-cinzel font-bold text-sm tracking-widest uppercase">The School Apostolate</h3>
              </div>
              <p className="font-serif text-[15px] sm:text-base leading-relaxed mb-4" style={{ color: theme.textMuted }}>
                The school apostolate is another core focus, allowing us to care for indigent children. Missionary work relies on both field service and financial contributions. Within the Sons of Mary Mother of Mercy (SMMM), your donations are essential for advancing our mission.
              </p>
              <p className="font-serif text-[15px] sm:text-base leading-relaxed" style={{ color: theme.textMuted }}>
                We invite you to participate in the formation of our future clergy. At this time, the SMMM family is blessed with many dedicated candidates pursuing vocations in both religious life and ministerial priesthood.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Core Targets */}
          <motion.div 
            variants={fadeInUpVariant}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-sm flex flex-col justify-between"
            style={{ border: `1px solid ${theme.borderLight}` }}
          >
            <div>
              <div className="flex items-center gap-3 mb-4" style={{ color: theme.black }}>
                <span className="material-symbols-outlined text-2xl" style={{ color: theme.greenLight }}>assignment_turned_in</span>
                <h3 className="font-cinzel font-bold text-sm tracking-widest uppercase">Our Core Targets</h3>
              </div>
              <ul className="space-y-4 font-medium text-sm sm:text-base" style={{ color: theme.textDark }}>
                {[
                  "Constructing mission schools",
                  "Providing educational scholarships",
                  "Digitalizing classroom facilities",
                  "Supporting personnel in difficult mission regions",
                  "Teacher professional development"
                ].map((target, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-xs mt-1.5" style={{ color: theme.greenPrimary }}>fiber_manual_record</span>
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
          className="bg-white rounded-2xl shadow-md overflow-hidden"
          style={{ border: `1px solid ${theme.borderLight}` }}
        >
          <div className="p-8 md:p-12 border-b text-center" style={{ borderColor: theme.borderLight }}>
            <h2 className="font-cinzel text-xl md:text-2xl font-bold tracking-wide mb-2" style={{ color: theme.black }}>Support Remittance Details</h2>
            <p className="text-xs sm:text-sm font-medium max-w-md mx-auto" style={{ color: theme.textMuted }}>You can make your direct financial contributions using the verified banking information or physical address parameters listed below.</p>
          </div>

          <div className="p-8 md:p-12 space-y-10">

            {/* Bank Transfer Details */}
            <div className="space-y-4">
              <h3 className="font-cinzel font-bold text-sm tracking-widest uppercase flex items-center gap-2" style={{ color: theme.black }}>
                <span className="material-symbols-outlined" style={{ color: theme.greenLight }}>account_balance</span> Bank Wire &amp; Transfer Details
              </h3>

              <div className="rounded-xl overflow-hidden shadow-inner" style={{ backgroundColor: theme.offWhite, border: `1px solid ${theme.borderLight}` }}>
                <div className="grid grid-cols-1 sm:grid-cols-3" style={{ borderBottom: `1px solid ${theme.borderLight}` }}>
                  <div className="p-4 text-xs font-bold font-cinzel uppercase tracking-wider" style={{ color: theme.textMuted, backgroundColor: `${theme.borderLight}20`, borderRight: `1px solid ${theme.borderLight}` }}>Bank Name</div>
                  <div className="p-4 sm:col-span-2 text-sm font-semibold" style={{ color: theme.black }}>JPMorgan Chase Bank</div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3" style={{ borderBottom: `1px solid ${theme.borderLight}` }}>
                  <div className="p-4 text-xs font-bold font-cinzel uppercase tracking-wider" style={{ color: theme.textMuted, backgroundColor: `${theme.borderLight}20`, borderRight: `1px solid ${theme.borderLight}` }}>Account Name</div>
                  <div className="p-4 sm:col-span-2 text-sm font-semibold" style={{ color: theme.black }}>Sons of Mary Mother of Mercy, SMMM</div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3" style={{ borderBottom: `1px solid ${theme.borderLight}` }}>
                  <div className="p-4 text-xs font-bold font-cinzel uppercase tracking-wider" style={{ color: theme.textMuted, backgroundColor: `${theme.borderLight}20`, borderRight: `1px solid ${theme.borderLight}` }}>Account Number</div>
                  <div className="p-4 sm:col-span-2 text-sm font-mono font-bold tracking-wide flex items-center justify-between" style={{ color: theme.greenPrimary }}>
                    <span>322271627</span>
                    <span className="text-[10px] uppercase font-sans font-medium px-2 py-0.5 border rounded" style={{ color: theme.textMuted, backgroundColor: theme.white, borderColor: theme.borderLight }}>Checking</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3">
                  <div className="p-4 text-xs font-bold font-cinzel uppercase tracking-wider" style={{ color: theme.textMuted, backgroundColor: `${theme.borderLight}20`, borderRight: `1px solid ${theme.borderLight}` }}>Routing Transit</div>
                  <div className="p-4 sm:col-span-2 text-sm font-mono font-semibold" style={{ color: theme.black }}>003654</div>
                </div>
              </div>
            </div>

            <div className="h-[1px]" style={{ backgroundColor: theme.borderLight }}></div>

            {/* Check Mailing Details */}
            <div className="space-y-4">
              <h3 className="font-cinzel font-bold text-sm tracking-widest uppercase flex items-center gap-2" style={{ color: theme.black }}>
                <span className="material-symbols-outlined" style={{ color: theme.greenLight }}>mail</span> Remittance By Check
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: theme.textMuted }}>
                If making your contribution via physical check or draft order, please make all payments payable to <strong className="font-semibold" style={{ color: theme.black }}>"SMMM American Region"</strong> and route them directly to our regional office:
              </p>

              <div className="bg-white p-5 rounded-xl flex items-start gap-4 shadow-sm" style={{ border: `1px solid ${theme.borderLight}` }}>
                <span className="material-symbols-outlined text-2xl mt-0.5" style={{ color: theme.greenPrimary }}>corporate_fare</span>
                <div>
                  <h4 className="text-sm font-bold mb-0.5" style={{ color: theme.black }}>SMMM Regional House Office</h4>
                  <p className="text-sm leading-relaxed" style={{ color: theme.textMuted }}>1550 N. Fresno Street,</p>
                  <p className="text-sm leading-relaxed" style={{ color: theme.textMuted }}>Fresno, CA 93703</p>
                </div>
              </div>
            </div>

            {/* Verification & Footnote Note */}
            <div className="text-center space-y-3 py-2 border-t border-b" style={{ borderColor: theme.borderLight }}>
              <p className="text-xs font-medium flex items-center justify-center gap-1.5" style={{ color: theme.textMuted }}>
                <span className="material-symbols-outlined text-sm" style={{ color: theme.greenPrimary }}>verified</span>
                An official tax receipt for the total value of your annual donations will be dispatched to your address.
              </p>
              <p className="font-garamond text-base sm:text-lg italic font-medium leading-relaxed" style={{ color: theme.greenPrimary }}>
                "We remain deeply grateful for your vital financial assistance and keep you in our prayers as you support this mission!"
              </p>
            </div>

          </div>
        </motion.section>

      </motion.main>

      {/* Footer */}
      <footer className="w-full text-center py-8 text-xs border-t" style={{ color: theme.textMuted, borderColor: theme.borderLight, backgroundColor: theme.white }}>
        <p>&copy; {new Date().getFullYear()} Sons of Mary Mother of Mercy (SMMM). All rights reserved.</p>
      </footer>
    </div>
  );
}