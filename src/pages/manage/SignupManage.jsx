import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupManage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    date_of_birth: '',
    is_admin: false,
    password: '',
    confirm_password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: name === 'is_admin' ? value === 'true' : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirm_password) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('https://cozycare-backend-g56w.onrender.com/users/signup', formData);
      if (response.status === 201) {
        alert('User created successfully!');
        navigate('/cozy');
      }
    } catch (error) {
      alert('Error creating user: ' + error.response?.data?.message || error.message);
    }
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">



        <div className="bg-white backdrop-blur-lg bg-opacity-90 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-all duration-300">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
            <h4 className="text-2xl font-bold text-center text-white tracking-wider">Create New User</h4>
          </div>

          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required

                    className="mt-1 block w-full rounded-lg border-2 border-gray-200 px-4 py-2 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  />
                </div>
                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required

                    className="mt-1 block w-full rounded-lg border-2 border-gray-200 px-4 py-2 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  />
                </div>
              </div>

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required

                  className="mt-1 block w-full rounded-lg border-2 border-gray-200 px-4 py-2 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                />
              </div>

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required

                  className="mt-1 block w-full rounded-lg border-2 border-gray-200 px-4 py-2 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                />
              </div>

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth</label>
                <input
                  type="date"
                  name="date_of_birth"
                  value={formData.date_of_birth}
                  onChange={handleChange}
                  required

                  className="mt-1 block w-full rounded-lg border-2 border-gray-200 px-4 py-2 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                />
              </div>

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">Admin Status</label>
                <select
                  name="is_admin"
                  value={formData.is_admin}
                  onChange={handleChange}
                  required

                  className="mt-1 block w-full rounded-lg border-2 border-gray-200 px-4 py-2 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                >
                  <option value={false}>Regular User</option>
                  <option value={true}>Admin</option>
                </select>
              </div>

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required

                  className="mt-1 block w-full rounded-lg border-2 border-gray-200 px-4 py-2 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                />
              </div>

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
                <input
                  type="password"
                  name="confirm_password"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  required

                  className="mt-1 block w-full rounded-lg border-2 border-gray-200 px-4 py-2 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                />
              </div>


              <div className="text-center pt-4">
                <button
                  type="submit"

                  className="inline-flex justify-center py-3 px-8 border border-transparent shadow-lg text-sm font-bold rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Create User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


export default SignupManage;