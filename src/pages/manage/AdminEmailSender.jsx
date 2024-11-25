import { useState } from 'react';
import axios from 'axios';

const AdminEmailSender = () => {
  const [emailData, setEmailData] = useState({
    recipient_email: '',
    subject: '',
    body: '',
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://cozycare-backend-g56w.onrender.com/send-email', emailData);
      setResponseMessage(response.data.message);
    } catch (error) {
      setResponseMessage(`Error: ${error.response?.data?.error || 'Something went wrong'}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Send Email</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="recipient_email"
          placeholder="Recipient Email"
          value={emailData.recipient_email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={emailData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="body"
          placeholder="Email Body"
          value={emailData.body}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
        ></textarea>
        <button 
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Send Email
        </button>
      </form>
      {responseMessage && (
        <p className="mt-4 p-4 rounded-lg bg-gray-100 text-center">
          {responseMessage}
        </p>
      )}
    </div>
  );
};

export default AdminEmailSender;