import { motion } from 'framer-motion';

const MissionAreas = () => {
  // Central theme variable mapping
  const theme = {
    gold: '#c9a84c',
    cream: '#faf6ee',
    goldBorder: 'rgba(201, 168, 76, 0.15)',
    goldBg: 'rgba(201, 168, 76, 0.04)',
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
    <section id="mission" className="bg-slate-950 py-28 px-6 text-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Title Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: theme.gold }}>Global Presence</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-wide mb-6" style={{ fontFamily: "'Cinzel', serif" }}>Mission Areas & Growth</h2>
          <div className="mx-auto mb-6 h-[1px] w-16" style={{ backgroundColor: theme.gold }}></div>
          <p 
            style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontSize: "1.1rem", 
              color: "rgba(250,246,238,0.55)", 
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
                border: region.isHomeRegion ? `1px solid ${theme.gold}` : `1px solid ${theme.goldBorder}`,
                padding: '2rem',
                backgroundColor: region.isHomeRegion ? theme.goldBg : 'rgba(10, 25, 47, 0.15)'
              }}
            >
              <div>
                {/* Header info bar inside card */}
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ border: `1.5px solid ${region.isHomeRegion ? theme.gold : 'rgba(201,168,76,0.35)'}` }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                      <circle cx="12" cy="12" r="9" stroke={theme.gold} strokeWidth="1.2"/>
                      <line x1="12" y1="3" x2="12" y2="21" stroke={theme.gold} strokeWidth="0.8"/>
                      <line x1="3" y1="9" x2="21" y2="9" stroke={theme.gold} strokeWidth="0.8"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[1.05rem] font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>
                      {region.name}
                    </h3>
                    {region.isHomeRegion && (
                      <p className="text-[0.55rem] font-bold tracking-[0.15em] uppercase mt-0.5" style={{ color: theme.gold }}>
                        Our Home Region
                      </p>
                    )}
                  </div>
                </div>

                {/* Country Pill Badges */}
                <div className="flex flex-wrap gap-2">
                  {region.pills.map((pill, pillIdx) => (
                    <span 
                      key={pillIdx}
                      className="px-3 py-1 text-xs border rounded-full transition-all duration-300"
                      style={{ 
                        borderColor: region.isHomeRegion ? 'rgba(201,168,76,0.6)' : 'rgba(255,255,255,0.08)',
                        color: region.isHomeRegion ? theme.cream : 'rgba(250,246,238,0.7)',
                        backgroundColor: region.isHomeRegion ? 'rgba(201,168,76,0.05)' : 'transparent'
                      }}
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Special Extension Section For Home Region Details */}
              {region.subtext && (
                <div className="mt-6 pt-6 border-t" style={{ borderColor: 'rgba(201,168,76,0.15)' }}>
                  <p className="text-[0.6rem] font-bold tracking-wider uppercase mb-2" style={{ color: 'rgba(201,168,76,0.5)' }}>
                    {region.subtext.title}
                  </p>
                  <p className="text-[0.88rem] leading-relaxed" style={{ color: 'rgba(250,246,238,0.55)' }}>
                    {region.subtext.content}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Global Footer Notes Sub-panel */}
        <motion.div 
          className="text-center mt-8 px-6 py-4 rounded-sm"
          style={{ border: '1px solid rgba(201,168,76,0.1)', backgroundColor: 'rgba(10, 25, 47, 0.1)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "rgba(250,246,238,0.5)", fontSize: "0.95rem" }}>
            Student members in the <strong style={{ color: 'rgba(201,168,76,0.6)', fontWeight: 600 }}>Republic of the Philippines</strong> also belong to the USA Region.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default MissionAreas;