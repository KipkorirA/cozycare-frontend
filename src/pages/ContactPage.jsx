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
    <div className="max-w-md mx-auto my-12 p-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl mb-4 text-center">Contact Us</h1>
      <p className="mb-8 text-center">We'd love to hear from you. Get in touch with us today!</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 font-bold">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md box-border"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 font-bold">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md box-border"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 font-bold">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md resize-none box-border"
          ></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
