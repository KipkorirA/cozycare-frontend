import  { useState } from 'react';
import axios from 'axios';

const AdminEmailSender = () => {
    const [subject, setSubject] = useState('');
    const [recipient, setRecipient] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const emailData = {
            subject,
            recipient,
            message
        };

        try {
            const response = await axios.post('https://cozycare-backend-g56w.onrender.com/send_email', emailData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200) {
                setStatus('Email sent successfully!');
                setSubject('');
                setRecipient('');
                setMessage('');
            }
        } catch (error) {

            console.error(error.response ? error.response.data : error.message);
            setStatus('Failed to send email. Please try again.');
        }
    };

    return (





        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Email</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>



                <div className="space-y-2">
                    <label htmlFor="recipient" className="block text-sm font-medium text-gray-700">Recipient</label>
                    <input
                        type="email"
                        id="recipient"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>



                <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                    ></textarea>
                </div>


                <button 
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                    Send Email
                </button>
            </form>


            {status && (
                <p className={`mt-4 p-3 rounded-md ${
                    status.includes('successfully') 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                }`}>
                    {status}
                </p>
            )}
        </div>
    );
};


export default AdminEmailSender;