import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import NavBar from '../components/Navbar';

/*
|--------------------------------------------------------------------------
| Priests Data
|--------------------------------------------------------------------------
*/

const priestsData = [
  { name: "Fr. Eugene Eburuche, SMMM", role: "" },
  { name: "Rev. Remigius Owuamanam. SMMM", role: "" },
  { name: "Fr. John Agbasiere, SMMM", role: "" },
  { name: "Fr. Amobi Atuegbu, SMMM", role: "Mission Director" },
  { name: "Fr. Julius Nwagbara, SMMM", role: "" },
  { name: "Fr. Hippolytus Ezenwa, SMMM", role: "" },
  { name: "Rev. Fr. Celestine Agwu, SMMM", role: "" },
  { name: "Fr. Paulinus Iwuji, SMMM", role: "" },
  { name: "Rev. Fr. Anselm Ibe, SMMM", role: "" },
  { name: "Rev. Fr. Francis Opara", role: "" },
  { name: "Rev. Fr. Vincent Maduka", role: "" },
  { name: "Rev. Fr. Raphael Nwachukwu", role: "" },
  { name: "Rev. Fr. Benedict Anayo", role: "" },
  { name: "Rev. Fr. Gregory Chinedu", role: "" },
  { name: "Rev. Fr. Matthew Obinna", role: "" },
  { name: "Rev. Fr. Philip Ifeanyi", role: "" },
  { name: "Rev. Fr. Dominic Chukwuemeka", role: "" },
  { name: "Rev. Fr. Simon Ebuka", role: "" },
  { name: "Rev. Fr. Martin Kenechukwu", role: "" },
  { name: "Rev. Fr. Andrew Tochukwu", role: "" },
  { name: "Rev. Fr. Luke Somto", role: "" },
  { name: "Rev. Fr. Stephen Onyeka", role: "" },
  { name: "Rev. Fr. Patrick Chisom", role: "" },
  { name: "Rev. Fr. Xavier Kelechi", role: "" },
  { name: "Rev. Fr. Clement Obiora", role: "" },
  { name: "Rev. Fr. Ignatius Chima", role: "" },
  { name: "Rev. Fr. Lawrence Ugochukwu", role: "" },
  { name: "Rev. Fr. Theodore Chibueze", role: "" },
  { name: "Rev. Fr. Christopher Emeka", role: "" },
  { name: "Rev. Fr. Paul Uche, SMMM", role: "" },
];

const imageModules = import.meta.glob(
  "../assets/images/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

const priestImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, module]) => module.default);

const priests = priestsData.map((priest, index) => ({
  id: index + 1,
  name: priest.name,
  role: priest.role,
  image: priestImages[index],
  fallback:
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face",
}));

/*
|--------------------------------------------------------------------------
| Animation Variants 
|--------------------------------------------------------------------------
*/

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/*
|--------------------------------------------------------------------------
| Priest Card Component
|--------------------------------------------------------------------------
*/

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
  bgSoft: 'rgba(22, 101, 52, 0.06)'
};

const PriestCard = ({ priest }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl flex flex-col justify-between"
      style={{ border: `1px solid ${theme.borderLight}` }}
    >
      <div>
        {/* Image */}
        <div className="relative overflow-hidden aspect-[3/4]">
          <motion.img
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5 }}
            src={priest.image}
            alt={priest.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = priest.fallback;
            }}
          />
        </div>

        {/* Content */}
        <div className="p-5 text-center">
          <h3 className="font-serif text-xl font-bold mb-1" style={{ color: theme.black }}>
            {priest.name}
          </h3>
          
          {priest.role && (
            <span className="inline-block mt-1 px-3 py-1 text-xs font-semibold tracking-wide rounded-full uppercase" style={{ backgroundColor: theme.bgSoft, color: theme.greenPrimary }}>
              {priest.role}
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons Container */}
      <div className="p-5 pt-0 text-center">
        <div className="pt-4 border-t flex justify-center gap-3" style={{ borderColor: theme.borderLight }}>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            title="Email"
            className="p-2 rounded-full transition-colors duration-300"
            style={{ color: theme.textMuted }}
            onMouseEnter={(e) => e.currentTarget.style.color = theme.greenPrimary}
            onMouseLeave={(e) => e.currentTarget.style.color = theme.textMuted}
          >
            <Mail size={18} />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            title="Phone"
            className="p-2 rounded-full transition-colors duration-300"
            style={{ color: theme.textMuted }}
            onMouseEnter={(e) => e.currentTarget.style.color = theme.greenPrimary}
            onMouseLeave={(e) => e.currentTarget.style.color = theme.textMuted}
          >
            <Phone size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

/*
|--------------------------------------------------------------------------
| Main Component
|--------------------------------------------------------------------------
*/

const Priests = () => {
  return (
    <div className="min-h-screen font-sans antialiased" style={{ backgroundColor: theme.offWhite }}>
      {/* Top Border - changed to green gradient */}
      <div className="h-1 bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${theme.greenDeep}, ${theme.greenLight}, ${theme.greenDeep})` }} />
      <NavBar />
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full mb-4"
            style={{ backgroundColor: theme.bgSoft, color: theme.greenPrimary }}
          >
            Clergy
          </span>

          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight"
            style={{ color: theme.black }}
          >
            Our Priests
          </h1>

          <div className="w-24 h-1 rounded-full mx-auto mb-6" style={{ backgroundColor: theme.greenLight }} />

          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: theme.textMuted }}>
            Dedicated servants of God who guide our congregation with faith, wisdom, and compassion.
          </p>
        </motion.div>

        {/* Priests Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {priests.map((priest) => (
            <PriestCard key={priest.id} priest={priest} />
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Priests;