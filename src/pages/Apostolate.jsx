import { motion } from 'framer-motion';
import NavBar from '../components/Navbar';

const Apostolate = () => {
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
    borderLight: 'rgba(22, 101, 52, 0.12)',
    bgGreenSoft: 'rgba(22, 101, 52, 0.06)'
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  const ministries = [
    {
      title: "Administration of Sacraments",
      description: "Our ordained brothers bear the special duty of preaching and celebrating the sacraments — especially the Holy Eucharist — in communion with bishops and the whole priestly body.",
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
          <circle cx="16" cy="16" r="10" stroke={theme.greenLight} strokeWidth="1.5" fill="none"/>
          <line x1="16" y1="8" x2="16" y2="24" stroke={theme.greenLight} strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="10" y1="14" x2="22" y2="14" stroke={theme.greenLight} strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Care for the Poor & Needy",
      description: "Caring for the poor and needy is the fulcrum of our missionary apostolate — bringing us face-to-face with those whose voices are rarely heard or acknowledged.",
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
          <path d="M16 28 C10 22, 4 17, 4 11.5 C4 8 6.7 5 10 5 C12.3 5 14.4 6.3 16 8.1 C17.6 6.3 19.7 5 22 5 C25.3 5 28 8 28 11.5 C28 17 22 22 16 28Z" stroke={theme.greenLight} strokeWidth="1.5" fill="none"/>
        </svg>
      )
    },
    {
      title: "Teaching Apostolate",
      description: "We educate the people of God, fostering the development of the human person, discovering gifts and nurturing talents according to the mind of the Creator.",
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
          <rect x="5" y="6" width="22" height="20" rx="2" stroke={theme.greenLight} strokeWidth="1.5" fill="none"/>
          <line x1="9" y1="12" x2="23" y2="12" stroke={theme.greenLight} strokeWidth="1.2"/>
          <line x1="9" y1="16" x2="23" y2="16" stroke={theme.greenLight} strokeWidth="1.2"/>
          <line x1="9" y1="20" x2="17" y2="20" stroke={theme.greenLight} strokeWidth="1.2"/>
          <path d="M10 6 L10 3 L22 3 L22 6" stroke={theme.greenLight} strokeWidth="1.2" fill="none"/>
        </svg>
      )
    },
    {
      title: "Chaplaincy Services",
      description: "As chaplains in hospitals, veteran centers, and prisons, we bring God's healing presence — love, hope, and comfort — honoring the dignity of all, regardless of faith.",
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
          <path d="M16 4 L16 28" stroke={theme.greenLight} strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M8 12 C8 8 12 5 16 8 C20 5 24 8 24 12 C24 18 16 24 16 24" stroke={theme.greenLight} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <circle cx="16" cy="4" r="2" stroke={theme.greenLight} strokeWidth="1.2" fill="none"/>
        </svg>
      )
    }
  ];

  return (
    <section id="apostolate" className="pt-28 overflow-hidden" style={{ backgroundColor: theme.offWhite }}>
      <NavBar />
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
        >
          <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: theme.greenPrimary }}>Ministry</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-wide mb-6" style={{ fontFamily: "'Cinzel', serif", color: theme.black }}>Our Apostolate</h2>
          <div className="mx-auto mb-6 h-[1px] w-16" style={{ backgroundColor: theme.greenLight }}></div>
          <p 
            style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontSize: "1.15rem", 
              color: theme.textMuted, 
              maxWidth: "620px", 
              margin: "0 auto", 
              fontStyle: "italic",
              lineHeight: "1.6"
            }}
          >
            "The Spirit of the Lord has been given to me… He has sent me to bring the good news to the poor." — Is. 61:1
          </p>
        </motion.div>

        {/* Ministry Grid – responsive 2 columns, stack on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {ministries.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariants}
              className="bg-white p-6 sm:p-8 rounded-xl transition-all duration-300 flex flex-col items-start hover:shadow-md"
              style={{ 
                borderLeft: `3px solid ${theme.greenLight}`,
                borderTop: `1px solid ${theme.borderLight}`,
                borderRight: `1px solid ${theme.borderLight}`,
                borderBottom: `1px solid ${theme.borderLight}`,
                boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
              }}
            >
              {/* Icon Container */}
              <div 
                className="p-3.5 mb-5 inline-flex items-center justify-center rounded-full"
                style={{ backgroundColor: theme.bgGreenSoft }}
              >
                {item.icon}
              </div>

              <h3 
                className="text-[1.15rem] font-semibold tracking-wide mb-3" 
                style={{ fontFamily: "'Cinzel', serif", color: theme.black }}
              >
                {item.title}
              </h3>

              <p style={{ color: theme.textMuted, fontSize: "0.97rem", lineHeight: "1.7" }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Footer */}
      <footer className="w-full text-center py-20 text-xs border-t" style={{ color: theme.textMuted, borderColor: theme.borderLight, backgroundColor: theme.white }}>
        <p>&copy; {new Date().getFullYear()} Sons of Mary Mother of Mercy (SMMM). All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Apostolate;