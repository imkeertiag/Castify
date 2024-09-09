import React from "react";
import { FiFilm, FiBarChart2, FiSettings } from "react-icons/fi";
import { RiDashboardFill } from "react-icons/ri";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMicrophoneLines } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaMagic } from "react-icons/fa";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar({ isSidebarOpen }) {
  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : "collapsed"}`}>
      <ul className="sidebar-menu">
        <NavLink to="/">
          <li className="sidebar-item">
            <RiDashboardFill className="sidebar-icon" />
            {isSidebarOpen && <span>
              Dashboard
            </span>}
          </li>
        </NavLink>
        <NavLink to="/golive">
          <li className="sidebar-item">
            <MdOutlineOndemandVideo className="sidebar-icon" />
            {isSidebarOpen && <span>
              Go Live
            </span>}
          </li>
        </NavLink>
        <NavLink to="/podcasts">
        <li className="sidebar-item">
          <FaMicrophoneLines className="sidebar-icon" />
          {isSidebarOpen && <span>Podcasts</span>}
        </li>
        </NavLink>
        <NavLink to="/content">
        <li className="sidebar-item">
          <FiFilm className="sidebar-icon" />
          {isSidebarOpen && <span>Content</span>}
        </li>
        </NavLink>
        <NavLink to="/manage">
        <li className="sidebar-item">
          <FaCalendarAlt className="sidebar-icon" />
          {isSidebarOpen && <span>Manage Events</span>}
        </li>
        </NavLink>
        <NavLink to="/tasks">
        <li className="sidebar-item">
          <IoDocumentTextOutline className="sidebar-icon" />
          {isSidebarOpen && <span>My Tasks</span>}
        </li>
        </NavLink>
        <NavLink to="/analytics">
        <li className="sidebar-item">
          <FiBarChart2 className="sidebar-icon" />
          {isSidebarOpen && <span>Analytics</span>}
        </li>
        </NavLink>
        <NavLink to="/customize">
        <li className="sidebar-item">
          <FaMagic className="sidebar-icon" />
          {isSidebarOpen && <span>Customize</span>}
        </li>
        </NavLink>
        <NavLink to="/settings">
        <li className="sidebar-item">
          <FiSettings className="sidebar-icon" />
          {isSidebarOpen && <span>Settings</span>}
        </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Sidebar;
