import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import wp7 from '../assets/wallpapers/wp(7).jpg';
import wp8 from '../assets/wallpapers/wp(8).jpg';
import wp5 from '../assets/wallpapers/wp(5).jpg';

// Hero background images array
const HERO_IMAGES = [
  wp5,
  wp7,
  wp8,
  "https://images.unsplash.com/photo-1515787366009-7cbdd2dc587b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1545232979-8bf34eb9757b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1601662528567-526cd06f6582?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
];

export default function Contact() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    inquiryType: 'General Inquiry',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle');

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ fullName: '', email: '', inquiryType: 'General Inquiry', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1200);
  };

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

      <main className="flex-grow pt-10  ">
        {/* ========== HERO SECTION with integrated info cards ========== */}
        <section className="relative min-h-[770px] flex flex-col justify-between overflow-hidden">
          {/* Rotating background images */}
          <div className="absolute inset-0 z-0">
            {HERO_IMAGES.map((imgUrl, index) => (
              <img
                key={imgUrl}
                src={imgUrl}
                alt={`Sanctuary scene ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            {/* Increased overlay opacity from 60% to 80% for better text readability */}
            <div className="absolute inset-0 bg-black/80"></div>
          </div>

          {/* Top / center text content */}
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

          {/* Info cards now inside hero section, at the bottom */}
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

        {/* Contact Form Section - unchanged except removal of old card section */}
        <section className="py-20 px-6 border-t border-b" style={{ backgroundColor: theme.offWhite, borderColor: theme.borderLight }}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 bg-white p-8 md:p-12 shadow-sm" style={{ border: `1px solid ${theme.borderLight}` }}>
              <h2 className="font-['Cinzel'] text-2xl font-bold tracking-wide mb-4" style={{ color: theme.black }}>Send a Message</h2>
              <p className="font-['Cormorant_Garamond'] text-base mb-8 leading-relaxed" style={{ color: theme.textMuted }}>
                Your messages are handled with utmost pastoral care. Please allow 24–48 hours for a response.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-['Cinzel'] font-bold tracking-widest uppercase" style={{ color: theme.black }}>Full Name</label>
                    <input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full p-3.5 text-sm outline-none transition-all rounded-sm"
                      style={{ backgroundColor: theme.offWhite, border: `1px solid ${theme.borderLight}`, color: theme.textDark }}
                      placeholder="John Doe"
                      type="text"
                      required
                      disabled={formStatus === 'sending'}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-['Cinzel'] font-bold tracking-widest uppercase" style={{ color: theme.black }}>Email Address</label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3.5 text-sm outline-none transition-all rounded-sm"
                      style={{ backgroundColor: theme.offWhite, border: `1px solid ${theme.borderLight}`, color: theme.textDark }}
                      placeholder="john@example.com"
                      type="email"
                      required
                      disabled={formStatus === 'sending'}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-['Cinzel'] font-bold tracking-widest uppercase" style={{ color: theme.black }}>Inquiry Type</label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    disabled={formStatus === 'sending'}
                    className="w-full p-3.5 text-sm outline-none transition-all rounded-sm appearance-none"
                    style={{ backgroundColor: theme.offWhite, border: `1px solid ${theme.borderLight}`, color: theme.textDark }}
                  >
                    <option>General Inquiry</option>
                    <option>Prayer Request</option>
                    <option>Vocations Interest</option>
                    <option>Mission Appeal Support</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-['Cinzel'] font-bold tracking-widest uppercase" style={{ color: theme.black }}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-3.5 text-sm outline-none transition-all rounded-sm resize-none"
                    style={{ backgroundColor: theme.offWhite, border: `1px solid ${theme.borderLight}`, color: theme.textDark }}
                    placeholder="How can we assist you today?"
                    rows="5"
                    required
                    disabled={formStatus === 'sending'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full sm:w-auto px-8 py-4 text-xs font-['Cinzel'] font-bold uppercase tracking-widest transition-colors shadow-sm cursor-pointer"
                  style={{
                    backgroundColor: formStatus === 'sending' ? theme.blueDeep : (formStatus === 'success' ? theme.bluePrimary : theme.bluePrimary),
                    color: theme.white,
                    opacity: formStatus === 'sending' ? 0.8 : 1
                  }}
                >
                  {formStatus === 'idle' && 'Submit Message'}
                  {formStatus === 'sending' && 'SENDING REQUEST...'}
                  {formStatus === 'success' && 'MESSAGE SENT'}
                </button>
              </form>
            </div>

            {/* Right Column: Footprint + Map (unchanged) */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h3 className="font-['Cinzel'] text-xl font-bold tracking-wide mb-4" style={{ color: theme.black }}>Our Regional Footprint</h3>
                <p className="font-['Cormorant_Garamond'] text-base mb-6 leading-relaxed" style={{ color: theme.textMuted }}>
                  The Sons of Mary Mother of Mercy actively serve across diverse dioceses and apostolates within North America.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 py-6 border-t border-b" style={{ borderColor: theme.borderLight }}>
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

        {/* Prayer Callout (unchanged) */}
        <section className="py-20 text-white text-center relative overflow-hidden" style={{ backgroundColor: theme.blueDeep }}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
          <div className="max-w-2xl mx-auto px-6 relative z-10 flex flex-col items-center">
            <div className="mb-4" style={{ color: theme.blueLight }}>
              <span className="material-symbols-outlined text-4xl">volunteer_activism</span>
            </div>
            <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold tracking-wide mb-4">Intercessory Prayer</h2>
            <div className="w-8 h-[1px] mb-6" style={{ backgroundColor: theme.blueLight }}></div>
            <p className="font-['Cormorant_Garamond'] text-lg text-white/90 max-w-xl mb-8 leading-relaxed">
              Are you in need of spiritual support? Our community remembers every intention shared with us during our daily conventual Mass and community prayers.
            </p>
            <a
              className="inline-block border px-8 py-4 text-xs font-['Cinzel'] font-bold uppercase tracking-widest transition-all duration-300 no-underline"
              style={{ borderColor: theme.blueLight, color: theme.blueLight }}
              href="#"
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = theme.blueLight; e.currentTarget.style.color = theme.black; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = theme.blueLight; }}
            >
              Submit a Prayer Request
            </a>
          </div>
        </section>
      </main>

      {/* Footer (unchanged) */}
      <footer className="border-t py-16 px-6" style={{ backgroundColor: theme.white, borderColor: theme.borderLight }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-['Cinzel'] text-base font-bold tracking-wide" style={{ color: theme.black }}>Sons of Mary Mother of Mercy</h4>
            <p className="font-['Cormorant_Garamond'] text-base max-w-sm leading-relaxed" style={{ color: theme.textMuted }}>
              A congregation of religious brothers and priests dedicated to the spiritual and social welfare of God's people through explicit works of mercy.
            </p>
            <div className="flex gap-3 pt-2">
              <a className="w-9 h-9 flex items-center justify-center transition-colors" href="#" style={{ border: `1px solid ${theme.borderLight}`, color: theme.textMuted }}>
                <span className="material-symbols-outlined text-sm">public</span>
              </a>
              <a className="w-9 h-9 flex items-center justify-center transition-colors" href="#" style={{ border: `1px solid ${theme.borderLight}`, color: theme.textMuted }}>
                <span className="material-symbols-outlined text-sm">share</span>
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-[10px] font-['Cinzel'] font-bold uppercase tracking-widest mb-4" style={{ color: theme.black }}>Explore</h5>
            <ul className="space-y-3 text-sm font-medium list-none p-0 m-0">
              {['History', 'Charism', 'Founder', 'Mission Appeal'].map((link) => (
                <li key={link}><a className="transition-colors no-underline" href="#" style={{ color: theme.textMuted }}>{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-['Cinzel'] font-bold uppercase tracking-widest mb-4" style={{ color: theme.black }}>Resources</h5>
            <ul className="space-y-3 text-sm font-medium list-none p-0 m-0">
              <li><a className="transition-colors no-underline" href="#" style={{ color: theme.textMuted }}>Gallery Archive</a></li>
              <li><a className="transition-colors no-underline" href="#" style={{ color: theme.textMuted }}>Privacy Policy</a></li>
              <li><a className="font-bold underline transition-colors" href="#" style={{ color: theme.bluePrimary }}>Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t text-center" style={{ borderColor: theme.borderLight }}>
          <p className="text-[10px] font-['Cinzel'] font-bold tracking-[0.15em] uppercase" style={{ color: theme.textMuted }}>
            &copy; {new Date().getFullYear()} Sons of Mary Mother of Mercy (SMMM) American Region. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}