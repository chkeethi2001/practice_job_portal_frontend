import React, { useState } from 'react';
import LoginForm from './LoginForm';

const Dashboard = ({ onLogout }) => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    <h1 className="text-3xl font-bold text-teal-600 mb-4">Welcome Back, User!</h1>
    <button
      onClick={onLogout}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
    >
      Logout
    </button>
  </div>
);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulate login success (replace with real logic)
  const handleLoginSuccess = () => setIsLoggedIn(true);

  // Simulate logout
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <>
      {isLoggedIn ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        // Pass a prop to LoginForm to notify login success
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      )}
    </>
  );
};

export default App;
