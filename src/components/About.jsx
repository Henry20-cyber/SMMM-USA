import { motion } from 'framer-motion';
import Logo from '../assets/logo2.png';

const symbols = [
  {
    icon: 'favorite',
    title: 'The Heart',
    color: 'text-red-600',
    bg: 'bg-red-50',
    border: 'border-red-200',
    iconColor: 'text-red-500',
    items: [
      'Seat of Love and Mercy — the Sacred Hearts of Jesus and Mary.',
      'A call to witness through compassion and tenderness.',
      'Honoring Mary as the first witness to divine Mercy.',
    ],
  },
  {
    icon: 'local_fire_department',
    title: 'The Flame',
    color: 'text-amber-700',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    iconColor: 'text-amber-500',
    items: [
      "The 'Flame of Love' modeled by Mary's Fiat and total surrender.",
      'Burning zeal for God, the Church, and all humanity.',
      'Sacrificial service especially for the poor and needy.',
    ],
  },
  {
    icon: 'church',
    title: 'The Cross',
    color: 'text-blue-900',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    iconColor: 'text-blue-600',
    items: [
      'Daily call to discipleship, self-denial, and sacrifice.',
      'Embracing charity, humility, and contemplative prayer.',
      "Total abandonment to the Father's will in all things.",
    ],
  },
  {
    icon: 'palette',
    title: 'SMMM & Colors',
    color: 'text-slate-700',
    bg: 'bg-slate-50',
    border: 'border-slate-200',
    iconColor: 'text-slate-500',
    items: [
      'White: Purity, peace, and openness to the Holy Spirit.',
      'Red: Ardent love and the spirit of joyful martyrdom.',
      'Blue: Tender devotion to the Blessed Virgin Mary.',
    ],
  },
];

const SymbolCard = ({ icon, title, color, bg, border, iconColor, items }) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.01 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className={`rounded-2xl p-6 border ${bg} ${border} flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-300`}
  >
    <div className="flex items-center gap-3">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white shadow-sm border ${border}`}>
        <span className={`material-symbols-outlined text-2xl ${iconColor}`}>{icon}</span>
      </div>
      <h3 className={`font-bold text-lg tracking-tight ${color}`}>{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 text-sm text-slate-600 leading-relaxed">
          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${iconColor.replace('text-', 'bg-')}`} />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const About = () => {
  const stagger = {
    initial: {},
    animate: { transition: { staggerChildren: 0.12 } },
  };

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const slideIn = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section className="bg-white overflow-hidden">

      {/* ── Top banner strip ── */}
      <div className="bg-blue-900 py-3 px-6">
        <p className="text-center text-blue-200 text-xs tracking-[0.25em] uppercase font-semibold">
          Sons of Mary Mother of Mercy
        </p>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">

          {/* ── LEFT: Logo + quote ── */}
          <motion.div
            className="lg:sticky lg:top-24 flex flex-col items-center gap-8"
            variants={slideIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Decorative ring */}
            <div className="relative w-full max-w-xs mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-blue-100 scale-110 pointer-events-none" />
              <div className="absolute inset-0 rounded-full border border-blue-50 scale-125 pointer-events-none" />
              <div className="bg-gradient-to-b from-slate-50 to-blue-50 rounded-3xl p-8 border border-blue-100 shadow-lg">
                <img
                  src={Logo}
                  alt="SMMM Congregation Emblem"
                  className="w-full h-auto object-contain drop-shadow-sm"
                />
              </div>
            </div>

            {/* Pull quote */}
            <div className="w-full max-w-xs text-center">
              <div className="text-4xl text-blue-200 font-serif leading-none mb-2">"</div>
              <p className="font-serif text-base italic text-blue-900 leading-relaxed">
                Witnesses to God's mercy through love and compassion.
              </p>
              <div className="mt-4 h-px w-12 bg-blue-200 mx-auto" />
            </div>

            {/* Color legend pills */}
            <div className="flex flex-wrap justify-center gap-2 w-full max-w-xs">
              {[
                { label: 'Purity', dot: 'bg-slate-300 border border-slate-400' },
                { label: 'Love', dot: 'bg-red-500' },
                { label: 'Devotion', dot: 'bg-blue-600' },
              ].map(({ label, dot }) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 border border-slate-200 rounded-full px-3 py-1"
                >
                  <span className={`w-2 h-2 rounded-full ${dot}`} />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Heading + cards ── */}
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-10"
          >
            {/* Section label + heading */}
            <motion.div variants={fadeUp} className="space-y-3">
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-blue-500 bg-blue-50 border border-blue-100 rounded-full px-3 py-1">
                Our Identity
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-blue-900 leading-tight tracking-tight">
                The Symbols of<br />
                <span className="text-slate-400 font-light">our Congregation</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
                Every element of our insignia carries a profound spiritual meaning,
                reflecting our dedication as Sons of Mary Mother of Mercy.
              </p>
            </motion.div>

            {/* Divider with ornament */}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-blue-100 to-transparent" />
              <span className="material-symbols-outlined text-blue-200 text-xl">star</span>
              <div className="h-px flex-1 bg-gradient-to-l from-blue-100 to-transparent" />
            </motion.div>

            {/* Symbol cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {symbols.map((s) => (
                <motion.div key={s.title} variants={fadeUp}>
                  <SymbolCard {...s} />
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA strip */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl bg-blue-900 text-white p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div>
                <p className="font-bold text-base">Explore Our Mission & Vision</p>
                <p className="text-blue-300 text-sm mt-0.5">
                  Discover how we live out our charism every day.
                </p>
              </div>
              <button className="flex-shrink-0 bg-white text-blue-900 font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors">
                Learn more →
              </button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;