import React from 'react';
import './Dashboard.css';
import cartoon from "../images/cartoon.jpg"

const Dashboard = ({ isSidebarOpen }) => {
  return (
    <div className={` dashboard p-4 w-full dashboard ${isSidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
      <div className="dashboard-content">
        <h1 className="dashboard-heading text-l sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4" >Castify; Elevate Your Live Streams to the Next Level</h1>
        <p className="para text-sm sm:text-base md:text-sm lg:text-lg xl:text-xl" >Elevate your broadcasts with Castify—your ultimate tool for professional live streaming. Go live, host podcasts, and manage content effortlessly with our intuitive platform. Boost engagement, streamline events, and analyze performance—all in one place. Experience seamless, high-quality streaming today!</p>

        <div className="dashboard-image">
          <img src={cartoon} alt="cartoon" className="w-full h-auto max-w-full rounded shadow-lg sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl"/>
        </div>
          <div className="button flex items-center justify-center">
             <button className="see-demo-button px-6 py-3 mt-4 rounded-lg font-semibold text-black bg-gradient-to-r from-pink-500 to-orange-500 hover:from-teal-400 hover:to-blue-500 ... ">
          See the Demo
        </button>
          </div>
      </div>
    </div>
  );
};

export default Dashboard;
