import React, { useState } from "react";
import {FiBell, FiVideo, FiSearch, FiUser, FiMoon } from "react-icons/fi";
import { GiFilmProjector } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdHelpCircleOutline } from "react-icons/io";
import "./Navbar.css";


function Navbar({ toggleSidebar, toggleDarkMode }) {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const toggleProfileDropdown = () => {
      setIsProfileOpen(!isProfileOpen);
    };
  

  return (
    <div className="navbar">
      <div className="navbar-left">
      <div className="inline-flex">

      <button className="menu-icon" onClick={toggleSidebar}>
          <RxHamburgerMenu className="text-4xl p-2"/>
          
        </button>
          </div>

        <div className="logo text-4xl rounded-full cursor-pointer block float-left text-red-600">
        <GiFilmProjector />
        </div>
        <span className="title text-red-600 text-2xl p-3">Castify</span>
      </div>

      <div className="navbar-center">
        <div className="search-container">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
      </div>

      <div className="navbar-right">
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          <FiMoon size={20} />
        </button>
        {/* <FiVideo className="icon" /> */}
        <IoMdHelpCircleOutline className="icon" />
        <div className="profile-container" onClick={toggleProfileDropdown}>
          <FiUser className="profile-icon" />
          {isProfileOpen && (
            <div className="profile-dropdown">
              <ul>
                <li>Profile</li>
                <li>Settings</li>
                <li>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
