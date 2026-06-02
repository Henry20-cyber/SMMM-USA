import { useState, useEffect } from 'react';

const Footer = () => {
  // Green, white, black palette – dark text for high contrast on white background
  const theme = {
    greenDeep: '#064e3b',
    greenPrimary: '#166534',
    greenLight: '#4ade80',
    white: '#ffffff',
    black: '#000000',          // pure black for darkest text
    textDark: '#1a1a1a',      // very dark gray (almost black)
    textMuted: '#3a3a3a',     // dark muted
    textLight: '#555555',      // medium-dark for legal
    borderGreen: 'rgba(22, 101, 52, 0.1)'
  };

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScrollVisibility);
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-6 border-t" style={{ backgroundColor: theme.white, borderColor: theme.borderGreen }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand/Mission Column */}
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ border: `1.5px solid ${theme.greenLight}80` }}>
                  <svg viewBox="0 0 24 24" fill="none" className="w-[18px] h-[18px]">
                    <line x1="12" y1="2" x2="12" y2="22" stroke={theme.greenPrimary} strokeWidth="1.5"/>
                    <line x1="5" y1="8" x2="19" y2="8" stroke={theme.greenPrimary} strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <div className="text-base font-bold tracking-wider leading-none" style={{ fontFamily: "'Cinzel Decorative', serif", color: theme.greenPrimary }}>SMMM</div>
                  <div className="text-[0.75rem] tracking-wide mt-0.5" style={{ fontFamily: "'Cormorant Garamond', serif", color: theme.textMuted }}>American Region</div>
                </div>
              </div>
              <p className="text-[0.95rem] leading-relaxed max-w-[320px]" style={{ fontFamily: "'Cormorant Garamond', serif", color: theme.textDark }}>
                Sons of Mary Mother of Mercy — bearing witness to God's mercy through compassion, forgiveness, and kindness in mission across America.
              </p>
            </div>
            <p className="text-[0.6rem] tracking-[0.15em] uppercase italic mt-6" style={{ fontFamily: "'Cinzel', serif", color: theme.greenPrimary }}>
              Evangelizare Pauperibus Misit Me
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <p className="text-[0.62rem] font-bold tracking-[0.18em] uppercase mb-5" style={{ fontFamily: "'Cinzel', serif", color: theme.greenPrimary }}>
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {['about', 'charism', 'apostolate', 'history', 'mission', 'donate'].map((link) => (
                <a 
                  key={link}
                  href={`#${link}`} 
                  className="text-[0.92rem] transition-colors duration-300 capitalize" 
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: theme.textMuted }}
                  onMouseEnter={(e) => e.target.style.color = theme.greenPrimary}
                  onMouseLeave={(e) => e.target.style.color = theme.textMuted}
                >
                  {link === 'about' ? 'About Us' : link === 'mission' ? 'Mission Areas' : link}
                </a>
              ))}
            </div>
          </div>

          {/* Current Leadership Column */}
          <div>
            <p className="text-[0.62rem] font-bold tracking-[0.18em] uppercase mb-5" style={{ fontFamily: "'Cinzel', serif", color: theme.greenPrimary }}>
              Current Leadership
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-[0.68rem] font-bold tracking-wider uppercase mb-0.5" style={{ fontFamily: "'Cinzel', serif", color: theme.greenPrimary }}>Superior</p>
                <p className="text-[0.88rem]" style={{ color: theme.textDark }}>Very Rev. Dr. Anselm Ibe</p>
              </div>
              <div>
                <p className="text-[0.68rem] font-bold tracking-wider uppercase mb-0.5" style={{ fontFamily: "'Cinzel', serif", color: theme.greenPrimary }}>Bursar</p>
                <p className="text-[0.88rem]" style={{ color: theme.textDark }}>Rev. Fr. Michael Okafor</p>
              </div>
              <div>
                <p className="text-[0.68rem] font-bold tracking-wider uppercase mb-0.5" style={{ fontFamily: "'Cinzel', serif", color: theme.greenPrimary }}>Secretary</p>
                <p className="text-[0.88rem]" style={{ color: theme.textDark }}>Rev. Fr. Thaddeus Agbasonu</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Panel */}
        <div className="pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderColor: theme.borderGreen }}>
          <p className="text-[0.58rem] tracking-wider text-center sm:text-left" style={{ fontFamily: "'Cinzel', serif", color: theme.textLight }}>
            © {new Date().getFullYear()} Sons of Mary Mother of Mercy — American Region. All Rights Reserved.
          </p>
          
          <div className="flex gap-4">
            <span className="w-7 h-7 rounded-full flex items-center justify-center border cursor-pointer transition-all duration-300" style={{ borderColor: `${theme.greenPrimary}40` }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = theme.greenPrimary}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = `${theme.greenPrimary}40`}>
              <svg viewBox="0 0 16 16" fill="none" className="w-[12px] h-[12px]">
                <rect x="2" y="2" width="12" height="12" rx="3" stroke={theme.greenPrimary} strokeWidth="1.2"/>
                <circle cx="8" cy="8" r="2.5" stroke={theme.greenPrimary} strokeWidth="1.2"/>
                <circle cx="11.5" cy="4.5" r="0.8" fill={theme.greenPrimary}/>
              </svg>
            </span>
            <span className="w-7 h-7 rounded-full flex items-center justify-center border cursor-pointer transition-all duration-300" style={{ borderColor: `${theme.greenPrimary}40` }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = theme.greenPrimary}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = `${theme.greenPrimary}40`}>
              <svg viewBox="0 0 16 16" fill="none" className="w-[12px] h-[12px]">
                <path d="M2 4 L8 9 L14 4" stroke={theme.greenPrimary} strokeWidth="1.2"/>
                <rect x="1" y="3" width="14" height="10" rx="2" stroke={theme.greenPrimary} strokeWidth="1.2"/>
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop} 
        aria-label="Scroll back to top"
        className={`fixed bottom-8 left-8 w-11 h-11 flex items-center justify-center border cursor-pointer transition-all duration-500 z-50 shadow-md ${
          showBackToTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        style={{ backgroundColor: theme.white, borderColor: theme.greenPrimary, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.greenLight}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme.white}>
        <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
          <path d="M4 10 L8 6 L12 10" stroke={theme.greenPrimary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </footer>
  );
};

export default Footer;