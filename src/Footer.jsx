import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-violet-900 text-white py-4 mt-10">
      <div className="flex justify-center space-x-8">
        <a href="#" className="hover:text-blue-300 transition duration-200">Contact Us</a>
        <a href="#" className="hover:text-blue-300 transition duration-200">Privacy Policy</a>
      </div>
      <p className="text-center text-sm text-white mt-2">© {new Date().getFullYear()} Job Portal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
