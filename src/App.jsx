import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Home from './Home';
import Job from './Job';
import AboutUs from './AboutUs'; 
import ContactUs from './ContactUs'; 
import Companies from './Companies';
import LoginForm from './LoginForm';
import Signup from './Signup';
import Toggle from './Toggle';
import CompanyBadge from './CompanyBadge';
import Jobform from './Jobform';
import ToolsPage from './ToolsPage';
import PostJob from './PostJob';

// Toastify imports
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Layout component wraps Outlet (nested routes) and ToastContainer
const Layout = () => {
  return (
    <>
      <main>
        <Outlet /> {/* renders matched child route */}
      </main>

      {/* Global toast notification container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // This wraps all nested routes
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <AboutUs /> },
      { path: 'jobs', element: <Job /> },
      { path: 'loginform', element: <LoginForm /> },
      { path: 'signup', element: <Signup /> },
      { path: 'toggle', element: <Toggle /> },
      { path: 'companybadge', element: <CompanyBadge /> },
      { path: 'jobform', element: <Jobform /> },
      { path: 'tools', element: <ToolsPage /> },  // lowercase 'tools'
      { path: 'postjob', element: <PostJob /> }, // lowercase 'postjob'
      { path: 'companies', element: <Companies /> },
      { path: 'contactus', element: <ContactUs /> },

      // Catch-all 404 route
      { path: '*', element: <div>404 - Page Not Found</div> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
