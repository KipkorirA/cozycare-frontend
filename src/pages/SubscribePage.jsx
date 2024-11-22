import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SubscribePage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [preferredContact, setPreferredContact] = useState('email'); // Default to email
  const [interests, setInterests] = useState([]); // Store selected interests
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state

  // Initialize useNavigate
  const navigate = useNavigate();

  // Define the API base URL using environment variable
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://cozycare-backend-g56w.onrender.com';

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhoneNumber = (phone) => {
    const re = /^[0-9-+\s()]*$/; // Simple regex to allow numbers, spaces, dashes, parentheses, and plus sign
    return phone === '' || re.test(phone); // Allow empty for optional field
  };

  const validateForm = () => {
    if (firstName.length < 2) {
      setErrorMessage('First name must be at least 2 characters long.');
      return false;
    }
    if (lastName.length < 2) {
      setErrorMessage('Last name must be at least 2 characters long.');
      return false;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    }
    if (!validatePhoneNumber(phoneNumber)) {
      setErrorMessage('Please enter a valid phone number.');
      return false;
    }
    return true;
  };

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setInterests([]);
  };

  const handleSubscription = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        const response = await fetch(`${API_BASE_URL}/subscriptions`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            first_name: firstName,  
            last_name: lastName,    
            email,
            phone_number: phoneNumber,  
            preferred_contact: preferredContact,  
            interests,
          }),
        });
  
        const data = await response.json();
        if (response.ok) {
          resetForm();
          navigate('/subscription-successful');
        } else {
          setErrorMessage(data.message || 'Something went wrong.');
        }
      } catch (error) {
        console.error('Network error:', error);
        setErrorMessage('Failed to subscribe. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }
  };
  

  return (
    <div className="max-w-md mx-auto my-12 p-10 border border-gray-300 rounded-lg shadow-md bg-gradient-to-r from-green-300 to-gray-100">
      <h1 className="text-3xl mb-4 text-center text-gray-900 font-monospace">Subscribe to CozyCare</h1>
      <p className="mb-8 text-center text-gray-600">
        Stay updated with our latest health tips, services, and offers. Join our newsletter today!
      </p>

      {/* Subscription Form */}
      <form className="space-y-4" onSubmit={handleSubscription}>
        <label className="block text-gray-800 font-bold" htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          aria-label="First Name"
          className="w-full p-4 border-2 border-gray-400 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
        />
        
        <label className="block text-gray-800 font-bold" htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          aria-label="Last Name"
          className="w-full p-4 border-2 border-gray-400 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
        />

        <label className="block text-gray-800 font-bold" htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email Address"
          className="w-full p-4 border-2 border-gray-400 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
        />

        <label className="block text-gray-800 font-bold" htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          placeholder="Enter your phone number (optional)"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          aria-label="Phone Number"
          className="w-full p-4 border-2 border-gray-400 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
        />

        <label className="block text-gray-800 font-bold" htmlFor="preferredContact">Preferred Contact Method:</label>
        <select
          id="preferredContact"
          value={preferredContact}
          onChange={(e) => setPreferredContact(e.target.value)}
          aria-label="Preferred Contact Method"
          className="w-full p-4 border-2 border-gray-400 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
        >
          <option value="email">Email</option>
          <option value="sms">SMS</option>
        </select>

        <label className="block text-gray-800 font-bold">Interests:</label>
        <div className="flex flex-col space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              value="healthTips"
              checked={interests.includes('healthTips')}
              onChange={(e) => {
                const value = e.target.value;
                setInterests(prev => 
                  prev.includes(value) ? prev.filter(i => i !== value) : [...prev, value]
                );
              }}
              className="mr-2"
            />
            Health Tips
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              value="productOffers"
              checked={interests.includes('productOffers')}
              onChange={(e) => {
                const value = e.target.value;
                setInterests(prev => 
                  prev.includes(value) ? prev.filter(i => i !== value) : [...prev, value]
                );
              }}
              className="mr-2"
            />
            Product Offers
          </label>
          {/* Add more interest options as needed */}
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
          className={`w-full p-4 rounded-md transition ${isLoading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
        >
          {isLoading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>

      {/* Error Message */}
      {errorMessage && <p className="mt-4 text-red-600 font-bold text-center" aria-live="polite">{errorMessage}</p>}
      {isLoading && <p className="mt-4 text-blue-600 font-bold text-center">Loading...</p>} {/* Loading Message */}
    </div>
  );
};

export default SubscribePage;
