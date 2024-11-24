import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginManage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // Debugging: Check formData before sending it
  
    try {
      const response = await axios.post('https://cozycare-backend-g56w.onrender.com/users/login', {
        email: formData.identifier, // Use 'email' here
        password: formData.password
      });
  
      if (response.data.user.is_admin === true) {
        localStorage.setItem('adminToken', response.data.token);
        localStorage.setItem('adminData', JSON.stringify(response.data.user));
        navigate('/manage');
      } else {
        setError('Access denied. Admin privileges required.');
      }
    } catch (error) {
      setError('Invalid credentials or server error');
      console.log(error); // Log the error for debugging
    }
  };
  
  
  

  return (
    <div className="container mx-auto px-4 max-w-md">
      <div className="mt-16 flex flex-col items-center">
        <div className="w-full bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-2xl font-bold text-center mb-6">
            Admin Login
          </h1>
          {error && (
            <p className="text-red-500 text-center mb-4">
              {error}
            </p>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                id="identifier"
                placeholder="Email"
                name="identifier"
                autoComplete="email"
                autoFocus
                value={formData.identifier}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                name="password"
                placeholder="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginManage;