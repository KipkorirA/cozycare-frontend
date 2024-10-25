import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const CareersPage = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch careers from Flask API
  useEffect(() => {
    fetch('http://localhost:5000/api/careers')
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
    <div className="py-40 px-8 bg-gray-100">
      <div className="flex justify-between items-start max-w-5xl mx-auto mb-8">
        <div className="w-3/5">
          <h1 className="text-4xl font-bold">Current Openings at CozyMore</h1>
          <hr className="w-4/5 border-2 border-yellow-500 my-6" />
          <h2 className="text-2xl font-bold">
            <b>CozyCare exists to expand <br /> the world's capacity to care</b>
          </h2>
          <p className="text-sm">
            Caring for others starts with caring for our employees. Join a team that <br />
            makes people's lives better.
          </p>
        </div>
        <div className="w-2/5 pl-24">
          <img src='/images/careers1.png' alt="CozyCare Careers" className="w-full h-auto" />
        </div>
      </div>

      <div className="bg-white mt-8 p-8 w-3/4 mx-auto">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Keywords</h3>
          <div className="relative">
            <input type="text" placeholder="Search..." className="w-full bg-green-500 text-white py-3 pl-4 pr-10 rounded-full border-none focus:outline-none" />
            <FontAwesomeIcon icon={faSearch} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" />
          </div>
        </div>

        {/* Filters Section */}
        <div className="mt-8">
          <div className="flex justify-between mb-4">
            <div className="filter-location">
              <h4 className="underline mb-1">Location</h4>
              <div className="relative">
                <select className="w-full p-2 border border-gray-300 rounded-full">
                  <option>Select a region</option>
                </select>
                <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>
            <div className="filter-department">
              <h4 className="underline mb-1">Department</h4>
              <div className="relative">
                <select className="w-full p-2 border border-gray-300 rounded-full">
                  <option>Select a department</option>
                </select>
                <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-transparent border-none text-gray-800 underline mr-4 cursor-pointer">Clear Search</button>
            <button className="bg-teal-800 text-white py-2 px-8 rounded-full">Search</button>
          </div>
        </div>
      </div>

      {/* Job Listings Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Corporate/HQ</h3>
        {loading ? (
          <p>Loading...</p>
        ) : (
          careers.map(career => (
            <div key={career.id} className="bg-white rounded-lg shadow-md p-6 mb-4 flex justify-between items-start">
              <p className="text-green-500 font-bold">{career.remote ? 'Remote' : career.location}</p>
              <div className="flex-1">
                <h4 className="text-lg font-bold mb-1">{career.title}</h4>
                <p className="text-gray-600 text-sm">{career.description.substring(0, 100)}...</p>
              </div>
              <a href={career.apply_link} className="bg-teal-800 text-white py-2 px-4 rounded-full">Apply Now</a>
            </div>
          ))
        )}
      </div>

      <div className="bg-green-100 p-8 mt-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">Get to know us better</h3>
        <p className="text-gray-700 italic mb-4">CozyCare is the region's largest home care network revolutionizing how society cares for older adults and Care Professionals. Learn why and how we're changing aging.</p>
        <button className="bg-teal-800 text-white py-2 px-8 rounded-full">Read our story</button>
      </div>
    </div>
  );
};

export default CareersPage;