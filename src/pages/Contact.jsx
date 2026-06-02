import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

// Hero background images array
const HERO_IMAGES = [
  "https://lh3.googleusercontent.com/aida/ADBb0uhkzXP_8vlMoQMOvYMXQmjLJcpKQcdbsTIud-fnC01NIrgs2YsUGAw7EJBhkX9z5Lc-rFdb9iSNDjrMqp-HSTqfO1PhcwiyjI5PC-mOvRezxSKgfeR2W-So0PmXDamzmqzCeJ9wwA74hV7FJ0F3dNHkocAFFIAVOLIIOvxZa8E_h32tpNiFglQzJ1M2Mtdb0AxgetGualvyyNnxi7pGal8cOo9VRj1D9mZLTtI3iJIps0mGUZ_UHYQisV7o",
  "https://images.unsplash.com/photo-1548625361-155deee26575?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1200&q=80",
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

  // Green/white/black theme
  const theme = {
    greenPrimary: '#166534',
    greenLight: '#4ade80',
    greenDeep: '#064e3b',
    white: '#ffffff',
    black: '#111111',
    offWhite: '#fafaf5',
    textDark: '#1a1a1a',
    textMuted: '#4b5563',
    borderLight: 'rgba(22, 101, 52, 0.12)',
    bgSoft: 'rgba(22, 101, 52, 0.06)'
  };

  // 10-second carousel
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

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: theme.offWhite }}>
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Hero Section with Full-Width Background + Improved Overlay */}
        <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
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
            {/* Dark overlay for text readability (increased opacity) */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto flex flex-col items-center">
            <span className="text-[10px] tracking-[0.3em] font-['Cinzel'] font-bold uppercase mb-3" style={{ color: theme.greenLight }}>
              Get In Touch With Our Brothers
            </span>
            <h1 className="font-['Cinzel'] text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide leading-tight mb-4">
              We Are Here to Serve
            </h1>
            <div className="w-12 h-[1px] mb-6" style={{ backgroundColor: theme.greenLight }}></div>
            <p className="font-['Cormorant_Garamond'] text-lg sm:text-xl text-white/90 italic max-w-2xl leading-relaxed">
              “Communication is a form of community — a bridge of mercy that connects us. Whether you seek prayer, want to support our mission, or are exploring a vocation, we welcome your voice.”
            </p>
          </div>
        </section>

        {/* Info Cards Section */}
        <section className="py-16 px-6 -mt-16 relative z-20 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address Card */}
            <div className="bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full" style={{ border: `1px solid ${theme.borderLight}` }}>
              <div className="w-12 h-12 flex items-center justify-center mb-6" style={{ backgroundColor: theme.bgSoft, border: `1px solid ${theme.borderLight}` }}>
                <span className="material-symbols-outlined text-2xl" style={{ color: theme.greenPrimary }}>location_on</span>
              </div>
              <h3 className="font-['Cinzel'] text-sm font-bold tracking-widest uppercase mb-3" style={{ color: theme.black }}>Regional Secretariat</h3>
              <p className="font-['Cormorant_Garamond'] text-base leading-relaxed flex-grow" style={{ color: theme.textMuted }}>
                1550 N. Fresno Street<br />
                Fresno, CA 93703<br />
                United States
              </p>
            </div>

            {/* Email Card */}
            <div className="bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full" style={{ border: `1px solid ${theme.borderLight}` }}>
              <div className="w-12 h-12 flex items-center justify-center mb-6" style={{ backgroundColor: theme.bgSoft, border: `1px solid ${theme.borderLight}` }}>
                <span className="material-symbols-outlined text-2xl" style={{ color: theme.greenPrimary }}>mail</span>
              </div>
              <h3 className="font-['Cinzel'] text-sm font-bold tracking-widest uppercase mb-3" style={{ color: theme.black }}>Electronic Inquiries</h3>
              <div className="space-y-2 flex-grow">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: theme.textMuted }}>General:</span>
                  <a href="mailto:info@smmm-american.org" className="font-medium transition-colors no-underline" style={{ color: theme.greenPrimary, hover: { color: theme.greenLight } }}>info@smmm-american.org</a>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: theme.textMuted }}>Vocations Office:</span>
                  <a href="mailto:vocations@smmm-american.org" className="font-medium transition-colors no-underline" style={{ color: theme.greenPrimary }}>vocations@smmm-american.org</a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full" style={{ border: `1px solid ${theme.borderLight}` }}>
              <div className="w-12 h-12 flex items-center justify-center mb-6" style={{ backgroundColor: theme.bgSoft, border: `1px solid ${theme.borderLight}` }}>
                <span className="material-symbols-outlined text-2xl" style={{ color: theme.greenPrimary }}>call</span>
              </div>
              <h3 className="font-['Cinzel'] text-sm font-bold tracking-widest uppercase mb-3" style={{ color: theme.black }}>Office Support</h3>
              <div className="flex-grow">
                <span className="text-sm font-semibold block mb-1" style={{ color: theme.greenPrimary }}>+1 (559) 555-0123</span>
                <p className="text-base leading-relaxed" style={{ color: theme.textMuted }}>Monday – Friday<br />9:00 AM – 5:00 PM PST</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
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
                    backgroundColor: formStatus === 'sending' ? theme.greenDeep : (formStatus === 'success' ? theme.greenPrimary : theme.greenPrimary),
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

            {/* Right Column: Footprint + Map */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h3 className="font-['Cinzel'] text-xl font-bold tracking-wide mb-4" style={{ color: theme.black }}>Our Regional Footprint</h3>
                <p className="font-['Cormorant_Garamond'] text-base mb-6 leading-relaxed" style={{ color: theme.textMuted }}>
                  The Sons of Mary Mother of Mercy actively serve across diverse dioceses and apostolates within North America.
                </p>
                <div className="grid grid-cols-2 gap-4 py-6 border-t border-b" style={{ borderColor: theme.borderLight }}>
                  <ul className="space-y-3 text-xs font-['Cinzel'] font-bold tracking-wider uppercase list-none p-0 m-0" style={{ color: theme.textMuted }}>
                    {['Fresno', 'San Bernardino', 'San Diego', 'Boston'].map((loc) => (
                      <li key={loc} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.greenLight }}></span> {loc}
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-3 text-xs font-['Cinzel'] font-bold tracking-wider uppercase list-none p-0 m-0" style={{ color: theme.textMuted }}>
                    {['Boise', 'Orlando', 'Los Angeles', 'New York'].map((loc) => (
                      <li key={loc} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.greenLight }}></span> {loc}
                      </li>
                    ))}
                  </ul>
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

        {/* Prayer Callout */}
        <section className="py-20 text-white text-center relative overflow-hidden" style={{ backgroundColor: theme.greenDeep }}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4ade80_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
          <div className="max-w-2xl mx-auto px-6 relative z-10 flex flex-col items-center">
            <div className="mb-4" style={{ color: theme.greenLight }}>
              <span className="material-symbols-outlined text-4xl">volunteer_activism</span>
            </div>
            <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold tracking-wide mb-4">Intercessory Prayer</h2>
            <div className="w-8 h-[1px] mb-6" style={{ backgroundColor: theme.greenLight }}></div>
            <p className="font-['Cormorant_Garamond'] text-lg text-white/90 max-w-xl mb-8 leading-relaxed">
              Are you in need of spiritual support? Our community remembers every intention shared with us during our daily conventual Mass and community prayers.
            </p>
            <a
              className="inline-block border px-8 py-4 text-xs font-['Cinzel'] font-bold uppercase tracking-widest transition-all duration-300 no-underline"
              style={{ borderColor: theme.greenLight, color: theme.greenLight }}
              href="#"
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = theme.greenLight; e.currentTarget.style.color = theme.black; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = theme.greenLight; }}
            >
              Submit a Prayer Request
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
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
              <li><a className="font-bold underline transition-colors" href="#" style={{ color: theme.greenPrimary }}>Contact Us</a></li>
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