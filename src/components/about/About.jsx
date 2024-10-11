import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faPhone } from '@fortawesome/free-solid-svg-icons'; 
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { useState } from 'react'; 
import 'swiper/swiper-bundle.css'; 
import Slide from './Slide'; 
import './Slide.css'; 

const AboutUs = () => {
    const [progress, setProgress] = useState(0);

    const updateProgress = (swiper) => {
        const totalSlides = swiper.slides.length;
        const currentSlideIndex = swiper.realIndex + 1;
        const progressPercentage = (currentSlideIndex / totalSlides) * 100;
        setProgress(progressPercentage);
    };

    return (
        <section className="flex flex-col md:flex-row mt-0 justify-center md:gap-x-24 gap-y-0 items-start py-20 px-8 bg-gray-200"> {/* Reduced gap */}
            {/* Carousel for displaying slides */}
            <div className="w-full max-w-3xl relative md:mb-0">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    onSlideChange={updateProgress}
                    pagination={{ clickable: true }}
                    grabCursor={true}
                >
                    <SwiperSlide>
                        <Slide 
                            imageSrc="public/images/CozyCare__6_-removebg-preview.png" 
                            altText="Woman receiving care at home through CozyCare services"
                            linkText="Learn more"
                            linkTo="/about"
                            textPosition="left-44 top-44 -translate-y-1/2 lg:left-96 lg:right-0 lg:top-96"
                            additionalClasses="slide1" 
                            description="Say goodbye to the hassle of travelling to a clinic or to a hospital"
                        />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <Slide 
                            imageSrc="public/images/CozyCare__5_-removebg-preview.png"
                            altText="Healthcare professional assisting a patient at home with CozyCare"
                            linkText="Learn more"
                            linkTo="/learn-more"
                            textPosition="lg:left-0 lg:right-44 lg:top-96"
                            additionalClasses="slide2" 
                            description="Seamlessly navigate your healthcare journey with ease."
                        />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <Slide 
                            imageSrc="public/images/CozyCare__4_-removebg-preview.png"
                            altText="Elderly person receiving home care service by CozyCare"
                            linkText="Learn more"
                            linkTo="/learn-more"
                            textPosition="left-1 right-48 top-[66%]"
                            additionalClasses="slide3" 
                            description="Compassionate providers directly to your doorstep"
                        />
                    </SwiperSlide>
                </Swiper>

                {/* Progress bar to visually indicate slide progress */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300 z-10">
                    <div className="h-full bg-[#f0a500] transition-all duration-500 ease" style={{ width: `${progress}%` }} />
                </div>
            </div>

            {/* Section for CozyCare description and contact information */}
            <div className="w-full md:w-full lg:w-full max-w-xl md:mt-0"> {/* Adjusted width classes */}
                <h1 className="text-4xl text-gray-800 font-bold text-left pl-0 ml-0" style={{ fontFamily: 'Veteran Typewriter', fontWeight: '700' }}>WHAT IS COZYCARE</h1>
                <hr className="my-4 border-t border-[#f0a500] w-1/2" />
                <h2 className="text-3xl text-gray-700 mb-4" style={{ fontFamily: 'Veteran Typewriter', fontWeight: '500' }}>Comprehensive Health Services</h2>
                <p className="text-xl leading-7 text-gray-600" style={{ fontFamily: 'Veteran Typewriter', fontWeight: '400' }}>
                    CozyCare is a holistic health service provider offering tailored care solutions in the comfort of your home.
                    From everyday healthcare needs to specialized services, we ensure you receive the best care at affordable prices.
                </p>
                <div className="flex items-center mt-8 ">
                    <Link to="/contact" className="bg-[#053a09] text-white py-2 pl-10 pr-9 rounded-full text-lg mr-4 hover:bg-[#e69500] text-left" aria-label="Go to CozyCare contact page" style={{ fontFamily: 'TT Hoves Pro', fontWeight: '500' }}>
                        Contact Us
                    </Link>
                    <div className="bg-[#053a09] rounded-full border-4 border-white p-2 flex items-center justify-center -m-10">
                        <FontAwesomeIcon icon={faPhone} className="text-xl text-white" aria-label="Phone icon to contact CozyCare" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
