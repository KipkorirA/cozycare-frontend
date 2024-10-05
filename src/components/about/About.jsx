// Importing necessary modules and components
import { Link } from 'react-router-dom'; // For navigation between pages using React Router
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome for icons
import { faPhone } from '@fortawesome/free-solid-svg-icons'; // Specific icon (phone icon)
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper components for carousel/slider functionality
import { useState } from 'react'; // React Hook for managing component state
import 'swiper/swiper-bundle.css'; // Import Swiper's CSS styles

const AboutUs = () => {
    // Defining state for progress bar, which is updated based on the slide index
    const [progress, setProgress] = useState(0);

    // Function to update the progress bar percentage based on the current slide
    const updateProgress = (swiper) => {
        const totalSlides = swiper.slides.length; // Total number of slides
        const currentSlideIndex = swiper.realIndex + 1; // Index of the currently active slide (1-based)
        const progressPercentage = (currentSlideIndex / totalSlides) * 100; // Calculate progress percentage
        setProgress(progressPercentage); // Update progress state
    };

    return (
        <section className="flex flex-col md:flex-row justify-between items-start py-20 px-8 bg-gray-200">
            {/* Carousel for displaying slides */}
            <div className="w-full max-w-3xl relative mb-8 md:mb-0"> {/* Margin bottom for smaller screens */}
                <Swiper
                    spaceBetween={50} // Space between slides
                    slidesPerView={1} // Only one slide visible at a time
                    loop={true} // Enable infinite looping of slides
                    onSlideChange={updateProgress} // Update progress bar when the slide changes
                    pagination={{ clickable: true }} // Enable clickable pagination bullets
                    grabCursor={true} // Enable grabbing cursor during slide dragging
                >
                    {/* First slide */}
                    <SwiperSlide>
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center text-white">
                            <p>
                                Say goodbye to the hassle of travelling to a clinic or to a hospital <br />
                                <Link to="/about" className='text-yellow-400 underline' aria-label="Learn more about CozyCare">
                                    Learn more
                                </Link>
                            </p>
                        </div>
                        <div className="h-[300px] md:h-[500px] relative"> {/* Reduced height for smaller screens */}
                            <img
                                src="public/images/CozyCare__6_-removebg-preview.png"
                                alt="Woman receiving care at home through CozyCare services"
                                className="w-full h-full object-contain"
                                loading="lazy" // Lazy loading image for performance
                            />
                        </div>
                    </SwiperSlide>

                    {/* Second slide */}
                    <SwiperSlide>
                        <div className="absolute left-10 top-3/4 z-10 text-center text-white">
                            <p>
                                Say goodbye to the hassle of travelling to a clinic or to a hospital <br />
                                <Link to="/learn-more" className='text-yellow-400 underline' aria-label="Learn more about home healthcare services">
                                    Learn more
                                </Link>
                            </p>
                        </div>
                        <div className="h-[300px] md:h-[500px] relative"> {/* Reduced height for smaller screens */}
                            <img
                                src="public/images/CozyCare__5_-removebg-preview.png"
                                alt="Healthcare professional assisting a patient at home with CozyCare"
                                className="w-full h-full object-contain"
                                loading="lazy" // Lazy loading image
                            />
                        </div>
                    </SwiperSlide>

                    {/* Third slide */}
                    <SwiperSlide>
                        <div className="absolute left-4 top-[69%] z-10 text-center text-white">
                            <p>
                                Say goodbye to the hassle of travelling to a clinic or to a hospital <br />
                                <Link to="/learn-more" className='text-yellow-400 underline' aria-label="Learn more about personalized care at home">
                                    Learn more
                                </Link>
                            </p>
                        </div>
                        <div className="h-[300px] md:h-[500px] relative"> {/* Reduced height for smaller screens */}
                            <img
                                src="public/images/CozyCare__4_-removebg-preview.png"
                                alt="Elderly person receiving home care service by CozyCare"
                                className="w-full h-full object-contain"
                                loading="lazy" // Lazy loading image
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>

                {/* Progress bar to visually indicate slide progress */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300 z-10">
                    <div className="h-full bg-[#f0a500] transition-all duration-500 ease" style={{ width: `${progress}%` }} />
                </div>
            </div>

            {/* Section for CozyCare description and contact information */}
            <div className="w-full max-w-lg mt-8 md:mt-0">
                <h1 className="text-4xl text-gray-800 font-bold">WHAT IS COZYCARE</h1>
                <hr className="my-4 border-t border-[#f0a500] w-1/2" />
                <h2 className="text-3xl text-gray-700 mb-4">Comprehensive Health Services</h2>
                <p className="text-xl leading-7 text-gray-600">
                    CozyCare is a holistic health service provider offering tailored care solutions in the comfort of your home.
                    From everyday healthcare needs to specialized services, we ensure you receive the best care at affordable prices.
                </p>
                {/* Contact section with a link and phone icon */}
                <div className="flex items-center mt-8">
                    <Link to="/contact" className="bg-[#053a09] text-white py-2 px-6 rounded-full text-lg mr-4 hover:bg-[#e69500]" aria-label="Go to CozyCare contact page">
                        Contact Us
                    </Link>
                    <div className="bg-[#053a09] rounded-full border-2 border-white p-2 flex items-center justify-center">
                        {/* Phone icon with ARIA label for screen readers */}
                        <FontAwesomeIcon icon={faPhone} className="text-xl text-white" aria-label="Phone icon to contact CozyCare" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
