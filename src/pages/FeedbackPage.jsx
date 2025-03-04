import { useEffect, useState, useCallback } from "react";
import PropTypes from 'prop-types';

// Star Rating Component for submitting ratings
const StarRating = ({ rating, setRating }) => {
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="flex mb-4" role="group" aria-label="Rating stars">
            {stars.map((star) => (
                <span
                    key={star}
                    className={`text-2xl cursor-pointer transition-colors duration-200 ${
                        rating >= star ? "text-yellow-500" : "text-gray-300"
                    }`}
                    onClick={() => setRating(star)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setRating(star)}
                    aria-label={`${star} star${star > 1 ? 's' : ''}`}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

StarRating.propTypes = {
    rating: PropTypes.number.isRequired,
    setRating: PropTypes.func.isRequired
};

// Separate component for displaying testimonials
const Testimonials = ({ testimonials, loading, currentPage, testimonialsPerPage }) => {
    if (loading) return <p className="text-center">Loading testimonials...</p>;
    if (testimonials.length === 0) return <p className="text-center">No testimonials available.</p>;

    const indexOfLastTestimonial = currentPage * testimonialsPerPage;
    const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
    const displayedTestimonials = testimonials.slice(indexOfFirstTestimonial, indexOfLastTestimonial);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayedTestimonials.map((testimonial, index) => (
                <div key={index} className="bg-white border border-green-300 rounded-lg p-4 text-center transition-transform transform hover:scale-105">
                    {/* Display feedback text */}
                    <p>{testimonial.feedback_text}</p>
    
                    {/* Conditionally display image if available */}
                    {(testimonial.image_url || testimonial.feedback_file) && (
                        <div className="mb-2">
                            {/* Show image from feedback_file if available, fallback to image_url if necessary */}
                            {testimonial.image_url ? (
                                <img
                                    src={testimonial.image_url.startsWith('http') ? testimonial.image_url : `https://cozycare-backend-g56w.onrender.com${testimonial.image_url}`}
                                    alt={`Image of ${testimonial.name}`}
                                    className="w-20 h-20 rounded-full mx-auto object-cover mb-2"
                                    onError={(e) => e.target.style.display = 'none'} // Hide image on error
                                />
                            ) : (
                                // If image_url is not available, try using feedback_file
                                testimonial.feedback_file && (
                                    <img
                                        src={`https://cozycare-backend-g56w.onrender.com/${testimonial.feedback_file}`}
                                        alt={`Feedback file image of ${testimonial.name}`}
                                        className="w-20 h-20 rounded-full mx-auto object-cover mb-2"
                                        onError={(e) => e.target.style.display = 'none'} // Hide image on error
                                    />
                                )
                            )}
                        </div>
                    )}
    
                    {/* Display the name */}
                    <p>- {testimonial.name}</p>
                </div>
            ))}
        </div>
    );
};

Testimonials.propTypes = {
    testimonials: PropTypes.arrayOf(PropTypes.shape({
        feedback_text: PropTypes.string,
        name: PropTypes.string,
        image_url: PropTypes.string,
        feedback_file: PropTypes.string
    })).isRequired,
    loading: PropTypes.bool.isRequired,
    currentPage: PropTypes.number.isRequired,
    testimonialsPerPage: PropTypes.number.isRequired
};

const FeedbackPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState("");
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");
    const [fileName, setFileName] = useState("");
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const testimonialsPerPage = 6;

    const getPlaceholderTestimonials = () => {
        return [
            { text: "Great service! I felt like part of the family.", author: "Joy Wairimu", image_url: "https://img.freepik.com/free-photo/front-view-smiley-black-woman_23-2149742288.jpg" },
            { text: "Absolutely amazing experience! Highly recommend.", author: "Jane Smith", image_url: "https://naacp.org/sites/default/files/styles/hero_desktop/public/images/iStock-1045045764.jpg.webp?itok=VZrKt0Zg" },
            { text: "The staff are so caring and attentive.", author: "Sam Wilson", image_url: "https://media.istockphoto.com/id/1413583706/photo/happy-african-american-senior-at-nursing-home-looking-at-camera.jpg?s=612x612&w=0&k=20&c=1UfiRA6NS3ED438KxiEN1xZjk7Z0Tt70VDyQ5tjvC5s=" },
            { text: "Best care I've ever received.", author: "Alice Brown", image_url: "https://t3.ftcdn.net/jpg/05/70/02/62/360_F_570026237_Ey6tSBVByUXCn608rmX65VuAhkuqtQQw.jpg" },
            { text: "Wonderful experience from start to finish.", author: "Bob Johnson", image_url: "https://pics.craiyon.com/2023-06-15/6d4271fc0acb418d98679240d9f7902c.webp" },
            { text: "I couldn't be happier with the service!", author: "Carol White", image_url: "https://www.shutterstock.com/image-photo/portrait-smiling-african-american-senior-600nw-2180795511.jpg" },
        ];
    };

    const fetchTestimonials = useCallback(async () => {
        setLoading(true); // Ensure loading is set to true at the start
        try {
            const response = await fetch("https://cozycare-backend-g56w.onrender.com/feedbacks", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
    
            if (!response.ok) {
                // Log status for more detailed debugging
                console.error(`Failed to load testimonials. Status: ${response.status} - ${response.statusText}`);
                throw new Error(`Failed to load testimonials. Status: ${response.status}`);
            }
    
            const data = await response.json();
    
            // Optionally check if the returned data contains the expected fields
            const updatedData = data.map(testimonial => ({
                ...testimonial,
                name: testimonial.name || 'Unknown', // Fallback for missing names
                avatar: testimonial.avatar || 'default-avatar-url', // Fallback for missing avatars
                message: testimonial.message || 'No message provided', // Fallback for missing message
            }));
    
            setTestimonials(updatedData);
        } catch (error) {
            console.error("Error fetching testimonials:", error);  // Log the full error
            setMessage(`Error: ${error.message}. Using placeholder data.`);
            setTestimonials(getPlaceholderTestimonials());
        } finally {
            setLoading(false);
        }
    }, []);
    
    useEffect(() => {
        fetchTestimonials();
    }, [fetchTestimonials]);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            if (selectedFile.size > 2 * 1024 * 1024) {
                setMessage("File size exceeds 2MB.");
                return;
            }

            const allowedExtensions = ["image/png", "image/jpeg", "image/jpg", "image/gif", "image/webp"];
            if (!allowedExtensions.includes(selectedFile.type)) {
                setMessage("File type is not allowed!");
                return;
            }

            setFile(selectedFile);
            setFileName(selectedFile.name);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!email.includes('@') || !feedback) {
            setMessage("Please provide a valid email and feedback.");
            return;
        }

        setLoading(true);
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("rating", rating);
        formData.append("feedback_text", feedback);

        if (file) {
            formData.append("file", file);
        }

        try {
            const response = await fetch("https://cozycare-backend-g56w.onrender.com/feedbacks", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                setMessage(data.message);
                resetForm();
                fetchTestimonials();
            } else {
                const errorData = await response.json();
                setMessage(errorData.message);
            }
        } catch (error) {
            setMessage("Error submitting feedback. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setName("");
        setEmail("");
        setRating(0);
        setFeedback("");
        setFile(null);
        setFileName("");
    };

    const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="pt-4 sm:pt-4 md:pt-4 mx-auto bg-gradient-to-br from-gray-200 to-gray-100 rounded-lg shadow-2xl transition-all duration-300 hover:shadow-xl">
            <div className="px-4 sm:px-8 md:px-12">
                <div className="relative">
                    <h3 className="text-2xl sm:text-xl md:text-4xl lg:text-6xl font-bold text-green-700 tracking-wider">COZYCARE NEWS</h3>
                    <div className="h-1 w-32 mt-3 sm:w-48 md:w-60 bg-gradient-to-r from-yellow-300 to-yellow-500 mb-4 transform hover:scale-x-110 transition-transform duration-300"></div>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8 md:mb-12 gap-6">
                    <div className="md:pr-4">
                        <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-green-800 uppercase font-extrabold animate-fade-in">
                            “Hear What Our Clients Have to Say”
                        </h1>
                        <p className="text-base sm:text-lg mb-6 transform hover:scale-105 transition-transform duration-300">
                            <span className="font-bold text-green-700">Our Mission:</span> 
                            <span className="italic"> Caring for Your Family, Just Like Our Own</span>
                        </p>
                    </div>
                    <div className="transform hover:rotate-6 transition-transform duration-300">
                        <img 
                            src="/images/quote-feedback.png" 
                            alt="Client feedback quote illustration" 
                            className="w-32 sm:w-36 md:w-40 lg:w-48 pr-4 md:pr-8 animate-float"
                        />
                    </div>
                </div>

                <div className="bg-white rounded-lg mb-8 p-4 shadow-inner hover:shadow-lg transition-shadow duration-300">
                    <div className="feedback-container overflow-hidden">
                        <Testimonials 
                            testimonials={testimonials} 
                            loading={loading} 
                            currentPage={currentPage} 
                            testimonialsPerPage={testimonialsPerPage}
                        />
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-2 my-4 pb-6">
                    {[...Array(totalPages)].map((_, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 border border-gray-400 
                                      px-3 sm:px-4 py-2 cursor-pointer transform rotate-45 transition-all duration-300
                                      hover:from-green-500 hover:to-green-600 hover:text-white hover:scale-110 hover:shadow-lg
                                      ${currentPage === index + 1 ? 'from-green-600 to-green-700 text-white' : ''}`}
                            onClick={() => handlePageClick(index + 1)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && handlePageClick(index + 1)}
                        >
                            <span className="transform -rotate-45 text-sm sm:text-base">{index + 1}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-gradient-to-br from-green-300 to-green-200 p-8 rounded-lg shadow-2xl ">
                <h1 className="text-3xl mb-4 text-green-800 font-bold animate-fade-in">We Value Your Feedback</h1>
                <p className="mb-6 text-lg text-green-700 animate-slide-in">Your thoughts help us improve our services!</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="transform hover:translate-x-2 transition-transform duration-300">
                        <label htmlFor="name" className="font-bold text-lg text-green-800 block">Your Name (optional):</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border-2 border-green-400 rounded-lg p-3 mt-2 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300"
                        />
                    </div>

                    <div className="transform hover:translate-x-2 transition-transform duration-300">
                        <label htmlFor="email" className="font-bold text-lg text-green-800 block">Your Email (optional):</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border-2 border-green-400 rounded-lg p-3 mt-2 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300"
                        />
                    </div>

                    <div className="transform hover:translate-x-2 transition-transform duration-300">
                        <label htmlFor="rating" className="font-bold text-lg text-green-800 block">Rate Your Experience:</label>
                        <StarRating rating={rating} setRating={setRating} />
                    </div>

                    <div className="transform hover:translate-x-2 transition-transform duration-300">
                        <label htmlFor="feedback" className="font-bold text-lg text-green-800 block">Your Feedback:</label>
                        <textarea
                            id="feedback"
                            name="feedback"
                            rows="4"
                            placeholder="Write your feedback here..."
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            className="w-full border-2 border-green-400 rounded-lg p-3 mt-2 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300"
                        ></textarea>
                    </div>

                    <div className="transform hover:translate-x-2 transition-transform duration-300">
                        <label htmlFor="file" className="custom-file-upload font-bold text-lg text-green-800 block">
                            Upload a file (optional):
                        </label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full border-2 border-green-400 rounded-lg p-3 mt-2 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300"
                        />
                        {fileName && <p className="text-green-600 mt-2 animate-pulse">Selected file: {fileName}</p>}
                    </div>
                    
                    <button 
                        type="submit" 
                        disabled={loading} 
                        className={`w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-lg text-lg font-bold shadow-lg transform hover:translate-y-[-2px] hover:shadow-xl active:translate-y-[1px] ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:from-green-700 hover:to-green-800'} transition-all duration-300`}
                    >
                        {loading ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                                </svg>
                                Submitting...
                            </span>
                        ) : "Submit Feedback"}
                    </button>
                </form>

                {message && (
                    <div className={`mt-6 p-4 rounded-lg ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'} animate-fade-in`}>
                        {message}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FeedbackPage;