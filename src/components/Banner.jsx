import React from 'react';

const Banner = () => {
  // New palette: green background, white text
  const theme = {
    greenBg: '#166534',     // rich green background (primary)
    white: '#ffffff',
    whiteMuted: 'rgba(255, 255, 255, 0.7)',
    whiteFaint: 'rgba(255, 255, 255, 0.3)'
  };

  const items = [
    "Evangelizare Pauperibus Misit Me",
    "Sons of Mary Mother of Mercy",
    "American Region · Est. 1998",
    "Mercy · Compassion · Forgiveness · Kindness"
  ];

  const renderTrackContent = () => (
    <>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span 
            className="whitespace-nowrap tracking-[0.2em] uppercase select-none"
            style={{ 
              fontFamily: "'Cinzel', serif", 
              fontSize: '0.65rem', 
              color: theme.whiteMuted 
            }}
          >
            {item}
          </span>
          <span className="select-none" style={{ color: theme.whiteFaint }}>✦</span>
        </React.Fragment>
      ))}
    </>
  );

  return (
    <div 
      className="relative w-full py-4 overflow-hidden border-t border-b flex"
      style={{ 
        backgroundColor: theme.greenBg, 
        borderColor: theme.whiteFaint 
      }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee-track {
          animation: marquee 25s linear infinite;
        }
      `}} />

      <div className="flex min-w-full shrink-0 items-center justify-around gap-16 pr-16 animate-marquee-track">
        {renderTrackContent()}
      </div>
      
      <div aria-hidden="true" className="flex min-w-full shrink-0 items-center justify-around gap-16 pr-16 animate-marquee-track">
        {renderTrackContent()}
      </div>
    </div>
  );
};

export default Banner;