/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";


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
                    tabIndex={0} // Make it keyboard accessible
                    onKeyDown={(e) => e.key === 'Enter' && setRating(star)} // Handle keyboard events
                    aria-label={`${star} star${star > 1 ? 's' : ''}`}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

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
                    <p>{testimonial.text}</p>
                    {testimonial.image_url && (
                        <img
                            src={`http://localhost:5000${testimonial.image_url}`}
                            alt={`Image of ${testimonial.author}`}
                            className="w-20 h-20 rounded-full mx-auto object-cover mb-2"
                        />
                    )}
                    <p>- {testimonial.author || "Anonymous"}</p>
                </div>
            ))}
        </div>
    );
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
    const [loading, setLoading] = useState(true); // Start loading as true
    const [currentPage, setCurrentPage] = useState(1);
    const testimonialsPerPage = 6;

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const fetchTestimonials = async () => {
        try {
            const response = await fetch("http://localhost:5000/feedback");
            if (response.ok) {
                const data = await response.json();
                setTestimonials(data);
            } else {
                setMessage("Failed to load testimonials. Using placeholder data.");
                setTestimonials(getPlaceholderTestimonials());
            }
        } catch (error) {
            setMessage("Error fetching testimonials. Using placeholder data.");
            setTestimonials(getPlaceholderTestimonials());
        } finally {
            setLoading(false); // Set loading to false regardless of API success
        }
    };

    const getPlaceholderTestimonials = () => {
        return [
            { text: "Great service! I felt like part of the family.", author: "John Doe", image_url: "/images/testimonial1.jpg" },
            { text: "Absolutely amazing experience! Highly recommend.", author: "Jane Smith", image_url: "/images/testimonial2.jpg" },
            { text: "The staff are so caring and attentive.", author: "Sam Wilson", image_url: "/images/testimonial3.jpg" },
            { text: "Best care I’ve ever received.", author: "Alice Brown", image_url: "/images/testimonial4.jpg" },
            { text: "Wonderful experience from start to finish.", author: "Bob Johnson", image_url: "/images/testimonial5.jpg" },
            { text: "I couldn't be happier with the service!", author: "Carol White", image_url: "/images/testimonial6.jpg" },
        ];
    };

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
        formData.append("feedback", feedback);

        if (file) {
            formData.append("file", file);
        }

        try {
            const response = await fetch("http://localhost:5000/feedback", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                setMessage(data.message);
                resetForm();
                fetchTestimonials(); // Refresh testimonials after submitting feedback
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
        <div className="pt-40 mx-auto bg-gray-200 rounded-lg shadow-lg transition duration-300">
            <div className="px-12">
                <h3 className="text-lg">COZYCARE NEWS</h3>
                <div className="h-1 w-60 bg-green-700 mb-4"></div>
                <div className="flex justify-between items-start mb-12">
                    <div className="pr-4">
                        <h1 className="text-4xl mb-4 text-green-800 uppercase">“Hear What Our Clients Have to Say”</h1>
                        <p className="text-lg mb-6"><b>Our Mission:</b> Caring for Your Family, Just Like Our Own</p>
                    </div>
                    <div>
                        <img src="/images/quote-feedback.png" alt="Client feedback quote illustration" className="w-40 pr-8" />
                    </div>
                </div>

                <div className="bg-white rounded-lg mb-8 p-4">
                    <div className="feedback-container">
                        <Testimonials 
                            testimonials={testimonials} 
                            loading={loading} 
                            currentPage={currentPage} 
                            testimonialsPerPage={testimonialsPerPage}
                        />
                    </div>
                </div>

                <div className="flex justify-center my-4">
                    {[...Array(totalPages)].map((_, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center bg-gray-300 border border-gray-400 px-4 py-2 mx-1 cursor-pointer transform rotate-45 transition duration-300"
                            onClick={() => handlePageClick(index + 1)}
                            role="button"
                            tabIndex={0} // Make it keyboard accessible
                            onKeyDown={(e) => e.key === 'Enter' && handlePageClick(index + 1)} // Handle keyboard events
                        >
                            <span className="transform -rotate-45">{index + 1}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-green-300 p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl mb-2">We Value Your Feedback</h1>
                <p className="mb-4">Your thoughts help us improve our services!</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name" className="font-bold text-lg">Your Name (optional):</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg p-2 mt-1 mb-4"
                    />

                    <label htmlFor="email" className="font-bold text-lg">Your Email (optional):</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg p-2 mt-1 mb-4"
                    />

                    <label htmlFor="rating" className="font-bold text-lg">Rate Your Experience:</label>
                    <StarRating rating={rating} setRating={setRating} />

                    <label htmlFor="feedback" className="font-bold text-lg">Your Feedback:</label>
                    <textarea
                        id="feedback"
                        name="feedback"
                        rows="4"
                        placeholder="Write your feedback here..."
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg p-2 mt-1 mb-4"
                    ></textarea>

                    <label htmlFor="file" className="custom-file-upload font-bold text-lg">
                        Upload a file (optional):
                    </label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="border border-gray-300 rounded-lg p-2 mt-1 mb-4"
                    />
                    {fileName && <p className="text-green-600 mb-4">Selected file: {fileName}</p>}
                    
                    <button 
                        type="submit" 
                        disabled={loading} 
                        className={`bg-green-600 text-white py-2 px-4 rounded-lg ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700 transition duration-300'}`}
                    >
                        {loading ? "Submitting..." : "Submit Feedback"}
                    </button>
                </form>

                {message && <p className={`mt-4 ${message.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>{message}</p>}
            </div>
        </div>
    );
};

export default FeedbackPage;
