import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faPhone } from '@fortawesome/free-solid-svg-icons'; 
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { useState } from 'react'; 
import 'swiper/swiper-bundle.css'; 
import Slide from './Slide'; 
 

const AboutUs = () => {
    const [progress, setProgress] = useState(0);

    const updateProgress = (swiper) => {
        const totalSlides = swiper.slides.length;
        const currentSlideIndex = swiper.realIndex + 1;
        const progressPercentage = (currentSlideIndex / totalSlides) * 100;
        setProgress(progressPercentage);
    };

    return (

        <section className="flex flex-col md:flex-row mt-0 justify-center md:gap-x-16 lg:gap-x-32 gap-y-10 items-center sm:items-start py-12 sm:py-24 px-6 sm:px-10 shadow-inner">
            {/* Carousel for displaying slides */}

            <div className="w-full sm:max-w-2xl md:max-w-3xl relative mb-10 md:mb-0 shadow-xl rounded-lg overflow-hidden">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    onSlideChange={updateProgress}
                    pagination={{ clickable: true }}
                    grabCursor={true}
                >
                    <SwiperSlide>
                        <Slide 
                            imageSrc="/images/CozyCare__6_-removebg-preview.png" 
                            altText="Woman receiving care at home through CozyCare services"
                            linkText="Learn more"
                            linkTo="/about"
                            textPosition="left-48 -right-2  sm:left-2 md:left-96 top-40 pt-6m sm:top-80 md:top-96 lg:left-96 lg:top-96"
                            additionalClasses="slide1" 
                            description="Say goodbye to the hassle of travelling to a clinic or to a hospital"
                            
                        />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <Slide 
                            imageSrc="/images/CozyCare__5_-removebg-preview.png"
                            altText="Healthcare professional assisting a patient at home with CozyCare"
                            linkText="Learn more"
                            linkTo="/learn-more"
                            textPosition="right-40 left-5 sm:left-24 md:right-80 md:pt-36 md:left-0 top-52 sm:top-44  md:top-96 lg:left-0 lg:right-44 lg:top-96"
                            additionalClasses="slide2" 
                            description="Seamlessly navigate your healthcare journey with ease."
                        />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <Slide 
                            imageSrc="/images/CozyCare__4_-removebg-preview.png"
                            altText="Elderly person receiving home care service by CozyCare"
                            linkText="Learn more"
                            linkTo="/learn-more"
                            textPosition=" right-48 sm:left-24 md:pr-11 md:mr-36 md:pt-80 md:-ml-24 top-48 sm:top-44 lg:left-1 lg:right-48 lg:top-[66%]"
                            additionalClasses="slide3" 
                            description="Compassionate providers directly to your doorstep"
                        />
                    </SwiperSlide>
                </Swiper>

                {/* Progress bar to visually indicate slide progress */}


                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gray-300/50 backdrop-blur-sm z-10">
                    <div className="h-full bg-[#f0a500] transition-all duration-500 ease-in-out shadow-lg" style={{ width: `${progress}%` }} />
                </div>
            </div>

            {/* Section for CozyCare description and contact information */}

            <div className="w-full sm:w-4/5 md:w-2/5 lg:w-2/5 max-w-xl mt-8 md:mt-0 px-6 sm:px-0 space-y-4">
                <h1 className="text-4xl sm:text-5xl text-gray-800 font-bold text-left tracking-tight" style={{ fontFamily: 'Veteran Typewriter', fontWeight: '700' }}>WHAT IS COZYCARE</h1>
                <hr className="border-t-2 border-[#f0a500] w-1/2 opacity-80" />
                <h2 className="text-2xl sm:text-3xl text-gray-700 font-semibold tracking-wide" style={{ fontFamily: 'Veteran Typewriter', fontWeight: '500' }}>Comprehensive Health Services</h2>
                <p className="text-lg sm:text-xl leading-relaxed text-gray-600 tracking-wide" style={{ fontFamily: 'Veteran Typewriter', fontWeight: '400' }}>
                    CozyCare is a holistic health service provider offering tailored care solutions in the comfort of your home.
                    From everyday healthcare needs to specialized services, we ensure you receive the best care at affordable prices.
                </p>


                <div className="flex items-center mt-8">
                    <Link to="/contact" className="bg-[#053a09] text-white py-3 pl-10 sm:pl-12 pr-8 sm:pr-10 rounded-full text-base sm:text-lg mr-4 hover:bg-[#e69500] transition-colors duration-300 shadow-lg hover:shadow-xl text-left transform hover:-translate-y-0.5" aria-label="Go to CozyCare contact page" style={{ fontFamily: 'TT Hoves Pro', fontWeight: '500' }}>
                        Contact Us
                    </Link>

                    <div className="bg-[#053a09] rounded-full border-4 border-white p-3 flex items-center justify-center -ml-10 sm:-ml-12 shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105 z-10">
                        <FontAwesomeIcon icon={faPhone} className="text-lg sm:text-xl text-white" aria-label="Phone icon to contact CozyCare" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;