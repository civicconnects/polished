// EMAILJS CONFIGURATION - REPLACE THESE WITH YOUR KEYS
// Get them from https://dashboard.emailjs.com/
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi! I'm Melissa's digital assistant. How can I help you today? I can answer questions about hours or our products.", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [leadState, setLeadState] = useState('IDLE'); // IDLE, NAME, PHONE, DONE
    const [leadData, setLeadData] = useState({ name: '', phone: '' });
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        // User Message
        const userMsg = { text: inputValue, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');

        // Bot Response Logic
        setTimeout(() => {
            const lowerInput = userMsg.text.toLowerCase();
            let botResponse = "";

            if (leadState === 'IDLE') {
                if (lowerInput.match(/hours|open|time|when/)) {
                    botResponse = "We are open Tuesday - Saturday from 10AM to 5PM. We are closed on Sundays and Mondays.";
                } else if (lowerInput.match(/product|hair|price|cost|how much|sets/)) {
                    botResponse = "Our luxury sets range from $199 for 'The Essential' to $599 for 'The Statement'. We offer 100% Remy Human Hair in various lengths and textures.";
                } else if (lowerInput.match(/hello|hi|hey/)) {
                    botResponse = "Hello! Feel free to ask about our opening hours or our hair extension collection.";
                } else {
                    // Start Lead Gen
                    botResponse = "I don't have that specific information right now. However, I can have a dedicated agent contact you directly. What is your name?";
                    setLeadState('NAME');
                }
            } else if (leadState === 'NAME') {
                setLeadData(prev => ({ ...prev, name: userMsg.text }));
                botResponse = `Thanks ${userMsg.text}. What is the best phone number to reach you at?`;
                setLeadState('PHONE');
            } else if (leadState === 'PHONE') {
                const finalPhone = userMsg.text;
                setLeadData(prev => ({ ...prev, phone: finalPhone }));

                // SEND EMAIL VIA EMAILJS
                const templateParams = {
                    to_name: "Melissa",
                    from_name: leadData.name, // From previous state
                    phone_number: finalPhone,
                    message: "New Lead from Chat Widget"
                };

                // Check if keys are set
                if (EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID") {
                    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
                        .then((response) => {
                            console.log('SUCCESS!', response.status, response.text);
                        }, (err) => {
                            console.log('FAILED...', err);
                        });
                } else {
                    console.log("EmailJS keys not set. Simulating success. Data:", templateParams);
                }

                botResponse = "Perfect. I've sent your info to our team. Someone will call you shortly to answer your questions!";
                setLeadState('DONE');
            } else if (leadState === 'DONE') {
                botResponse = "Is there anything else I can help you with regarding hours or products?";
                setLeadState('IDLE');
            }

            setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
        }, 600);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="bg-white w-80 md:w-96 rounded-2xl shadow-2xl mb-4 overflow-hidden border border-gray-100 flex flex-col h-[500px]"
                    >
                        {/* Header */}
                        <div className="bg-[#0b0b0b] p-4 flex justify-between items-center text-white">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand-gold">
                                        <img
                                            src="/images/melissa-headshot.jpg"
                                            alt="Agent"
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#0b0b0b] rounded-full"></div>
                                </div>
                                <div>
                                    <h4 className="font-serif font-bold text-sm">Melissa's Assistant</h4>
                                    <span className="text-xs text-brand-gold uppercase tracking-wider">Online</span>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
                            {messages.map((msg, index) => (
                                <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.sender === 'user'
                                        ? 'bg-[#f33fc3] text-white rounded-br-none'
                                        : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-none'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-gray-100">
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Type a message..."
                                    className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-pink text-black"
                                />
                                <button
                                    onClick={handleSend}
                                    className="bg-brand-gold p-2 rounded-full text-white hover:bg-[#b08d48] transition-colors"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Action Button - Only show when chat is closed */}
            {!isOpen && (
                <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setIsOpen(true)}
                    className="w-16 h-16 rounded-full shadow-lg overflow-hidden border-2 border-white relative group"
                >
                    <img
                        src="/images/melissa-headshot.jpg"
                        alt="Chat with us"
                        className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                </motion.button>
            )}
        </div>
    );
};
export default ChatWidget;
