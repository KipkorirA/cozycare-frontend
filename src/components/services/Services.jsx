// import React from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
    return (
        <section className="p-8">
            {/* Section Title */}
            <h1 className="text-4xl font-bold text-center mb-4">
                OUR IN-HOME CARE <span className="text-[#f0a500]">SERVICE</span>
            </h1>
            <hr className="border-b-2 border-[#f0a500] mb-6" />

            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Service 1 */}
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                    <img 
                        src="public/images/Untitled design (2)-Photoroom.png" 
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
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                    <img 
                        src="public/images/Untitled design (3)-Photoroom.png" 
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
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                    <img 
                        src="public/images/Untitled design (4)-Photoroom.png" 
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
            <div className="text-center mt-8">
                <Link to="/services" className="bg-[#f0a500] text-white rounded-full px-6 py-2 font-semibold transition duration-300 ease-in-out hover:bg-[#b88c00] flex items-center justify-center">
                    LEARN MORE <i className="fas fa-arrow-right ml-2"></i>
                </Link>
            </div>
        </section>
    );
};

export default Service;
