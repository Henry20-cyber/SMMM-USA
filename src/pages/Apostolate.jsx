import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from '../components/Navbar';
import wp7 from '../assets/wallpapers/wp(7).jpg';
import wp8 from '../assets/wallpapers/wp(8).jpg';
import wp5 from '../assets/wallpapers/wp(5).jpg';
import wp6 from '../assets/priests/image(13).jpg';
import wp2 from '../assets/priests/image(21).jpg';
import wp3 from '../assets/priests/image(24).jpg';

// Hero images
const HERO_IMAGES = [wp6, wp3, wp2, wp7, wp8, wp5];

const Apostolate = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // 🎨 Blue gradient theme – same as Mission Areas & Charism
  const theme = {
    gradientMain: 'linear-gradient(135deg, #0a2a4a 0%, #134b8a 40%, #1e6bb5 80%, #3b8fd9 100%)',
    radialOverlay: 'radial-gradient(circle at 0% 20%, rgba(96, 165, 250, 0.15) 0%, transparent 60%)',
    textMain: '#ffffff',
    textBody: '#f1f5f9',
    textMuted: '#cbd5e1',
    accentBlueLight: '#93c5fd',
    accentBluePrimary: '#3b82f6',
    cardBg: 'rgba(255, 255, 255, 0.05)',
    borderLight: 'rgba(147, 197, 253, 0.25)',
    bgBlueSoft: 'rgba(59, 130, 246, 0.15)',
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const ministries = [
    {
      title: "Administration of Sacraments",
      description: "Our ordained brothers bear the special duty of preaching and celebrating the sacraments — especially the Holy Eucharist — in communion with bishops and the whole priestly body.",
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
          <circle cx="16" cy="16" r="10" stroke={theme.accentBlueLight} strokeWidth="1.5" fill="none"/>
          <line x1="16" y1="8" x2="16" y2="24" stroke={theme.accentBlueLight} strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="10" y1="14" x2="22" y2="14" stroke={theme.accentBlueLight} strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Care for the Poor & Needy",
      description: "Caring for the poor and needy is the fulcrum of our missionary apostolate — bringing us face-to-face with those whose voices are rarely heard or acknowledged.",
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
          <path d="M16 28 C10 22, 4 17, 4 11.5 C4 8 6.7 5 10 5 C12.3 5 14.4 6.3 16 8.1 C17.6 6.3 19.7 5 22 5 C25.3 5 28 8 28 11.5 C28 17 22 22 16 28Z" stroke={theme.accentBlueLight} strokeWidth="1.5" fill="none"/>
        </svg>
      )
    },
    {
      title: "Teaching Apostolate",
      description: "We educate the people of God, fostering the development of the human person, discovering gifts and nurturing talents according to the mind of the Creator.",
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
          <rect x="5" y="6" width="22" height="20" rx="2" stroke={theme.accentBlueLight} strokeWidth="1.5" fill="none"/>
          <line x1="9" y1="12" x2="23" y2="12" stroke={theme.accentBlueLight} strokeWidth="1.2"/>
          <line x1="9" y1="16" x2="23" y2="16" stroke={theme.accentBlueLight} strokeWidth="1.2"/>
          <line x1="9" y1="20" x2="17" y2="20" stroke={theme.accentBlueLight} strokeWidth="1.2"/>
          <path d="M10 6 L10 3 L22 3 L22 6" stroke={theme.accentBlueLight} strokeWidth="1.2" fill="none"/>
        </svg>
      )
    },
    {
      title: "Chaplaincy Services",
      description: "As chaplains in hospitals, veteran centers, and prisons, we bring God's healing presence — love, hope, and comfort — honoring the dignity of all, regardless of faith.",
      icon: (
        <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
          <path d="M16 4 L16 28" stroke={theme.accentBlueLight} strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M8 12 C8 8 12 5 16 8 C20 5 24 8 24 12 C24 18 16 24 16 24" stroke={theme.accentBlueLight} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <circle cx="16" cy="4" r="2" stroke={theme.accentBlueLight} strokeWidth="1.2" fill="none"/>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Main blue gradient background */}
      <div className="fixed inset-0 -z-20" style={{ background: theme.gradientMain }} />
      {/* Radial overlay for depth */}
      <div className="fixed inset-0 -z-10 pointer-events-none" style={{ background: theme.radialOverlay }} />

      <NavBar />

      {/* ========== HERO SECTION ========== */}
      <section className="relative h-dvh md:min-h-[600px] flex items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={HERO_IMAGES[currentImageIndex]}
            alt="Apostolate hero backdrop"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl lg:max-w-2xl"
          >
            <span
              className="text-[10px] tracking-[0.3em] font-['Cinzel'] font-bold uppercase mb-3 inline-block"
              style={{ color: theme.accentBlueLight }}
            >
              Our Mission in Action
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-4"
              style={{ fontFamily: "'Cinzel', serif", textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
            >
              The Apostolate of <br />
              <span style={{ color: theme.accentBlueLight }}>Mercy & Service</span>
            </h1>
            <div className="w-16 h-[2px] mb-6" style={{ backgroundColor: theme.accentBlueLight }} />
            <p className="text-white/90 text-lg leading-relaxed max-w-lg">
              Following Christ, the Merciful Savior, we dedicate our lives to serving the
              spiritually, intellectually, and physically poor — living out the Gospel through
              concrete works of mercy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========== MAIN CONTENT ========== */}
      <section id="apostolate" className="py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
          >
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: theme.accentBlueLight }}>
              Ministry
            </p>
            <h2
              className="text-4xl md:text-5xl font-semibold tracking-wide mb-6"
              style={{ fontFamily: "'Cinzel', serif", color: theme.textMain }}
            >
              Our Apostolate
            </h2>
            <div className="mx-auto mb-6 h-[1px] w-16" style={{ backgroundColor: theme.accentBlueLight }} />
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.15rem",
                color: theme.textBody,
                maxWidth: "620px",
                margin: "0 auto",
                fontStyle: "italic",
                lineHeight: "1.6"
              }}
            >
              "The Spirit of the Lord has been given to me… He has sent me to bring the good news to the poor." — Is. 61:1
            </p>
          </motion.div>

          {/* Ministry Grid – translucent cards with backdrop blur */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {ministries.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUpVariants}
                className="rounded-xl backdrop-blur-sm p-6 sm:p-8 transition-all duration-300 flex flex-col items-start hover:bg-opacity-15"
                style={{
                  backgroundColor: theme.cardBg,
                  borderLeft: `3px solid ${theme.accentBlueLight}`,
                  borderTop: `1px solid ${theme.borderLight}`,
                  borderRight: `1px solid ${theme.borderLight}`,
                  borderBottom: `1px solid ${theme.borderLight}`,
                }}
              >
                {/* Icon Container */}
                <div
                  className="p-3.5 mb-5 inline-flex items-center justify-center rounded-full"
                  style={{ backgroundColor: theme.bgBlueSoft }}
                >
                  {item.icon}
                </div>

                <h3
                  className="text-[1.15rem] font-semibold tracking-wide mb-3"
                  style={{ fontFamily: "'Cinzel', serif", color: theme.textMain }}
                >
                  {item.title}
                </h3>

                <p style={{ color: theme.textBody, fontSize: "0.97rem", lineHeight: "1.7" }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer – translucent to blend with gradient */}
      <footer
        className="w-full text-center py-8 text-xs border-t"
        style={{
          color: theme.textMuted,
          borderColor: theme.borderLight,
          backgroundColor: 'rgba(0,0,0,0.2)',
          backdropFilter: 'blur(4px)'
        }}
      >
        <p>&copy; {new Date().getFullYear()} Sons of Mary Mother of Mercy (SMMM). All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Apostolate;