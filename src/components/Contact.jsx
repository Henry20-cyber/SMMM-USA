import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
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
    borderGreen: 'rgba(74, 222, 128, 0.2)',
    borderGreenLight: 'rgba(74, 222, 128, 0.12)',
    bgGreenTransparent: 'rgba(22, 101, 52, 0.05)'
  };

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
    console.log('Submitting Message Request Data:', formData);
  };

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
      style={{ backgroundColor: theme.offWhite, borderColor: theme.borderGreenLight }}
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
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ color: theme.greenPrimary }}>Get In Touch</p>
            <h3 className="text-3xl font-semibold mb-4" style={{ fontFamily: "'Cinzel', serif", color: theme.black }}>Contact Us</h3>
            <div className="mb-6 h-[1px] w-12" style={{ backgroundColor: theme.greenLight }} />
            
            <p className="text-[1rem] leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Whether you have questions about our mission, want to invite us to serve in your parish, or wish to inquire about vocations — we welcome your message.
            </p>

            <div className="flex flex-col gap-4">
              {/* Email Block */}
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ border: `1px solid ${theme.borderGreen}` }}>
                  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                    <path d="M3 5 L10 11 L17 5" stroke={theme.greenPrimary} strokeWidth="1.2"/>
                    <rect x="2" y="4" width="16" height="12" rx="2" stroke={theme.greenPrimary} strokeWidth="1.2"/>
                  </svg>
                </div>
                <span className="text-[0.95rem]" style={{ color: theme.textMuted }}>info@smmmamerican.org</span>
              </div>

              {/* Location Block */}
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ border: `1px solid ${theme.borderGreen}` }}>
                  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                    <circle cx="10" cy="9" r="4" stroke={theme.greenPrimary} strokeWidth="1.2"/>
                    <path d="M3 17 C3 14, 17 14, 17 17" stroke={theme.greenPrimary} strokeWidth="1.2"/>
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
              style={{ borderColor: theme.borderGreenLight }}
            >
              <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase mb-6" style={{ fontFamily: "'Cinzel', serif", color: theme.greenPrimary }}>
                Send Us a Message
              </p>
              
              <div className="flex flex-col gap-4">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 border focus:outline-none transition-all duration-300 rounded-sm text-sm"
                  style={{ 
                    fontFamily: "'Cormorant Garamond', serif", 
                    fontSize: "1.05rem", 
                    color: theme.black,
                    backgroundColor: theme.offWhite,
                    borderColor: theme.borderGreen
                  }}
                  onFocus={(e) => e.target.style.borderColor = theme.greenLight}
                  onBlur={(e) => e.target.style.borderColor = theme.borderGreen}
                  required
                />
                
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 border focus:outline-none transition-all duration-300 rounded-sm text-sm"
                  style={{ 
                    fontFamily: "'Cormorant Garamond', serif", 
                    fontSize: "1.05rem", 
                    color: theme.black,
                    backgroundColor: theme.offWhite,
                    borderColor: theme.borderGreen
                  }}
                  onFocus={(e) => e.target.style.borderColor = theme.greenLight}
                  onBlur={(e) => e.target.style.borderColor = theme.borderGreen}
                  required
                />
                
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message" 
                  rows={4} 
                  className="w-full px-4 py-3 border focus:outline-none transition-all duration-300 rounded-sm text-sm resize-none"
                  style={{ 
                    fontFamily: "'Cormorant Garamond', serif", 
                    fontSize: "1.05rem", 
                    color: theme.black,
                    backgroundColor: theme.offWhite,
                    borderColor: theme.borderGreen
                  }}
                  onFocus={(e) => e.target.style.borderColor = theme.greenLight}
                  onBlur={(e) => e.target.style.borderColor = theme.borderGreen}
                  required
                />
                
                <button 
                  type="submit" 
                  className="w-full py-3 px-6 text-xs uppercase font-bold tracking-[0.15em] border transition-all duration-300"
                  style={{ 
                    borderColor: theme.greenLight, 
                    color: theme.white,
                    backgroundColor: theme.greenPrimary
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme.greenDeep;
                    e.currentTarget.style.borderColor = theme.greenDeep;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = theme.greenPrimary;
                    e.currentTarget.style.borderColor = theme.greenLight;
                  }}
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