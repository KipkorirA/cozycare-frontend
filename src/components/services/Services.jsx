// import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const Service = () => {
    return (
        <section className="p-8 md:p-12 lg:p-16" style={{ backgroundColor: '#085846' }}>
            {/* Section Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#eeedeb] font-bold text-left mb-4 tracking-tight">
                OUR IN-HOME CARE <br /> <span className="text-[#eeedeb] hover:text-[#ad9c78] transition-colors duration-300">SERVICE</span>
            </h1>
            <hr className="border-b-2 border-[#ad9c78] mb-8 w-80 md:w-96 transition-all duration-300 hover:w-full" />

            {/* Service Cards */}
            <div className="grid bg-none text-white grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                {/* Service 1 */}
                <div className="rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 bg-[#0b471523] backdrop-blur-sm p-6 md:p-8 flex flex-col items-center text-center">
                    <img 
                        src="/images/Untitled design (2)-Photoroom.png" 
                        alt="Service 1" 
                        className="w-24 h-24 mb-4 hover:scale-110 transition-transform duration-300" 
                    />
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 hover:text-[#ad9c78] transition-colors duration-300">Personal Care</h2>
                    <ul className="list-disc pl-6 text-left space-y-2">
                        <li className="hover:text-[#ad9c78] transition-colors duration-300">Assistance with bathing</li>
                        <li className="hover:text-[#ad9c78] transition-colors duration-300">Grooming and dressing</li>
                        <li className="hover:text-[#ad9c78] transition-colors duration-300">Medication reminders</li>
                    </ul>
                </div>

                {/* Service 2 */}
                <div className="rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 bg-[#0b471523] backdrop-blur-sm p-6 md:p-8 flex flex-col items-center text-center">
                    <img 
                        src="/images/Untitled design (3)-Photoroom.png"  
                        alt="Service 2" 
                        className="w-24 h-24 mb-4 hover:scale-110 transition-transform duration-300" 
                    />
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 hover:text-[#ad9c78] transition-colors duration-300">Skilled Nursing</h2>
                    <ul className="list-disc pl-6 text-left space-y-2">
                        <li className="hover:text-[#ad9c78] transition-colors duration-300">Medication administration</li>
                        <li className="hover:text-[#ad9c78] transition-colors duration-300">Wound care</li>
                        <li className="hover:text-[#ad9c78] transition-colors duration-300">Post-operative care</li>
                    </ul>
                </div>

                {/* Service 3 */}
                <div className="rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 bg-[#0b471523] backdrop-blur-sm p-6 md:p-8 flex flex-col items-center text-center">
                    <img 
                        src="/images/Untitled design (4)-Photoroom.png"  
                        alt="Service 3" 
                        className="w-24 h-24 mb-4 hover:scale-110 transition-transform duration-300" 
                    />
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 hover:text-[#ad9c78] transition-colors duration-300">Therapy Services</h2>
                    <ul className="list-disc pl-6 text-left space-y-2">
                        <li className="hover:text-[#ad9c78] transition-colors duration-300">Physical therapy</li>
                        <li className="hover:text-[#ad9c78] transition-colors duration-300">Occupational therapy</li>
                        <li className="hover:text-[#ad9c78] transition-colors duration-300">Speech therapy</li>
                    </ul>
                </div>
            </div>

            {/* Learn More Button Container */}
            <div className="text-center content-center mt-12">
                <Link to="/services" className="bg-[#0b471523] text-white rounded-full px-8 py-3 font-semibold transition-all duration-300 ease-in-out hover:bg-[#b88c00] hover:shadow-lg hover:scale-105 flex items-center w-64 mx-auto justify-center group">
                    LEARN MORE <i className="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform duration-300"></i>
                </Link>
            </div>
        </section>
    );
};

export default Service;