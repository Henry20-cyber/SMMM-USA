import { motion } from 'framer-motion';

const MissionVision = () => {
  // Simple fade variant
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <motion.section 
      // Changed bg-red-500 to a clean bg-slate-50
      className="py-20 px-6 bg-slate-400 min-h-screen flex items-center justify-center"
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Mission Card */}
          <motion.div 
            variants={fadeIn}
            className="p-12 bg-blue-900 text-white rounded-2xl flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-shadow"
          >
            <span className="material-symbols-outlined text-white text-5xl mb-6">
              explore
            </span>
            <h3 className="text-3xl font-bold mb-6">
              Spirit of Our Congregation
            </h3>
            <p className="text-lg opacity-90 leading-relaxed">
              The Spirit of our Congregation is that of Charity, Humility, Penance, and Abandonment to the will of God. It is a dynamic growth of the spirit of Christ as expressed in the Gospel. We strive to imitate Christ to be His faithful interpreters in our very lives.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            variants={fadeIn}
            className="p-12 border border-slate-200 rounded-2xl flex flex-col items-center text-center bg-white shadow-sm"
          >
            <span className="material-symbols-outlined text-blue-900 text-5xl mb-6">
              visibility
            </span>
            <h3 className="text-3xl font-bold text-blue-900 mb-6">
              Our Vision
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              To create a world where the compassion of Mary is felt in every heart, transforming lives through prayer, education, and direct acts of charity.
            </p>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default MissionVision;