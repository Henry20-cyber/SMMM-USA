import { useRef, useState, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import vatican from '../assets/vatican.png';
import smmm from '../assets/logo2.png';
import dmmm from '../assets/dmmm.jpeg';
import cbcn from '../assets/CBCN.jpeg';

export default function Links() {
  const constraintsRef = useRef(null);
  const trackRef = useRef(null);
  const controls = useAnimationControls();
  
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [trackWidth, setTrackWidth] = useState(0);

  const links = [
    { name: 'The Vatican', url: 'https://www.vatican.va', img: vatican, fallbackText: 'VAT' },
    { name: 'EWTN Global Network', url: 'https://www.ewtn.com', img: null, fallbackText: 'EWTN', isEwtn: true },
    { name: 'SMMM Nigeria Congregation', url: '#', img: smmm, fallbackText: 'SMMM' },
    { name: 'SMMM Canada', url: 'https://smmmcanadaregion.ca/', img: smmm, fallbackText: 'SMMM' },
    { name: 'DMMM Congregation', url: 'https://sistersdmmm.org/', img: dmmm, fallbackText: 'DMMM' },
    { name: 'CBCN Nigeria', url: 'https://www.cbcn.org', img: cbcn, fallbackText: 'CBCN' },
  ];

  // Triplicate array to ensure a seamless continuous loop layout
  const tripledLinks = [...links, ...links, ...links];

  // Calculate widths dynamically to set perfectly safe drag boundaries
  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.scrollWidth);
    }
  }, []);

  // Control the automatic loop cycle based on interaction states
  useEffect(() => {
    if (!isHovered && !isDragging) {
      controls.start({
        x: [0, -(trackWidth / 3)],
        transition: {
          ease: 'linear',
          duration: 25,
          repeat: Infinity,
        },
      });
    } else {
      controls.stop();
    }
  }, [isHovered, isDragging, trackWidth, controls]);

  return (
    <>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <section className="max-w-7xl mx-auto px-6 py-16 overflow-x-hidden select-none">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 font-['Inter']">
            Resource Network
          </p>
          <h2 className="text-3xl font-semibold tracking-wide text-[#0a192f] font-['Cinzel']">
            Useful Links
          </h2>
          <div className="w-12 h-[2px] bg-[#c9a84c] mx-auto mt-4"></div>
        </div>

        {/* Drag Boundary Window */}
        <div
          ref={constraintsRef}
          className={`relative overflow-hidden py-4 ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setIsDragging(false);
          }}
        >
          {/* Framer Motion Animated Slider Track */}
          <motion.div
            ref={trackRef}
            drag="x"
            dragConstraints={{
              left: -(trackWidth * (2 / 3)),
              right: 0
            }}
            animate={controls}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            className="no-scrollbar flex gap-6 items-center flex-nowrap w-max"
          >
            {tripledLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                // Prevent link triggers if the user was just finishing a drag motion
                onClick={(e) => isDragging && e.preventDefault()}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="flex-shrink-0 flex items-center gap-4 bg-white px-6 py-4 rounded-xl shadow-[0_4px_20px_rgba(10,25,47,0.04)] border border-[#c9a84c]/15 w-[310px] pointer-events-auto"
              >
                {/* Logo Graphic Wrap */}
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden border border-slate-100 ${
                    link.isEwtn ? 'bg-[#1e4d8c] font-["Cinzel"] font-bold text-white text-xs tracking-wider' : 'bg-[#f7f4eb]'
                  }`}
                >
                  {link.img ? (
                    <img
                      src={link.img}
                      alt={link.name}
                      className="w-10 h-10 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : (
                    <span>{link.fallbackText}</span>
                  )}
                </div>

                {/* Typography Block */}
                <span className="font-['Cinzel'] text-sm font-semibold text-[#0a192f] tracking-wide leading-tight">
                  {link.name}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}