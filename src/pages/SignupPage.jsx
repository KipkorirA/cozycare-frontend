import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    date_of_birth: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null); // Reset error on each submit

    // Log form data before sending the request
    console.log("Form Data:", JSON.stringify(formData));

    try {
      const response = await fetch('https://cozycare-backend-g56w.onrender.com/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const errorData = await response.json();
      
      if (response.ok) {
        navigate('/login');
      } else if (response.status === 400) {
        if (errorData.message.includes('username')) {
          setError('Username already exists');
        } else if (errorData.message.includes('email')) {
          setError('Email already exists');
        } else {
          setError(errorData.message || 'Signup failed');
        }
      } else {
        setError(errorData.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setError('An error occurred during signup');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5dc]">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <h2 className="text-center text-3xl font-bold text-[#006400]">
          Create your account
        </h2>
        {error && <div className="text-center text-red-500">{error}</div>}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            {['username', 'first_name', 'last_name', 'email', 'date_of_birth', 'password'].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="sr-only">{field.replace('_', ' ').toUpperCase()}</label>
                <input
                  id={field}
                  name={field}
                  type={field === 'email' ? 'email' : field === 'password' ? 'password' : field === 'date_of_birth' ? 'date' : 'text'}
                  required
                  aria-label={field.replace('_', ' ')}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#006400] focus:border-[#006400]"
                  placeholder={field.replace('_', ' ').toUpperCase()}
                  value={formData[field]}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </div>
            ))}
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#006400] hover:bg-[#005000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#006400]"
              disabled={isLoading}
            >
              {isLoading ? 'Signing up...' : 'Sign up'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;