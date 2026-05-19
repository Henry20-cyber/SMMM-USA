import React from 'react';

const Banner = () => {
  const theme = {
    navy: '#0a192f',
    goldMuted: 'rgba(201, 168, 76, 0.35)',
    goldFaint: 'rgba(201, 168, 76, 0.2)',
    borderGold: 'rgba(201, 168, 76, 0.12)'
  };

  // The text components array (reused to build the secondary track loop)
  const items = [
    "Evangelizare Pauperibus Misit Me",
    "Sons of Mary Mother of Mercy",
    "American Region · Est. 1998",
    "Mercy · Compassion · Forgiveness · Kindness"
  ];

  // Render method for a single track row
  const renderTrackContent = () => (
    <>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span 
            className="whitespace-nowrap tracking-[0.2em] uppercase select-none"
            style={{ 
              fontFamily: "'Cinzel', serif", 
              fontSize: '0.65rem', 
              color: theme.goldMuted 
            }}
          >
            {item}
          </span>
          <span className="select-none" style={{ color: theme.goldFaint }}>✦</span>
        </React.Fragment>
      ))}
    </>
  );

  return (
    <div 
      className="relative w-full py-4 overflow-hidden border-t border-b flex"
      style={{ 
        backgroundColor: theme.navy, 
        borderColor: theme.borderGold 
      }}
    >
      {/* 
        Injecting the infinite loop keyframes directly. 
        translateX(-100%) pushes the content perfectly back across the screen
      */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee-track {
          animation: marquee 25s linear infinite;
        }
      `}} />

      {/* Wrapping Container for Dual Looping Tracks */}
      <div className="flex min-w-full shrink-0 items-center justify-around gap-16 pr-16 animate-marquee-track">
        {renderTrackContent()}
      </div>
      
      {/* Secondary Track - Shadows the original layout to eliminate blank space resets */}
      <div aria-hidden="true" className="flex min-w-full shrink-0 items-center justify-around gap-16 pr-16 animate-marquee-track">
        {renderTrackContent()}
      </div>
    </div>
  );
};

export default Banner;