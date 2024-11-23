import { useState } from 'react';

const PricingPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
    recaptcha: false, // This will store the value of the reCAPTCHA checkbox
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle the reCAPTCHA checkbox change
  const handleRecaptchaChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      recaptcha: e.target.checked,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the reCAPTCHA checkbox is checked
    if (!formData.recaptcha) {
      alert('Please confirm that you are not a robot.');
      return;
    }

    // Prepare the form data to be sent in the request
    const requestData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
    };

    try {
      // Send the POST request to the server
      const response = await fetch('https://cozycare-backend-g56w.onrender.com/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message); // Show success message from the response
        // Reset the form data after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          message: '',
          recaptcha: false,
        });
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'An error occurred while submitting your request.');
      }
    } catch (error) {
      alert('An error occurred while submitting your request.');
      console.error(error);
    }
  };

  return (
    <div className="w-full bg-[#f4f1ec]">
      {/* Top Section */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 mb-8">
        <h1 className="pt-4 text-4xl font-bold text-gray-800 mb-6">Our Pricing</h1>
        <div className="w-full h-0.5 bg-gray-300 shadow-sm"></div>

        {/* Pricing Section */}
        <div className="w-full text-left">
          {/* Content omitted for brevity */}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-[#a8c2b2] px-4 sm:px-8 md:px-16 lg:px-24 py-12 w-full box-border">
        <h1 className="text-3xl mb-6">FIND HOME CARE TODAY</h1>
        <p className="text-lg mb-6 text-[#1d0303]">
          Get Started with Primary Care at Home
          <br />
          <br />
          Ready to experience the CozyCare difference? Contact us today to learn more about our home-based primary care
          services. Our experienced team is here to answer any questions you may have and help you take the first step
          toward receiving the high-quality care you deserve.
          <br />
          <br />
          Don't wait – let us show you how we can support your health and well-being today!
        </p>

        <h6 className="text-base mb-6 text-white">
          Whether you have questions, need assistance, or want to schedule an appointment, our team is here to help.
        </h6>

        {/* Contact Form */}
        <form className="w-full max-w-2xl mx-auto flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row justify-between mb-4 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full sm:w-[48%] p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full sm:w-[48%] p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between mb-4 gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full sm:w-[48%] p-3 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full sm:w-[48%] p-3 border border-gray-300 rounded-md"
            />
          </div>
          <textarea
            className="message p-3 border border-gray-300 rounded-md mb-4"
            name="message"
            placeholder="Message"
            rows="4"
            required
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>

          <div className="flex items-center mb-4">
            <div className="w-7 h-7 bg-[url('/images/recaptcha-logo.png')] bg-cover mr-2"></div>
            <input type="checkbox" id="not-a-robot" checked={formData.recaptcha} onChange={handleRecaptchaChange} />
            <label htmlFor="not-a-robot" className="text-sm ml-2">I am not a robot</label>
          </div>

          <button type="submit" className="py-3 px-6 w-full sm:w-80 bg-[#f2f7f2] rounded-md text-lg hover:bg-green-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PricingPage;
