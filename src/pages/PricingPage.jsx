

import { useState } from 'react';

const PricingPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://cozycare-backend-g56w.onrender.com/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('Form submitted successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          message: '',
        });
      } else {
        setSubmissionStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmissionStatus('Error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#f4f1ec] ">
      {/* Top Section */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-24  mb-8">
        <h1 className="pt-4 text-2xl lg:text-6xl font-bold text-gray-800 mb-2 lg:mb-2">Our Pricing</h1>
        <div className="w-[44px] h-1 mb-1 bg-yellow-500 shadow-sm"></div>

        {/* Pricing Section */}
        <div className="w-full text-left">

          {/* First Block - Text Left, Image Right */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between mb-8 gap-4">
            <div className="w-full md:w-1/2">
              <h3 className="text-lg lg:text-2xl mt-6 mb-2"><strong>Care Where You Reside</strong></h3>
              <p className="text-base lg:text-2xl mb-4">
                CozyCare offers flexible pricing options to suit your budget and needs. Our rates are based on the specific
                services you require and the frequency of care. Our goal is to help you maintain your independence and
                quality of life while receiving the support you require.
              </p>
              <h3 className="text-lg lg:pt-6 lg:pb-3 lg:text-2xl mb-2"><b>Subscription Plans:</b></h3>
              <ul className="list-disc lg:text-2xl ml-6 mb-4">
                <li>Hourly Plans: Pay for care on an hourly basis.</li>
                <li>Monthly Plans: Enjoy discounted rates with monthly subscriptions.</li>
                <li>Yearly Plans: Benefit from significant savings with annual subscriptions.</li>
              </ul>
            </div>
            <img className="w-1/2 md:w-1/4 rounded-lg object-cover" src="/images/pricing1.png" alt="Pricing details for subscription plans" />
          </div>

          {/* Second Block - Image Left, Text Right */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <img className="w-1/2 md:w-1/4 rounded-lg object-cover -mt-6 mb-5" src="/images/pricing2.png" alt="Pay per service details" />
            <div className="w-full md:w-1/2">
              <h3 className="text-lg mb-2 lg:pb-3 lg:text-2xl"><strong>Pay-Per-Service</strong></h3>
              <p className="list-disc lg:pb-3 lg:text-2xl ml-6 mb-4">
                One-Time Payments: Pay for specific services as needed, such as occasional respite care or transportation.
                </p>
            </div>
          </div>

          {/* Third Block - Text Left, Image Right */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between mb-8">
            <div className="w-full md:w-1/2">
              <h3 className="text-lg lg:pb-3 lg:text-2xl mb-2"><strong>Factors that may affect our pricing include:</strong></h3>
              <ul className="list-disc lg:pb-3 lg:text-2xl ml-6 mb-4">
                <li>The frequency of care you need.</li>
                <li>The type of services required (personal care, medical care, etc.).</li>
                <li>Your location and specific caregiving needs.</li>
              </ul>

              <p className="text-base mb-4 lg:pb-3 lg:text-2xl">
                To get a personalized quote, please contact us at <a href="https://wa.me/254735358125" className="text-[#2c5530] hover:underline"> 0735 358 125 </a> or{' '}
                <a href="mailto:support@cozycare.world" className="text-[#2c5530] hover:underline">support@cozycare.world</a>. We are happy to discuss your specific needs and provide you with a tailored
                pricing estimate. <br /> <br />
                <strong>Note:</strong> <i>Prices are subject to change. Please contact us for the most up-to-date pricing
                information.</i>
              </p>

            </div>
            <img className="w-1/2 md:w-1/4 rounded-lg object-cover -mt-6 mb-5" src="/images/pricing3.png" alt="Factors that affect pricing" />
          </div>

        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-[#a8c2b2] px-4 sm:px-8 md:px-16 lg:px-24 py-12 w-full box-border">
        <h1 className="text-lg lg:pb-3 lg:text-4xl mb-6 text-[#2c5530] font-bold animate-fade-in "><strong>FIND HOME CARE TODAY</strong></h1>
        <p className="text-lg lg:pb-3 lg:text-2xl mb-6 text-[#1d0303] leading-relaxed hover:text-[#2c5530] transition-colors duration-300">
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

        <h6 className="text-base lg:pb-3 lg:text-2xl mb-6 text-[#2c5530] font-medium animate-pulse">
          Whether you have questions, need assistance, or want to schedule an appointment, our team is here to help.
        </h6>

        {/* Contact Form */}
        <form
  className="w-full max-w-4xl mx-auto flex flex-col transform hover:scale-[1.02] transition-transform duration-300"
  onSubmit={handleFormSubmit}
>
  {/* First and Last Name */}
  <div className="flex flex-col sm:flex-row justify-between mb-6 lg:mb-8 gap-6 lg:gap-8">
    <input
      type="text"
      name="firstName"
      placeholder="First Name"
      value={formData.firstName}
      onChange={handleInputChange}
      required
      className="w-full sm:w-[48%] p-4 lg:p-5 text-lg lg:text-xl border border-[#2c5530] rounded-md bg-[#f8f5f0] focus:outline-none focus:ring-2 focus:ring-[#2c5530] transform hover:translate-y-[-3px] transition-transform duration-300"
    />
    <input
      type="text"
      name="lastName"
      placeholder="Last Name"
      value={formData.lastName}
      onChange={handleInputChange}
      required
      className="w-full sm:w-[48%] p-4 lg:p-5 text-lg lg:text-xl border border-[#2c5530] rounded-md bg-[#f8f5f0] focus:outline-none focus:ring-2 focus:ring-[#2c5530] transform hover:translate-y-[-3px] transition-transform duration-300"
    />
  </div>

  {/* Phone and Email */}
  <div className="flex flex-col sm:flex-row justify-between mb-6 lg:mb-8 gap-6 lg:gap-8">
    <input
      type="tel"
      name="phone"
      placeholder="Phone"
      value={formData.phone}
      onChange={handleInputChange}
      required
      className="w-full sm:w-[48%] p-4 lg:p-5 text-lg lg:text-xl border border-[#2c5530] rounded-md bg-[#f8f5f0] focus:outline-none focus:ring-2 focus:ring-[#2c5530] transform hover:translate-y-[-3px] transition-transform duration-300"
    />
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleInputChange}
      required
      className="w-full sm:w-[48%] p-4 lg:p-5 text-lg lg:text-xl border border-[#2c5530] rounded-md bg-[#f8f5f0] focus:outline-none focus:ring-2 focus:ring-[#2c5530] transform hover:translate-y-[-3px] transition-transform duration-300"
    />
  </div>

  {/* Message */}
  <textarea
    className="message p-4 lg:p-5 text-lg lg:text-xl border border-[#2c5530] rounded-md mb-6 lg:mb-8 bg-[#f8f5f0] focus:outline-none focus:ring-2 focus:ring-[#2c5530] transform hover:translate-y-[-3px] transition-transform duration-300"
    name="message"
    placeholder="Message"
    value={formData.message}
    onChange={handleInputChange}
    rows="6"
    required
  ></textarea>

  {/* Recaptcha */}
  <div className="flex items-center mb-6 lg:mb-8 hover:opacity-80 transition-opacity duration-300">
    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[url('/images/recaptcha-logo.png')] bg-cover mr-3 lg:mr-4"></div>
    <input type="checkbox" id="not-a-robot" className="accent-[#2c5530]" />
    <label htmlFor="not-a-robot" className="text-base lg:text-lg ml-2 text-[#2c5530]">
      I am not a robot
    </label>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    disabled={isSubmitting}
    className="py-4 lg:py-5 px-6 lg:px-8 w-full sm:w-96 bg-[#2c5530] hover:bg-[#1a331d] transition-all duration-300 rounded-md text-lg lg:text-2xl text-[#f8f5f0] font-medium shadow-lg hover:shadow-xl transform hover:translate-y-[-3px]"
  >
    {isSubmitting ? 'Submitting...' : 'Get Started'}
  </button>
  {submissionStatus && (
    <p className="mt-6 lg:mt-8 text-center text-lg lg:text-xl text-[#2c5530] animate-bounce">
      {submissionStatus}
    </p>
  )}
</form>
      </div>   
    </div>  
    );
};

export default PricingPage;
