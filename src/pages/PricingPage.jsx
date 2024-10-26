const PricingPage = () => {
  return (
    <div className="w-full bg-[#f4f1ec] ">
      {/* Top Section */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-24  mb-8">
        <h1 className="pt-4 text-4xl font-bold text-gray-800 mb-6">Our Pricing</h1>
        <div className="w-full h-0.5 bg-gray-300 shadow-sm"></div>

        {/* Pricing Section */}
        <div className="w-full text-left">

          {/* First Block - Text Left, Image Right */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between mb-8 gap-4">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl mt-6 mb-2">Care Where You Reside</h3>
              <p className="text-base mb-4">
                CozyCare offers flexible pricing options to suit your budget and needs. Our rates are based on the specific
                services you require and the frequency of care. Our goal is to help you maintain your independence and
                quality of life while receiving the support you require.
              </p>
              <h3 className="text-2xl mb-2">Subscription Plans:</h3>
              <ul className="list-disc ml-6 text-lg mb-4">
                <li>Hourly Plans: Pay for care on an hourly basis.</li>
                <li>Monthly Plans: Enjoy discounted rates with monthly subscriptions.</li>
                <li>Yearly Plans: Benefit from significant savings with annual subscriptions.</li>
              </ul>
            </div>
            <img className="w-full md:w-1/4 rounded-lg object-cover" src="/images/pricing1.png" alt="Pricing details for subscription plans" />
          </div>

          {/* Second Block - Image Left, Text Right */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <img className="w-full md:w-1/4 rounded-lg object-cover" src="/images/pricing2.png" alt="Pay per service details" />
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl mb-2">Pay-Per-Service</h3>
              <ul className="list-disc ml-6 text-lg mb-4">
                <li>One-Time Payments: Pay for specific services as needed, such as occasional respite care or transportation.</li>
              </ul>
            </div>
          </div>

          {/* Third Block - Text Left, Image Right */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between mb-8">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl mb-2">Factors that may affect our pricing include:</h3>
              <ul className="list-disc ml-6 text-lg mb-4">
                <li>The frequency of care you need.</li>
                <li>The type of services required (personal care, medical care, etc.).</li>
                <li>Your location and specific caregiving needs.</li>
              </ul>
              <p className="text-base mb-4">
                To get a personalized quote, please contact us at <span>[Phone Number]</span> or{' '}
                <span>support@cozycare.com</span>. We are happy to discuss your specific needs and provide you with a tailored
                pricing estimate. <br />
                <strong>Note:</strong> Prices are subject to change. Please contact us for the most up-to-date pricing
                information.
              </p>
            </div>
            <img className="w-full md:w-1/4 rounded-lg object-cover" src="/images/pricing3.png" alt="Factors that affect pricing" />
          </div>

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
        <form className="w-full max-w-2xl mx-auto flex flex-col">
          <div className="flex flex-col sm:flex-row justify-between mb-4 gap-4">
            <input type="text" name="firstName" placeholder="First Name" required className="w-full sm:w-[48%] p-3 border border-gray-300 rounded-md" />
            <input type="text" name="lastName" placeholder="Last Name" required className="w-full sm:w-[48%] p-3 border border-gray-300 rounded-md" />
          </div>
          <div className="flex flex-col sm:flex-row justify-between mb-4 gap-4">
            <input type="tel" name="phone" placeholder="Phone" required className="w-full sm:w-[48%] p-3 border border-gray-300 rounded-md" />
            <input type="email" name="email" placeholder="Email" required className="w-full sm:w-[48%] p-3 border border-gray-300 rounded-md" />
          </div>
          <textarea className="message p-3 border border-gray-300 rounded-md mb-4" name="message" placeholder="Message" rows="4" required></textarea>
          
          <div className="flex items-center mb-4">
            <div className="w-7 h-7 bg-[url('/images/recaptcha-logo.png')] bg-cover mr-2"></div>
            <input type="checkbox" id="not-a-robot" />
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