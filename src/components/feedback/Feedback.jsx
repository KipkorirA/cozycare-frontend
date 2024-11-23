// /* eslint-disable react/no-unescaped-entities */
// import { useEffect, useState, useMemo } from 'react';
// import { Link } from 'react-router-dom';

// const Feedback = () => {
//     const [testimonials, setTestimonials] = useState([]);

//     const placeholderTestimonials = useMemo(() => [
//         {
//             text: "CozyCare has been a life-saver! The caregivers are professional and very caring. My family is grateful for their help.",
//             author: "Sarah Johnson",
//             image_url: 'https://ncba-aging.org/wp-content/uploads/2022/07/oldest-img.png',
//         },
//         {
//             text: "The service was excellent, and the care team was always prompt and attentive to my elderly parents' needs.",
//             author: "John Doe",
//             image_url: 'https://st.depositphotos.com/1037987/2464/i/450/depositphotos_24647335-stock-photo-portrait-of-happy-senior-man.jpg',
//         },
//         {
//             text: "I have peace of mind knowing my mom is in good hands. CozyCare provides personalized and compassionate care.",
//             author: "Emily Davis",
//             image_url: 'https://naacp.org/sites/default/files/styles/hero_desktop/public/images/iStock-1045045764.jpg.webp?itok=VZrKt0Zg',
//         },
//     ], []);

//     useEffect(() => {
//         const fetchTestimonials = async () => {
//             try {
//                 const response = await fetch('http://127.0.0.1:5000/feedbacks');
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setTestimonials(data);
//             } catch (error) {
//                 console.error('Error fetching testimonials:', error);
//                 setTestimonials(placeholderTestimonials);
//             }
//         };

//         fetchTestimonials();
//     }, [placeholderTestimonials]);

//     const displayTestimonials = testimonials.length > 0 ? testimonials : placeholderTestimonials;

//     return (
//         <section className="w-full min-h-screen bg-gradient-to-b from-[#a8c2b2] to-[#f5f5dc] text-left p-0 m-0 antialiased">
//             <div className="relative w-full h-[180px] sm:h-[220px] md:h-[300px] lg:h-[400px] overflow-hidden group">
//                 <img src="/images/Medicine.webp" alt="Feedback Banner" className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-all duration-700 ease-in-out" />
//                 <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent group-hover:from-black/40 transition-all duration-500"></div>
//             </div>

//             <div className="w-full px-6 lg:px-12 py-12 lg:py-20 max-w-[1440px] mx-auto">
//                 <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12 lg:gap-20 mb-16 md:mb-20 lg:mb-28">
//                     <div className="w-full md:w-1/2">
//                         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#085846] leading-tight tracking-tighter">
//                             HEAR WHAT<br /> 
//                             <span className="text-[#085846] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#085846] via-[#2c7561] to-[#3c4204]">OUR PATIENTS</span> 
//                             <br />HAVE TO SAY ABOUT US
//                         </h1>
//                         <hr className="w-2/3 my-6 lg:my-8 border-3 border-[#085846] rounded-full shadow-lg opacity-80" />
//                     </div>

//                     <div className="w-full md:w-3/5">
//                         <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#085846] leading-relaxed font-medium tracking-wide">
//                             CozyCare leads one of the regions' largest home care networks with the most advanced care platform. We're revolutionizing how society cares for the sick, older adults, their families, and Care Professionals.
//                         </p>
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16 w-full">
//                     {displayTestimonials.slice(0, 3).map((testimonial, index) => (
//                             <div className="bg-[#f5f5dc]/90 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 sm:p-9 md:p-10 lg:p-12 transform hover:-translate-y-3 hover:bg-[#f5f5dc] w-full border border-[#085846]/10" key={index}>
//                                 <p className="text-lg sm:text-xl lg:text-2xl text-[#085846] mb-8 sm:mb-10 lg:mb-12 font-medium italic leading-relaxed">"{testimonial.text}"</p>
//                                 <div className="flex flex-col items-center w-full">
//                                     <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden ring-4 ring-[#085846] ring-offset-4 mb-6 lg:mb-8 shadow-xl hover:shadow-2xl transition-all duration-500">
//                                         <img
//                                             src={testimonial.image_url?.startsWith('http') ? testimonial.image_url : `http://localhost:5000${testimonial.image_url}`}
//                                             alt={testimonial.author || "Anonymous"}
//                                             className="w-full h-full object-cover transform hover:scale-120 transition-transform duration-500"
//                                         />
//                                     </div>

//                                     <h6 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#085846] mb-3 lg:mb-4">{testimonial.author || "Anonymous"}</h6>
//                                     <hr className="w-1/2 border-2 border-[#085846] rounded-full shadow-lg opacity-80" />
//                                 </div>
//                             </div>
//                         ))}
//                 </div>

//                 <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 text-center w-full">
//                     <Link to="/feedback" className="inline-block px-10 sm:px-12 md:px-16 lg:px-20 py-4 sm:py-5 lg:py-6 bg-[#085846] text-white text-xl sm:text-2xl lg:text-3xl font-bold rounded-full shadow-xl transition-all duration-500 hover:bg-[#2c7561] hover:shadow-2xl transform hover:-translate-y-2 active:translate-y-0 hover:scale-105 border-2 border-transparent hover:border-[#085846]/20">
//                         Leave Your Own Feedback
//                     </Link>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Feedback;

/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const Feedback = () => {
    const [testimonials, setTestimonials] = useState([]);

    const placeholderTestimonials = useMemo(() => [
        {
            feedback_text: "CozyCare has been a life-saver! The caregivers are professional and very caring. My family is grateful for their help.",
            name: "Sarah Johnson",
            image_url: 'https://ncba-aging.org/wp-content/uploads/2022/07/oldest-img.png',
            rating: 5,
        },
        {
            feedback_text: "The service was excellent, and the care team was always prompt and attentive to my elderly parents' needs.",
            name: "John Doe",
            image_url: 'https://st.depositphotos.com/1037987/2464/i/450/depositphotos_24647335-stock-photo-portrait-of-happy-senior-man.jpg',
            rating: 4,
        },
        {
            feedback_text: "I have peace of mind knowing my mom is in good hands. CozyCare provides personalized and compassionate care.",
            name: "Emily Davis",
            image_url: 'https://naacp.org/sites/default/files/styles/hero_desktop/public/images/iStock-1045045764.jpg.webp?itok=VZrKt0Zg',
            rating: 5,
        },
    ], []);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/feedbacks');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTestimonials(data);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
                setTestimonials(placeholderTestimonials);
            }
        };

        fetchTestimonials();
    }, [placeholderTestimonials]);

    const displayTestimonials = testimonials.length > 0 ? testimonials : placeholderTestimonials;

    return (
        <section className="w-full min-h-screen bg-gradient-to-b from-[#a8c2b2] to-[#f5f5dc] text-left p-0 m-0 antialiased">
            <div className="relative w-full h-[180px] sm:h-[220px] md:h-[300px] lg:h-[400px] overflow-hidden group">
                <img src="/images/Medicine.webp" alt="Feedback Banner" className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-all duration-700 ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent group-hover:from-black/40 transition-all duration-500"></div>
            </div>

            <div className="w-full px-6 lg:px-12 py-12 lg:py-20 max-w-[1440px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12 lg:gap-20 mb-16 md:mb-20 lg:mb-28">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#085846] leading-tight tracking-tighter">
                            HEAR WHAT<br /> 
                            <span className="text-[#085846] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#085846] via-[#2c7561] to-[#3c4204]">OUR PATIENTS</span> 
                            <br />HAVE TO SAY ABOUT US
                        </h1>
                        <hr className="w-2/3 my-6 lg:my-8 border-3 border-[#085846] rounded-full shadow-lg opacity-80" />
                    </div>

                    <div className="w-full md:w-3/5">
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#085846] leading-relaxed font-medium tracking-wide">
                            CozyCare leads one of the regions' largest home care networks with the most advanced care platform. We're revolutionizing how society cares for the sick, older adults, their families, and Care Professionals.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16 w-full">
                    {displayTestimonials.slice(0, 3).map((testimonial, index) => (
                        <div className="bg-[#f5f5dc]/90 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 sm:p-9 md:p-10 lg:p-12 transform hover:-translate-y-3 hover:bg-[#f5f5dc] w-full border border-[#085846]/10" key={index}>
                            <p className="text-lg sm:text-xl lg:text-2xl text-[#085846] mb-8 sm:mb-10 lg:mb-12 font-medium italic leading-relaxed">"{testimonial.feedback_text}"</p>
                            <div className="flex flex-col items-center w-full">
                                <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden ring-4 ring-[#085846] ring-offset-4 mb-6 lg:mb-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                                <img
                                   src={testimonial.feedback_file?.startsWith('http') 
                                       ? testimonial.feedback_file 
                                       : `http://127.0.0.1:5000/${testimonial.feedback_file}`}
                                   alt={testimonial.name || "Anonymous"}
                                   className="w-full h-full object-cover transform hover:scale-120 transition-transform duration-500"
                                   onError={(e) => e.target.src = 'path/to/default-image.jpg'} 
                                />

                                </div>

                                <h6 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#085846] mb-3 lg:mb-4">{testimonial.name || "Anonymous"}</h6>
                                <hr className="w-1/2 border-2 border-[#085846] rounded-full shadow-lg opacity-80" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 text-center w-full">
                    <Link to="/feedback" className="inline-block px-10 sm:px-12 md:px-16 lg:px-20 py-4 sm:py-5 lg:py-6 bg-[#085846] text-white text-xl sm:text-2xl lg:text-3xl font-bold rounded-full shadow-xl transition-all duration-500 hover:bg-[#2c7561] hover:shadow-2xl transform hover:-translate-y-2 active:translate-y-0 hover:scale-105 border-2 border-transparent hover:border-[#085846]/20">
                        Leave Your Own Feedback
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Feedback;
