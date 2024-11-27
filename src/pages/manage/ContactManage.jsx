import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ContactManage = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [contactsPerPage] = useState(5);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyData, setReplyData] = useState({
    recipient: '',
    subject: '',
    message: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('https://cozycare-backend-g56w.onrender.com/contacts');
        setContacts(response.data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://cozycare-backend-g56w.onrender.com/contacts/${id}`);
      setContacts(contacts.filter(contact => contact.id !== id));
      // Add a cool fade-out animation before removing
      const element = document.getElementById(`contact-${id}`);
      element.style.transition = 'all 0.5s ease';
      element.style.opacity = '0';
      element.style.transform = 'translateX(100px)';
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const handleReply = (contact) => {
    setReplyData({
      recipient: contact.email,
      subject: `Re: Message from CozyCare`,
      message: `Dear ${contact.first_name},\n\nThank you for your message regarding:\n"${contact.message}"\n\nBest regards,\nCozyCare Team`
    });
    setShowReplyForm(true);
  };

  const handleSendReply = async () => {
    try {
      await axios.post('https://cozycare-backend-g56w.onrender.com/send_email', replyData);
      alert('Reply sent successfully!');
      setShowReplyForm(false);
    } catch (error) {
      console.error('Error sending reply:', error);
      alert('Failed to send reply');
    }
  };

  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mx-auto p-4 sm:p-6 bg-gradient-to-br from-green-50 via-[#FFFDD0] to-green-50 min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 border-b-3 border-green-400 pb-3 tracking-wide animate-fade-in">
          Contact Management
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:rotate-1 shadow-lg hover:shadow-xl"
        >
          Back
        </button>
      </div>
      {showReplyForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md animate-fade-in-down">
            <h3 className="text-xl font-bold mb-4 text-green-600">Reply to Contact</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2 font-semibold">To:</label>
                <input
                  type="email"
                  value={replyData.recipient}
                  className="w-full p-2 border rounded-lg bg-gray-50"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-semibold">Subject:</label>
                <input
                  type="text"
                  value={replyData.subject}
                  onChange={(e) => setReplyData({...replyData, subject: e.target.value})}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-semibold">Message:</label>
                <textarea
                  value={replyData.message}
                  onChange={(e) => setReplyData({...replyData, message: e.target.value})}
                  className="w-full p-2 border rounded-lg h-48 focus:ring-2 focus:ring-green-400 focus:border-transparent"
                />
              </div>
              <div className="flex gap-3 justify-end pt-4">
                <button
                  onClick={() => setShowReplyForm(false)}
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-300 font-semibold"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSendReply}
                  className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  Send Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500"></div>
        </div>
      ) : (
        <div>
          <div className="grid gap-4 sm:gap-6">
            {currentContacts.map((contact) => (
              <div
                id={`contact-${contact.id}`}
                key={contact.id}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200 transform hover:-translate-y-1"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                  <div className="space-y-1 hover:text-green-600 transition-colors duration-300">
                    <span className="font-bold text-gray-700">ID:</span>
                    <p className="text-gray-600 break-all">{contact.id}</p>
                  </div>
                  <div className="space-y-1 hover:text-green-600 transition-colors duration-300">
                    <span className="font-bold text-gray-700">First Name:</span>
                    <p className="text-gray-600 break-all">{contact.first_name}</p>
                  </div>
                  <div className="space-y-1 hover:text-green-600 transition-colors duration-300">
                    <span className="font-bold text-gray-700">Last Name:</span>
                    <p className="text-gray-600 break-all">{contact.last_name}</p>
                  </div>
                  <div className="space-y-1 hover:text-green-600 transition-colors duration-300">
                    <span className="font-bold text-gray-700">Email:</span>
                    <p className="text-gray-600 break-all">{contact.email}</p>
                  </div>
                  <div className="space-y-1 hover:text-green-600 transition-colors duration-300">
                    <span className="font-bold text-gray-700">Phone:</span>
                    <p className="text-gray-600 break-all">{contact.phone}</p>
                  </div>
                  <div className="flex items-center justify-start sm:justify-end gap-2">
                    <button
                      onClick={() => handleReply(contact)}
                      className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-rotate-1 shadow-md hover:shadow-xl"
                    >
                      Reply
                    </button>
                    <button
                      onClick={() => handleDelete(contact.id)}
                      className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-rotate-1 shadow-md hover:shadow-xl"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="mt-4 border-t pt-4">
                  <span className="font-bold text-gray-700">Message:</span>
                  <p className="mt-2 text-gray-600 leading-relaxed break-words hover:text-green-600 transition-colors duration-300">{contact.message}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center mt-8 gap-2">
            {[...Array(Math.ceil(contacts.length / contactsPerPage))].map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`px-3 sm:px-5 py-2 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-xl ${
                  currentPage === index + 1
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white font-bold'
                    : 'bg-white text-green-500 hover:bg-green-100 font-semibold'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactManage;