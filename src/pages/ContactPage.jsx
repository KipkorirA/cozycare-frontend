/* eslint-disable react/no-unescaped-entities */
// src/components/pages/ContactPage.jsx
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
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
    setFormData({ firstName: '', lastName: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen  items-center justify-center bg-[#FDF5E6] pt-11 w-full">
      <div className="w-full max-w-7xl px-1 ">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">WE'D LOVE  TO HERE FROM YOU</h1>
        <p className="mb-8 text-gray-600 text-lg">Whether you have questions, need assistance, or want to schedule an appointment, our team is here to help</p>
        <form onSubmit={handleSubmit} className="space-y-20 text-white">
          <div className="flex gap-4">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="FirstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-3 border border-[#022e02] rounded-lg focus:ring-2 focus:ring-[#98FB98] focus:border-transparent transition duration-200 ease-in-out bg-[#032b03]"
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="LastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-3 border border-[#98FB98] rounded-lg focus:ring-2 focus:ring-[#98FB98] focus:border-transparent transition duration-200 ease-in-out bg-[#032b03]"
            />
          </div>
          <div className="flex gap-4">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border border-[#98FB98] rounded-lg focus:ring-2 focus:ring-[#98FB98] focus:border-transparent transition duration-200 ease-in-out bg-[#032b03]"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-[#98FB98] rounded-lg focus:ring-2 focus:ring-[#98FB98] focus:border-transparent transition duration-200 ease-in-out text-white bg-[#032b03]"
            />
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-[#012901] rounded-lg focus:ring-2 focus:ring-[#98FB98] focus:border-transparent transition duration-200 ease-in-out resize-none text-white bg-[rgb(2,53,2)]"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[rgb(3,43,3)] hover:bg-[#98FB98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#98FB98] transition duration-200 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="w-full max-w-7xl mt-20 flex flex-col md:flex-row gap-8 px-4 pb-10">
        <img src="/images/cartoon.png" alt="Contact Support" className="w-auto h-52 object-contain hover:scale-110 transition-transform duration-300" />
        <div className="w-full">
          <h1 className="text-2xl font-bold mb-6 animate-fade-in">Any questions or feedback? Call us anytime. We're here for you 24/7.</h1>
          <div className='bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1'>
            <h2 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#032b03] to-[#98FB98]">Questions about care?</h2>
            <p className="text-gray-700 mb-6">We're here to help with any questions about our services, scheduling, or the CozyCare App.</p>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-8'>
              <a href="tel:+1234567890" className='bg-[rgb(3,43,3)] text-white py-2 px-4 rounded-lg hover:bg-[#98FB98] hover:text-[rgb(3,43,3)] transition-all duration-300 transform hover:scale-105 text-center hover:shadow-lg'>Contact Us</a>
              <a href="mailto:Support@cozycare.com" className='bg-[rgb(3,43,3)] text-white py-2 px-4 rounded-lg hover:bg-[#98FB98] hover:text-[rgb(3,43,3)] transition-all duration-300 transform hover:scale-105 text-center hover:shadow-lg'>Support@cozycare.com</a>
            </div>
          </div>
        </div>
      </div>    </div>
  );
};

export default ContactPage;