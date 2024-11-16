import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <section className="flex flex-col md:flex-row justify-between items-start p-4 md:p-16 bg-[#dad4d47e] w-full">
            {/* Left Side: Pricing Information */}
            <div className="w-full md:w-1/2 pt-4 pr-2 md:pr-4 mb-8 md:mb-0">
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-800 mb-4 md:mb-6 hover:text-[#f0a500] transition-colors duration-300 transform hover:scale-105">PRICING</h1>
                <hr className="w-full md:w-4/5 lg:w-3/4 border-2 border-[#f0a500] mb-6 md:mb-8 animate-pulse" />
                
                <p className="text-base md:text-lg lg:text-2xl text-gray-700 mb-6 md:mb-8 leading-relaxed hover:text-gray-900 transition-colors duration-300 transform hover:translate-x-2">
                    At CozyCare, we offer competitive pricing for our in-home care services. Our rates are flexible to suit the specific services you require and the frequency of care.
                </p>

                <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold mb-3 md:mb-4 text-gray-800 hover:text-[#f0a500] transition-colors duration-300 transform hover:scale-105">Subscription Plans</h2>
                <ul className="list-disc pl-6 md:pl-8 mb-4 md:mb-6 space-y-2 md:space-y-3">
                    <li className="text-gray-700 text-sm md:text-lg lg:text-2xl hover:text-gray-900 transition-all duration-300 hover:translate-x-2">Hourly Plans: Pay for care on an hourly basis.</li>
                    <li className="text-gray-700 text-sm md:text-lg lg:text-2xl hover:text-gray-900 transition-all duration-300 hover:translate-x-2">Monthly Plans: Enjoy discounted rates with monthly subscriptions.</li>
                    <li className="text-gray-700 text-sm md:text-lg lg:text-2xl hover:text-gray-900 transition-all duration-300 hover:translate-x-2">Yearly Plans: Benefit from significant savings with annual subscriptions.</li>
                </ul>

                <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold mb-3 md:mb-4 text-gray-800 hover:text-[#f0a500] transition-colors duration-300 transform hover:scale-105">Pay-Per-Service</h2>
                <ul className="list-disc pl-6 md:pl-8 space-y-2 md:space-y-3">
                    <li className="text-gray-700 text-sm md:text-lg lg:text-2xl hover:text-gray-900 transition-all duration-300 hover:translate-x-2">One-Time Payments: Pay for specific services as needed, such as occasional respite care or transportation.</li>
                </ul>
            </div>

            {/* Right Side: Image and Additional Info */}
            <div className="w-full md:w-2/3">
                {/* Big image with surrounding text */}
                <div className="relative text-center w-full">
                    <img 
                        src="/images/CozyCare__7_-Photoroom-removebg-preview.png" 
                        alt="Illustration of pricing plans for CozyCare in-home services" 
                        className="w-full h-auto object-cover rounded-lg mb-4" 
                    />
                    
                    {/* Text inside the image without background */}
                    <div className="-mt-16 md:-mt-20 ml-9 md:ml-10 mr-11 md:pr-11 absolute inset-0 flex flex-col justify-center text-black text-left rounded-lg md:pl-8 md:pt--1 lg:pl-16 lg:pr-16 lg:-mt-40">    
                        <h3 className="text-[10px] md:text-[14px] lg:text-[24px] lg:pl-9 lg:pr-9 font-bold text-gray-800 md:mb-2">Factors that may affect pricing include:</h3>
                        <ul className="text-[9px] md:text-[12px] lg:text-[24px] text-left lg:pl-16 lg:pr-9 text-gray-700 md:space-y-1 list-disc">
                            <li>Level of care: The intensity and complexity of the care required.</li>
                            <li>Frequency of care: The number of hours of care needed per week.</li>
                            <li>Location: Geographic location may influence pricing.</li>
                            <li>Additional services: Any additional services requested, such as meal delivery or transportation.</li>
                        </ul>
                    </div>
                </div>  
                
                {/* Paragraph below the image */}
                <p className="mt-4 md:mt-6 text-base md:text-xl lg:text-3xl text-gray-800 leading-relaxed">
                    To get a personalized quote, please contact us at 
                    <a href="tel:+254735358125" className="text-[#f0a500] font-bold hover:text-[#54810c] transition-colors duration-300 transform hover:scale-105 inline-block"> +254 735 358 125</a> or via email at
                    <a href="mailto:support@cozycare.com" className="text-[#f0a500] font-bold hover:text-[#54810c] transition-colors duration-300 transform hover:scale-105 inline-block"> support@cozycare.com</a>.  
                    Our team is ready to discuss your specific needs and provide a tailored pricing solution that works for you.
                    <br />
                    <span className="text-sm md:text-lg lg:text-2xl text-gray-600 mt-3 md:mt-5 block font-medium italic">* Pricing may vary based on service requirements and location. Contact us for current rates and available discounts.</span>
                </p>
                
                {/* Link to Contact Us Page */}
                <div className="w-full flex justify-center">
                    <Link to="/contact" className="inline-block mt-6 md:mt-8 px-8 md:px-12 py-4 md:py-5 rounded-full text-base md:text-2xl lg:text-3xl font-bold transition-all duration-500 ease-in-out bg-gradient-to-r from-green-950 via-[#54810c] to-green-950 text-white hover:from-[#54810c] hover:via-green-950 hover:to-[#54810c] hover:scale-110 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 animate-pulse hover:animate-none border-2 border-transparent hover:border-[#f0a500]">
                        Get Started Now
                    </Link>
                </div>
            </div>
        </section>
    );
};


export default Pricing;