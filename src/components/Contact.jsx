import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  // Theme styling configurations
  const theme = {
    gold: '#c9a84c',
    navy: '#0a192f',
    textMuted: '#4a5a6a',
    creamDark: '#f4eff2', // Fallback value matching typical var(--cream-dark) presets
    creamLight: '#faf6ee' // Fallback value matching typical var(--cream) presets
  };

  // State monitoring for form actions
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Connect your submission hook or API handler here
    console.log('Submitting Message Request Data:', formData);
  };

  // Reusable scroll animation settings
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section 
      id="contact"
      className="py-28 px-6 border-t" 
      style={{ backgroundColor: '#faf6f0', borderColor: 'rgba(201,168,76,0.15)' }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Info Details Left Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
          >
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: theme.gold }}>Get In Touch</p>
            <h3 className="text-3xl font-semibold mb-4" style={{ fontFamily: "'Cinzel', serif", color: theme.navy }}>Contact Us</h3>
            <div className="mb-6 h-[1px] w-12" style={{ backgroundColor: theme.gold }} />
            
            <p className="text-[1rem] leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Whether you have questions about our mission, want to invite us to serve in your parish, or wish to inquire about vocations — we welcome your message.
            </p>

            <div className="flex flex-col gap-4">
              {/* Email Block */}
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ border: '1px solid rgba(201,168,76,0.25)' }}>
                  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                    <path d="M3 5 L10 11 L17 5" stroke={theme.gold} strokeWidth="1.2"/>
                    <rect x="2" y="4" width="16" height="12" rx="2" stroke={theme.gold} strokeWidth="1.2"/>
                  </svg>
                </div>
                <span className="text-[0.95rem]" style={{ color: theme.textMuted }}>info@smmmamerican.org</span>
              </div>

              {/* Location Block */}
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ border: '1px solid rgba(201,168,76,0.25)' }}>
                  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                    <circle cx="10" cy="9" r="4" stroke={theme.gold} strokeWidth="1.2"/>
                    <path d="M3 17 C3 14, 17 14, 17 17" stroke={theme.gold} strokeWidth="1.2"/>
                  </svg>
                </div>
                <span className="text-[0.95rem]" style={{ color: theme.textMuted }}>SMMM American Region, USA</span>
              </div>
            </div>
          </motion.div>

          {/* Message Form Right Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
          >
            <form 
              onSubmit={handleFormSubmit}
              className="bg-white p-10 border shadow-sm rounded-sm"
              style={{ borderColor: 'rgba(201,168,76,0.12)' }}
            >
              <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase mb-6" style={{ fontFamily: "'Cinzel', serif", color: theme.gold }}>
                Send Us a Message
              </p>
              
              <div className="flex flex-col gap-4">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 border bg-[#FAF9F5] focus:bg-white outline-none transition-all duration-300 border-[rgba(201,168,76,0.2)] focus:border-[#c9a84c] rounded-sm text-sm"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", color: theme.navy }}
                  required
                />
                
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 border bg-[#FAF9F5] focus:bg-white outline-none transition-all duration-300 border-[rgba(201,168,76,0.2)] focus:border-[#c9a84c] rounded-sm text-sm"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", color: theme.navy }}
                  required
                />
                
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message" 
                  rows={4} 
                  className="w-full px-4 py-3 border bg-[#FAF9F5] focus:bg-white outline-none transition-all duration-300 border-[rgba(201,168,76,0.2)] focus:border-[#c9a84c] rounded-sm text-sm resize-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", color: theme.navy }}
                  required
                />
                
                <button 
                  type="submit" 
                  className="w-full py-3 px-6 text-xs uppercase font-bold tracking-[0.15em] border transition-all duration-300 hover:bg-[#0a192f] hover:text-white"
                  style={{ borderColor: theme.gold, color: theme.navy, backgroundColor: 'rgba(201,168,76,0.05)' }}
                >
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;