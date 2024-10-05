/* eslint-disable react/no-unescaped-entities */
// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome icons

const CareersPage = () => {
  return (
    <div className="py-40 px-8 bg-gray-100">
      <div className="flex justify-between items-start max-w-5xl mx-auto mb-8">
        {/* Left Side - Headings and Text */}
        <div className="w-3/5">
          <h1 className="text-4xl font-bold">Current Openings at CozyMore</h1>
          <hr className="w-4/5 border-2 border-yellow-500 my-6" />
          <h2 className="text-2xl font-bold">
            <b>CozyCare exists to expand <br /> the world's capacity to care</b>
          </h2>
          <p className="text-sm">
            Caring for others starts with caring for our employees. Join a team that <br />
            makes people’s lives better.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-2/5 pl-24">
          <img src='cozycare-frontend/public/images/careers1.png' alt="CozyCare Careers" className="w-full h-auto" />
        </div>
      </div>

      {/* Search Section */}
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
        <div className="bg-white rounded-lg shadow-md p-6 mb-4 flex justify-between items-start">
          <p className="text-green-500 font-bold">Remote</p>
          <div className="flex-1">
            <h4 className="text-lg font-bold mb-1">Social Media and Content Manager</h4>
            <p className="text-gray-600 text-sm">We are seeking a dynamic and experienced Social Media Content Manager to lead our social media and content strategy. This role requires a creative thinker with a passion for storytelling, a deep...</p>
          </div>
          <button className="bg-teal-800 text-white py-2 px-4 rounded-full">Apply Now</button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-4 flex justify-between items-start">
          <p className="text-green-500 font-bold">Remote</p>
          <div className="flex-1">
            <h4 className="text-lg font-bold mb-1">Senior Counsel</h4>
            <p className="text-gray-600 text-sm">Our legal team is a key driver of this transformation, working as a high-performing, collaborative force that partners closely with business and operations teams. Together, we navigate the dynamic...</p>
          </div>
          <button className="bg-teal-800 text-white py-2 px-4 rounded-full">Apply Now</button>
        </div>
      </div>

      {/* Last Section */}
      <div className="bg-green-100 p-8 mt-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">Get to know us better</h3>
        <p className="text-gray-700 italic mb-4">CozyCare is the region’s largest home care network revolutionizing how society cares for older adults and Care Professionals. Learn why and how we’re changing aging.</p>
        <button className="bg-teal-800 text-white py-2 px-8 rounded-full">Read our story</button>
      </div>
    </div>
  );
};

export default CareersPage;
