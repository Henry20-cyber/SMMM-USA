import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Peace be with you! How can we help you today?' }
  ]);
  const scrollRef = useRef(null);

  // Auto-scroll to the bottom when new messages arrive
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

    // Simulate AI thinking/typing
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
            className="absolute bottom-16 right-0 mb-4 w-80 bg-white rounded-xl shadow-2xl border border-blue-900/10 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-4 text-white flex justify-between items-center">
              <div>
                <h4 className="font-bold text-sm">SMMM Support</h4>
                <p className="text-xs opacity-80">Online</p>
              </div>
            </div>

            {/* Chat Area */}
            <div 
              ref={scrollRef}
              className="p-4 bg-surface h-64 overflow-y-auto space-y-4 flex flex-col"
            >
              {messages.map((msg, index) => (
                <div 
                  key={index}
                  className={`p-3 rounded-lg text-sm max-w-[85%] ${
                    msg.role === 'user' 
                      ? 'bg-secondary text-on-secondary self-end rounded-tr-none' 
                      : 'bg-primary-fixed text-on-primary-fixed self-start rounded-tl-none'
                  }`}
                >
                  {msg.content}
                </div>
              ))}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-3 border-t flex gap-2 bg-white">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 text-xs border-none focus:ring-0 p-1 bg-transparent text-primary" 
                placeholder="Ask about our mission..." 
                type="text"
              />
              <button type="submit" className="text-secondary hover:scale-110 transition-transform">
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
        className="w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center"
      >
        <span className="material-symbols-outlined text-3xl">
          {isOpen ? 'close' : 'chat_bubble'}
        </span>
      </motion.button>
    </div>
  );
};

export default ChatBot;