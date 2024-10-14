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
            title: "What we’re doing about it",
            text: "CozyCare leads one of the regions’ largest home care networks with the most advanced care platform. We’re revolutionizing how society cares for the sick, older adults, their families, and Care Professionals.",
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
            image: "/images/Untitled_design_(9).png",
            imageAlt: "Diverse services offered",
            reverse: false,
        },
    ];

    return (
        <div className="about-page">
            {slides.map((slide) => (
                <section key={slide.id} className={`about-section flex flex-col md:flex-row ${slide.reverse ? 'md:flex-row-reverse' : ''} items-center my-5`}>
                    <div className="relative md:w-1/2 mb-4 md:mb-0">
                        <img 
                            src={slide.image} 
                            alt={slide.imageAlt} 
                            className="about-image w-full h-auto object-contain rounded-lg" 
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold p-4">
                        </div>
                    </div>
                    <div className="about-text flex flex-col justify-between px-5 md:w-1/2">
                        <h2 className="text-3xl font-bold">{slide.title}</h2>
                        <div className="divider w-full h-0.5 bg-gray-300 my-4"></div>
                        <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                            {slide.text}
                        </p>
                        {slide.mission && (
                            <p className="text-lg md:text-xl font-bold mt-2">
                                <strong>Our Mission:</strong> <i>{slide.mission}</i>
                            </p>
                        )}
                        {slide.listItems && (
                            <>
                                <p className="text-lg md:text-xl text-gray-800 leading-relaxed">{slide.text}</p>
                                <ul className="about-bullets list-disc list-inside text-gray-800 text-lg md:text-xl">
                                    {slide.listItems.map((item, index) => (
                                        <li key={index}><strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </section>
            ))}

            <div className='cozycare-family-contact px-5'>
                <p className="text-lg md:text-xl">
                    Join the Cozycare Family<br />
                    If you or a loved one requires home-based care services, we invite you to 
                    <a href="tel:+1234567890" className="underline text-red-600"> contact us</a> 
                    to learn more about how we can help.
                </p>
            </div>

            {/* New Section: Why Choose CozyCare */}
            <section className="about-section why-choose-cozycare bg-green-200 mb-0 pb-5 pt-5">
                <div className="about-content flex flex-col md:flex-row">
                    <div className="left-column flex-1 px-5">
                        <h2 className="why-choose-heading text-4xl font-bold">Why Choose CozyCare</h2>
                        <div className="divider w-full h-0.5 bg-gray-300 my-4"></div>
                        <div className="personalized-care mb-4">
                            <h3 className="text-2xl font-bold"><strong>Personalized Care Plans:</strong></h3>
                            <p> Our care plans are tailored to meet your individual needs and preferences.</p>
                        </div>
                        <div className="expertise mb-4">
                            <h3 className="text-2xl font-bold"><strong>Experienced Caregivers:</strong></h3>
                            <p>Our caregivers are carefully selected and trained to provide the highest quality of care.</p>
                        </div>
                        <div className="flexibility mb-4">
                            <h3 className="text-2xl font-bold"><strong>Flexible Scheduling:</strong></h3>
                            <p>We offer flexible scheduling options to accommodate your lifestyle.</p>
                        </div>
                        <div className="affordability mb-4">
                            <h3 className="text-2xl font-bold"><strong>Affordable Rates:</strong></h3>
                            <p>We provide competitive rates for our services.</p>
                        </div>
                        <div className="supportiveness mb-4">
                            <h3 className="text-2xl font-bold"><strong>24/7 Support:</strong></h3>
                            <p>Our team is available to assist you around the clock.</p>
                        </div>
                        <img 
                            src="/images/Untitled_design__11_-removebg-preview.png" 
                            alt="Responsive support" 
                            className="small-image w-1/2 mx-auto mb-5" 
                        />
                        <div className="responsiveness text-center">
                            <p>
                                <b>Responsive</b> <br />
                                Serving as your trusted advisor while providing regular communication and 24/7 on-call support to ensure your needs are taken care of.
                            </p>
                        </div>
                    </div>

                    <div className="right-column flex-1 px-5">
                        <img 
                            src="/images/Untitled_design__13_-removebg-preview.png" 
                            alt="Quality care" 
                            className="small-image w-1/2 mx-auto mb-5" 
                        />
                        <div className="responsiveness text-center">
                            <p>
                                <b>Quality</b> <br />
                                Dedicated to delivering the highest quality care to all our patients and their loved ones.
                            </p>
                        </div>

                        <img 
                            src="/images/Untitled_design__12_-removebg-preview.png" 
                            alt="Compassionate care" 
                            className="small-image w-1/2 mx-auto mb-5" 
                        />
                        <div className="responsiveness text-center">
                            <p>
                                <b>Compassionate</b> <br />
                                Prioritizing patients’ dignity and quality of life, while offering unwavering support to them and their families.
                            </p>
                        </div>

                        <Link to="/services" className="explore-services bg-gray-200 flex items-center justify-center rounded-lg mt-5 py-2 cursor-pointer">
                            <span>&#8594;&#93;</span>
                            <span className='text ml-2 font-bold'>EXPLORE SERVICES</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
