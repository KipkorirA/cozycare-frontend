import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');
      setMessage('');
      
      await axios.post('https://cozycare-backend-g56w.onrender.com/users/reset', {
        email: email
      });

      setMessage('Password reset link has been sent to your email');
      setEmail('');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred while processing your request');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 mt-20" style={{ backgroundColor: '#FAF6E9' }}>
      <div className="max-w-md mx-auto p-8 rounded-lg shadow-lg" style={{ backgroundColor: '#FFFBF0' }}>
        <h2 className="text-3xl font-bold text-center mb-8 text-green-900">Reset Password</h2>
        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
        {message && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">{message}</div>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-green-900 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-3 py-2 border border-green-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700 bg-cream-50"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-800 text-cream-50 py-2 px-4 rounded-md hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            {loading ? 'Sending...' : 'Reset Password'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;