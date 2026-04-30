// import React from 'react';
import { motion } from 'framer-motion';

const Superiors = () => {
  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    exit: { opacity: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section className="py-section-padding px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          {...fadeIn}
        >
          <h2 className="font-headline-md text-headline-md text-primary mb-4">Our Superiors</h2>
          <p className="font-body-md text-on-surface-variant max-w-xl mx-auto">
            Guided by wisdom and spiritual leadership, our superiors steer the mission of the US Chapter.
          </p>
        </motion.div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Superior Card 1 */}
          <motion.div 
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            {...fadeIn}
          >
            <img 
              className="w-full aspect-[3/4] object-cover rounded mb-6" 
              alt="portrait of a distinguished man in a clerical collar with a warm and gentle expression" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZq5GO42KC3rUxDj8UKt2VDuijt46ERBvU_4Y3cmDlyxtat6Ye79Bp7wzxG37aHYdSDw8SHLJtu1JB80pvcA8Szwpc4a1XeRu4fk9Xg3ljTK5BPTR71VkjYic_Hurrd77I57kZEqkVwji79SUrkhHDKdIJxiUIxmP4xRy9ThGu6JBb4kkhLHtIgm3X44uBw0mJAQgkcz0543Zy1yAg9XhVjDEFxy6f49b7jTzJTuCd0MeNc4ezS5lqk10vogbbI-3BKPiN46YDkeE"
            />
            <div className="text-center">
              <h4 className="font-headline-md text-xl text-primary mb-1">Very Rev. Fr. Dr. Mark Obi</h4>
              <p className="font-label-sm text-secondary">Superior General</p>
              <p className="text-sm text-on-surface-variant mt-2 italic">2018 - Present</p>
            </div>
          </motion.div>

          {/* Superior Card 2 */}
          <motion.div 
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            {...fadeIn}
          >
            <img 
              className="w-full aspect-[3/4] object-cover rounded mb-6" 
              alt="dignified priest in traditional liturgical vestments standing against a soft-focus church background" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9VlEB6ThPkVJaMEzyCos2tWk4cSe0CRZfT9QELRuVjkuhZRsTr-nc3tFNl6VfgVRWQ6X8Oulwri4mOmZDLcKz5xDKwCSykpEWubLHOhHIPOA6VVr2mtpt4nvYZe2V-ZDJBC9-KuUiQvH5aJuqyeL9zhkATATHCBkf849OPUM38ItOyD4nBt8YSmvUD9Xyq2Ea1azuZkZ9rowKYxWWA7fv9BXxilY23Eu-R7GHmOiArmgbi6Mc_iexN9D_PDv7W5hFMMnCpbTrCSw"
            />
            <div className="text-center">
              <h4 className="font-headline-md text-xl text-primary mb-1">Rev. Fr. Jude Nwachukwu</h4>
              <p className="font-label-sm text-secondary">Regional Superior (US)</p>
              <p className="text-sm text-on-surface-variant mt-2 italic">2020 - Present</p>
            </div>
          </motion.div>

          {/* Superior Card 3 */}
          <motion.div 
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            {...fadeIn}
          >
            <img 
              className="w-full aspect-[3/4] object-cover rounded mb-6" 
              alt="profile portrait of a senior religious figure with silver hair and a serene contemplative look" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ7cB0WioEHP4dDAvgLwb4vn9mUuVY5nc4RFTVSjCWI3lKBVHEG4dCmS1_fgQ63ZHBCsVRcoNZisTtbT9CyPWqwaE-oCiz-VlqTMuMXTIaWWgzG_ys2DMLJ9z78xHHn07usfbOAfueeLV_QOcxfBwZ_pTiHdnnmUie5TA_5VrLBbd4kBacfG4b-Z6xonA8QQjVWyxJj7E7AxidWb5Jx5Vw5T2ZiBms9ESRyPUMaUi0Vy0z9Slq1eRvf0-Slfhkc3UWAjS1JEAiN20"
            />
            <div className="text-center">
              <h4 className="font-headline-md text-xl text-primary mb-1">Rev. Fr. Pius Anyanwu</h4>
              <p className="font-label-sm text-secondary">Formation Director</p>
              <p className="text-sm text-on-surface-variant mt-2 italic">2016 - 2022</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Superiors;