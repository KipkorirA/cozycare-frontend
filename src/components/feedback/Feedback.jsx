/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from React Router

const Feedback = () => {
    const [testimonials, setTestimonials] = useState([]); // State for testimonials
    const [error, setError] = useState(null); // State for error handling

    // Fetch testimonials from backend
    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/testimonials');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTestimonials(data); // Set the testimonials data
            } catch (error) {
                console.error('Error fetching testimonials:', error);
                setError('Failed to load testimonials. Please try again later.');
            }
        };

        fetchTestimonials();
    }, []);

    // Placeholder testimonials (example data)
    const placeholderTestimonials = [
        {
            text: "CozyCare has been a life-saver! The caregivers are professional and very caring. My family is grateful for their help.",
            author: "Sarah Johnson",
            image_url: './nicegalsse.webp', // Local image path for the placeholder
        },
        {
            text: "The service was excellent, and the care team was always prompt and attentive to my elderly parents' needs.",
            author: "John Doe",
            image_url: './Thumbsup.webp', // Local image path for the placeholder
        },
        {
            text: "I have peace of mind knowing my mom is in good hands. CozyCare provides personalized and compassionate care.",
            author: "Emily Davis",
            image_url: './Charimani.webp', // Local image path for the placeholder
        },
    ];

    // Use actual testimonials if available, otherwise fallback to placeholders
    const displayTestimonials = testimonials.length > 0 ? testimonials : placeholderTestimonials;

    return (
        <section className="w-full pt-1 px-4 pb-10 bg-[#a8c2b2] text-left">
            {/* Full-width background image */}
            <div className="feedback-banner mb-8">
                <img src="/src/components/feedback/Medicine.webp" alt="Feedback Banner" className="w-full max-h-[300px] object-cover" />
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                {/* Left: Main Heading */}
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                    <h1 className="text-3xl md:text-4xl text-[#1a0202] pl-5">
                        HEAR WHAT OUR <br />
                        <span className="text-[#0c0401]">PATIENTS</span> HAVE TO SAY <span><br />ABOUT US</span>
                    </h1>
                    <hr className="w-[60%] my-4 border border-[#1d1503]" />
                </div>

                {/* Right: Paragraph Text */}
                <div className="w-full md:w-3/5 pr-5">
                    <p className="text-xl md:text-2xl text-[#110202] leading-6">
                        CozyCare leads one of the regions’ largest home care networks with the most advanced care platform. We’re revolutionizing how society cares for the sick, older adults, their families, and Care Professionals.
                    </p>
                </div>
            </div>

            {/* Feedback comments */}
            <div className="flex flex-col md:flex-row justify-between gap-8">
                {error ? (
                    <p className="text-red-600">{error}</p> // Display error if fetching testimonials fails
                ) : displayTestimonials.length > 0 ? (
                    displayTestimonials.slice(0, 3).map((testimonial, index) => ( // Limit to the first 3 testimonials
                        <div className="bg-[#a8c2b2] rounded-lg shadow-md p-6 w-full md:w-1/3 text-left" key={index}>
                            <p className="text-base text-[#1b0202] mb-6">"{testimonial.text}"</p>
                            <div className="flex flex-col items-center">
                                {/* Display the client's image if available */}
                                <img
                                    src={testimonial.image_url ? `http://localhost:5000${testimonial.image_url}` : testimonial.image_url}
                                    alt={testimonial.author || "Anonymous"}
                                    className="w-36 h-36 object-cover rounded-full mb-4"
                                />
                                <h6 className="text-lg">{testimonial.author || "Anonymous"}</h6> {/* Default to "Anonymous" if no name provided */}
                                <hr className="w-4/5 border border-[#161001]" />
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No testimonials available.</p>
                )}
            </div>

            {/* Link to FeedbackPage */}
            <div className="mt-8 text-center">
                <Link to="/feedback" className="inline-block px-8 py-2 bg-[#085846] text-white rounded-full text-xl transition duration-300 hover:bg-[#053a09]">
                    Leave Your Own Feedback
                </Link>
            </div>
        </section>
    );
};

export default Feedback;
