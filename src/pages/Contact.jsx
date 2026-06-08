import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Contacts from '../components/Contact';  // <-- import your provided component
import Footer from '../components/Footer';  // <-- import your provided component
import wp7 from '../assets/wallpapers/wp(7).jpg';
import wp8 from '../assets/wallpapers/wp(8).jpg';
import wp5 from '../assets/wallpapers/wp(5).jpg';
import wp2 from '../assets/priests/image(30).jpg';
import wp3 from '../assets/priests/image(17).jpg';

// Hero background images array
const HERO_IMAGES = [
  wp2,
  wp3,
  wp5,
  wp7,
  wp8,
 
];

export default function Contact() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const theme = {
    bluePrimary: '#2563eb',
    blueLight: '#60a5fa',
    blueDeep: '#1e3a8a',
    white: '#ffffff',
    black: '#111111',
    offWhite: '#f8fafc',
    textDark: '#0f172a',
    textMuted: '#475569',
    borderLight: 'rgba(37, 99, 235, 0.12)',
    bgSoft: 'rgba(37, 99, 235, 0.06)'
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const regionData = [
    { state: "California", cities: ["Fresno", "San Bernardino", "San Diego", "Los Angeles", "San Francisco"] },
    { state: "Florida", cities: ["Miami", "St. Augustine", "St. Petersburg", "Orlando"] },
    { state: "Massachusetts", cities: ["Boston"] },
    { state: "New York", cities: ["Syracuse"] },
    { state: "Idaho", cities: ["Boise"] }
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: theme.offWhite }}>
      <Navbar />

      <main className="flex-grow pt-10">
        {/* ========== HERO SECTION with integrated info cards ========== */}
        <section className="relative min-h-[770px] flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 z-0">
            {HERO_IMAGES.map((imgUrl, index) => (
              <img
                key={index}
                src={imgUrl}
                alt={`Sanctuary scene ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-black/80"></div>
          </div>

          {/* Top text content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-20 pb-12">
            <span className="text-[10px] tracking-[0.3em] font-['Cinzel'] font-bold uppercase mb-3" style={{ color: theme.blueLight }}>
              Get In Touch With Our Brothers
            </span>
            <h1 className="font-['Cinzel'] text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide leading-tight mb-4">
              We Are Here to Serve
            </h1>
            <div className="w-12 h-[1px] mb-6" style={{ backgroundColor: theme.blueLight }}></div>
            <p className="font-['Cormorant_Garamond'] text-lg sm:text-xl text-white/90 italic max-w-2xl leading-relaxed">
              “Communication is a form of community — a bridge of mercy that connects us. Whether you seek prayer, want to support our mission, or are exploring a vocation, we welcome your voice.”
            </p>
          </div>

          {/* Info cards inside hero */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12 md:pb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Address Card */}
              <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full" style={{ border: `1px solid ${theme.borderLight}` }}>
                <div className="w-12 h-12 flex items-center justify-center mb-6" style={{ backgroundColor: theme.bgSoft, border: `1px solid ${theme.borderLight}` }}>
                  <span className="material-symbols-outlined text-2xl" style={{ color: theme.bluePrimary }}>location_on</span>
                </div>
                <h3 className="font-['Cinzel'] text-sm font-bold tracking-widest uppercase mb-3" style={{ color: theme.black }}>SMMM USA Regional House</h3>
                <p className="font-['Cormorant_Garamond'] text-base leading-relaxed flex-grow" style={{ color: theme.textMuted }}>
                  1100 W. Hawaii Avenue<br />
                  Nampa, Idaho, 83686<br />
                  United States
                </p>
              </div>

              {/* Email Card */}
              <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full" style={{ border: `1px solid ${theme.borderLight}` }}>
                <div className="w-12 h-12 flex items-center justify-center mb-6" style={{ backgroundColor: theme.bgSoft, border: `1px solid ${theme.borderLight}` }}>
                  <span className="material-symbols-outlined text-2xl" style={{ color: theme.bluePrimary }}>mail</span>
                </div>
                <h3 className="font-['Cinzel'] text-sm font-bold tracking-widest uppercase mb-3" style={{ color: theme.black }}>Electronic Inquiries</h3>
                <div className="space-y-2 flex-grow">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: theme.textMuted }}>General:</span>
                    <a href="mailto:info@smmm-american.org" className="font-medium transition-colors no-underline" style={{ color: theme.bluePrimary }}>info@smmm-american.org</a>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: theme.textMuted }}>Vocations Office:</span>
                    <a href="mailto:vocations@smmm-american.org" className="font-medium transition-colors no-underline" style={{ color: theme.bluePrimary }}>vocations@smmm-american.org</a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full" style={{ border: `1px solid ${theme.borderLight}` }}>
                <div className="w-12 h-12 flex items-center justify-center mb-6" style={{ backgroundColor: theme.bgSoft, border: `1px solid ${theme.borderLight}` }}>
                  <span className="material-symbols-outlined text-2xl" style={{ color: theme.bluePrimary }}>call</span>
                </div>
                <h3 className="font-['Cinzel'] text-sm font-bold tracking-widest uppercase mb-3" style={{ color: theme.black }}>Office Support</h3>
                <div className="flex-grow">
                  <span className="text-sm font-semibold block mb-1" style={{ color: theme.bluePrimary }}>+1 (559) 555-0123</span>
                  <p className="text-base leading-relaxed" style={{ color: theme.textMuted }}>Monday – Friday<br />9:00 AM – 5:00 PM PST</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== CONTACT FORM (imported component) ========== */}
        <Contacts />

        {/* ========== REGIONAL FOOTPRINT & MAP (separate section) ========== */}
        <section className="py-20 px-6 border-t" style={{ borderColor: theme.borderLight }}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left side: Regional Footprint */}
              <div>
                <h3 className="font-['Cinzel'] text-xl font-bold tracking-wide mb-4" style={{ color: theme.black }}>Our Regional Footprint</h3>
                <p className="font-['Cormorant_Garamond'] text-base mb-6 leading-relaxed" style={{ color: theme.textMuted }}>
                  The Sons of Mary Mother of Mercy actively serve across diverse dioceses and apostolates within North America.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 py-6 border-t border-b" style={{ borderColor: theme.borderLight }}>
                  {regionData.map((region, idx) => (
                    <div key={idx}>
                      <h4 className="font-['Cinzel'] text-sm font-bold mb-3 uppercase tracking-wide" style={{ color: theme.bluePrimary }}>
                        {region.state}
                      </h4>
                      <ul className="space-y-2 text-sm font-medium list-none p-0 m-0" style={{ color: theme.textMuted }}>
                        {region.cities.map((city, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: theme.blueLight }} />
                            <span>{city}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side: Map */}
              <div className="relative group shadow-md overflow-hidden bg-white" style={{ border: `1px solid ${theme.borderLight}` }}>
                <div className="aspect-video overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="Map highlighting pastoral regions"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQRPMjMEpWYJ0Kx4ZjD0xih8eWHHOWDGYZ1Qxz0rlpR_nSR8urztzQRX_JVN9KZVxuxfH088fUPND-Pom2SzNmDbWPmdY20xa-xoyIVJPxGOed3vQ0e3PiYty-aJZ8owZ_wNLk0s1zEtwpGPUHXSK3ku8gjhnqigG6SRGWvxytCUaO96QLw42mkHZbmG2g6daxT_-4uA8PjzayPpzOWnyt2X8Df5qB8wbKA7GrqPe2YnP9OHB57xGwdOYgAkN8ioctYoRqsLRryFwH"
                  />
                  <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 bg-white/95 px-4 py-2 shadow-sm backdrop-blur-sm" style={{ border: `1px solid ${theme.borderLight}` }}>
                    <span className="font-['Cinzel'] text-[9px] font-bold uppercase tracking-widest" style={{ color: theme.black }}>Regional Centers of Mission</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== PRAYER CALLOUT (unchanged) ========== */}
       <section className="py-20 text-center relative overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
  {/* Subtle grid pattern in light blue (very faint) */}
  <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
  
  <div className="max-w-2xl mx-auto px-6 relative z-10 flex flex-col items-center">
    {/* Icon – blue */}
    <div className="mb-4" style={{ color: '#3b82f6' }}>
      <span className="material-symbols-outlined text-4xl">volunteer_activism</span>
    </div>
    
    {/* Heading – black */}
    <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold tracking-wide mb-4" style={{ color: '#000000' }}>
      Intercessory Prayer
    </h2>
    
    {/* Divider – blue */}
    <div className="w-8 h-[1px] mb-6" style={{ backgroundColor: '#3b82f6' }}></div>
    
    {/* Description – black / slightly muted for readability */}
    <p className="font-['Cormorant_Garamond'] text-lg max-w-xl mb-8 leading-relaxed" style={{ color: '#1f2937' }}>
      Are you in need of spiritual support? Our community remembers every intention shared with us during our daily conventual Mass and community prayers.
    </p>
    
    {/* CTA Button – blue background, white text, blue border, hover darker */}
    <a
      className="inline-block px-8 py-4 text-xs font-['Cinzel'] font-bold uppercase tracking-widest transition-all duration-300 no-underline rounded"
      style={{
        backgroundColor: '#3b82f6',
        color: '#ffffff',
        border: '1px solid #3b82f6',
      }}
      href="#"
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#2563eb';
        e.currentTarget.style.borderColor = '#2563eb';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#3b82f6';
        e.currentTarget.style.borderColor = '#3b82f6';
      }}
    >
      Submit a Prayer Request
    </a>
  </div>
</section>
      </main>

      {/* Footer (unchanged) */}
     <Footer />
    </div>
  );
}