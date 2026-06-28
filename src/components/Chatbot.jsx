import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  
  // Replace 1234567890 with the actual admin phone number (include country code, no spaces, no + sign)
  const whatsappNumber = '+2349124824683'; 
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Peace%20be%20with%20you.%20I%20am%20reaching%20out%20from%20the%20SMMM%20USA%20Region%20website.`;

  // Configured with 2 separate initial responses
  const [messages, setMessages] = useState([
    { 
      id: 'welcome-1',
      role: 'assistant', 
      content: 'Peace be with you! How can we help you today?' 
    },
    { 
      id: 'welcome-2',
      role: 'assistant', 
      content: 'You can also chat directly with our regional administration on WhatsApp for immediate support.',
      isWhatsappLink: true 
    }
  ]);
  const scrollRef = useRef(null);

  // Blue variants, white, black palette
  const theme = {
    blueLight: '#60a5fa',
    bluePrimary: '#2563eb',
    blueDeep: '#1e3a8a',
    white: '#ffffff',
    black: '#111111',
    offWhite: '#f8fafc',      // cool off-white / light slate
    textDark: '#0f172a',      // slate-900
    textMuted: '#475569',      // slate-600
    borderBlue: 'rgba(96, 165, 250, 0.2)'
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { id: `user-${Date.now()}`, role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      const aiResponse = { 
        id: `ai-${Date.now()}`,
        role: 'assistant', 
        content: "Thank you for your message. A member of the SMMM community or our administration will respond shortly." 
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute bottom-16 right-0 mb-4 w-80 rounded-xl shadow-2xl overflow-hidden"
            style={{ backgroundColor: theme.white, border: `1px solid ${theme.borderBlue}` }}
          >
            {/* Header */}
            <div className="p-4 text-white flex justify-between items-center" style={{ backgroundColor: theme.bluePrimary }}>
              <div>
                <h4 className="font-bold text-sm">SMMM Support</h4>
                <p className="text-xs opacity-80">Online</p>
              </div>
            </div>

            {/* Chat Area */}
            <div 
              ref={scrollRef}
              className="p-4 h-64 overflow-y-auto space-y-4 flex flex-col"
              style={{ backgroundColor: theme.offWhite }}
            >
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={`p-3 rounded-lg text-sm max-w-[85%] flex flex-col gap-2 ${
                    msg.role === 'user' 
                      ? 'self-end rounded-tr-none' 
                      : 'self-start rounded-tl-none'
                  }`}
                  style={{
                    backgroundColor: msg.role === 'user' ? theme.blueLight : theme.white,
                    color: msg.role === 'user' ? theme.black : theme.textDark,
                    border: msg.role === 'user' ? 'none' : `1px solid ${theme.borderBlue}`
                  }}
                >
                  <span>{msg.content}</span>
                  
                  {/* Styled Interactive WhatsApp Button Element */}
                  {msg.isWhatsappLink && (
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 flex items-center justify-center gap-1 bg-[#25D366] text-white font-semibold text-xs py-2 px-3 rounded-md shadow-sm hover:bg-[#20ba5a] transition-colors decoration-none"
                      style={{ color: '#ffffff' }}
                    >
                      <span>Chat on WhatsApp</span>
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-3 border-t flex gap-2" style={{ backgroundColor: theme.white, borderColor: theme.borderBlue }}>
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 text-xs p-1 bg-transparent focus:outline-none" 
                style={{ color: theme.textDark }}
                placeholder="Ask about our mission..." 
                type="text"
              />
              <button 
                type="submit" 
                className="transition-transform hover:scale-110"
                style={{ color: theme.bluePrimary }}
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
        style={{ backgroundColor: theme.bluePrimary, color: theme.white }}
      >
        <span className="material-symbols-outlined text-3xl">
          {isOpen ? 'close' : 'chat_bubble'}
        </span>
      </motion.button>
    </div>
  );
};

export default ChatBot;