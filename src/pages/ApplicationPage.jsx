import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ApplicationPage = () => {
  const [career, setCareer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCareer = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/careers/${parseInt(id)}`);
        setCareer(response.data);
      } catch (error) {
        console.error('Error fetching career:', error);
      }
    };

    fetchCareer();
  }, [id]);

  if (!career) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div>
    </div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">{career.title}</h1>
      <div className="bg-white shadow-2xl rounded-xl p-8 hover:shadow-3xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Position Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-gray-700">
              <span className="font-semibold text-green-700 block mb-1">Department</span>
              <span className="text-lg">{career.department}</span>
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-gray-700">
              <span className="font-semibold text-green-700 block mb-1">Location</span>
              <span className="text-lg">{career.location}</span>
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-gray-700">
              <span className="font-semibold text-green-700 block mb-1">Remote</span>
              <span className="text-lg">{career.remote ? 'Yes' : 'No'}</span>
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
            <svg className="w-6 h-6 mr-2 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            Job Description
          </h3>
          <p className="text-gray-700 leading-relaxed bg-green-50 p-6 rounded-lg">{career.description}</p>
        </div>
        <div className="text-center">
          <a href={career.apply_link} target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-green-700 to-green-500 text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transform hover:scale-105 transition-all duration-300">
              Apply Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;