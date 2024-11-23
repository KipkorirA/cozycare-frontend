import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For navigation (back button)

const SubscriptionManage = () => {
    const [subscriptions, setSubscriptions] = useState([]);
    const [filteredSubscriptions, setFilteredSubscriptions] = useState([]);
    const [subscriptionForm, setSubscriptionForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        preferred_contact: '',
        interests: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [editSubscriptionId, setEditSubscriptionId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        fetchSubscriptions();
    }, []);

    // Fetch subscriptions
    const fetchSubscriptions = async () => {
        setLoading(true);
        try {
            // Optimistically keep the current subscriptions visible until the fetch is complete
            const response = await axios.get('https://cozycare-backend-g56w.onrender.co/subscriptions');
            const subscriptionData = Array.isArray(response.data) ? response.data : [];
            
            // Update the local state with the latest subscriptions
            setSubscriptions(subscriptionData);
            setFilteredSubscriptions(subscriptionData);
    
        } catch (error) {
            setError('Failed to fetch subscriptions');
        } finally {
            setLoading(false);
        }
    };
    

   
    const handleSubscriptionSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
    
            // Optimistically update state before API call for both update and create actions
            if (editSubscriptionId) {
                // Optimistically update the subscription in the state
                setSubscriptions((prevSubscriptions) =>
                    prevSubscriptions.map((sub) =>
                        sub.id === editSubscriptionId ? { ...sub, ...subscriptionForm } : sub
                    )
                );
                setFilteredSubscriptions((prevSubscriptions) =>
                    prevSubscriptions.map((sub) =>
                        sub.id === editSubscriptionId ? { ...sub, ...subscriptionForm } : sub
                    )
                );
                
                // API call to update subscription
                const response = await axios.put(
                    `https://cozycare-backend-g56w.onrender.com/subscriptions/${editSubscriptionId}`,
                    subscriptionForm
                );
    
                // Confirmation after successful update
                setSuccessMessage('Subscription updated successfully!');
            } else {
                // Optimistically add new subscription to the beginning of the list
                setSubscriptions((prevSubscriptions) => [
                    { ...subscriptionForm, id: Date.now() }, // Temporarily assigning a new ID for the optimistic update
                    ...prevSubscriptions,
                ]);
                setFilteredSubscriptions((prevSubscriptions) => [
                    { ...subscriptionForm, id: Date.now() },
                    ...prevSubscriptions,
                ]);
                
                // API call to create new subscription
                const response = await axios.post(
                    'https://cozycare-backend-g56w.onrender.com/subscriptions',
                    subscriptionForm
                );
    
                // Assign the correct ID received from the API after the response
                setSubscriptions((prevSubscriptions) =>
                    prevSubscriptions.map((sub) =>
                        sub.id === Date.now() ? { ...sub, id: response.data.id } : sub
                    )
                );
                setFilteredSubscriptions((prevSubscriptions) =>
                    prevSubscriptions.map((sub) =>
                        sub.id === Date.now() ? { ...sub, id: response.data.id } : sub
                    )
                );
    
                setSuccessMessage('Subscription created successfully!');
            }
    
            // Reset form after submission
            setSubscriptionForm({ first_name: '', last_name: '', email: '', phone_number: '', preferred_contact: '', interests: '' });
            setEditSubscriptionId(null);
        } catch (error) {
            setError('Error submitting subscription');
        } finally {
            setLoading(false);
        }
    };
    

    
    
    

    // Handle subscription editing
    const handleEditSubscription = (subscription) => {
        setSubscriptionForm(subscription);
        setEditSubscriptionId(subscription.id);
    };

    // Handle subscription deletion
    const handleDeleteSubscription = async (id) => {
        try {
            // Optimistically update the UI by removing the subscription locally
            setSubscriptions((prevSubscriptions) =>
                prevSubscriptions.filter((subscription) => subscription.id !== id)
            );
            setFilteredSubscriptions((prevSubscriptions) =>
                prevSubscriptions.filter((subscription) => subscription.id !== id)
            );
    
            // Immediately show success message
            setSuccessMessage('Subscription deleted successfully!');
    
            // API call to delete the subscription
            await axios.delete(`https://cozycare-backend-g56w.onrender.com/subscriptions/${id}`);
        } catch (error) {
            // If there's an error, revert the optimistic update by adding the subscription back
            setSubscriptions((prevSubscriptions) => [
                ...prevSubscriptions,
                { id, /* other fields if available */ } // You may need to restore other fields if required
            ]);
            setFilteredSubscriptions((prevSubscriptions) => [
                ...prevSubscriptions,
                { id, /* other fields if available */ }
            ]);
    
            setError('Error deleting subscription');
        }
    };
    
    

    // Handle search functionality
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);

        const filtered = subscriptions.filter((subscription) =>
            subscription.first_name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            subscription.last_name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            subscription.email.toLowerCase().includes(e.target.value.toLowerCase()) ||
            subscription.interests.toLowerCase().includes(e.target.value.toLowerCase())
        );

        setFilteredSubscriptions(filtered);
    };

    // Navigate back to the previous page
    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Manage Subscriptions</h2>

            {/* Back Button */}
            <button onClick={handleBack} className="bg-gray-500 text-white p-2 rounded hover:bg-gray-700 mb-4">
                Back
            </button>

            {/* Search Input */}
            <input
                type="text"
                placeholder="Search subscriptions..."
                value={searchTerm}
                onChange={handleSearch}
                className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <form onSubmit={handleSubscriptionSubmit} className="mb-6 space-y-4">
                <input
                    type="text"
                    placeholder="First Name"
                    value={subscriptionForm.first_name}
                    onChange={(e) => setSubscriptionForm({ ...subscriptionForm, first_name: e.target.value })}
                    required
                    className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={subscriptionForm.last_name}
                    onChange={(e) => setSubscriptionForm({ ...subscriptionForm, last_name: e.target.value })}
                    required
                    className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={subscriptionForm.email}
                    onChange={(e) => setSubscriptionForm({ ...subscriptionForm, email: e.target.value })}
                    required
                    className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={subscriptionForm.phone_number}
                    onChange={(e) => setSubscriptionForm({ ...subscriptionForm, phone_number: e.target.value })}
                    required
                    className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    placeholder="Preferred Contact"
                    value={subscriptionForm.preferred_contact}
                    onChange={(e) => setSubscriptionForm({ ...subscriptionForm, preferred_contact: e.target.value })}
                    required
                    className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    placeholder="Interests"
                    value={subscriptionForm.interests}
                    onChange={(e) => setSubscriptionForm({ ...subscriptionForm, interests: e.target.value })}
                    required
                    className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition">
                    {editSubscriptionId ? 'Update Subscription' : 'Submit Subscription'}
                </button>
            </form>

            {loading && <p className="text-gray-500">Loading subscriptions...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {successMessage && <p className="text-green-500">{successMessage}</p>}

            <h3 className="text-xl mt-6 font-semibold">Current Subscriptions</h3>
            <ul className="divide-y divide-gray-300">
                {filteredSubscriptions.map(subscription => (
                    <li key={subscription.id} className="flex justify-between items-center py-3">
                        <div>
                            <strong className="text-lg">{subscription.first_name} {subscription.last_name}</strong> - <span className="text-gray-600">{subscription.email}</span>
                        </div>
                        <div className="ml-4 flex space-x-2">
                            <button
                                onClick={() => handleEditSubscription(subscription)}
                                className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDeleteSubscription(subscription.id)}
                                className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
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

export default SubscriptionManage;
