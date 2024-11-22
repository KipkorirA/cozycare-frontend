import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { FaComments } from 'react-icons/fa';

const socket = io('https://cozycare-backend-g56w.onrender.com'); 

const RealTimeChat = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [isChatOpen, setIsChatOpen] = useState(false); 

    useEffect(() => {
        // Clear messages on component mount (reload)
        setMessages([]);

        // Listen for incoming messages
        socket.on('chat message', (msg) => {
            setMessages((prevMessages) => [...prevMessages, { ...msg, isSent: false }]);
        });

        // Cleanup function to remove the event listener on unmount
        return () => {
            socket.off('chat message');
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            const msg = { username: 'Guest', message: message.trim(), isSent: true }; // Mark message as sent
            socket.emit('chat message', msg);
            setMessages((prevMessages) => [...prevMessages, msg]); // Immediately update local state
            setMessage(''); // Clear the input field after sending the message
        }
    };

    const toggleChat = () => {
        setIsChatOpen((prev) => !prev); // Toggle chat window visibility
    };

    return (
        <>
            {/* Chat Icon */}
            <button
                onClick={toggleChat}
                className="fixed bottom-5 right-5 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-110"
                aria-label="Toggle chat"
            >
                <FaComments size={24} />
            </button>

            {/* Chat Window */}
            {isChatOpen && (
                <div
                    className="fixed bottom-20 right-5 w-80 max-h-[500px] border border-gray-300 rounded-lg shadow-lg p-4 flex flex-col bg-white"
                    style={{ zIndex: 1000 }} // Ensure it is on top
                >
                    <h2 className="text-xl font-semibold mb-2 border-b border-gray-300 pb-2 text-center">Real-Time Chat</h2>
                    <div
                        className="flex-1 overflow-y-auto mb-4 bg-gray-50 p-2 rounded-md border border-gray-300"
                        aria-live="polite" // Accessibility feature
                    >
                        {messages.length === 0 ? (
                            <p className="text-gray-500 text-center">No messages yet.</p>
                        ) : (
                            messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`mb-2 p-2 rounded-lg ${
                                        msg.isSent
                                            ? 'bg-blue-100 self-end' // Sent messages style
                                            : 'bg-green-100 self-start' // Received messages style
                                    }`}
                                    style={{
                                        alignSelf: msg.isSent ? 'flex-end' : 'flex-start', // Align based on sender
                                    }}
                                >
                                    <strong className="text-blue-600">{msg.username}:</strong> <span className="text-gray-800">{msg.message}</span>
                                </div>
                            ))
                        )}
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
                        <input
                            type="text"
                            placeholder="Type a message"
                            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-transform transform hover:scale-105"
                        >
                            Send
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default RealTimeChat;