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
    <div className="min-h-screen items-center justify-center bg-gradient-to-b from-[#FDF5E6] to-[#e6dbc7] pt-11 w-full h-full">
      <div className="w-full max-w-7xl px-1 animate-fadeIn mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-gray-900 hover:text-[#032b03] transition-colors duration-300">WE'D LOVE TO HEAR FROM YOU</h1>
        <p className="mb-8 text-gray-600 text-lg hover:text-gray-800 transition-colors duration-300">Whether you have questions, need assistance, or want to schedule an appointment, our team is here to help</p>
        <form onSubmit={handleSubmit} className="space-y-20 text-white backdrop-blur-sm bg-opacity-20 p-8 rounded-2xl shadow-2xl">
          <div className="flex gap-4 flex-wrap">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="FirstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full md:w-[calc(50%-0.5rem)] p-3 border border-[#022e02] rounded-lg focus:ring-2 focus:ring-[#98FB98] focus:border-transparent transition-all duration-300 bg-[#032b03] hover:bg-[#043904] transform hover:scale-102"
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="LastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full md:w-[calc(50%-0.5rem)] p-3 border border-[#98FB98] rounded-lg focus:ring-2 focus:ring-[#98FB98] focus:border-transparent transition-all duration-300 bg-[#032b03] hover:bg-[#043904] transform hover:scale-102"
            />
          </div>
          <div className="flex gap-4 flex-wrap">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full md:w-[calc(50%-0.5rem)] p-3 border border-[#98FB98] rounded-lg focus:ring-2 focus:ring-[#98FB98] focus:border-transparent transition-all duration-300 bg-[#032b03] hover:bg-[#043904] transform hover:scale-102"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full md:w-[calc(50%-0.5rem)] p-3 border border-[#98FB98] rounded-lg focus:ring-2 focus:ring-[#98FB98] focus:border-transparent transition-all duration-300 bg-[#032b03] hover:bg-[#043904] transform hover:scale-102"
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
              className="w-full p-3 border border-[#012901] rounded-lg focus:ring-2 focus:ring-[#98FB98] focus:border-transparent transition-all duration-300 resize-none text-white bg-[rgb(2,53,2)] hover:bg-[#043904]"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <div className="g-recaptcha" data-sitekey="YOUR_SITE_KEY"></div>
          </div>
          <button 
            type="submit" 
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-medium text-white bg-[rgb(3,43,3)] hover:bg-[#98FB98] hover:text-[#032b03] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#98FB98] transition-all duration-300 transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="w-full max-w-7xl mt-20 flex flex-col md:flex-row gap-8 px-4 pb-10 mx-auto">
        <img src="/images/cartoon.png" alt="Contact Support" className="w-auto h-52 object-contain hover:scale-125 transition-transform duration-500 cursor-pointer" />
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-6 animate-pulse bg-gradient-to-r from-[#032b03] to-[#98FB98] bg-clip-text text-transparent">Any questions or feedback? Call us anytime. We're here for you 24/7.</h1>
          <div className='bg-white/80 backdrop-blur-md rounded-lg shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2'>
            <h2 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#032b03] to-[#98FB98] animate-gradient">Questions about care?</h2>
            <p className="text-gray-700 mb-6 hover:text-gray-900 transition-colors duration-300">We're here to help with any questions about our services, scheduling, or the CozyCare App.</p>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-8'>
              <a href="tel:+1234567890" className='bg-[rgb(3,43,3)] text-white py-3 px-6 rounded-lg hover:bg-[#98FB98] hover:text-[rgb(3,43,3)] transition-all duration-300 transform hover:scale-110 text-center hover:shadow-xl flex items-center justify-center gap-2'>
                <span>Contact Us</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </a>
              <a href="mailto:Support@cozycare.com" className='bg-[rgb(3,43,3)] text-white py-3 px-6 rounded-lg hover:bg-[#98FB98] hover:text-[rgb(3,43,3)] transition-all duration-300 transform hover:scale-110 text-center hover:shadow-xl flex items-center justify-center gap-2'>
                <span>Support@cozycare.com</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;