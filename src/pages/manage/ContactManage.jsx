import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ContactManage = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gradient-to-r from-green-50 to-[#FFFDD0] min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-green-300 pb-2">Contact Management</h2>
        <button
          onClick={() => navigate(-1)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
        >
          Back
        </button>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="min-w-full bg-white">
            <thead className="bg-gradient-to-r from-green-500 to-[#FFFDD0] text-gray-800">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">First Name</th>
                <th className="px-4 py-3">Last Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3 w-1/3">Message</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-4 py-3 border-b">{contact.id}</td>
                  <td className="px-4 py-3 border-b">{contact.first_name}</td>
                  <td className="px-4 py-3 border-b">{contact.last_name}</td>
                  <td className="px-4 py-3 border-b">{contact.email}</td>
                  <td className="px-4 py-3 border-b">{contact.phone}</td>
                  <td className="px-4 py-3 border-b whitespace-normal break-words max-w-xs">{contact.message}</td>
                  <td className="px-4 py-3 border-b">
                    <button
                      onClick={() => handleDelete(contact.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition-colors duration-200"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ContactManage;