import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Golive from './pages/Golive';
import Podcasts from './pages/Podcasts';
import Content from './pages/Content';
import Manage from './pages/Manage';
import Tasks from './pages/Tasks';
import Analytics from './pages/Analytics';
import Customize from './pages/Customize';
import Settings from './pages/Settings';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
     <BrowserRouter>
      <div className={`app ${isDarkMode ? "dark-mode" : ""}`}>
        <Navbar toggleSidebar={toggleSidebar} toggleDarkMode={toggleDarkMode} />
        <div className="app-container">
          <Sidebar isSidebarOpen={isSidebarOpen} />
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard isSidebarOpen={isSidebarOpen} />} />
              <Route path="/golive" element={<Golive isSidebarOpen={isSidebarOpen} />} />
              <Route path="/podcasts" element={<Podcasts isSidebarOpen={isSidebarOpen} />} />
              <Route path="/content" element={<Content isSidebarOpen={isSidebarOpen} />} />
              <Route path="/manage" element={<Manage isSidebarOpen={isSidebarOpen} />} />
              <Route path="/tasks" element={<Tasks isSidebarOpen={isSidebarOpen} />} />
              <Route path="/analytics" element={<Analytics isSidebarOpen={isSidebarOpen} />} />
              <Route path="/customize" element={<Customize isSidebarOpen={isSidebarOpen} />} />
              <Route path="/settings" element={<Settings isSidebarOpen={isSidebarOpen} />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
    </>
   
  );
}

export default App;

