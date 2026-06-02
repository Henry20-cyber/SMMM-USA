import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Peace be with you! How can we help you today?' }
  ]);
  const scrollRef = useRef(null);

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
    borderGreen: 'rgba(74, 222, 128, 0.2)'
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      const aiResponse = { 
        role: 'assistant', 
        content: "Thank you for your message. A member of the SMMM community or our AI assistant will respond shortly." 
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
            style={{ backgroundColor: theme.white, border: `1px solid ${theme.borderGreen}` }}
          >
            {/* Header */}
            <div className="p-4 text-white flex justify-between items-center" style={{ backgroundColor: theme.greenPrimary }}>
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
              {messages.map((msg, index) => (
                <div 
                  key={index}
                  className={`p-3 rounded-lg text-sm max-w-[85%] ${
                    msg.role === 'user' 
                      ? 'self-end rounded-tr-none' 
                      : 'self-start rounded-tl-none'
                  }`}
                  style={{
                    backgroundColor: msg.role === 'user' ? theme.greenLight : theme.white,
                    color: msg.role === 'user' ? theme.black : theme.textDark,
                    border: msg.role === 'user' ? 'none' : `1px solid ${theme.borderGreen}`
                  }}
                >
                  {msg.content}
                </div>
              ))}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-3 border-t flex gap-2" style={{ backgroundColor: theme.white, borderColor: theme.borderGreen }}>
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
                style={{ color: theme.greenPrimary }}
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
        style={{ backgroundColor: theme.greenPrimary, color: theme.white }}
      >
        <span className="material-symbols-outlined text-3xl">
          {isOpen ? 'close' : 'chat_bubble'}
        </span>
      </motion.button>
    </div>
  );
};

export default ChatBot;