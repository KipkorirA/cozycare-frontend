/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

const Feedback = () => {


    const [testimonials, setTestimonials] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch('http://localhost:5000/feedback');
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
    }, []);


    const placeholderTestimonials = [
        {
            text: "CozyCare has been a life-saver! The caregivers are professional and very caring. My family is grateful for their help.",
            author: "Sarah Johnson",

            image_url: 'https://ncba-aging.org/wp-content/uploads/2022/07/oldest-img.png',
        },
        {
            text: "The service was excellent, and the care team was always prompt and attentive to my elderly parents' needs.",
            author: "John Doe",

            image_url: 'https://st.depositphotos.com/1037987/2464/i/450/depositphotos_24647335-stock-photo-portrait-of-happy-senior-man.jpg',
        },
        {
            text: "I have peace of mind knowing my mom is in good hands. CozyCare provides personalized and compassionate care.",
            author: "Emily Davis",

            image_url: 'https://naacp.org/sites/default/files/styles/hero_desktop/public/images/iStock-1045045764.jpg.webp?itok=VZrKt0Zg',
        },
    ];


    const displayTestimonials = testimonials.length > 0 ? testimonials : placeholderTestimonials;

    return (





        <section className="w-full min-h-screen bg-[#a8c2b2] text-left antialiased">
            <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden group">
                <img src="/images/Medicine.webp" alt="Feedback Banner" className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-all duration-700 ease-in-out" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500"></div>
            </div>






            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12 mb-16 md:mb-20">
                    <div className="w-full md:w-1/2">



                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-[#1a0202] leading-tight tracking-tight">
                            HEAR WHAT OUR <br />

                            <span className="text-[#0c0401] font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#0c0401] to-[#2d1304]">PATIENTS</span> 
                            <br />HAVE TO SAY ABOUT US
                        </h1>


                        <hr className="w-2/3 my-6 border-3 border-[#1d1503] rounded-full shadow-sm" />
                    </div>


                    <div className="w-full md:w-3/5">


                        <p className="text-xl sm:text-2xl md:text-3xl text-[#110202] leading-relaxed font-medium tracking-wide">
                            CozyCare leads one of the regions' largest home care networks with the most advanced care platform. We're revolutionizing how society cares for the sick, older adults, their families, and Care Professionals.
                        </p>
                    </div>
                </div>




                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
                    {displayTestimonials.slice(0, 3).map((testimonial, index) => (




                            <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 sm:p-9 md:p-10 transform hover:-translate-y-3 hover:bg-white/100" key={index}>
                                <p className="text-lg sm:text-xl text-[#1b0202] mb-8 sm:mb-10 font-medium italic leading-relaxed">"{testimonial.text}"</p>
                                <div className="flex flex-col items-center">


                                    <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-[#085846] ring-offset-4 mb-6 shadow-xl">
                                        <img
                                            src={testimonial.image_url.startsWith('http') ? testimonial.image_url : `http://localhost:5000${testimonial.image_url}`}
                                            alt={testimonial.author || "Anonymous"}

                                            className="w-full h-full object-cover transform hover:scale-115 transition-transform duration-500"
                                        />
                                    </div>



                                    <h6 className="text-xl sm:text-2xl font-semibold text-[#1b0202] mb-3">{testimonial.author || "Anonymous"}</h6>
                                    <hr className="w-1/2 border-2 border-[#161001] rounded-full shadow-sm" />
                                </div>
                            </div>
                        ))}
                </div>






                <div className="mt-16 sm:mt-20 md:mt-24 text-center">
                    <Link to="/feedback" className="inline-block px-10 sm:px-12 md:px-14 py-4 sm:py-5 bg-[#085846] text-white text-xl sm:text-2xl font-semibold rounded-full shadow-xl transition-all duration-500 hover:bg-[#053a09] hover:shadow-2xl transform hover:-translate-y-2 active:translate-y-0 hover:scale-105">
                        Leave Your Own Feedback
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Feedback;