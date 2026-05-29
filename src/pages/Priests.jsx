// import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import NavBar from '../components/Navbar';


/*
|--------------------------------------------------------------------------
| Priests Data
|--------------------------------------------------------------------------
*/

const priestNames = [
  "Rev. Fr. Michael Okeke",
  "Rev. Fr. John Eze",
  "Rev. Fr. Emmanuel Nwosu",
  "Rev. Fr. Peter Obi",
  "Rev. Fr. Samuel Chukwu",
  "Rev. Fr. David Okafor",
  "Rev. Fr. Joseph Ekwueme",
  "Rev. Fr. Anthony Nnamdi",
  "Rev. Fr. Paul Uche",
  "Rev. Fr. Augustine Ezeani",
  "Rev. Fr. Francis Opara",
  "Rev. Fr. Vincent Maduka",
  "Rev. Fr. Raphael Nwachukwu",
  "Rev. Fr. Benedict Anayo",
  "Rev. Fr. Gregory Chinedu",
  "Rev. Fr. Matthew Obinna",
  "Rev. Fr. Philip Ifeanyi",
  "Rev. Fr. Dominic Chukwuemeka",
  "Rev. Fr. Simon Ebuka",
  "Rev. Fr. Martin Kenechukwu",
  "Rev. Fr. Andrew Tochukwu",
  "Rev. Fr. Luke Somto",
  "Rev. Fr. Stephen Onyeka",
  "Rev. Fr. Patrick Chisom",
  "Rev. Fr. Xavier Kelechi",
  "Rev. Fr. Clement Obiora",
  "Rev. Fr. Ignatius Chima",
  "Rev. Fr. Lawrence Ugochukwu",
  "Rev. Fr. Theodore Chibueze",
  "Rev. Fr. Christopher Emeka",
];

const imageModules = import.meta.glob(
  "../assets/images/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
  }
);

const priestImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, module]) => module.default);

const priests = priestNames.map((name, index) => ({
  id: index + 1,
  name,
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
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/*
|--------------------------------------------------------------------------
| Priest Card Component
|--------------------------------------------------------------------------
*/

const PriestCard = ({ priest }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -10,
      }}
      className="group bg-white rounded-2xl overflow-hidden
      shadow-lg border border-[#efeae3] hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/4]">
        <motion.img
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 0.5,
          }}
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
        <h3 className="font-serif text-xl font-bold text-[#2a211d] mt-2 mb-1">
          {priest.name}
        </h3>

        <div className="mt-4 pt-4 border-t border-[#efeae3] flex justify-center gap-3">
          {/* Email */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            title="Email"
            className="p-2 rounded-full text-[#b09a7e]
            hover:text-[#c49a3b]
            hover:bg-[#f8f6f3]
            transition-colors duration-300"
          >
            <Mail size={18} />
          </motion.button>

          {/* Phone */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            title="Phone"
            className="p-2 rounded-full text-[#b09a7e]
            hover:text-[#c49a3b]
            hover:bg-[#f8f6f3]
            transition-colors duration-300"
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
    <div className="bg-[#f8f6f3] min-h-screen font-sans antialiased">
      {/* Top Border */}
      <div className="h-1 bg-gradient-to-r from-[#5e4b3f] via-[#c49a3b] to-[#5e4b3f]" />
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
            className="inline-block px-4 py-1.5
            bg-[#efeae3] text-[#725a49]
            text-xs font-semibold tracking-widest
            uppercase rounded-full mb-4"
          >
            Clergy
          </span>

          <h1
            className="font-serif text-4xl md:text-5xl
            lg:text-6xl font-bold text-[#2a211d]
            mb-4 tracking-tight"
          >
            Our Priests
          </h1>

          <div className="w-24 h-1 bg-[#c49a3b] mx-auto rounded-full mb-6" />

          <p className="text-[#725a49] text-lg max-w-2xl mx-auto leading-relaxed">
            Dedicated servants of God who guide our congregation
            with faith, wisdom, and compassion.
          </p>
        </motion.div>

        {/* Priests Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2
          lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {priests.map((priest) => (
            <PriestCard
              key={priest.id}
              priest={priest}
            />
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Priests;