import { motion } from 'framer-motion';

const timelineData = [
  {
    year: "1970",
    title: "Founding",
    content: "Sons of Mary Mother of Mercy (SMMM) founded on Oct 25 by Most Rev. Anthony Gogo Nwedo, C.S.Sp, as the first indigenous male religious order in sub-saharan West Africa."
  },
  {
    year: "1998",
    title: "Seeds in America",
    content: "The mission began in the US on Jan 24 with Fr. Eugene Ujunwa Eburuche's arrival in the Diocese of Fort Wayne-South Bend, Indiana."
  },
  {
    year: "2005",
    title: "Expansion to Fresno",
    content: "The mission moved to Fresno, California. By the end of 2006, the USA Region grew rapidly to include 15 priests."
  },
  {
    year: "2009",
    title: "Official Regional Status",
    content: "Formally elevated to a Region. First regional elections held with Fr. Nelson Ogwuegbu elected as the first Regional Superior."
  },
  {
    year: "Today",
    title: "Global Presence",
    content: "Currently 35 active members serve across various US dioceses, Archdioceses and the Philippines, providing priestly, chaplaincy ministry and continuing education."
  },
  {
    year: "2023",
    title: "Silver Jubilee",
    content: "Celebrated 25 years of missionary service in the United States, honoring pioneer leaders and missionary excellence."
  }
];

const Summary = () => {
  // Green, white, black palette
  const theme = {
    greenDeep: '#064e3b',
    greenPrimary: '#166534',
    greenLight: '#4ade80',
    white: '#ffffff',
    black: '#111111',
    offWhite: '#f5f5f0',
    grayLight: '#e5e7eb',
    grayMedium: '#9ca3af'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 px-6" style={{ backgroundColor: theme.offWhite }}>
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-20"
      >
        <h2 
          className="text-4xl md:text-5xl font-semibold mb-4 tracking-wide"
          style={{ fontFamily: "'Cinzel', serif", color: theme.greenPrimary }}
        >
          Our Journey of Faith
        </h2>
        <div className="w-20 h-1 rounded-full mx-auto" style={{ backgroundColor: theme.greenLight }}></div>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        {/* Intro Paragraph */}
        <p 
          className="text-lg mb-16 leading-relaxed text-center italic"
          style={{ color: theme.greenDeep }}
        >
          "Go and make disciples of all nations..." — Matthew 28:19
        </p>

        {/* Timeline Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative border-l-2 ml-4 md:ml-0 md:grid md:grid-cols-2 md:gap-x-12 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:w-0.5 md:before:h-full"
          style={{ borderLeftColor: `${theme.greenLight}40`, position: 'relative' }}
        >
          {timelineData.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`relative mb-12 md:mb-24 flex flex-col ${
                index % 2 === 0 ? 'md:items-end md:text-right md:pr-12' : 'md:pl-12'
              }`}
            >
              {/* Dot on Timeline */}
              <div 
                className="absolute -left-[9px] top-0 w-4 h-4 rounded-full md:left-1/2 md:-translate-x-1/2 shadow-lg"
                style={{ backgroundColor: theme.greenLight, boxShadow: `0 0 0 2px ${theme.white}, 0 0 0 4px ${theme.greenLight}80` }}
              ></div>
              
              <div className="pl-6 md:pl-0">
                <span 
                  className="text-xl font-bold block mb-1"
                  style={{ color: theme.greenLight }}
                >
                  {item.year}
                </span>
                <h3 
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "'Cinzel', serif", color: theme.greenPrimary }}
                >
                  {item.title}
                </h3>
                <p 
                  className="leading-relaxed p-4 rounded-lg shadow-sm"
                  style={{ color: theme.black, backgroundColor: theme.white }}
                >
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Summary;