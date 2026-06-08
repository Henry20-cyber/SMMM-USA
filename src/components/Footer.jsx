import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScrollVisibility = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScrollVisibility);
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const gradientMain = 'linear-gradient(135deg, #0a2a4a 0%, #134b8a 40%, #1e6bb5 80%, #3b8fd9 100%)';
  const gradientOverlay = 'radial-gradient(circle at 0% 20%, rgba(96, 165, 250, 0.15) 0%, transparent 60%)';
  const gradientBorder = 'linear-gradient(90deg, rgba(96,165,250,0.4), rgba(59,130,246,0.8), rgba(96,165,250,0.4))';

  return (
    <footer
      className="relative py-16 px-6 overflow-hidden"
      style={{ background: gradientMain, color: '#ffffff' }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: gradientOverlay }} />
      <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: gradientBorder }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand/Mission Column */}
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ border: '1.5px solid rgba(147, 197, 253, 0.6)' }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-[18px] h-[18px]">
                    <line x1="12" y1="2" x2="12" y2="22" stroke="#93c5fd" strokeWidth="1.5" />
                    <line x1="5" y1="8" x2="19" y2="8" stroke="#93c5fd" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <div
                    className="text-base font-bold tracking-wider leading-none"
                    style={{ fontFamily: "'Cinzel Decorative', serif", color: '#e2e8f0' }}
                  >
                    SMMM
                  </div>
                  <div
                    className="text-[0.75rem] tracking-wide mt-0.5"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: '#cbd5e1' }}
                  >
                    American Region
                  </div>
                </div>
              </div>
              <p
                className="text-[1.15rem] leading-relaxed max-w-[320px]"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: '#f1f5f9' }}
              >
                Sons of Mary Mother of Mercy — bearing witness to God's mercy through compassion,
                forgiveness, and kindness in mission across America.
              </p>
            </div>
            <p
              className="text-[0.6rem] tracking-[0.15em] uppercase italic mt-6"
              style={{ fontFamily: "'Cinzel', serif", color: '#93c5fd' }}
            >
              Evangelizare Pauperibus Misit Me
            </p>
          </div>

          {/* Quick Links Column - FIXED */}
          <div>
            <p
              className="text-[0.62rem] font-bold tracking-[0.18em] uppercase mb-5"
              style={{ fontFamily: "'Cinzel', serif", color: '#93c5fd' }}
            >
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {[
                { path: '/charism', label: 'Charism' },
                { path: '/apostolate', label: 'Apostolate' },
                { path: '/history', label: 'History' },
                { path: '/priests', label: 'Our Priests' },
                { path: '/gallery', label: 'Gallery Archive' },
                { path: '/donations', label: 'Donate' }
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-[0.92rem] capitalize transition-colors duration-300 hover:text-blue-200"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: '#e2e8f0' }}
                >
                  {item.label}
                </Link>
              ))}
              <a href='../materials/SMMM_USA_Privacy_Policy.pdf' target="_blank" rel="noopener noreferrer" className="text-[0.92rem] capitalize transition-colors duration-300 hover:text-blue-200">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Current Leadership Column */}
          <div>
            <p
              className="text-[0.62rem] font-bold tracking-[0.18em] uppercase mb-5"
              style={{ fontFamily: "'Cinzel', serif", color: '#93c5fd' }}
            >
              Current Leadership
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-[0.68rem] font-bold tracking-wider uppercase mb-0.5" style={{ fontFamily: "'Cinzel', serif", color: '#bfdbfe' }}>
                  Superior
                </p>
                <p className="text-[0.88rem]" style={{ color: '#f8fafc' }}>Very Rev. Dr. Anselm Ibe</p>
              </div>
              <div>
                <p className="text-[0.68rem] font-bold tracking-wider uppercase mb-0.5" style={{ fontFamily: "'Cinzel', serif", color: '#bfdbfe' }}>
                  Bursar
                </p>
                <p className="text-[0.88rem]" style={{ color: '#f8fafc' }}>Rev. Fr. Michael Okafor</p>
              </div>
              <div>
                <p className="text-[0.68rem] font-bold tracking-wider uppercase mb-0.5" style={{ fontFamily: "'Cinzel', serif", color: '#bfdbfe' }}>
                  Secretary
                </p>
                <p className="text-[0.88rem]" style={{ color: '#f8fafc' }}>Rev. Fr. Thaddeus Agbasonu</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom panel */}
        <div
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(147, 197, 253, 0.3)' }}
        >
          <span className="text-center sm:text-left flex flex-col gap-1">
          <p className="text-[0.58rem] tracking-wider text-center sm:text-left" style={{ fontFamily: "'Cinzel', serif", color: '#94a3b8' }}>
            © {new Date().getFullYear()} Sons of Mary Mother of Mercy — American Region. All Rights Reserved.
          </p>
          <p className="text-[0.58rem] tracking-wider text-center sm:text-left" style={{ fontFamily: "'Cinzel', serif", color: '#94a3b8' }}
          href='//https://henrycodes-portfolio.vercel.app/'>
            Built by HenryCodes ©
          </p>
          </span>
          <div className="flex gap-4">
            <span className="w-7 h-7 rounded-full flex items-center justify-center border border-blue-400/50 cursor-pointer transition-all duration-300 hover:border-blue-300">
              <svg viewBox="0 0 16 16" fill="none" className="w-[12px] h-[12px]">
                <rect x="2" y="2" width="12" height="12" rx="3" stroke="#93c5fd" strokeWidth="1.2" />
                <circle cx="8" cy="8" r="2.5" stroke="#93c5fd" strokeWidth="1.2" />
                <circle cx="11.5" cy="4.5" r="0.8" fill="#93c5fd" />
              </svg>
            </span>
            <span className="w-7 h-7 rounded-full flex items-center justify-center border border-blue-400/50 cursor-pointer transition-all duration-300 hover:border-blue-300">
              <svg viewBox="0 0 16 16" fill="none" className="w-[12px] h-[12px]">
                <path d="M2 4 L8 9 L14 4" stroke="#93c5fd" strokeWidth="1.2" />
                <rect x="1" y="3" width="14" height="10" rx="2" stroke="#93c5fd" strokeWidth="1.2" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className={`fixed bottom-8 left-8 w-11 h-11 flex items-center justify-center rounded-full transition-all duration-500 z-50 shadow-lg ${
          showBackToTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        style={{
          background: 'linear-gradient(145deg, #1e6bb5, #0f3b6b)',
          border: 'none',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = 'linear-gradient(145deg, #3b8fd9, #1e6bb5)')
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = 'linear-gradient(145deg, #1e6bb5, #0f3b6b)')
        }
      >
        <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
          <path d="M4 10 L8 6 L12 10" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;