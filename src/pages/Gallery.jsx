import { motion } from 'framer-motion';
import NavBar from '../components/Navbar';

// 1. Corrected path to go up one level from /pages to /src, then into /assets/priests/
const imageModules = import.meta.glob(
  "../assets/priests/image(*).{jpg,jpeg,png,webp}",
  { eager: true }
);

// 2. Sort naturally so image(01) comes before image(10)
const priestImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
  .map(([, module]) => module.default);

// Define the grid layout configuration for each image index (0‑based)
const gridConfig = [
  { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-2', imgIndex: 0 },   // 1
  { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1', imgIndex: 1 },   // 2
  { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1', imgIndex: 2 },   // 3
  { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1', imgIndex: 3 },   // 4
  { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1', imgIndex: 4 },   // 5
  { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1', imgIndex: 5 },   // 6
  { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1', imgIndex: 6 },   // 7
  { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-2', imgIndex: 7 },   // 8
  { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1', imgIndex: 8 },   // 9
  { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1', imgIndex: 9 },   // 10
  { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1', imgIndex: 10 },  // 11
  { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1', imgIndex: 11 },  // 12
  { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1', imgIndex: 12 },  // 13
  { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1', imgIndex: 13 },  // 14
  { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1', imgIndex: 14 },  // 15
  { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1', imgIndex: 15 },  // 16
  { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1', imgIndex: 16 },  // 17
  { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1', imgIndex: 17 },  // 18
  { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1', imgIndex: 18 },  // 19
  { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1', imgIndex: 19 },  // 20
  { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1', imgIndex: 20 },  // 21
  { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1', imgIndex: 21 },  // 22
  { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1', imgIndex: 22 },  // 23
  { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1', imgIndex: 23 },  // 24
  { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1', imgIndex: 24 },  // 25
  { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1', imgIndex: 25 },  // 26
  { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1', imgIndex: 26 },  // 27
  { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1', imgIndex: 27 },  // 28
  { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1', imgIndex: 28 },  // 29
  { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1', imgIndex: 29 },  // 30
  { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1', imgIndex: 30 },  // 31
  { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1', imgIndex: 31 },  // 32
];

const Gallery = () => {
  const theme = {
    greenPrimary: '#166534',
    greenLight: '#4ade80',
    offWhite: '#fafaf5',
    textDark: '#1a1a1a',
    textMuted: '#4b5563',
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.offWhite }}>
      <NavBar />
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="text-center mb-16"
        >
          <span
            className="inline-block mt-4 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full mb-4"
            style={{ backgroundColor: `${theme.greenLight}20`, color: theme.greenPrimary }}
          >
            Memories
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
            style={{ color: theme.textDark }}
          >
            Our Gallery
          </h1>
          <div className="w-24 h-1 rounded-full mx-auto mb-6" style={{ backgroundColor: theme.greenLight }} />
          <p className="text-lg max-w-xl mx-auto" style={{ color: theme.textMuted }}>
            A custom-fit, dynamic look into our community and shared ministry.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {gridConfig.map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              transition={{ delay: idx * 0.02 }}
              className={`${item.colSpan} ${item.rowSpan} overflow-hidden rounded-3xl shadow-sm bg-white group hover:shadow-xl transition-all duration-500`}
            >
              <img
                src={priestImages[item.imgIndex]}
                alt={`Gallery ${item.imgIndex + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  // Fixed fallback reference context
                  e.currentTarget.src = 'https://placehold.co/600x400?text=Image+Not+Found';
                }}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;