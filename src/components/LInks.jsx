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

  // Green, white, black palette
  const theme = {
    greenLight: '#4ade80',
    greenPrimary: '#166534',
    greenDeep: '#064e3b',
    white: '#ffffff',
    black: '#111111',
    offWhite: '#fafaf5',
    textDark: '#1a1a1a',
    textMuted: '#4b5563',
    borderGreen: 'rgba(74, 222, 128, 0.15)',
    bgGreenSoft: 'rgba(22, 101, 52, 0.05)'
  };

  const links = [
    { name: 'The Vatican', url: 'https://www.vatican.va', img: vatican, fallbackText: 'VAT' },
    { name: 'EWTN Global Network', url: 'https://www.ewtn.com', img: null, fallbackText: 'EWTN', isEwtn: true },
    { name: 'SMMM Nigeria Congregation', url: 'https://smmmcongregation.org/', img: smmm, fallbackText: 'SMMM' },
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
    if (!isHovered && !isDragging && trackWidth) {
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
          <p className="text-xs font-bold uppercase tracking-widest mb-2 font-['Inter']" style={{ color: theme.greenPrimary }}>
            Resource Network
          </p>
          <h2 className="text-3xl font-semibold tracking-wide font-['Cinzel']" style={{ color: theme.black }}>
            Useful Links
          </h2>
          <div className="w-12 h-[2px] mx-auto mt-4" style={{ backgroundColor: theme.greenLight }}></div>
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
                onClick={(e) => isDragging && e.preventDefault()}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="flex-shrink-0 flex items-center gap-4 px-6 py-4 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] w-[310px] pointer-events-auto"
                style={{ backgroundColor: theme.white, border: `1px solid ${theme.borderGreen}` }}
              >
                {/* Logo Graphic Wrap */}
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden ${
                    link.isEwtn ? 'font-["Cinzel"] font-bold text-white text-xs tracking-wider' : ''
                  }`}
                  style={{
                    backgroundColor: link.isEwtn ? theme.greenPrimary : theme.offWhite,
                    border: `1px solid ${theme.borderGreen}`
                  }}
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
                    <span style={{ color: link.isEwtn ? theme.white : theme.greenPrimary }}>{link.fallbackText}</span>
                  )}
                </div>

                {/* Typography Block */}
                <span className="font-['Cinzel'] text-sm font-semibold tracking-wide leading-tight" style={{ color: theme.black }}>
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