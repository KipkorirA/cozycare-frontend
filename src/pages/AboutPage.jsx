/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link if using react-router

const AboutPage = () => {
    useEffect(() => {
        const adjustMargin = () => {
            const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
            document.querySelector('.about-page')?.style.setProperty('margin-top', `${navbarHeight}px`);
        };

        // Adjust margin initially and on window resize
        adjustMargin();
        window.addEventListener('resize', adjustMargin);

        return () => {
            window.removeEventListener('resize', adjustMargin);
        };
    }, []);

    // Slide data
    const slides = [
        {
            id: 1,
            title: "About CozyCare",
            text: "At Cozycare, we believe that everyone deserves to feel at home, even when circumstances require additional support. We are dedicated to delivering exceptional health & care services that prioritize the well-being and comfort of our patients.",
            caption: "Home is where the care is.",
            image: "/images/Untitled_design__6_-removebg-preview.png",
            imageAlt: "Nurse assisting a patient at home",
            reverse: false,
        },
        {
            id: 2,
            title: "What we're doing about it",
            text: "CozyCare leads one of the regions' largest home care networks with the most advanced care platform. We're revolutionizing how society cares for the sick, older adults, their families, and Care Professionals.",
            mission: "Caring for Your Family, Just Like Our Own",
            caption: "Innovating home care solutions.",
            image: "/images/Untitled_design__10_-removebg-preview.png",
            imageAlt: "Innovative home care solutions",
            reverse: true,
        },
        {
            id: 3,
            title: "Our Services",
            text: "We are dedicated to providing personalized services to meet the unique needs of our clients.",
            listItems: [
                "Personalized Care Plans: Tailoring our services to meet the unique needs and preferences of each client.",
                "Compassionate Caregivers: Employing caring and experienced professionals who are committed to providing the highest level of care.",
                "Safe and Comfortable Environments: Ensuring that our clients' homes are safe, clean, and conducive to their well-being.",
                "Continuous Improvement: Striving to stay up-to-date with the latest industry standards and best practices.",
            ],
            caption: "Dedicated to your well-being.",
            image: "/images/Untitled_design__9_-removebg-preview.png",
            imageAlt: "Diverse services offered",
            reverse: false,
        },
    ];

    return (
        <div className="about-page w-full">
            {slides.map((slide) => (
                <section key={slide.id} className={`about-section flex flex-col md:flex-row ${slide.reverse ? 'md:flex-row-reverse' : ''} items-center justify-between gap-4 sm:gap-8 py-8 sm:py-12 w-full hover:bg-gray-50 hover:shadow-2xl transition-all duration-500 rounded-xl`}>
                    <div className="relative w-full flex justify-center items-center md:w-1/2 order-1 md:order-none">
                        <img 
                            src={slide.image} 
                            alt={slide.imageAlt} 
                            className="about-image w-full max-w-md h-auto object-contain transform hover:scale-110 transition-all duration-500 hover:rotate-2" 
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold p-4">
                        </div>
                    </div>
                    <div className="about-text flex flex-col space-y-4 sm:space-y-6 w-full md:w-1/2 order-2 md:order-none p-6 hover:backdrop-blur-sm transition-all duration-300">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-500 to-blue-600 hover:from-blue-600 hover:via-emerald-500 hover:to-green-600 transition-all duration-500">{slide.title}</h2>
                        <div className="divider w-full h-1.5 bg-gradient-to-r from-green-500 via-emerald-400 to-blue-500 rounded-full transform hover:scale-110 hover:rotate-1 transition-all duration-500"></div>
                        <p className="text-base sm:text-lg lg:text-2xl text-gray-800 leading-relaxed hover:text-gray-900 transition-colors">
                            {slide.text}
                        </p>
                        {slide.mission && (
                            <p className="text-base sm:text-lg lg:text-2xl font-bold text-gray-900 bg-white bg-opacity-50 p-4 rounded-xl hover:bg-opacity-70 hover:shadow-xl transition-all duration-500 transform hover:scale-105">
                                <strong>Our Mission:</strong> <i>{slide.mission}</i>
                            </p>
                        )}
                        {slide.listItems && (
                            <>
                                <p className="text-base sm:text-lg lg:text-2xl text-gray-800 leading-relaxed hover:text-gray-900 transition-colors">{slide.text}</p>
                                <ul className="about-bullets space-y-3 sm:space-y-4 text-gray-800 text-base sm:text-lg lg:text-2xl">
                                    {slide.listItems.map((item, index) => (
                                        <li key={index} className="flex items-start hover:translate-x-4 transition-transform duration-500 p-2 hover:bg-white hover:bg-opacity-50 hover:shadow-lg rounded-lg">
                                            <span className="mr-2 text-green-600">•</span>
                                            <span><strong className="text-gray-900">{item.split(':')[0]}:</strong> {item.split(':')[1]}</span>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </section>
            ))}

            <div className='cozycare-family-contact py-8 bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 rounded-xl w-full shadow-lg hover:shadow-2xl transition-all duration-500 mt-8 transform hover:scale-105'>
                <p className="text-base sm:text-lg lg:text-2xl px-6">
                    Join the Cozycare Family<br />
                    If you or a loved one requires home-based care services, we invite you to 
                    <a href="tel:+1234567890" className="underline text-green-600 hover:text-green-700 transition-colors font-semibold hover:scale-110 inline-block transform"> contact us</a> 
                    to learn more about how we can help.
                </p>
            </div>

            <section className="about-section why-choose-cozycare bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 mb-0 pb-6 sm:pb-8 pt-6 sm:pt-8 rounded-2xl mt-8 w-full shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="about-content flex flex-col md:flex-row gap-8 w-full px-6">
                    <div className="left-column flex-1">
                        <h2 className="why-choose-heading text-3xl sm:text-4xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-500 to-blue-600 hover:from-blue-600 hover:via-emerald-500 hover:to-green-600 transition-all duration-500">Why Choose CozyCare</h2>
                        <div className="divider w-full h-1.5 bg-gradient-to-r from-green-500 via-emerald-400 to-blue-500 rounded-full my-4 sm:my-5 transform hover:scale-110 hover:rotate-1 transition-all duration-500"></div>
                        <div className="personalized-care mb-4 sm:mb-5 hover:translate-x-4 transition-transform duration-500 hover:shadow-lg rounded-lg p-2">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900"><strong>Personalized Care Plans:</strong></h3>
                            <p className="text-base sm:text-lg text-gray-800 hover:text-gray-900 transition-colors"> Our care plans are tailored to meet your individual needs and preferences.</p>
                        </div>
                        <div className="expertise mb-4 sm:mb-5 hover:translate-x-4 transition-transform duration-500 hover:shadow-lg rounded-lg p-2">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900"><strong>Experienced Caregivers:</strong></h3>
                            <p className="text-base sm:text-lg text-gray-800 hover:text-gray-900 transition-colors">Our caregivers are carefully selected and trained to provide the highest quality of care.</p>
                        </div>
                        <div className="flexibility mb-4 sm:mb-5 hover:translate-x-4 transition-transform duration-500 hover:shadow-lg rounded-lg p-2">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900"><strong>Flexible Scheduling:</strong></h3>
                            <p className="text-base sm:text-lg text-gray-800 hover:text-gray-900 transition-colors">We offer flexible scheduling options to accommodate your lifestyle.</p>
                        </div>
                        <div className="affordability mb-4 sm:mb-5 hover:translate-x-4 transition-transform duration-500 hover:shadow-lg rounded-lg p-2">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900"><strong>Affordable Rates:</strong></h3>
                            <p className="text-base sm:text-lg text-gray-800 hover:text-gray-900 transition-colors">We provide competitive rates for our services.</p>
                        </div>
                        <div className="supportiveness mb-4 sm:mb-5 hover:translate-x-4 transition-transform duration-500 hover:shadow-lg rounded-lg p-2">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900"><strong>24/7 Support:</strong></h3>
                            <p className="text-base sm:text-lg text-gray-800 hover:text-gray-900 transition-colors">Our team is available to assist you around the clock.</p>
                        </div>
                        <div className="flex justify-center">
                            <img 
                                src="/images/Untitled_design__11_-removebg-preview.png" 
                                alt="Responsive support" 
                                className="small-image w-48 h-auto mb-4 sm:mb-5 rounded-xl transform hover:scale-125 hover:rotate-6 transition-all duration-500 shadow-md" 
                            />
                        </div>
                        <div className="responsiveness text-center p-4 bg-white bg-opacity-50 rounded-xl hover:bg-opacity-70 hover:shadow-xl transition-all duration-500 transform hover:scale-105">
                            <p className="text-base sm:text-lg text-gray-800">
                                <b className="text-gray-900">Responsive</b> <br />
                                Serving as your trusted advisor while providing regular communication and 24/7 on-call support to ensure your needs are taken care of.
                            </p>
                        </div>
                    </div>

                    <div className="right-column flex-1">
                        <div className="flex justify-center">
                            <img 
                                src="/images/Untitled_design__13_-removebg-preview.png" 
                                alt="Quality care" 
                                className="small-image w-48 h-auto mb-4 sm:mb-5 rounded-xl transform hover:scale-125 hover:rotate-6 transition-all duration-500 shadow-md" 
                            />
                        </div>
                        <div className="responsiveness text-center p-4 bg-white bg-opacity-50 rounded-xl hover:bg-opacity-70 hover:shadow-xl transition-all duration-500 transform hover:scale-105">
                            <p className="text-base sm:text-lg text-gray-800">
                                <b className="text-gray-900">Quality</b> <br />
                                Dedicated to delivering the highest quality care to all our patients and their loved ones.
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <img 
                                src="/images/Untitled_design__12_-removebg-preview.png" 
                                alt="Compassionate care" 
                                className="small-image w-48 h-auto mb-4 sm:mb-5 rounded-xl transform hover:scale-125 hover:rotate-6 transition-all duration-500 shadow-md" 
                            />
                        </div>
                        <div className="responsiveness text-center p-4 bg-white bg-opacity-50 rounded-xl hover:bg-opacity-70 hover:shadow-xl transition-all duration-500 transform hover:scale-105">
                            <p className="text-base sm:text-lg text-gray-800">
                                <b className="text-gray-900">Compassionate</b> <br />
                                Prioritizing patients' dignity and quality of life, while offering unwavering support to them and their families.
                            </p>
                        </div>

                        <Link to="/services" className="explore-services bg-gradient-to-r from-green-500 via-emerald-400 to-blue-500 flex items-center justify-center rounded-lg mt-6 sm:mt-8 py-4 cursor-pointer hover:from-blue-500 hover:via-emerald-400 hover:to-green-500 transition-all duration-500 transform hover:scale-110 shadow-md hover:shadow-xl">
                            <span className="text-xl text-white transform hover:rotate-90 transition-transform duration-500">→</span>
                            <span className='text ml-2 font-bold text-base sm:text-lg text-white tracking-wide'>EXPLORE SERVICES</span>
                        </Link>                    
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;