// import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const Service = () => {
    return (
        <section className="p-8" style={{ backgroundColor: '#085846' }}> {/* Fixed background color */}
            {/* Section Title */}
            <h1 className="text-4xl text-[#eeedeb] font-bold text-left mb-4">
                OUR IN-HOME CARE <br /> <span className="text-[#eeedeb]">SERVICE</span>
            </h1>
            <hr className="border-b-2 border-[#ad9c78] mb-6 w-80" />

            {/* Service Cards */}
            <div className="grid bg-none text-white grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Service 1 */}
                <div className="rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                    <img 
                        src="/images/Untitled design (2)-Photoroom.png" 
                        alt="Service 1" 
                        className="w-24 h-24 mb-4" 
                    />
                    <h2 className="text-2xl font-semibold mb-2">Personal Care</h2>
                    <ul className="list-disc pl-6 text-left">
                        <li>Assistance with bathing</li>
                        <li>Grooming and dressing</li>
                        <li>Medication reminders</li>
                    </ul>
                </div>

                {/* Service 2 */}
                <div className="rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                    <img 
                        src="/images/Untitled design (3)-Photoroom.png"  
                        alt="Service 2" 
                        className="w-24 h-24 mb-4" 
                    />
                    <h2 className="text-2xl font-semibold mb-2">Skilled Nursing</h2>
                    <ul className="list-disc pl-6 text-left">
                        <li>Medication administration</li>
                        <li>Wound care</li>
                        <li>Post-operative care</li>
                    </ul>
                </div>

                {/* Service 3 */}
                <div className="rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                    <img 
                        src="/images/Untitled design (4)-Photoroom.png"  
                        alt="Service 3" 
                        className="w-24 h-24 mb-4" 
                    />
                    <h2 className="text-2xl font-semibold mb-2">Therapy Services</h2>
                    <ul className="list-disc pl-6 text-left">
                        <li>Physical therapy</li>
                        <li>Occupational therapy</li>
                        <li>Speech therapy</li>
                    </ul>
                </div>
            </div>

            {/* Learn More Button Container */}
            <div className="text-center content-center mt-8">
                <Link to="/services" className="bg-[#0b471523] text-white rounded-full px-6 py-2 font-semibold transition duration-300 ease-in-out hover:bg-[#b88c00] flex items-center w-64 justify-center">
                    LEARN MORE <i className="fas fa-arrow-right ml-2"></i> {/* Font Awesome arrow icon */}
                </Link>
            </div>
        </section>
    );
};

export default Service;
