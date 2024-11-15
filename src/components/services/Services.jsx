// import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const Service = () => {
    return (
        <section className="p-8 md:p-16 lg:p-24" style={{ backgroundColor: '#085846' }}>
            {/* Section Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-[#eeedeb] font-bold text-left mb-6 tracking-tight leading-tight">
                OUR IN-HOME CARE <br /> <span className="text-[#eeedeb] hover:text-[#ad9c78] transition-colors duration-500">SERVICES</span>
            </h1>
            <hr className="border-b-3 border-[#ad9c78] mb-12 w-80 md:w-96 transition-all duration-500 hover:w-full" />

            {/* Service Cards */}
            <div className="grid bg-none text-white grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-14">
                {/* Service 1 */}
                <div className="rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 transition-all duration-500 bg-[#0b471540] backdrop-blur-md p-8 md:p-10 flex flex-col items-center text-center">
                    <img 
                        src="/images/Untitled design (2)-Photoroom.png" 
                        alt="Service 1" 
                        className="w-[40%] md:w-[45%] lg:w-[50%] aspect-square mb-6 hover:scale-125 transition-transform duration-500" 
                    />
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 hover:text-[#ad9c78] transition-colors duration-500">Nursing Care</h2>
                    <ul className="list-disc pl-8 text-left space-y-3 text-lg">
                        <li className="hover:text-[#ad9c78] transition-colors duration-500">Providing medical care, such as wound care, medication administration, and vital sign monitoring.</li>
                        <li className="hover:text-[#ad9c78] transition-colors duration-500">Chronic Disease Management: Assisting with managing chronic conditions like diabetes, heart disease, and respiratory disorders.</li>
                        <li className="hover:text-[#ad9c78] transition-colors duration-500">Post-Hospital Care: Supporting individuals during their recovery from hospital stays.</li>
                    </ul>
                </div>

                {/* Service 2 */}
                <div className="rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 transition-all duration-500 bg-[#0b471540] backdrop-blur-md p-8 md:p-10 flex flex-col items-center text-center">
                    <img 
                        src="/images/Untitled design (3)-Photoroom.png"  
                        alt="Service 2" 
                        className="w-[40%] md:w-[45%] lg:w-[50%] aspect-square mb-6 hover:scale-125 transition-transform duration-500" 
                    />
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 hover:text-[#ad9c78] transition-colors duration-500">Care Assistance</h2>
                    <ul className="list-disc pl-8 text-left space-y-3 text-lg">
                        <li className="hover:text-[#ad9c78] transition-colors duration-500">Non-Medical Care: Assisting with daily living activities like bathing, dressing, meal preparation, and light housekeeping.</li>
                        <li className="hover:text-[#ad9c78] transition-colors duration-500">Transportation Services: Accompanying clients on appointments, errands, or social outings.</li>
                        <li className="hover:text-[#ad9c78] transition-colors duration-500">Companionship: Providing social interaction and emotional support.</li>
                    </ul>
                </div>

                {/* Service 3 */}
                <div className="rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 transition-all duration-500 bg-[#0b471540] backdrop-blur-md p-8 md:p-10 flex flex-col items-center text-center">
                    <img 
                        src="/images/Untitled design (4)-Photoroom.png"  
                        alt="Service 3" 
                        className="w-[40%] md:w-[45%] lg:w-[50%] aspect-square mb-6 hover:scale-125 transition-transform duration-500" 
                    />
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 hover:text-[#ad9c78] transition-colors duration-500">Specialized Care</h2>
                    <ul className="list-disc pl-8 text-left space-y-3 text-lg">
                        <li className="hover:text-[#ad9c78] transition-colors duration-500">Dementia Care: Providing specialized care for individuals with dementia.</li>
                        <li className="hover:text-[#ad9c78] transition-colors duration-500">Alzheimer's Care: Assisting individuals with Alzheimer's disease.</li>
                        <li className="hover:text-[#ad9c78] transition-colors duration-500">Post-Surgery Recovery: Supporting individuals during their recovery from surgery.</li>
                        <li className="hover:text-[#ad9c78] transition-colors duration-500">Prenatal/Postnatal Care: Assisting pregnant women and new mothers.</li>
                    </ul>
                </div>
            </div>

            {/* Learn More Button Container */}
            <div className="text-center content-center mt-16">
                <Link to="/services" className="bg-[#0b471540] text-white rounded-full px-12 py-4 text-lg font-bold transition-all duration-500 ease-in-out hover:bg-[#b88c00] hover:shadow-2xl hover:scale-110 flex items-center w-72 mx-auto justify-center group">
                    LEARN MORE <i className="fas fa-arrow-right ml-3 group-hover:translate-x-3 transition-transform duration-500"></i>
                </Link>
            </div>
        </section>
    );
};

export default Service;