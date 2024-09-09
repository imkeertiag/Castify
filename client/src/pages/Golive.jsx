import React from 'react';
import pic from '../images/live.jpg';
import './Golive.css';

const Golive = ({ isSidebarOpen }) => {
  return (
    <div className={`golive ${isSidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
      <div className="flex flex-col bg-background-color text-text-color">
        {/* Main content area */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center p-4 md:p-8 overflow-hidden">
          {/* Left side: Heading, text, input, and button */}
          <div className="flex-1 flex flex-col justify-start items-center md:items-start text-center md:text-left space-y-4 md:space-y-6 max-w-full md:max-w-md md:mr-8">
            <h1 className="text-l sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
              Meet and Collaborate Seamlessly
            </h1>
            <p className="text-sm sm:text-base md:text-sm lg:text-lg xl:text-xl">
              Connect with your team instantly through our streamlined interface. Simply enter your meeting code below to get started.
            </p>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full">
              <input
                type="text"
                placeholder="Enter code"
                className="p-2 border border-gray-300 rounded-md w-full md:w-auto"
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-300 w-full md:w-auto">
                Join Meeting
              </button>
            </div>
          </div>

          {/* Right side: Image */}
          <div className="flex-1 mt-4 md:mt-0 max-w-full md:max-w-md">
            <img
              src={pic}
              alt="Collaboration"
              className="w-full h-auto max-w-full rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Golive;
