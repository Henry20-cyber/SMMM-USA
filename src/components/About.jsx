// import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <motion.section 
      className="py-section-padding px-6"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image Side */}
        <motion.div className="relative" variants={fadeIn}>
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/10 rounded-full z-0"></div>
          <img 
            className="rounded-xl shadow-xl relative z-10 w-full aspect-[4/3] object-cover" 
            alt="diverse group of religious community members gathered in a warm sunlit hall engaged in thoughtful conversation" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEAuj36GhS4HkqCjV5ACAvO4GRdPC2wcBvVjoZaTgPJU1wWH8Alm5BElqd59ljouPYJT4u3rcf3Nc9CgyzPxxSlczUSH10Wi-GD6nWcY-xiD317lduCFuUyBpJxFEamw1uqLd4CsqVIiDS4n-RjsLne3obpJ__Gnu6GjfdNpzWPkfv8J7dqQqqS6yRKis5WBw0y1a6ff27lLan8tyuZ01uCZwJ_1Y7raosVpi7DjqvwJ-p-JVjidi8xS_S_Inb5GDSXW7awaQs3IM"
          />
        </motion.div>

        {/* Text Side */}
        <div className="space-y-6">
          <motion.span 
            className="text-secondary font-label-sm tracking-widest uppercase"
            variants={fadeIn}
          >
            Our Identity
          </motion.span>
          
          <motion.h2 
            className="font-headline-md text-headline-md text-primary"
            variants={fadeIn}
          >
            A Presence of Grace in the United States
          </motion.h2>

          <motion.p 
            className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed"
            variants={fadeIn}
          >
            The US Chapter of the Sons of Mary Mother of Mercy represents a vibrant extension of our global mission. We are a religious congregation of priests and brothers dedicated to living out the corporal and spiritual works of mercy in every community we serve.
          </motion.p>

          <motion.p 
            className="font-body-md text-body-md text-on-surface-variant"
            variants={fadeIn}
          >
            Rooted in tradition but focused on the needs of the modern world, our presence in America bridges cultural heritage with local pastoral care, fostering a community of faith and deep spiritual resonance.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;