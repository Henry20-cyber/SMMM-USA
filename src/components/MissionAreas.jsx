import { motion } from 'framer-motion';

const MissionAreas = () => {
  // Blue variants, white, black (dark background with blue accents)
  const theme = {
    blueLight: '#60a5fa',
    bluePrimary: '#2563eb',
    blueDeep: '#1e3a8a',
    white: '#ffffff',
    whiteMuted: 'rgba(255, 255, 255, 0.7)',
    whiteFaint: 'rgba(255, 255, 255, 0.3)',
    borderBlue: 'rgba(96, 165, 250, 0.15)',
    bgBlueTransparent: 'rgba(37, 99, 235, 0.1)',
  };

  // Shared animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  // Structured Regions Array
  const regions = [
    {
      name: "Africa",
      pills: ["Nigeria", "Cameroon", "Ghana", "Burkina Faso"],
      isHomeRegion: false
    },
    {
      name: "Europe",
      pills: ["Italy", "Germany", "Luxembourg", "Switzerland", "Austria", "Belgium", "United Kingdom", "Ireland"],
      isHomeRegion: false
    },
    {
      name: "Asia",
      pills: ["Philippines"],
      isHomeRegion: false
    },
    {
      name: "North America",
      pills: ["USA", "Canada"],
      isHomeRegion: true,
      subtext: {
        title: "Active Dioceses (USA)",
        content: "Fresno · San Bernardino · San Diego · Boston · Boise · Orlando · Los Angeles · San Francisco · Syracuse · Hartford · Miami · St. Augustine · St. Petersburg"
      }
    }
  ];

  return (
    <section id="mission" className="py-28 px-6 overflow-hidden" style={{ backgroundColor: theme.blueDeep }}>
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Title Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: theme.blueLight }}>Global Presence</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-wide mb-6 text-white" style={{ fontFamily: "'Cinzel', serif" }}>Mission Areas & Growth</h2>
          <div className="mx-auto mb-6 h-[1px] w-16" style={{ backgroundColor: theme.blueLight }}></div>
          <p 
            style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontSize: "1.1rem", 
              color: theme.whiteMuted, 
              fontStyle: "italic" 
            }}
          >
            From a single mustard seed — to branches across the globe
          </p>
        </motion.div>

        {/* Dynamic Card Staggered Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {regions.map((region, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="rounded-sm flex flex-col justify-between"
              style={{
                border: region.isHomeRegion ? `1px solid ${theme.blueLight}` : `1px solid ${theme.borderBlue}`,
                padding: '2rem',
                backgroundColor: region.isHomeRegion ? theme.bgBlueTransparent : 'rgba(0, 0, 0, 0.2)'
              }}
            >
              <div>
                {/* Header info bar inside card */}
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ border: `1.5px solid ${region.isHomeRegion ? theme.blueLight : theme.borderBlue}` }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                      <circle cx="12" cy="12" r="9" stroke={theme.blueLight} strokeWidth="1.2"/>
                      <line x1="12" y1="3" x2="12" y2="21" stroke={theme.blueLight} strokeWidth="0.8"/>
                      <line x1="3" y1="9" x2="21" y2="9" stroke={theme.blueLight} strokeWidth="0.8"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[1.05rem] font-semibold text-white" style={{ fontFamily: "'Cinzel', serif" }}>
                      {region.name}
                    </h3>
                  </div>
                </div>

                {/* Country Pill Badges */}
                <div className="flex flex-wrap gap-2">
                  {region.pills.map((pill, pillIdx) => (
                    <span 
                      key={pillIdx}
                      className="px-3 py-1 text-xs border rounded-full transition-all duration-300"
                      style={{ 
                        borderColor: region.isHomeRegion ? theme.blueLight : 'rgba(255,255,255,0.08)',
                        color: region.isHomeRegion ? theme.white : theme.whiteMuted,
                        backgroundColor: region.isHomeRegion ? theme.bgBlueTransparent : 'transparent'
                      }}
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Special Extension Section For Home Region Details */}
              {region.subtext && (
                <div className="mt-6 pt-6 border-t" style={{ borderColor: theme.borderBlue }}>
                  <p className="text-[0.6rem] font-bold tracking-wider uppercase mb-2" style={{ color: theme.blueLight }}>
                    {region.subtext.title}
                  </p>
                  <p className="text-[0.88rem] leading-relaxed" style={{ color: theme.whiteMuted }}>
                    {region.subtext.content}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default MissionAreas;