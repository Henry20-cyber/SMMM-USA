import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

// Hero background images array (8 images as requested)
const HERO_IMAGES = [
  "https://lh3.googleusercontent.com/aida/ADBb0uhkzXP_8vlMoQMOvYMXQmjLJcpKQcdbsTIud-fnC01NIrgs2YsUGAw7EJBhkX9z5Lc-rFdb9iSNDjrMqp-HSTqfO1PhcwiyjI5PC-mOvRezxSKgfeR2W-So0PmXDamzmqzCeJ9wwA74hV7FJ0F3dNHkocAFFIAVOLIIOvxZa8E_h32tpNiFglQzJ1M2Mtdb0AxgetGualvyyNnxi7pGal8cOo9VRj1D9mZLTtI3iJIps0mGUZ_UHYQisV7o",
  "https://images.unsplash.com/photo-1548625361-155deee26575?auto=format&fit=crop&w=1200&q=80", // Chapel interior
  "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1200&q=80", // Stained glass
  "https://images.unsplash.com/photo-1515787366009-7cbdd2dc587b?auto=format&fit=crop&w=1200&q=80", // Candle altar
  "https://images.unsplash.com/photo-1545232979-8bf34eb9757b?auto=format&fit=crop&w=1200&q=80", // Cathedral vault
  "https://images.unsplash.com/photo-1601662528567-526cd06f6582?auto=format&fit=crop&w=1200&q=80", // Sacred book/liturgy
  "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=1200&q=80", // Cross / Sanctuary
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"  // Community light
];

export default function Contact() {
  // --- State Management ---
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Form handling state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    inquiryType: 'General Inquiry',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'sending' | 'success'

  // --- Effects ---
  // 1. 10-Second Hero Image Carousel Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 10000); // 10 seconds

    return () => clearInterval(timer);
  }, []);

  // 2. Scroll Event Listener for Navbar Elevation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Event Handlers ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');

    // Mock API delay pipeline
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ fullName: '', email: '', inquiryType: 'General Inquiry', message: '' });

      // Revert back to operational state after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1200);
  };

  return (
    <div className="bg-[#faf9f6] text-[#0a192f] antialiased font-sans flex flex-col min-h-screen">
      
      {/* Fixed Header Component */}
      <header className={`fixed top-0 left-0 right-0 z-50 border-b border-[rgba(201,168,76,0.15)] transition-all duration-500 backdrop-blur-md ${
        isScrolled ? 'bg-white/95 shadow-md h-20' : 'bg-white/90 shadow-sm h-20'
      }`}>
      < Navbar />
      </header>

      {/* Main Layout Area */}
      <main className="flex-grow pt-20">

        {/* Hero Banner with Fading Carousel */}
        <section className="relative h-[450px] flex items-center justify-center overflow-hidden bg-[#0a192f]">
          <div className="absolute inset-0 z-0">
            {HERO_IMAGES.map((imgUrl, index) => (
              <img 
                key={imgUrl}
                src={imgUrl}
                alt={`Altar sanctuary environment scene ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover filter scale-105 select-none pointer-events-none transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-35' : 'opacity-0'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/60 via-[#0a192f]/40 to-[#0a192f]"></div>
          </div>
          
          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto flex flex-col items-center">
            <span className="text-[10px] tracking-[0.3em] font-['Cinzel'] font-bold text-[#c9a84c] uppercase mb-3">
              Get In Touch With Our Brothers
            </span>
            <h1 className="font-['Cinzel'] text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide leading-tight mb-4">
              We Are Here to Serve
            </h1>
            <div className="w-12 h-[1px] bg-[#c9a84c] mb-6"></div>
            <p className="font-['Cormorant_Garamond'] text-lg sm:text-xl text-slate-200/90 italic max-w-2xl leading-relaxed">
              &ldquo;Communication is a form of community — a bridge of mercy that connects us. Whether you seek prayer, want to support our mission, or are exploring a vocation, we welcome your voice.&rdquo;
            </p>
          </div>
        </section>

        {/* Cards Info Section */}
        <section className="py-16 px-6 -mt-16 relative z-20 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Address */}
            <div className="bg-white p-8 border border-[rgba(201,168,76,0.15)] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full">
              <div className="w-12 h-12 bg-[#F9F7F2] border border-[rgba(201,168,76,0.15)] flex items-center justify-center mb-6 text-[#003366]">
                <span className="material-symbols-outlined text-2xl">location_on</span>
              </div>
              <h3 className="font-['Cinzel'] text-sm font-bold tracking-widest text-[#003366] uppercase mb-3">Regional Secretariat</h3>
              <p className="font-['Cormorant_Garamond'] text-base text-slate-600 leading-relaxed flex-grow">
                1550 N. Fresno Street<br/>
                Fresno, CA 93703<br/>
                United States
              </p>
            </div>

            {/* Email */}
            <div className="bg-white p-8 border border-[rgba(201,168,76,0.15)] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full">
              <div className="w-12 h-12 bg-[#F9F7F2] border border-[rgba(201,168,76,0.15)] flex items-center justify-center mb-6 text-[#003366]">
                <span className="material-symbols-outlined text-2xl">mail</span>
              </div>
              <h3 className="font-['Cinzel'] text-sm font-bold tracking-widest text-[#003366] uppercase mb-3">Electronic Inquiries</h3>
              <div className="font-sans text-sm text-slate-600 space-y-2 flex-grow">
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#6C757D] uppercase tracking-wider font-semibold">General:</span>
                  <a href="mailto:info@smmm-american.org" className="text-[#003366] hover:text-[#B22222] font-medium transition-colors no-underline">info@smmm-american.org</a>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#6C757D] uppercase tracking-wider font-semibold">Vocations Office:</span>
                  <a href="mailto:vocations@smmm-american.org" className="text-[#003366] hover:text-[#B22222] font-medium transition-colors no-underline">vocations@smmm-american.org</a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white p-8 border border-[rgba(201,168,76,0.15)] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full">
              <div className="w-12 h-12 bg-[#F9F7F2] border border-[rgba(201,168,76,0.15)] flex items-center justify-center mb-6 text-[#003366]">
                <span className="material-symbols-outlined text-2xl">call</span>
              </div>
              <h3 className="font-['Cinzel'] text-sm font-bold tracking-widest text-[#003366] uppercase mb-3">Office Support</h3>
              <p className="font-['Cormorant_Garamond'] text-base text-slate-600 leading-relaxed flex-grow">
                <span className="font-sans text-sm font-semibold text-[#003366] block mb-1">+1 (559) 555-0123</span>
                Monday &ndash; Friday<br/>
                9:00 AM &ndash; 5:00 PM PST
              </p>
            </div>

          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-6 bg-[#F9F7F2] border-t border-b border-[rgba(201,168,76,0.15)]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 border border-[rgba(201,168,76,0.15)] shadow-sm">
              <h2 className="font-['Cinzel'] text-2xl font-bold tracking-wide text-[#003366] mb-4">Send a Message</h2>
              <p className="font-['Cormorant_Garamond'] text-base text-slate-600 mb-8 leading-relaxed">
                Your messages are handled with utmost pastoral care and corporate reverence. Please allow our regional secretariat staff 24&ndash;48 hours to route your inquiry accurately.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-['Cinzel'] font-bold tracking-widest text-[#003366] uppercase">Full Name</label>
                    <input 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full bg-[#F9F7F2]/50 border border-[rgba(201,168,76,0.15)] focus:ring-1 focus:ring-[#c9a84c] focus:border-[#c9a84c] p-3.5 text-sm outline-none transition-all rounded-sm" 
                      placeholder="John Doe" 
                      type="text" 
                      required 
                      disabled={formStatus === 'sending'}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-['Cinzel'] font-bold tracking-widest text-[#003366] uppercase">Email Address</label>
                    <input 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-[#F9F7F2]/50 border border-[rgba(201,168,76,0.15)] focus:ring-1 focus:ring-[#c9a84c] focus:border-[#c9a84c] p-3.5 text-sm outline-none transition-all rounded-sm" 
                      placeholder="john@example.com" 
                      type="email" 
                      required 
                      disabled={formStatus === 'sending'}
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-['Cinzel'] font-bold tracking-widest text-[#003366] uppercase">Inquiry Type</label>
                  <select 
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    disabled={formStatus === 'sending'}
                    className="w-full bg-[#F9F7F2]/50 border border-[rgba(201,168,76,0.15)] focus:ring-1 focus:ring-[#c9a84c] focus:border-[#c9a84c] p-3.5 text-sm outline-none transition-all rounded-sm appearance-none"
                  >
                    <option>General Inquiry</option>
                    <option>Prayer Request</option>
                    <option>Vocations Interest</option>
                    <option>Mission Appeal Support</option>
                  </select>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-['Cinzel'] font-bold tracking-widest text-[#003366] uppercase">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-[#F9F7F2]/50 border border-[rgba(201,168,76,0.15)] focus:ring-1 focus:ring-[#c9a84c] focus:border-[#c9a84c] p-3.5 text-sm outline-none transition-all rounded-sm resize-none" 
                    placeholder="How can we assist you today?" 
                    rows="5" 
                    required
                    disabled={formStatus === 'sending'}
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className={`w-full sm:w-auto px-8 py-4 text-xs font-['Cinzel'] font-bold uppercase tracking-widest transition-colors shadow-sm cursor-pointer ${
                    formStatus === 'sending' ? 'bg-[#003366] opacity-75 text-white' : 
                    formStatus === 'success' ? 'bg-emerald-700 text-white' : 
                    'bg-[#003366] text-white hover:bg-[#B22222]'
                  }`}
                >
                  {formStatus === 'idle' && 'Submit Message'}
                  {formStatus === 'sending' && 'SENDING REQUEST...'}
                  {formStatus === 'success' && 'MESSAGE SENT'}
                </button>
              </form>
            </div>

            {/* Footprint Side Grid */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h3 className="font-['Cinzel'] text-xl font-bold tracking-wide text-[#003366] mb-4">Our Regional Footprint</h3>
                <p className="font-['Cormorant_Garamond'] text-base text-slate-600 mb-6 leading-relaxed">
                  The Sons of Mary Mother of Mercy actively serve across diverse dioceses and apostolates within North America, establishing hubs of service and pastoral presence:
                </p>
                
                <div className="grid grid-cols-2 gap-4 border-t border-b border-[rgba(201,168,76,0.15)]/50 py-6">
                  <ul className="space-y-3 text-xs font-['Cinzel'] font-bold tracking-wider text-slate-600 uppercase list-none p-0 m-0">
                    {['Fresno', 'San Bernardino', 'San Diego', 'Boston'].map((loc) => (
                      <li key={loc} className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#B22222] rounded-full"></span> {loc}</li>
                    ))}
                  </ul>
                  <ul className="space-y-3 text-xs font-['Cinzel'] font-bold tracking-wider text-slate-600 uppercase list-none p-0 m-0">
                    {['Boise', 'Orlando', 'Los Angeles', 'New York'].map((loc) => (
                      <li key={loc} className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#B22222] rounded-full"></span> {loc}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Map Graphic Container */}
              <div className="relative group border border-[rgba(201,168,76,0.15)] shadow-md overflow-hidden bg-white">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    alt="Topographical minimalist map highlighting major pastoral region focal areas across the United States" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQRPMjMEpWYJ0Kx4ZjD0xih8eWHHOWDGYZ1Qxz0rlpR_nSR8urztzQRX_JVN9KZVxuxfH088fUPND-Pom2SzNmDbWPmdY20xa-xoyIVJPxGOed3vQ0e3PiYty-aJZ8owZ_wNLk0s1zEtwpGPUHXSK3ku8gjhnqigG6SRGWvxytCUaO96QLw42mkHZbmG2g6daxT_-4uA8PjzayPpzOWnyt2X8Df5qB8wbKA7GrqPe2YnP9OHB57xGwdOYgAkN8ioctYoRqsLRryFwH"
                  />
                  <div className="absolute inset-0 bg-[#003366]/5 pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 bg-white/95 border border-[rgba(201,168,76,0.15)] px-4 py-2 shadow-sm backdrop-blur-sm">
                    <span className="font-['Cinzel'] text-[9px] font-bold text-[#003366] uppercase tracking-widest">Regional Centers of Mission</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Intercessory Prayer Alternative Callout Section */}
        <section className="py-20 bg-[#0a192f] text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c9a84c_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
          <div className="max-w-2xl mx-auto px-6 relative z-10 flex flex-col items-center">
            <div className="text-[#c9a84c] mb-4">
              <span className="material-symbols-outlined text-4xl">volunteer_activism</span>
            </div>
            <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold tracking-wide mb-4">Intercessory Prayer</h2>
            <div className="w-8 h-[1px] bg-[#c9a84c] mb-6"></div>
            <p className="font-['Cormorant_Garamond'] text-lg text-slate-200/90 max-w-xl mb-8 leading-relaxed">
              Are you in need of spiritual support? Our community remembers every intention shared with us during our daily conventual Mass and community prayers.
            </p>
            <a className="inline-block border border-[#c9a84c] text-[#c9a84c] bg-transparent px-8 py-4 text-xs font-['Cinzel'] font-bold uppercase tracking-widest hover:bg-[#c9a84c] hover:text-[#0a192f] transition-all duration-300 no-underline" href="#">
              Submit a Prayer Request
            </a>
          </div>
        </section>

      </main>

      {/* Global Platform Site Footer */}
      <footer className="bg-white border-t border-[rgba(201,168,76,0.15)] py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-['Cinzel'] text-base font-bold tracking-wide text-[#003366]">
              Sons of Mary Mother of Mercy
            </h4>
            <p className="font-['Cormorant_Garamond'] text-base text-slate-600 max-w-sm leading-relaxed">
              A congregation of religious brothers and priests dedicated to the spiritual and social welfare of God's people through explicit works of mercy.
            </p>
            <div className="flex gap-3 pt-2">
              <a className="w-9 h-9 border border-[rgba(201,168,76,0.15)] flex items-center justify-center text-[#6C757D] hover:text-[#B22222] transition-colors" href="#" aria-label="Global Site"><span className="material-symbols-outlined text-sm">public</span></a>
              <a className="w-9 h-9 border border-[rgba(201,168,76,0.15)] flex items-center justify-center text-[#6C757D] hover:text-[#B22222] transition-colors" href="#" aria-label="Share Information"><span className="material-symbols-outlined text-sm">share</span></a>
            </div>
          </div>

          <div>
            <h5 className="text-[10px] font-['Cinzel'] font-bold text-[#003366] uppercase tracking-widest mb-4">Explore</h5>
            <ul className="space-y-3 text-sm font-medium list-none p-0 m-0">
              {['History', 'Charism', 'Founder', 'Mission Appeal'].map((link) => (
                <li key={link}><a className="text-slate-600 hover:text-[#B22222] transition-colors no-underline" href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] font-['Cinzel'] font-bold text-[#003366] uppercase tracking-widest mb-4">Resources</h5>
            <ul className="space-y-3 text-sm font-medium list-none p-0 m-0">
              <li><a className="text-slate-600 hover:text-[#B22222] transition-colors no-underline" href="#">Gallery Archive</a></li>
              <li><a className="text-slate-600 hover:text-[#B22222] transition-colors no-underline" href="#">Privacy Policy</a></li>
              <li><a className="text-[#003366] font-bold underline transition-colors" href="#">Contact Us</a></li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[rgba(201,168,76,0.15)]/40 text-center">
          <p className="text-[10px] font-['Cinzel'] font-bold tracking-[0.15em] text-[#6C757D] uppercase">
            &copy; 2026 Sons of Mary Mother of Mercy (SMMM) American Region. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}