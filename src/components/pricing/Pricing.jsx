// import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <section className="flex flex-col md:flex-row justify-between items-start p-8 md:p-16 bg-[#dad4d47e]">
            {/* Left Side: Pricing Information */}
            <div className="w-full md:w-3/5 pt-2 pr-2 mb-8 md:mb-0">
                <h1 className="text-3xl md:text-4xl text-gray-800 mb-4">PRICING</h1>
                <hr className="w-full md:w-4/5 border-2 border-[#f0a500] mb-6" />
                
                <p className="text-lg text-gray-600 mb-6">
                    At CozyCare, we offer competitive pricing for our in-home care services. Our rates are flexible to suit the specific services you require and the frequency of care.
                </p>
                
                <h2 className="text-xl md:text-2xl font-semibold mb-2">Subscription Plans</h2>
                <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2 text-gray-700">Hourly Plans: Pay for care on an hourly basis.</li>
                    <li className="mb-2 text-gray-700">Monthly Plans: Enjoy discounted rates with monthly subscriptions.</li>
                    <li className="mb-2 text-gray-700">Yearly Plans: Benefit from significant savings with annual subscriptions.</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-semibold mb-2">Pay-Per-Service</h2>
                <ul className="list-disc pl-6">
                    <li className="mb-2 text-gray-700">One-Time Payments: Pay for specific services as needed, such as occasional respite care or transportation.</li>
                </ul>
            </div>

            {/* Right Side: Image and Additional Info */}
            <div className="w-full md:w-1/2">
                {/* Big image with surrounding text */}
                <div className="relative text-center w-full">
                    <img 
                        src="public/images/CozyCare__7_-Photoroom-removebg-preview.png" 
                        alt="Pricing Visual" 
                        className="w-full h-auto object-cover rounded-lg mb-4" 
                    />
                    
                    {/* Text inside the image without background */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-11/12 p-4 text-black text-xs md:text-sm text-left top-1/3 md:top-52">
                        <h3 className="font-bold text-xs md:text-sm">Factors that may affect pricing include:</h3>
                        <ul className="list-disc pl-5 text-xs md:text-sm">
                            <li className="mb-2">Level of care: The intensity and complexity of the care required.</li>
                            <li className="mb-2">Frequency of care: The number of hours of care needed per week.</li>
                            <li className="mb-2">Location: Geographic location may influence pricing.</li>
                            <li className="mb-2">Additional services: Any additional services requested, such as meal delivery or transportation.</li>
                        </ul>
                    </div>
                </div>
                
                {/* Paragraph below the image */}
                <p className="mt-4 text-lg text-gray-800 leading-relaxed">
                    To get a personalized quote, please contact us at 
                    <a href="tel:+254700697430" className="text-red-500 underline"> [+254 700 697 430]</a> or 
                    <a href="mailto:support@cozycare.com" className="text-red-500 underline"> support@cozycare.com</a>. 
                    We are happy to discuss your specific needs and provide you with a tailored pricing estimate.
                    Note: Prices are subject to change. Please contact us for the most up-to-date pricing information.
                </p>

                {/* Link to Contact Us Page */}
                <Link to="/contact" className="inline-block mt-8 px-4 py-2 text-red-500 rounded-full text-lg transition duration-300 ease-in-out hover:bg-[#54810c] hover:text-white">
                    Contact Us
                </Link>
            </div>
        </section>
    );
};

export default Pricing;
