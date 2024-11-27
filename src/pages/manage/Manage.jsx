import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Manage = () => {
    const [loading, setLoading] = useState(true); // Track loading state
    const [error, setError] = useState(null); // Track errors
    const navigate = useNavigate(); // Hook to navigate between pages

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // You may want to fetch some initial data here if needed
                await fetchInitialData(); 
            } catch (error) {
                setError('Failed to fetch data');
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // Example function to fetch initial data, modify as needed
    const fetchInitialData = async () => {
        // You can use this function to fetch any data needed on initial load
        // For now, it just simulates a successful fetch
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-[#F5F5DC]">
            {loading ? (
                <p className="text-lg">Loading...</p>
            ) : (
                <>
                    {error && <p className="text-red-500">{error}</p>}
                    
                    <h2 className="text-2xl font-bold mb-4 text-green-700">Manage Sections</h2>

                    <div className="grid grid-cols-2 gap-4">
                        <button 
                            onClick={() => navigate('/dashboard/feedback')} 
                            className="p-3 bg-green-600 hover:bg-green-700 text-cream rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg"
                        >
                            Manage Feedback
                        </button>
                        <button 
                            onClick={() => navigate('/dashboard/subscriptions')} 
                            className="p-3 bg-green-600 hover:bg-green-700 text-cream rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg"
                        >
                            Manage Subscriptions
                        </button>
                        <button 
                            onClick={() => navigate('/dashboard/careers')} 
                            className="p-3 bg-green-600 hover:bg-green-700 text-cream rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg"
                        >
                            Manage Careers
                        </button>
                        <button 
                            onClick={() => navigate('/dashboard/blog')} 
                            className="p-3 bg-green-600 hover:bg-green-700 text-cream rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg"
                        >
                            Manage Blog
                        </button>
                        <button 
                            onClick={() => navigate('/dashboard/contact')} 
                            className="p-3 bg-green-600 hover:bg-green-700 text-cream rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg"
                        >
                            Manage Contact
                        </button>
                        <button 
                            onClick={() => navigate('/dashboard/users')} 
                            className="p-3 bg-green-600 hover:bg-green-700 text-cream rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg"
                        >
                            Manage Users
                        </button>
                        <button 
                            onClick={() => navigate('/dashboard/applications')} 
                            className="p-3 bg-green-600 hover:bg-green-700 text-cream rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg"
                        >
                            View Applications
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Manage;