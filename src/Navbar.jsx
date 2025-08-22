import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Bell } from 'lucide-react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [unreadAlerts, setUnreadAlerts] = useState(3);
  const [showPopup, setShowPopup] = useState(false);

  // Example existing alerts
  const [jobAlerts, setJobAlerts] = useState([
    'Frontend Developer at XYZ',
    'Backend Engineer at ABC',
  ]);

  // New alert form input state
  const [newAlert, setNewAlert] = useState('');

  const bellRef = useRef(null);

  const handleToggle = () => setIsDark(!isDark);

  const togglePopup = () => {
    setShowPopup((prev) => !prev);
    if (!showPopup) setUnreadAlerts(0);
  };

  // Close popup on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (bellRef.current && !bellRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle new alert submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newAlert.trim() === '') return;
    setJobAlerts((prev) => [newAlert.trim(), ...prev]);
    setNewAlert('');
  };

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About us', to: '/about' },
    { name: 'Companies', to: '/companies' },
    { name: 'Jobs', to: '/jobs' },
    { name: 'Contact us', to: '/contactus' },
  ];

  return (
    <nav
      className={`flex justify-between items-center p-4 ${
        isDark ? 'bg-black' : 'bg-violet-900'
      }`}
    >
      <div className="flex space-x-6">
        {navItems.map(({ name, to }) => (
          <Link
            key={name}
            to={to}
            className={`hover:text-blue-300 ${
              isDark ? 'text-white' : 'text-white'
            }`}
          >
            {name}
          </Link>
        ))}
      </div>

      <div className="flex items-center space-x-4 relative">
        <Link
          to="/LoginForm"
          className={`font-medium px-4 py-2 rounded transition duration-300 ${
            isDark
              ? 'bg-white text-black hover:bg-gray-300'
              : 'bg-white text-violet-900 hover:bg-gray-100'
          }`}
        >
          Login
        </Link>

        <Link
          to="/Signup"
          className={`font-medium px-4 py-2 rounded transition duration-300 ${
            isDark
              ? 'bg-white text-black hover:bg-gray-300'
              : 'bg-white text-violet-900 hover:bg-gray-100'
          }`}
        >
          Sign up
        </Link>

        <div ref={bellRef} className="relative">
          <button
            onClick={togglePopup}
            className="relative focus:outline-none"
            aria-label="Job Alerts"
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
              className={`absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden transition-transform transform origin-top-right
              ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
              style={{ zIndex: 9999 }}
            >
              <div className="p-4 border-b border-gray-300 dark:border-gray-700 font-semibold text-lg">
                Job Alerts
              </div>
              <ul className="max-h-40 overflow-y-auto px-4 space-y-2 pt-2">
                {jobAlerts.length === 0 ? (
                  <li className="text-center text-sm">No job alerts yet.</li>
                ) : (
                  jobAlerts.map((alert, i) => (
                    <li
                      key={i}
                      className="px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-violet-100 cursor-default"
                    >
                      {alert}
                    </li>
                  ))
                )}
              </ul>

              {/* Job alert submission form */}
              <form
                onSubmit={handleSubmit}
                className="p-4 border-t border-gray-300 dark:border-gray-700"
              >
                <input
                  type="text"
                  placeholder="Add new job alert..."
                  value={newAlert}
                  onChange={(e) => setNewAlert(e.target.value)}
                  className={`w-full px-3 py-2 rounded border focus:outline-none ${
                    isDark
                      ? 'bg-violet-700 border-gray-600 placeholder-gray-400 text-white focus:border-violet-500'
                      : 'bg-white border-gray-300 placeholder-gray-500 text-gray-900 focus:border-violet-500'
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

        <button
          onClick={handleToggle}
          className={`font-medium px-4 py-2 rounded border transition duration-300 ${
            isDark
              ? 'bg-black text-white border-white hover:bg-gray-800 hover:text-white'
              : 'bg-violet-900 text-white border-white hover:bg-white hover:text-violet-900'
          }`}
        >
          <Sun />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
