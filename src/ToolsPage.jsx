import React, { useState, useRef, useEffect } from 'react';
import Footer from './Footer';
import UploadResume from './UploadResume';
import JobApplicationTracker from './JobApplicationTracker';
import JobListWithAPI from './JobListWithAPI';
import { Sun, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedJobCounter from './AnimatedJobCounter';

const ToolsPage = () => {
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);
  const [isJobListOpen, setIsJobListOpen] = useState(false);

  // Navbar States
  const [isDark, setIsDark] = useState(false);
  const [unreadAlerts, setUnreadAlerts] = useState(3);
  const [showPopup, setShowPopup] = useState(false);
  const [jobAlerts, setJobAlerts] = useState([
    'Frontend Developer at XYZ',
    'Backend Engineer at ABC',
  ]);
  const [newAlert, setNewAlert] = useState('');
  const bellRef = useRef(null);
  const [avatar, setAvatar] = useState(null);

  const handleToggleTheme = () => setIsDark((prev) => !prev);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  const togglePopup = () => {
    setShowPopup((prev) => {
      if (!prev) setUnreadAlerts(0);
      return !prev;
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (bellRef.current && !bellRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAlertSubmit = (e) => {
    e.preventDefault();
    if (newAlert.trim() === '') return;
    setJobAlerts((prev) => [newAlert.trim(), ...prev]);
    setNewAlert('');
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'bg-black text-white' : 'bg-gray-100 text-black'}`}>
      
      {/* NAVBAR */}
      <nav className={`flex justify-between items-center p-4 ${isDark ? 'bg-black' : 'bg-violet-900'}`}>
        {/* Left Nav */}
        <div className="flex space-x-6">
          {[
            { name: 'Home', to: '/' },
            { name: 'About us', to: '/about' },
            { name: 'Companies', to: '/companies' },
            { name: 'Jobs', to: '/jobs' },
            { name: 'Contact us', to: '/contactus' },
          ].map(({ name, to }) => (
            <Link key={name} to={to} className="hover:text-blue-300 text-white">
              {name}
            </Link>
          ))}
        </div>

        {/* Right Nav */}
        <div className="flex items-center space-x-4 relative">
          {/* Avatar */}
          <div className="flex items-center space-x-2">
            <label className="relative cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <img
                src={avatar || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScaMqLi_ucz2hSY88FdFspxcUCwq5GpnUx8w&s'}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
            </label>
            <div className="text-white font-medium text-sm">Your Profile</div>
          </div>

          {/* Bell Notification */}
          <div ref={bellRef} className="relative">
            <button
              onClick={togglePopup}
              className="relative focus:outline-none"
              aria-label="Job Alerts"
              aria-haspopup="true"
              aria-expanded={showPopup}
            >
              <Bell className="text-white w-6 h-6" />
              {unreadAlerts > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {unreadAlerts}
                </span>
              )}
            </button>

            {showPopup && (
              <div
                className={`absolute right-0 mt-2 w-80 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden z-50
                ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
              >
                <div className="p-4 border-b border-gray-300 dark:border-gray-700 font-semibold text-lg">
                  Job Alerts
                </div>
                <ul className="max-h-40 overflow-y-auto px-4 space-y-2 pt-2">
                  {jobAlerts.length === 0 ? (
                    <li className="text-center text-sm">No job alerts yet.</li>
                  ) : (
                    jobAlerts.map((alert, index) => (
                      <li
                        key={index}
                        className="px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-violet-100 cursor-default"
                      >
                        {alert}
                      </li>
                    ))
                  )}
                </ul>
                <form onSubmit={handleAlertSubmit} className="p-4 border-t border-gray-300 dark:border-gray-700">
                  <input
                    type="text"
                    placeholder="Add new job alert..."
                    value={newAlert}
                    onChange={(e) => setNewAlert(e.target.value)}
                    className={`w-full px-3 py-2 rounded border focus:outline-none ${
                      isDark
                        ? 'bg-violet-700 border-gray-600 placeholder-gray-400 text-white'
                        : 'bg-white border-gray-300 placeholder-gray-500 text-gray-900'
                    }`}
                  />
                  <button
                    type="submit"
                    className="mt-2 w-full bg-violet-900 hover:bg-violet-700 text-white font-semibold py-2 rounded transition"
                  >
                    Add Alert
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={handleToggleTheme}
            className={`font-medium px-3 py-2 rounded border transition duration-300 ${
              isDark
                ? 'bg-black text-white border-white hover:bg-gray-800'
                : 'bg-violet-900 text-white border-white hover:bg-white hover:text-violet-900'
            }`}
          >
            <Sun />
          </button>
        </div>
      </nav>

      {/* MAIN TOOLS CONTENT */}
      <main className="flex-grow p-8">
        <h1 className="text-2xl font-semibold mb-6 text-violet-900">Tools</h1>

        <button
          onClick={() => setIsUploadOpen(true)}
          className="bg-violet-900 text-white px-6 py-3 rounded hover:bg-violet-700 mr-4"
        >
          Upload Resume
        </button>

        <button
          onClick={() => setIsTrackerOpen(true)}
          className="bg-violet-900 text-white px-6 py-3 rounded hover:bg-violet-700 mr-4"
        >
          Job Application Tracker
        </button>

        <button
          onClick={() => setIsJobListOpen(true)}
          className="bg-violet-900 text-white px-6 py-3 rounded hover:bg-violet-700 mr-4"
        >
          View Job Listings
        </button>

        {isUploadOpen && <UploadResume onClose={() => setIsUploadOpen(false)} />}
        {isTrackerOpen && <JobApplicationTracker onClose={() => setIsTrackerOpen(false)} />}
        {isJobListOpen && <JobListWithAPI onClose={() => setIsJobListOpen(false)} />}
      </main>

      <Footer />
    </div>
  );
};

export default ToolsPage;
