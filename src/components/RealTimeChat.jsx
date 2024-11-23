import { useEffect, useState, useRef } from 'react';
import { FaComments, FaPaperPlane, FaTimes } from 'react-icons/fa';

const RealTimeChat = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setMessages([]);
        }, 1800000); // Clear messages every 30 minutes

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const typingTimer = setTimeout(() => setIsTyping(false), 1000);
        return () => clearTimeout(typingTimer);
    }, [message]);

    const getDefaultResponse = (userMessage) => {
        const responses = [
            "Welcome to CozyCare! We bring primary care, palliative care, and hospice care directly to you.",
            "At CozyCare, our location is your location. We provide care at your home, senior residency community, or long-term care facility.",
            "No need to worry about transportation or mobility - we come to you!",
            "Hello! How can CozyCare assist you today?",
            "We're here to make healthcare accessible and convenient for you.",
            "CozyCare brings professional healthcare services right to your doorstep.",
            "Welcome! We specialize in bringing quality healthcare to your location.",
            "Our team of healthcare professionals is dedicated to providing personalized care in your comfortable environment.",
            "Would you like to learn more about our home-based healthcare services?",
            "CozyCare offers comprehensive medical care without the need to leave your home.",
            "Our services include regular check-ups, medication management, and specialized care - all at your location.",
            "Need medical attention but can't travel? CozyCare is here to help!",
            "We understand the importance of comfortable, accessible healthcare. How can we assist you?",
            "Our healthcare team is available to provide professional medical services in your preferred setting.",
            "Looking for quality healthcare without the hassle of travel? You're in the right place!",
            "We provide personalized care plans tailored to your specific needs and home environment.",
            "CozyCare makes healthcare simple - just tell us what you need, and we'll come to you.",
            "Our mission is to make quality healthcare accessible to everyone, right where they are."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (message.trim()) {
            const userMessage = {
                username: 'Guest',
                message: message.trim(),
                isSent: true,
                timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
            };
            setMessages((prevMessages) => [...prevMessages, userMessage]);
            setMessage('');
            const sendBtn = document.getElementById('sendBtn');
            sendBtn.classList.add('animate-ping');
            setTimeout(() => sendBtn.classList.remove('animate-ping'), 200);

            setIsTyping(true);

            setTimeout(() => {
                const botResponse = {
                    username: 'CozyCare',
                    message: getDefaultResponse(),
                    isSent: false,
                    timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
                };

                setMessages(prevMessages => [...prevMessages, botResponse]);
                setIsTyping(false);

                new Audio('/message-sound.mp3').play().catch((error) => console.error("Audio play error:", error));
            }, 1000);
        }
    };

    const toggleChat = () => {
        setIsChatOpen((prev) => !prev);
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <>
            <button
                onClick={toggleChat}
                className="fixed bottom-5 right-5 p-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                aria-label="Toggle chat"
            >
                <FaComments size={24} className="animate-pulse" />
            </button>

            {isChatOpen && (
                <div
                    className="fixed bottom-20 right-5 w-80 max-h-[500px] border-2 border-green-300 rounded-lg shadow-2xl p-4 flex flex-col bg-gradient-to-b from-[#FFFDD0] to-[#fff] backdrop-blur-sm"
                    style={{ zIndex: 1000 }}
                >
                    <div className="flex justify-between items-center mb-2 border-b border-green-300 pb-2">
                        <h2 className="text-xl font-bold text-green-700">CozyCare Chat</h2>
                        <button onClick={toggleChat} className="text-green-600 hover:text-green-800 transition-colors">
                            <FaTimes size={20} />
                        </button>
                    </div>
                    <div
                        className="flex-1 overflow-y-auto mb-4 bg-opacity-50 bg-white p-2 rounded-md border border-green-300 shadow-inner"
                        aria-live="polite"
                    >
                        {messages.length === 0 ? (
                            <p className="text-gray-500 text-center italic animate-pulse">Start a conversation...</p>
                        ) : (
                            messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`mb-2 p-2 rounded-lg transform transition-all duration-300 hover:scale-102 ${
                                        msg.isSent
                                            ? 'bg-gradient-to-r from-green-100 to-green-200 ml-auto max-w-[80%]'
                                            : 'bg-gradient-to-r from-gray-100 to-gray-200 mr-auto max-w-[80%]'
                                    }`}
                                >
                                    <div className="flex justify-between items-baseline mb-1">
                                        <strong className="text-green-700">{msg.username}</strong>
                                        <span className="text-xs text-gray-500">{msg.timestamp}</span>
                                    </div>
                                    <span className="text-gray-800">{msg.message}</span>
                                </div>
                            ))
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Type a message"
                                className="w-full border-2 border-green-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300 pr-10"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                            <button
                                id="sendBtn"
                                type="submit"
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-600 hover:text-green-800 transition-colors"
                            >
                                <FaPaperPlane size={20} />
                            </button>
                        </div>
                        {isTyping && (
                            <span className="text-xs text-gray-500 italic animate-pulse">
                                Someone is typing...
                            </span>
                        )}
                    </form>
                </div>
            )}
        </>
    );
};

export default RealTimeChat;