import { motion } from 'framer-motion';

const MissionAreas = () => {
  // Brighter blue background + refined palette
  const theme = {
    blueLight: '#93c5fd',       // softer light blue for accents
    bluePrimary: '#3b82f6',     // vibrant primary blue
    blueDeep: '#1e40af',        // brighter deep blue (was #0f172a)
    blueGradientStart: '#1e3a8a',
    blueGradientEnd: '#2563eb',
    white: '#ffffff',
    whiteMuted: '#f1f5f9',      // almost white
    whiteFaint: 'rgba(255, 255, 255, 0.3)',
    borderLight: 'rgba(147, 197, 253, 0.25)',
    bgCard: 'rgba(255, 255, 255, 0.05)',
    bgCardHover: 'rgba(255, 255, 255, 0.1)',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  const regions = [
    {
      name: "Africa",
      countries: ["Nigeria", "Cameroon", "Ghana", "Burkina Faso"]
    },
    {
      name: "Europe",
      countries: ["Italy", "Germany", "Luxembourg", "Switzerland", "Austria", "Belgium", "United Kingdom", "Ireland"]
    },
    {
      name: "Asia",
      countries: ["Philippines"]
    },
    {
      name: "North America",
      countries: ["USA", "Canada"],
      isHomeRegion: true,
      usCitiesByState: [
        { state: "California", cities: ["Fresno", "San Bernardino", "San Diego", "Los Angeles", "San Francisco"] },
        { state: "Florida", cities: ["Miami", "St. Augustine", "St. Petersburg", "Orlando"] },
        { state: "Massachusetts", cities: ["Boston"] },
        { state: "New York", cities: ["Syracuse"] },
        { state: "Idaho", cities: ["Boise"] }
      ]
    }
  ];

  return (
    <section 
      id="mission" 
      className="py-24 px-6 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${theme.blueGradientStart}, ${theme.blueGradientEnd})`
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header – refined typography */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span 
            className="text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ color: theme.blueLight, letterSpacing: '0.2em', fontFamily: "'Inter', sans-serif" }}
          >
            Global Presence
          </span>
          <h2 
            className="text-4xl md:text-5xl font-light tracking-tight mt-3 mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: theme.white, fontWeight: 500 }}
          >
            Mission Areas
          </h2>
          <div className="mx-auto w-12 h-px" style={{ backgroundColor: theme.blueLight }} />
          <p className="mt-5 text-base font-light italic" style={{ color: theme.whiteMuted, fontFamily: "'Cormorant Garamond', serif" }}>
            From a mustard seed to branches across the globe
          </p>
        </motion.div>

        {/* Cards grid – minimalist, clean */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={containerVariants}
        >
          {regions.map((region, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="rounded-2xl backdrop-blur-sm transition-all duration-300 hover:bg-opacity-80"
              style={{
                backgroundColor: region.isHomeRegion ? 'rgba(59,130,246,0.15)' : theme.bgCard,
                border: `1px solid ${theme.borderLight}`,
                padding: '1.75rem'
              }}
            >
              {/* Region name */}
              <h3 
                className="text-xl font-medium mb-5 tracking-wide"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: theme.white, letterSpacing: '-0.01em', fontWeight: 600 }}
              >
                {region.name}
              </h3>

              {/* Country pills – subtle */}
              <div className="flex flex-wrap gap-2 mb-6">
                {region.countries.map((country, cIdx) => (
                  <span
                    key={cIdx}
                    className="px-3 py-1 text-xs rounded-full border"
                    style={{
                      borderColor: theme.borderLight,
                      color: theme.whiteMuted,
                      backgroundColor: 'transparent',
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400
                    }}
                  >
                    {country}
                  </span>
                ))}
              </div>

              {/* US cities – structured & space‑efficient */}
              {region.usCitiesByState && (
                <div className="mt-4 pt-4 border-t" style={{ borderColor: theme.borderLight }}>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-wider mb-3" style={{ color: theme.blueLight, fontFamily: "'Inter', sans-serif" }}>
                    Active Dioceses (USA)
                  </p>
                  <div className="space-y-3">
                    {region.usCitiesByState.map((stateGroup, sgIdx) => (
                      <div key={sgIdx} className="text-xs">
                        <span className="block font-medium mb-1" style={{ color: theme.white, fontFamily: "'Inter', sans-serif" }}>
                          {stateGroup.state}
                        </span>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 pl-1">
                          {stateGroup.cities.map((city, cityIdx) => (
                            <span key={cityIdx} className="text-white/70 text-[0.7rem]" style={{ fontFamily: "'Inter', sans-serif" }}>
                              {city}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
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