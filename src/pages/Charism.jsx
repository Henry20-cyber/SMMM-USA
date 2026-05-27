import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from '../components/Navbar';
import bg from '../assets/bg.jpg';

const heroImages = [
  bg,
  '/images/hero-2.jpg',
  '/images/hero-3.jpg',
  '/images/hero-4.jpg',
  '/images/hero-5.jpg',
  '/images/hero-6.jpg',
  '/images/hero-7.jpg',
  '/images/hero-8.jpg',
];

const Charism = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Refined color palette (warm, elegant)
  const theme = {
    bgLight: '#F9F8F6',
    bgWhite: '#FFFFFF',
    bgSection: '#F2EFEA',
    textMain: '#1A2A3A',
    textBody: '#3E5A6C',
    textMuted: '#7A8B9E',
    accentGold: '#C8A165',
    accentGoldLight: 'rgba(200, 161, 101, 0.12)',
    accentGoldMid: 'rgba(200, 161, 101, 0.3)',
    borderLight: 'rgba(200, 161, 101, 0.15)',
    borderMid: 'rgba(200, 161, 101, 0.25)',
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.1, 1] },
    },
  };

  const categoriesOfCharisms = [
    {
      title: 'Teaching Charisms',
      items: "Comprise those of apostles or itinerant missionaries, evangelists or preachers of the gospel, prophets who spoke in God's name under the inspiration of the Holy Spirit and teachers who instructed the Christians and catechumens.",
    },
    {
      title: 'Service Charisms',
      items: 'This include gifts for governing and guiding as well as serving.',
    },
    {
      title: 'Extraordinary / Miraculous',
      items: 'It embraces the gifts of healing, miracles, faith, exorcism and immunity from harm arising from deadly things such as serpent or poison, and Discernment of spirits.',
    },
  ];

  const congregationalSpirits = ['Charity', 'Humility', 'Penance', 'Abandonment to God'];

  const mercyCards = [
    {
      pillar: 'Pillar I',
      title: 'Compassion',
      body: "Our compassion is based on the example of our Divine Master—Christ represented by the Good Samaritan who after helping the wounded victim also provided for his future needs.",
      footer: 'The Good Samaritan Paradigm',
    },
    {
      pillar: 'Pillar II',
      title: 'The Apostolate',
      body: 'We undertake the apostolate of loving and caring for the spiritually, intellectually and physically poor, the underprivileged by working in homes, and teaching in schools.',
      footer: 'Service & Instruction',
    },
    {
      pillar: 'Pillar III',
      title: 'Forgiveness & Kindness',
      body: "As brothers, it is absolutely essential that we have a forgiving heart, excusing one another's faults in charity (Mt. 18:21-22). The basis for our kindness is the injunction of Christ to give because of Him (Mt. 9:4); showing tender heartedness to all, even those difficult to deal with.",
      footer: 'Mt. 18:21-22 & Mt. 9:4',
    },
  ];

  return (
    <div
      className="min-h-screen antialiased"
      style={{
        backgroundColor: theme.bgLight,
        color: theme.textMain,
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      }}
    >
      <NavBar />

      {/* ================= SPLIT HERO SECTION: GRID 2 COLUMNS ================= */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Left Column: Text Content */}
        <div className="absolute inset-0 z-0 lg:relative lg:z-auto lg:w-1/2 flex items-center">
          <div className="max-w-xl mx-auto px-6 lg:px-12 py-16 lg:py-0">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-5"
              style={{ color: theme.accentGold, letterSpacing: '0.2em' }}
            >
              The Gifts of the Holy Spirit
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight leading-[1.2] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
            >
              Our Charism
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="w-20 h-[2px] rounded-full mb-8"
              style={{ backgroundColor: theme.accentGold, transformOrigin: 'left' }}
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-base md:text-lg leading-relaxed font-light"
              style={{ color: theme.textBody }}
            >
              In Christianity, a spiritual gift or Charism is an endowment which may be given by the Holy Spirit.
              The word denotes a gift freely and graciously given, a favour bestowed, a grace.
            </motion.p>
          </div>
        </div>

        {/* Right Column: Rotating Image Slideshow */}
        <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-[90vh] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${heroImages[currentSlide]}')` }}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
            />
          </AnimatePresence>

          {/* Optional soft overlay for better contrast (light) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to left, rgba(249,248,246,0) 0%, rgba(249,248,246,0.1) 100%)' }}
          />

          {/* Slide dot indicators positioned inside the image column */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-10">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="transition-all duration-500 rounded-full"
                style={{
                  width: i === currentSlide ? '28px' : '6px',
                  height: '6px',
                  backgroundColor:
                    i === currentSlide ? theme.accentGold : `${theme.accentGold}80`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Optional scroll hint – can be removed if desired */}
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ repeat: Infinity, duration: 2.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 w-px h-10 z-10 hidden lg:block"
          style={{ backgroundColor: theme.accentGold }}
        />
      </section>

      {/* ================= THEOLOGICAL UNDERSTANDING ================= */}
      <section
        className="py-20 md:py-28 px-6 border-t"
        style={{ borderColor: theme.borderLight, backgroundColor: theme.bgWhite }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUpVariants}
            className="space-y-6 text-base md:text-lg leading-relaxed"
            style={{ color: theme.textBody }}
          >
            <p>
              Charism as understood in the Bible is first treated, then its relation to the individual possessing it,
              and finally its meaning for the corporate church. The usage however is not uniform, varying between a
              general meaning equivalent to grace and the technical meaning.
            </p>
            <div
              className="border-l-4 pl-6 py-2 italic bg-opacity-30 rounded-r-sm"
              style={{ borderColor: theme.accentGold, backgroundColor: theme.accentGoldLight }}
            >
              <p className="leading-relaxed" style={{ color: theme.textMain }}>
                "Technical usage implies that a charism is a spiritual gift or talent granted by God to the recipient
                not primarily for his own sake but for the benefits of others in order to perfect the saints for a work
                of ministry, for building up the body of Christ, i.e the Church."
              </p>
              <span
                className="block mt-3 text-xs uppercase tracking-wider font-sans font-medium"
                style={{ color: theme.textMuted }}
              >
                — Eph. 4:12; and 1Cor. 14:26
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= VARIOUS KINDS OF CHARISMS ================= */}
      <section className="py-24 md:py-32 px-6" style={{ backgroundColor: theme.bgSection }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
              style={{ color: theme.accentGold }}
            >
              Classification
            </h2>
            <h3
              className="text-3xl md:text-5xl font-serif tracking-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: theme.textMain }}
            >
              Various Kinds of Charisms
            </h3>
            <div className="w-16 h-px mx-auto mt-5 bg-current opacity-30" style={{ color: theme.accentGold }} />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {categoriesOfCharisms.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                whileHover="hover"
                animate="rest"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                  rest: { scale: 1 },
                  hover: { scale: 1.02, transition: { duration: 0.25 } },
                }}
                className="rounded-2xl p-8 transition-all duration-300"
                style={{
                  backgroundColor: theme.bgWhite,
                  border: `1px solid ${theme.borderLight}`,
                  boxShadow: '0 8px 20px rgba(0,0,0,0.02)',
                }}
              >
                <h4
                  className="text-xl font-semibold mb-4 tracking-wide"
                  style={{ color: theme.accentGold, fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: theme.textBody }}>
                  {item.items}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONGREGATIONAL CHARISM ================= */}
      <section id="charism" className="py-28 md:py-36 px-6" style={{ backgroundColor: theme.bgWhite }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUpVariants}
          >
            <p
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-3"
              style={{ color: theme.accentGold }}
            >
              Sons of Mary Mother of Mercy
            </p>
            <h2
              className="text-3xl md:text-5xl mb-6 tracking-wide font-serif"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, color: theme.textMain }}
            >
              The Congregational Charism at a Glance
            </h2>
            <div className="w-12 h-px mx-auto mb-6 bg-current opacity-40" style={{ color: theme.accentGold }} />
            <p
              className="text-lg md:text-xl italic max-w-2xl mx-auto font-light"
              style={{ color: theme.textBody }}
            >
              "Bearing witness to the mercy of God" by following the footsteps of Christ, the
              merciful savior and Mary our Mother of mercy. This mercy is expressed in compassion, forgiveness and kindness.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-28 items-stretch">
            {mercyCards.map((card, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl p-8 flex flex-col justify-between transition-all"
                style={{
                  backgroundColor: theme.bgWhite,
                  border: `1px solid ${theme.borderLight}`,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                }}
              >
                <div>
                  <p
                    className="text-[11px] font-bold tracking-[0.2em] uppercase mb-3"
                    style={{ color: theme.accentGold }}
                  >
                    {card.pillar}
                  </p>
                  <h3
                    className="mb-5 text-2xl font-serif"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: theme.textMain }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: theme.textBody }}>
                    {card.body}
                  </p>
                </div>
                <div
                  className="mt-8 pt-5 border-t text-xs italic"
                  style={{ borderColor: theme.borderLight, color: theme.textMuted }}
                >
                  {card.footer}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="rounded-2xl p-10 md:p-14 text-center"
            style={{
              backgroundColor: `${theme.accentGoldLight}20`,
              backdropFilter: 'blur(2px)',
              border: `1px solid ${theme.borderLight}`,
            }}
          >
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-10"
              style={{ color: theme.accentGold }}
            >
              Spirit of Our Congregation
            </p>
            <div className="flex justify-center flex-wrap items-center gap-y-4">
              {congregationalSpirits.map((spirit, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-center px-6 md:px-8">
                    <div
                      className="text-xl md:text-2xl tracking-wide font-serif"
                      style={{ fontFamily: "'Cormorant Garamond', serif", color: theme.textMain }}
                    >
                      {spirit}
                    </div>
                  </div>
                  {index < congregationalSpirits.length - 1 && (
                    <div
                      className="hidden sm:block text-lg font-light select-none"
                      style={{ color: theme.accentGold, opacity: 0.5 }}
                    >
                      ✦
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SUMMARY BANNER ================= */}
      <section
        className="py-20 text-center"
        style={{ backgroundColor: theme.bgSection, borderTop: `1px solid ${theme.borderLight}` }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <p
            className="text-xl md:text-2xl italic font-serif"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: theme.textMain }}
          >
            "Summarily charism is a dynamic force which responds to the needs of the times and circumstances."
          </p>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        className="w-full text-center py-8 text-xs tracking-wide"
        style={{
          color: theme.textMuted,
          borderTop: `1px solid ${theme.borderLight}`,
          backgroundColor: theme.bgWhite,
        }}
      >
        <p>&copy; {new Date().getFullYear()} Sons of Mary Mother of Mercy (SMMM). All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Charism;