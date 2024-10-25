/* eslint-disable react/no-unescaped-entities */
// src/components/pages/ContactPage.jsx
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending data to an API)
    console.log('Form submitted:', formData);
    // Reset form after submission (optional)
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-[#FDF5E6]">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl p-8 space-y-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-900">Contact Us</h1>
        <p className="mb-8 text-center text-gray-600 text-lg">We'd love to hear from you. Get in touch with us today!</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-[#98FB98] rounded-lg focus:ring-2 focus:ring-[#98FB98] focus:border-transparent transition duration-200 ease-in-out bg-[#F0FFF0]"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-[#98FB98] rounded-lg focus:ring-2 focus:ring-[#98FB98] focus:border-transparent transition duration-200 ease-in-out bg-[#F0FFF0]"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-[#98FB98] rounded-lg focus:ring-2 focus:ring-[#98FB98] focus:border-transparent transition duration-200 ease-in-out resize-none bg-[#F0FFF0]"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#90EE90] hover:bg-[#98FB98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#98FB98] transition duration-200 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;