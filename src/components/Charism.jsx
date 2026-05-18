import { motion } from 'framer-motion';

const Charism = () => {
  // Centralized Theme Variables
  const theme = {
    gold: '#c9a84c',
    cream: '#faf6ee',
    goldFade: 'rgba(201, 168, 76, 0.15)',
    goldHover: 'rgba(201, 168, 76, 0.4)',
  };

  // Reusable Shared Animation Variants
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

 /**  const cardHoverVariants = {
    rest: { borderColor: theme.goldFade },
    hover: { 
      borderColor: theme.goldHover,
      scale: 1.01,
      transition: { duration: 0.3 }
    }
  }; */

  // Data Array for the Three Expressions of Mercy
  const mercyExpressions = [
    {
      numeral: "I",
      label: "Mercy Through",
      title: "Compassion",
      scripture: "Lk 10:25-37",
      gradient: `linear-gradient(90deg, ${theme.gold}, transparent)`,
      description: "Modeled after the Good Samaritan, we undertake the apostolate of loving and caring for the spiritually, intellectually, and physically poor and underprivileged."
    },
    {
      numeral: "II",
      label: "Mercy As",
      title: "Forgiveness",
      scripture: "Mt. 18:21-22",
      gradient: `linear-gradient(90deg, transparent, ${theme.gold}, transparent)`,
      description: "As brothers, it is essential that we have forgiving hearts, excusing one another's faults in charity — a community built on grace and reconciliation."
    },
    {
      numeral: "III",
      label: "Mercy As",
      title: "Kindness",
      scripture: "Mt. 9:4",
      gradient: `linear-gradient(90deg, transparent, ${theme.gold})`,
      description: "Rooted in Christ's injunction to give because of Him — we show tender-hearted love toward one another and toward those who are difficult to reach."
    }
  ];

  const congregationalSpirits = ["Charity", "Humility", "Penance", "Abandonment to God"];

  return (
    <section id="charism" className="bg-slate-950 py-28 px-6 text-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Block */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
        >
          <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: theme.gold }}>Core Values</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-wide mb-6" style={{ fontFamily: "'Cinzel', serif", color: theme.cream }}>Our Charism</h2>
          <div className="mx-auto mb-6 h-[1px] w-16" style={{ backgroundColor: theme.gold }}></div>
          <p 
            style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontSize: "1.15rem", 
              color: "rgba(250,246,238,0.6)", 
              maxWidth: "600px", 
              margin: "0 auto", 
              fontStyle: "italic",
              lineHeight: "1.6"
            }}
          >
            Bearing witness to the mercy of God by following in the footsteps of Christ, the Merciful Savior, and Mary, our Mother of Mercy.
          </p>
        </motion.div>

        {/* Three Mercy Expressions Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mercyExpressions.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              animate="rest"
              variants={revealVariants}
              viewport={{ once: true, margin: "-50px" }}
              style={{
                borderWidth: '1px',
                borderStyle: 'solid',
                padding: '2.5rem',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'rgba(10, 25, 47, 0.2)'
              }}
              custom={index}
            >
              {/* Dynamic Top Border Accent */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: item.gradient }} />
              
              {/* Large Background Roman Numeral */}
              <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: '3.5rem', color: 'rgba(201, 168, 76, 0.08)', position: 'absolute', top: '0.5rem', right: '1rem', lineHeight: 1 }}>
                {item.numeral}
              </div>

              <p style={{ fontFamily: "'Cinzel', serif", fontSize: '0.6rem', letterSpacing: '0.2em', color: theme.gold, marginBottom: '1rem', textTransform: 'uppercase' }}>
                {item.label}
              </p>
              
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.4rem', color: '#ffffff', marginBottom: '1rem', fontWeight: 600 }}>
                {item.title}
              </h3>
              
              <div style={{ width: '40px', height: '1px', backgroundColor: theme.gold, marginBottom: '1.2rem' }}></div>
              
              <p style={{ color: 'rgba(250,246,238,0.65)', fontSize: '0.98rem', lineHeight: 1.7 }}>
                {item.description}
              </p>
              
              <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '0.9rem', color: 'rgba(201,168,76,0.5)' }}>
                  {item.scripture}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Spirit of Congregation Panel */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          style={{ background: 'rgba(201,168,76,0.06)', border: `1px solid ${theme.goldFade}`, padding: '3rem', textAlign: 'center' }}
        >
          <p style={{ fontFamily: "'Cinzel', serif", fontSize: '0.62rem', letterSpacing: '0.2em', color: theme.gold, textTransform: 'uppercase', marginBottom: '1.8rem' }}>
            Spirit of Our Congregation
          </p>
          
          <div className="flex justify-center gap-6 md:gap-12 flex-wrap items-center">
            {congregationalSpirits.map((spirit, index) => (
              <div key={index} className="flex items-center gap-6 md:gap-12">
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Cinzel', serif", fontSize: '1.1rem', color: '#ffffff', marginBottom: '0.3rem' }}>
                    {spirit}
                  </div>
                  <div style={{ width: '30px', height: '1px', backgroundColor: theme.gold, margin: '0 auto' }}></div>
                </div>
                {/* Dot Divider added between array elements cleanly */}
                {index < congregationalSpirits.length - 1 && (
                  <div style={{ color: 'rgba(201,168,76,0.3)', fontSize: '1.5rem' }}>·</div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Charism;