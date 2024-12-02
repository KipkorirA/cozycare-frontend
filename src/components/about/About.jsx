import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'; 
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { useState } from 'react'; 
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; 
import 'swiper/css/effect-flip';
import 'swiper/css/effect-coverflow';
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

        <section className="flex flex-col md:flex-row mt-0 justify-center md:gap-x-16 lg:gap-x-44 gap-y-10 items-center sm:items-start py-12 sm:py-24  sm:px-10 shadow-inner bg-[#f4f1ec]">
            {/* Section for CozyCare heading in mobile */}
            <div className="w-full px-6-20 mb-8 md:hidden">
                <h1 className="text-2xl lg:pt-44 text-gray-800 font-bold text-left tracking-tight" style={{ fontFamily: '', fontWeight: '700' }}>WHAT IS <br/> COZYCARE</h1>
                <hr className="border-t-2 border-[#f0a500] w-1/2 opacity-80" />
                <h2 className="text-lg pt-3 pb-3 text-gray-700 font-bold tracking-wide" style={{ fontFamily: 'TT Hoves Pro', fontWeight: '600' }}>
                    <FontAwesomeIcon icon={faLocationDot} className="text-[#f0a500] mr-2" /> <i>
                    Our Location is Your Location</i>
                </h2>
            </div>

            {/* Carousel for displaying slides */}
            <div className="w-full sm:max-w-2xl md:max-w-3xl relative mb-10 md:mb-0 shadow-xl rounded-lg overflow-hidden  -mt-11 lg:ml-0">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    effect={'coverflow'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true
                    }}
                    onSlideChange={updateProgress}
                    pagination={{ clickable: true }}
                    grabCursor={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                        reverseDirection: false,
                        waitForTransition: true
                    }}
                    speed={3000}
                    modules={[Autoplay, EffectCoverflow]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Slide 
                            imageSrc="/images/CozyCare__6_-removebg-preview.png" 
                            altText="Woman receiving care at home through CozyCare services"
                            linkText="Learn more"
                            linkTo="/blog"
                            textPosition="left-56 -right-2  sm:left-2 md:pl-96 top-40 pt-11 sm:top-80 md:top-96 lg:left-36 lg:pt-40"
                            additionalClasses="slide1" 
                            description="Say goodbye to the hassle of travelling to a clinic or to a hospital"
                            
                        />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <Slide 
                            imageSrc="/images/CozyCare__5_-removebg-preview.png"
                            altText="Healthcare professional assisting a patient at home with CozyCare"
                            linkText="Learn more"
                            linkTo="/blog"
                            textPosition="right-48 left-9 sm:left-24 md:right-80 md:pt-36 md:left-0 top-52 sm:top-44  md:top-96 lg:left-0 lg:pr-40 lg:pl-16 lg:pt-72"
                            additionalClasses="slide2" 
                            description="Seamlessly navigate your healthcare journey with ease."
                        />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <Slide 
                            imageSrc="/images/CozyCare__4_-removebg-preview.png"
                            altText="Elderly person receiving home care service by CozyCare"
                            linkText="Learn more"
                            linkTo="/blog"
                            textPosition=" right-56 left-4 sm:left-24 md:pr-11 md:mr-36 md:pt-80 md:-ml-24 top-52 sm:top-44 lg:left-1 lg:pl-32 lg:pr-44 lg:top-80"
                            additionalClasses="slide3" 
                            description="Compassionate providers directly to your doorstep"
                        />
                    </SwiperSlide>
                </Swiper>

                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gray-300/50 backdrop-blur-sm z-10">
                    <div className="h-full bg-[#f0a500] transition-all duration-500 ease-in-out shadow-lg" style={{ width: `${progress}%` }} />
                </div>
            </div>

            <div className="w-full sm:w-4/5 md:w-2/5 lg:w-2/5 max-w-xl mt-8 md:mt-0 px-6 sm:px-0 space-y-4">
               <div className='lg:pb-60 -mt-20'>
               <h1 className="hidden md:block text-2xl md:text-4xl lg:text-6xl pb-1 text-gray-800 font-bold text-left tracking-tight" style={{ fontFamily: '', fontWeight: '700' }}>WHAT IS <br/> COZYCARE</h1>
                <hr className="hidden md:block border-t-2 border-[#f0a500] w-1/2 opacity-80 lg:pb-9 lg-w-[2px]" />
                <h2 className="hidden md:block text-xl sm:text-3xl pt-3 pb-3 lg:text-4xl lg:pb-11 text-gray-700 font-bold tracking-wide" style={{ fontFamily: 'TT Hoves Pro', fontWeight: '500' }}>
                    <FontAwesomeIcon icon={faLocationDot} className="text-[#f0a500] mr-2" />
                    Our Location is Your Location
                </h2>
                <p className=" sm:text-xl lg:text-2xl leading-relaxed text-gray-600 tracking-wide" style={{ fontFamily: '', fontWeight: '400' }}>
                At CozyCare, we bring primary care, palliative care, and hospice care to you. Whether you're at home, in a senior residency community, or in a long-term care facility, we're here to provide services that are convenient and accessible. With us, there's no need to worry about transportation or mobility. Our location is your location.
                </p>               
               </div>

                <div className="flex items-center mt-24 lg:right-44">
                    <Link to="/contact" className="bg-[#053a09] text-white py-1.5 sm:py-2.5 pl-2 sm:pl-12 pr-6 sm:pr-10 rounded-full text-sm sm:text-lg lg:text-xl mr-3 sm:mr-4 hover:bg-[#e69500] transition-colors duration-300 shadow-lg hover:shadow-xl text-left transform hover:-translate-y-0.5" aria-label="Go to CozyCare contact page" style={{ fontFamily: 'TT Hoves Pro', fontWeight: '900' }}>
                        CONTACT US
                    </Link>

                    <div className="bg-[#053a09] rounded-full border-4 border-white p-2.5 sm:p-3.5 flex items-center justify-center -ml-8 sm:-ml-12 shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105 z-10">
                        <FontAwesomeIcon icon={faPhone} className="text-base sm:text-xl lg:text-2xl text-white" aria-label="Phone icon to contact CozyCare" />
                    </div>
                </div>            </div>
        </section>
    );
};

export default AboutUs;