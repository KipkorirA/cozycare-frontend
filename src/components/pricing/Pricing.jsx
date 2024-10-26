import { Link } from 'react-router-dom';


const Pricing = () => {
    return (
        <section className="flex flex-col md:flex-row justify-between items-start p-8 md:p-16 bg-[#dad4d47e]">
            {/* Left Side: Pricing Information */}

            <div className="w-full md:w-1/2 pt-4 pr-4 mb-8 md:mb-0">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">PRICING</h1>
                <hr className="w-full md:w-4/5 lg:w-3/4 border-2 border-[#f0a500] mb-8" />
                
                <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
                    At CozyCare, we offer competitive pricing for our in-home care services. Our rates are flexible to suit the specific services you require and the frequency of care.
                </p>


                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gray-800">Subscription Plans</h2>
                <ul className="list-disc pl-8 mb-6 space-y-3">
                    <li className="text-gray-700 text-base md:text-lg lg:text-xl">Hourly Plans: Pay for care on an hourly basis.</li>
                    <li className="text-gray-700 text-base md:text-lg lg:text-xl">Monthly Plans: Enjoy discounted rates with monthly subscriptions.</li>
                    <li className="text-gray-700 text-base md:text-lg lg:text-xl">Yearly Plans: Benefit from significant savings with annual subscriptions.</li>
                </ul>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gray-800">Pay-Per-Service</h2>
                <ul className="list-disc pl-8 space-y-3">
                    <li className="text-gray-700 text-base md:text-lg lg:text-xl">One-Time Payments: Pay for specific services as needed, such as occasional respite care or transportation.</li>
                </ul>
            </div>

            {/* Right Side: Image and Additional Info */}

            <div className="w-full md:w-1/2">
                {/* Big image with surrounding text */}
                <div className="relative text-center w-full">
                    <img 
                        src="/images/CozyCare__7_-Photoroom-removebg-preview.png" 
                        alt="Illustration of pricing plans for CozyCare in-home services" 
                        className="w-full h-auto object-cover rounded-lg mb-4" 
                    />
                    
                    {/* Text inside the image without background */}
                    <div className="pt-0 -mt-16 pl-10 pr-9 absolute inset-0 flex flex-col  justify-center text-black bg-opacity-50 text-left rounded-lg md:pl-8 md:pt--1">
                        <h3 className="text-[8px] md:text-[10px] lg:text-[20px] lg:pl-9 lg:pr-9  font-bold">Factors that may affect pricing include:</h3>
                        <ul className="text-[8px] md:text-[10px] lg:text-[20px] text-left lg:pl-9 lg:pr-9 ">
                            <li>Level of care: The intensity and complexity of the care required.</li>
                            <li>Frequency of care: The number of hours of care needed per week.</li>
                            <li>Location: Geographic location may influence pricing.</li>
                            <li>Additional services: Any additional services requested, such as meal delivery or transportation.</li>
                        </ul>
                    </div>
                </div>
                
                {/* Paragraph below the image */}
                <p className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed">
                    To get a personalized quote, please contact us at 
                    <a href="tel:+254700697430" className="text-red-600 underline hover:text-red-800 transition-colors duration-300"> [+254 700 697 430]</a> or 
                    <a href="mailto:support@cozycare.com" className="text-red-600 underline hover:text-red-800 transition-colors duration-300"> support@cozycare.com</a>. 
                    We are happy to discuss your specific needs and provide you with a tailored pricing estimate.
                    <br />
                    <span className="text-sm text-gray-600 mt-4 block">Note: Prices are subject to change. Please contact us for the most up-to-date pricing information.</span>
                </p>

                {/* Link to Contact Us Page */}
                <Link to="/contact" className="inline-block mt-8 px-8 py-4 rounded-full text-lg font-semibold transition duration-300 ease-in-out bg-green-950 text-white hover:bg-[#54810c] hover:scale-105 shadow-lg hover:shadow-xl">
                    Contact Us
                </Link>
            </div>
        </section>
    );
};


export default Pricing;