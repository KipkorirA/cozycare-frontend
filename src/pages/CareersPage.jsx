import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CareersPage = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/careers')
      .then((response) => response.json())
      .then((data) => {
        setCareers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the careers!", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen py-20 md:py-40 px-4 md:px-8 bg-gray-50">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start max-w-6xl mx-auto mb-12">
        <div className="w-full md:w-3/5 text-center md:text-left mb-8 md:mb-0 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Current Openings at CozyCare</h1>
          <hr className="w-full md:w-4/5 border-2 border-yellow-500 my-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            <b>CozyCare exists to expand <br className="hidden md:block" /> the world's capacity to care</b>
          </h2>
          <p className="text-base text-gray-600">
            Caring for others starts with caring for our employees. Join a team that <br className="hidden md:block" />
            makes people's lives better.
          </p>
        </div>
        <div className="w-full md:w-2/5 md:pl-24">
          <img src='/images/careers1.png' alt="CozyCare Careers" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>

      <div className="bg-white mt-12 p-6 md:p-10 w-full md:w-3/4 mx-auto rounded-xl shadow-md">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Keywords</h3>
          <div className="relative mt-2">
            <input type="text" placeholder="Search..." className="w-full bg-green-500 text-white py-3 pl-6 pr-12 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-200" />
            <FontAwesomeIcon icon={faSearch} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" />
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="filter-location w-full md:w-auto">
              <h4 className="underline mb-2 text-gray-700">Location</h4>
              <select className="w-full p-3 border border-gray-300 rounded-full appearance-none hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200 cursor-pointer">
                <option>Select a region</option>
              </select>
            </div>
            <div className="filter-department w-full md:w-auto">
              <h4 className="underline mb-2 text-gray-700">Department</h4>
              <select className="w-full p-3 border border-gray-300 rounded-full appearance-none hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200 cursor-pointer">
                <option>Select a department</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-end gap-4">
            <button className="bg-transparent border-none text-gray-700 underline cursor-pointer hover:text-gray-900 transition duration-200">Clear Search</button>
            <button className="bg-teal-800 text-white py-2 px-8 rounded-full hover:bg-teal-700 transform hover:scale-105 transition duration-200">Search</button>
          </div>
        </div>
      </div>

      <div className="mt-12 px-4 md:px-0">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Corporate/HQ</h3>
        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : (
          careers.map(career => (
            <div key={career.id} className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-6 flex flex-col md:flex-row justify-between items-start gap-6 hover:shadow-lg transition duration-200">
              <p className="text-green-600 font-bold">{career.remote ? 'Remote' : career.location}</p>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-2 text-gray-800">{career.title}</h4>
                <p className="text-gray-600">{career.description.substring(0, 100)}...</p>
              </div>
              <Link to={`/application/${career.id}`} className="w-full md:w-auto text-center bg-teal-800 text-white py-3 px-6 rounded-full hover:bg-teal-700 transform hover:scale-105 transition duration-200">Apply Now</Link>
            </div>
          ))
        )}
      </div>

      <div className="bg-green-50 p-8 md:p-12 mt-12 rounded-xl text-center shadow-md">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Get to know us better</h3>
        <p className="text-gray-700 italic mb-8 max-w-3xl mx-auto">CozyCare is the region's largest home care network revolutionizing how society cares for older adults and Care Professionals. Learn why and how we're changing aging.</p>
        <button className="bg-teal-800 text-white py-3 px-10 rounded-full hover:bg-teal-700 transform hover:scale-105 transition duration-200">Read our story</button>
      </div>
    </div>
  );
};

export default CareersPage;