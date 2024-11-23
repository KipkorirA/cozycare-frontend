import { useState } from 'react';
import { FaComments } from 'react-icons/fa';

const RealTimeChat = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [isChatOpen, setIsChatOpen] = useState(false);

    // Auto-responses dictionary for the frontend
    const auto_responses = {
        "hello": "Hello! How can I assist you today?",
        "hi": "Hi there! How can I help you today?",
        "help": "Sure! Please describe your issue, and I'll assist you.",
        "bye": "Goodbye! Have a great day ahead!",
        "thanks": "You're welcome! Feel free to reach out anytime.",
        "what is your name?": "I am CozyCare, your friendly assistant. How can I help you today?",
        "how are you?": "I'm doing great, thank you for asking! How can I assist you?",
        "tell me a joke": "Why don’t skeletons fight each other? They don’t have the guts!",
        "what can you do?": "I can help you with various queries, provide information, and assist with customer service. What do you need help with?",
        "good morning": "Good morning! How can I assist you today?",
        "good afternoon": "Good afternoon! How may I help you?",
        "good evening": "Good evening! What can I do for you?",
        "what is the weather like?": "I don't have access to real-time weather data, but I suggest checking your local weather service!",
        "how can I contact support?": "You can contact support by emailing us at support@cozycare.com or calling our helpline.",
        "what are your hours?": "Our support team is available 24/7. Feel free to reach out anytime!",
        "can you help me with my order?": "Sure! Please provide your order number, and I'll assist you.",
        "where are you located?": "We are located in the heart of the city, but we're available to help you online anytime.",
        "I have a problem with my account": "I'm sorry to hear that. Could you provide more details so I can assist you better?",
        "cancel my subscription": "I'm sorry to see you go. Please let me know the details, and I'll help you with the cancellation.",
        "reset my password": "I can't reset your password directly, but I can guide you through the process. Would you like help with that?",
        "can I change my payment method?": "Yes, you can change your payment method from your account settings. Let me know if you need assistance with that.",
        "how do I use your service?": "It's easy! Sign up, choose a plan, and you’re good to go. Let me know if you need help with the setup.",
        "thank you": "You're very welcome! Let me know if you need anything else.",
        "sorry": "No problem! Feel free to share your query when you're ready.",
        "can you remind me later?": "I can't set reminders, but I recommend using a reminder app for that!",
        "how do I subscribe to your newsletter?": "You can subscribe to our newsletter by visiting our website and signing up at the bottom of the page.",
        "what is your return policy?": "Our return policy is straightforward. Please visit our Returns and Refunds page for all the details.",
        "do you have a mobile app?": "Yes, we have a mobile app! You can download it from the App Store or Google Play.",
        "is your service available worldwide?": "Yes, we offer worldwide coverage. You can access our services no matter where you are.",
        "can I speak to a human?": "I'm here to help, but if you'd prefer to talk to a human agent, I can connect you with one. Would you like that?",
        "do you offer discounts?": "Yes! We have seasonal promotions and special offers. Check our website for the latest deals.",
        "how do I cancel my subscription?": "You can cancel your subscription anytime from your account settings, or I can guide you through the process. Let me know what you prefer.",
        "can I upgrade my plan?": "Yes, you can upgrade your plan anytime. Head to your account settings to select a new plan, or let me know if you'd like assistance.",
        "why is my account locked?": "Your account might be locked due to multiple failed login attempts. Please check your email for instructions on unlocking your account.",
        "can you assist me with billing?": "Of course! What billing issue are you facing? I can guide you or connect you to our billing team.",
        "how can I delete my account?": "We're sorry to see you go! Please contact our support team at support@cozycare.com, and we'll assist you with account deletion.",
        "where can I find my invoices?": "You can find your invoices in the 'Billing' section of your account settings. Let me know if you need help locating them.",
        "can I get a refund?": "Refunds depend on the terms of your purchase. Please check our refund policy or contact support for more information.",
        "do you support international payments?": "Yes, we accept payments from most countries. You can use a variety of payment methods, including credit cards and PayPal.",
        "how do I update my profile?": "You can update your profile by going to the 'Account Settings' section on our website. Let me know if you need step-by-step guidance.",
        "is my data safe with you?": "Yes, we prioritize the security and privacy of your data. We use encryption and follow strict security protocols to protect your information.",
        "can I integrate with other services?": "Yes, we offer integrations with several third-party services. Check our integrations page for more details or let me know what you want to integrate with!",
        "can I switch my subscription plan?": "Yes, you can switch your plan anytime from the account settings. Let me know if you need help with that.",
        "what happens if I miss a payment?": "If you miss a payment, your account may be temporarily suspended until the payment is processed. Please check your payment method and try again.",
        "do you offer free trials?": "Yes, we offer a free trial for 30 days. You can sign up and try out our service before committing to a plan.",
        "how do I contact customer service?": "You can contact our customer service team by emailing support@cozycare.com or through our live chat feature. We're always here to help.",
        "is there a mobile version of the website?": "Yes! Our website is fully mobile-friendly, so you can access your account from any device.",
        "can I share my account with others?": "Your account is for personal use only. However, if you'd like, we can discuss options for additional users under your plan."
    };

    // Handle message submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            const userMessage = message.trim();
            const responseMessage = auto_responses[userMessage.toLowerCase()] || "Sorry, I didn't understand that. Can you rephrase?";

            // Add user's message to chat
            const userMsg = { username: 'Guest', message: userMessage, isSent: true };
            setMessages((prevMessages) => [...prevMessages, userMsg]);

            // Add auto-response to chat
            const botMsg = { username: 'CozyCare', message: responseMessage, isSent: false };
            setMessages((prevMessages) => [...prevMessages, botMsg]);

            // Clear input field after sending
            setMessage('');
        }
    };

    // Toggle chat window visibility
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
                                    className={`flex ${msg.isSent ? 'justify-end' : 'justify-start'} mb-2`}
                                >
                                    <div
                                        className={`p-2 rounded-lg max-w-[70%] ${msg.isSent ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                                    >
                                        <strong>{msg.username}:</strong> {msg.message}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Message Input */}
                    <form onSubmit={handleSubmit} className="flex items-center">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Type a message..."
                            autoFocus
                        />
                        <button
                            type="submit"
                            className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            aria-label="Send message"
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
