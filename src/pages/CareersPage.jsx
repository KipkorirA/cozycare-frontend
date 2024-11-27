import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const CareersPage = () => {
  const [careers, setCareers] = useState([]);
  const [filteredCareers, setFilteredCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [regions, setRegions] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/login');
      return;
    }

    fetch('https://cozycare-backend-g56w.onrender.com/careers')
      .then((response) => response.json())
      .then((data) => {
        setCareers(data);
        setFilteredCareers(data);
        const uniqueRegions = [...new Set(data.map(career => career.location))];
        const uniqueDepartments = [...new Set(data.map(career => career.department))];
        setRegions(uniqueRegions);
        setDepartments(uniqueDepartments);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the careers!", error);
        setLoading(false);
      });
  }, [navigate]);

  const handleSearch = () => {
    let results = careers;
    
    if (searchTerm) {
      const searchWords = searchTerm.toLowerCase().split(' ');
      results = results.filter(career => 
        searchWords.every(word => 
          career.title.toLowerCase().split(' ').includes(word)
        )
      );
    }

    if (selectedRegion) {
      results = results.filter(career => career.location === selectedRegion);
    }

    if (selectedDepartment) {
      results = results.filter(career => career.department === selectedDepartment);
    }

    setFilteredCareers(results);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSelectedRegion('');
    setSelectedDepartment('');
    setFilteredCareers(careers);
  };

  return (
    <div className="min-h-screen py-20 md:py-40 px-4 md:px-8 bg-green-50">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start max-w-6xl mx-auto mb-12">
        <div className="w-full md:w-3/5 text-center md:text-left mb-8 md:mb-0 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Current Openings at CozyCare</h1>
          <hr className="w-full md:w-4/5 border-2 border-green-500 my-6" />
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

      <div className="bg-cream mt-12 p-6 md:p-10 w-full md:w-3/4 mx-auto rounded-xl shadow-md">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Keywords</h3>
          <div className="relative mt-2">
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..." 
              className="w-full bg-green-500 text-white py-3 pl-6 pr-12 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-200" 
            />
            <FontAwesomeIcon icon={faSearch} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" />
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="filter-location w-full md:w-auto">
              <h4 className="underline mb-2 text-gray-700">Location</h4>
              <select 
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-full appearance-none hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 cursor-pointer"
              >
                <option value="">Select a region</option>
                {regions.map((region, index) => (
                  <option key={index} value={region}>{region}</option>
                ))}
              </select>
            </div>
            <div className="filter-department w-full md:w-auto">
              <h4 className="underline mb-2 text-gray-700">Department</h4>
              <select 
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-full appearance-none hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 cursor-pointer"
              >
                <option value="">Select a department</option>
                {departments.map((department, index) => (
                  <option key={index} value={department}>{department}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-end gap-4">
            <button 
              onClick={clearSearch}
              className="bg-transparent border-none text-gray-700 underline cursor-pointer hover:text-gray-900 transition duration-200"
            >
              Clear Search
            </button>
            <button 
              onClick={handleSearch}
              className="bg-green-800 text-white py-2 px-8 rounded-full hover:bg-green-700 transform hover:scale-105 transition duration-200"
            >
              Search
            </button>
          </div>
        </div>

        {loading ? (
          <p className="text-gray-600 mt-6">Loading...</p>
        ) : (
          <div className="mt-6">
            {filteredCareers.length > 0 ? (
              filteredCareers.map(career => (
                <div key={career.id} className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-6 flex flex-col md:flex-row justify-between items-start gap-6 hover:shadow-lg transition duration-200">
                  <p className="text-green-600 font-bold">{career.remote ? 'Remote' : career.location}</p>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 text-gray-800">{career.title}</h4>
                    <p className="text-gray-600">{career.description.substring(0, 100)}...</p>
                  </div>
                  <Link to={`/application/${career.id}`} className="w-full md:w-auto text-center bg-green-800 text-white py-3 px-6 rounded-full hover:bg-green-700 transform hover:scale-105 transition duration-200">Apply Now</Link>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600 text-lg">No matching careers found. Please try different search criteria.</p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="bg-cream p-8 md:p-12 mt-12 rounded-xl text-center shadow-md">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Get to know us better</h3>
        <p className="text-gray-700 italic mb-8 max-w-3xl mx-auto">CozyCare is the region's largest home care network revolutionizing how society cares for older adults and Care Professionals. Learn why and how we're changing aging.</p>
        <Link to="/blog" className="bg-green-800 text-white py-3 px-10 rounded-full hover:bg-green-700 transform hover:scale-105 transition duration-200">Read our story</Link>
      </div>
    </div>
  );
};

export default CareersPage;