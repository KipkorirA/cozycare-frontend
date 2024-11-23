import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { FaComments, FaPaperPlane, FaTimes } from 'react-icons/fa';

const socket = io('https://cozycare-backend-g56w.onrender.com'); 

const RealTimeChat = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        setMessages([]);

        socket.on('chat message', (msg) => {
            setMessages((prevMessages) => [...prevMessages, { ...msg, isSent: false }]);
            // Add subtle notification sound
            new Audio('/message-sound.mp3').play().catch(() => {});
        });

        return () => {
            socket.off('chat message');
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            const msg = { username: 'Guest', message: message.trim(), isSent: true, timestamp: new Date().toLocaleTimeString() };
            socket.emit('chat message', msg);
            setMessages((prevMessages) => [...prevMessages, msg]);
            setMessage('');
            // Add send animation effect here
            const sendBtn = document.getElementById('sendBtn');
            sendBtn.classList.add('animate-ping');
            setTimeout(() => sendBtn.classList.remove('animate-ping'), 200);
        }
    };

    const toggleChat = () => {
        setIsChatOpen((prev) => !prev);
    };

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
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Type a message"
                                className="w-full border-2 border-green-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300 pr-10"
                                value={message}
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                    setIsTyping(true);
                                    setTimeout(() => setIsTyping(false), 1000);
                                }}
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