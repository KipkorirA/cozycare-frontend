import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Feedback = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch('https://cozycare-backend-g56w.onrender.com/feedbacks');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTestimonials(data);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
                setTestimonials([]);
            }
        };

        fetchTestimonials();
    }, []);

    return (
        <section className="w-full min-h-screen bg-gradient-to-b from-[#a8c2b2] to-[#f5f5dc] text-left p-0 m-0 antialiased">
            <div className="relative w-full h-[180px] sm:h-[220px] md:h-[300px] lg:h-[400px] overflow-hidden group">
                <img src="/images/Medicine.webp" alt="Feedback Banner" className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-all duration-700 ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent group-hover:from-black/40 transition-all duration-500"></div>
            </div>

            <div className="w-full px-6 lg:px-12 py-12 lg:py-20 max-w-[1440px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12 lg:gap-20 mb-16 md:mb-20 lg:mb-28">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-[#085846] leading-tight tracking-tighter">
                            HEAR WHAT 
                            <span className="text-[#085846] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#085846] via-[#2c7561] to-[#3c4204]"> OUR PATIENTS</span> 
                            <br />HAVE TO SAY ABOUT US
                        </h1>

                        <hr className="w-1/2 my-1 lg:my-8 border-[2px] border-[#e0ae50] rounded-full shadow-lg opacity-80" />
                        
                    </div>

                    <div className="w-full md:w-3/5">
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#085846] leading-relaxed font-medium tracking-wide">
                            CozyCare leads one of the regions' largest home care networks with the most advanced care platform. We're revolutionizing how society cares for the sick, older adults, their families, and Care Professionals.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16 text-center w-full">
                    {testimonials.slice(0, 3).map((testimonial, index) => (
                        <div className="bg-[#f5f5dc]/90 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 sm:p-9 md:p-10 lg:p-12 transform hover:-translate-y-3 hover:bg-[#f5f5dc] w-full border border-[#085846]/10" key={index}>
                            <p className="text-lg sm:text-xl lg:text-2xl text-[#085846] mb-8 sm:mb-10 lg:mb-12 font-medium italic leading-relaxed">“{testimonial.feedback_text}”</p>
                            <div className="flex flex-col items-center w-full">
                                <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden ring-4 ring-[#085846] ring-offset-4 mb-6 lg:mb-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                                <img
                                    src={testimonial.feedback_file?.startsWith('http') 
                                        ? testimonial.feedback_file 
                                        : `https://cozycare-backend-g56w.onrender.com/${testimonial.feedback_file}`}
                                    alt={testimonial.name || "Anonymous"}
                                    className="w-full h-full object-cover transform hover:scale-120 transition-transform duration-500"
                                    onError={(e) => e.target.src = '/images/default-avatar.jpg'} 
                                />
                                </div>

                                <h6 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#085846] mb-3 lg:mb-4">{testimonial.name || "Anonymous"}</h6>
                                <hr className="w-1/2 border-2 border-[#085846] rounded-full shadow-lg opacity-80" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center w-full">
                    <Link to="/feedback" className="inline-block px-6 py-3 bg-[#085846] text-white text-lg font-bold rounded-full shadow-lg transition-all duration-300 hover:bg-[#2c7561] hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 hover:scale-102 border border-transparent hover:border-[#085846]/20">
                        Leave Your Own Feedback
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Feedback;