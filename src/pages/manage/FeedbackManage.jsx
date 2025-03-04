import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // For back navigation

const FeedbackManage = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [filteredFeedbacks, setFilteredFeedbacks] = useState([]); // State for filtered feedbacks
    const [feedbackForm, setFeedbackForm] = useState({
        name: '',
        email: '',
        rating: 0,
        feedback_text: '',
        feedback_file: '',
        image_url: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [editFeedbackId, setEditFeedbackId] = useState(null); // Track if editing
    const [searchTerm, setSearchTerm] = useState(''); // State for search input

    const navigate = useNavigate();  // Hook for back button

    useEffect(() => {
        fetchFeedbacks();
    }, []);

    // Fetch feedbacks from the server
    const fetchFeedbacks = async (page = 1) => {
        setLoading(true);
        try {
            const response = await axios.get(`https://cozycare-backend-g56w.onrender.com/feedbacks`, {
                params: { page, per_page: 10 }, // Use `params` for query parameters
            });
    
            // Ensure response data is structured properly
            const feedbackData = Array.isArray(response.data) ? response.data : response.data.feedbacks || [];
            
            setFeedbacks(feedbackData); // Update state with feedback data
            setFilteredFeedbacks(feedbackData); // Set filtered feedbacks to show all initially
        } catch (error) {
            console.error('Error fetching feedbacks:', error);
            setError('Failed to fetch feedback. Please try again.');
        } finally {
            setLoading(false);
        }
    };
    


    // Handle form submission for creating or updating feedback
    const handleFeedbackSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', feedbackForm.name);
        formData.append('email', feedbackForm.email);
        formData.append('rating', feedbackForm.rating);
        formData.append('feedback_text', feedbackForm.feedback_text);
        if (feedbackForm.feedback_file) {
            formData.append('feedback_file', feedbackForm.feedback_file);
        }
    
        try {
            setLoading(true); // Ensure loading state is set before making the request
            if (editFeedbackId) {
                // Optimistic UI update for edit
                setFeedbacks((prevFeedbacks) =>
                    prevFeedbacks.map((feedback) =>
                        feedback.id === editFeedbackId
                            ? { ...feedback, ...feedbackForm }  // Update feedback in the list
                            : feedback
                    )
                );
                setFilteredFeedbacks((prevFeedbacks) =>
                    prevFeedbacks.map((feedback) =>
                        feedback.id === editFeedbackId
                            ? { ...feedback, ...feedbackForm }
                            : feedback
                    )
                );
                await axios.put(`https://cozycare-backend-g56w.onrender.com/feedbacks/${editFeedbackId}`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
                setSuccessMessage('Feedback updated successfully!');
            } else {
                // Optimistic UI update for new feedback
                setFeedbacks((prevFeedbacks) => [feedbackForm, ...prevFeedbacks]);
                setFilteredFeedbacks((prevFeedbacks) => [feedbackForm, ...prevFeedbacks]);
                await axios.post('https://cozycare-backend-g56w.onrender.com/feedbacks', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
                setSuccessMessage('Feedback submitted successfully!');
            }
            setFeedbackForm({ name: '', email: '', rating: 0, feedback_text: '', feedback_file: '', image_url: '' });
            setEditFeedbackId(null); // Reset after update
        } catch (error) {
            console.error('Error submitting feedback:', error);
            setError('Error submitting feedback. Please try again.');
            // Optionally, revert optimistic updates on failure
            fetchFeedbacks();
        } finally {
            setLoading(false);
        }
    };
    
    

    // Handle feedback editing
    const handleEditFeedback = (feedback) => {
        setFeedbackForm(feedback);
        setEditFeedbackId(feedback.id); // Set ID to track editing
    };

    // Handle feedback deletion
    const handleDeleteFeedback = async (id) => {
        if (!id) {
            console.error('Feedback ID is not defined');
            return;  // Exit early if id is not defined
        }
    
        try {
            setLoading(true);  // Start loading
    
            // Optimistically remove the feedback from the UI
            setFeedbacks((prevFeedbacks) =>
                prevFeedbacks.filter((feedback) => feedback.id !== id)
            );
            setFilteredFeedbacks((prevFeedbacks) =>
                prevFeedbacks.filter((feedback) => feedback.id !== id)
            );
    
            // Delete the feedback from the backend
            await axios.delete(`https://cozycare-backend-g56w.onrender.com/feedbacks/${id}`);
    
            setSuccessMessage('Feedback deleted successfully!');
        } catch (error) {
            console.error('Error deleting feedback:', error);
            setError('Error deleting feedback. Please try again.');
    
            // Revert UI changes if delete fails
            fetchFeedbacks();
        } finally {
            setLoading(false);  // End loading
        }
    };
    
    
    
    
    


    // Handle search functionality
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);

        const filtered = feedbacks.filter((feedback) =>
            feedback.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            feedback.email.toLowerCase().includes(e.target.value.toLowerCase()) ||
            feedback.feedback_text.toLowerCase().includes(e.target.value.toLowerCase())
        );

        setFilteredFeedbacks(filtered);
    };

    // Navigate back to the previous page
    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Manage Feedback</h2>

            {/* Back Button */}
            <button onClick={handleBack} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md mb-6">
                Back
            </button>

            {/* Search Input */}
            <input
                type="text"
                placeholder="Search feedback..."
                value={searchTerm}
                onChange={handleSearch}
                className="border border-gray-300 focus:border-blue-500 p-2 rounded-md w-full mb-6"
            />

            <form onSubmit={handleFeedbackSubmit} className="space-y-4 mb-6">
                <input
                    type="text"
                    placeholder="Name"
                    value={feedbackForm.name}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, name: e.target.value })}
                    required
                    className="border border-gray-300 focus:border-blue-500 p-2 rounded-md w-full"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={feedbackForm.email}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, email: e.target.value })}
                    required
                    className="border border-gray-300 focus:border-blue-500 p-2 rounded-md w-full"
                />
                <input
                    type="number"
                    min="0"
                    max="5"
                    placeholder="Rating (0-5)"
                    value={feedbackForm.rating}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, rating: parseInt(e.target.value) })}
                    required
                    className="border border-gray-300 focus:border-blue-500 p-2 rounded-md w-full"
                />
                <textarea
                    placeholder="Feedback"
                    value={feedbackForm.feedback_text}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, feedback_text: e.target.value })}
                    required
                    className="border border-gray-300 focus:border-blue-500 p-2 rounded-md w-full"
                />
                <input
                    type="file"
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, feedback_file: e.target.files[0] })}
                    className="border border-gray-300 focus:border-blue-500 p-2 rounded-md w-full"
                />
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                    {editFeedbackId ? 'Update Feedback' : 'Submit Feedback'}
                </button>
            </form>

            {loading && <p className="text-gray-500">Loading feedback...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {successMessage && <p className="text-green-500">{successMessage}</p>}
            
            <h3 className="text-xl font-semibold mt-8">Current Feedback</h3>
            <ul className="space-y-4 mt-4">
                {filteredFeedbacks.map(feedback => (
                    <li key={feedback.id} className="border border-gray-300 p-4 rounded-lg shadow-sm">
                        <strong className="text-lg">{feedback.name}</strong> 
                        <p className="text-sm text-gray-600">Rating: {feedback.rating}</p>
                        <p className="mt-2">{feedback.feedback_text}</p>
                        <div className="mt-4">
                            <button 
                                onClick={() => handleEditFeedback(feedback)} 
                                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md mr-2"
                            >
                                Edit
                            </button>
                            <button 
                                onClick={() => handleDeleteFeedback(feedback.id)} 
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeedbackManage;
