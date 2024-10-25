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
        <div className="max-w-2xl mx-auto p-6">
            {loading ? (
                <p className="text-lg">Loading...</p>
            ) : (
                <>
                    {error && <p className="text-red-500">{error}</p>}
                    
                    <h2 className="text-2xl font-bold mb-4">Manage Sections</h2>

                    <div>
                        <button 
                            onClick={() => navigate('/manage/feedback')} 
                            className="p-2 bg-blue-600 text-white rounded-md mr-2"
                        >
                            Manage Feedback
                        </button>
                        <button 
                            onClick={() => navigate('/manage/subscriptions')} 
                            className="p-2 bg-blue-600 text-white rounded-md mr-2"
                        >
                            Manage Subscriptions
                        </button>
                        <button 
                            onClick={() => navigate('/manage/careers')} 
                            className="p-2 bg-blue-600 text-white rounded-md"
                        >
                            Manage Careers
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Manage;
