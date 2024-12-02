
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ApplicationPage = () => {
  const [career, setCareer] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attachment: null
  });
  const { id } = useParams();

  useEffect(() => {
    const fetchCareer = async () => {
      try {
        const response = await axios.get(`https://cozycare-backend-g56w.onrender.com/careers/${parseInt(id)}`);
        setCareer(response.data);
      } catch (error) {
        console.error('Error fetching career:', error);
      }
    };

    fetchCareer();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for form validation
    if (!formData.name || !formData.email) {
      alert("Name and Email are required.");
      return;
    }

    // Assuming you have user_id stored in localStorage or a context
    const userId = localStorage.getItem('user_id'); 

   // Create a FormData object to handle file and other form data
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('user_id', userId); // Dynamically add user_id
    formDataToSend.append('career_id', career.id); // Use career ID from fetched career data

    // Ensure formData.attachment is a File object
    if (formData.attachment) {
      formDataToSend.append('attachment', formData.attachment);
    }

    formDataToSend.append('created_at', new Date().toISOString());

    try {
      // Send the form data to Flask server
      const response = await axios.post('https://cozycare-backend-g56w.onrender.com/applications', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data', // Ensure correct content type for file upload
        },
      });

      setShowForm(false); // Hide form on success
      alert('Application submitted successfully!');
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Error submitting application. Please try again.');
    }
  };

  const handleInputChange = (e) => {
    if (e.target.name === 'attachment') {
      setFormData({
        ...formData,
        attachment: e.target.files[0]
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  if (!career) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div>
    </div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">{career.title}</h1>
      <div className="bg-[#FFFDD0] shadow-2xl rounded-xl p-8 hover:shadow-3xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Position Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-green-100 p-4 rounded-lg">
            <p className="text-gray-700">
              <span className="font-semibold text-green-700 block mb-1">Department</span>
              <span className="text-lg">{career.department}</span>
            </p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <p className="text-gray-700">
              <span className="font-semibold text-green-700 block mb-1">Location</span>
              <span className="text-lg">{career.location}</span>
            </p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <p className="text-gray-700">
              <span className="font-semibold text-green-700 block mb-1">Remote</span>
              <span className="text-lg">{career.remote ? 'Yes' : 'No'}</span>
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
            <svg className="w-6 h-6 mr-2 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            Job Description
          </h3>
          <p className="text-gray-700 leading-relaxed bg-green-100 p-6 rounded-lg">{career.description}</p>
        </div>
        <div className="text-center">
          <button 
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-green-700 to-green-500 text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transform hover:scale-105 transition-all duration-300"
          >
            Apply Now
          </button>
        </div>
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-[#FFFDD0] p-8 rounded-lg max-w-md w-full">
              <h3 className="text-2xl font-bold mb-4">Submit Application</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Upload Attachments (merged pdf format)</label>
                  <input
                    type="file"
                    name="attachment"
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-green-700 to-green-500 text-white font-bold py-2 px-6 rounded-full hover:opacity-90"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="text-gray-700 font-bold py-2 px-6 rounded-full"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationPage;
