import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const companies = [
  {
    name: "Accenture",
    logo: "https://www.clutch.com/wp-content/uploads/2018/04/Accenture-logo-no-background.png",
    alt: "Accenture Logo"
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    alt: "Amazon Logo"
  },
  {
    name: "Tech Mahindra",
    logo: "https://companieslogo.com/img/orig/TECHM.NS_BIG-281ab5b9.png?t=1721262930",
    alt: "Tech Mahindra Logo"
  },
  {
    name: "Infosys",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS611iDirroUhy_kG6NpCAr8dGN9t4BoAJJzA&s",
    alt: "Infosys Logo"
  },
];

const Companies = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow max-w-5xl mx-auto p-6">
        <h1 className="text-3xl text-center font-bold mb-4">Companies</h1>
        <p className="mb-2 text-gray-700 text-center">
          Explore top companies hiring right now on JobPortal.
        </p>
        <p className="mb-2 text-gray-700 text-center">
          We partner with industry leaders to bring you the best job opportunities.
        </p>
        <p className="mb-6 text-gray-700 text-center">
          Discover company profiles, job openings, and employee reviews all in one place.
        </p>

        {/* Featured Companies section below the above content */}
        <h2 className="text-2xl font-semibold text-center mb-6">Featured Companies</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {companies.map(({ name, logo, alt }) => (
            <div
              key={name}
              className="bg-white border border-gray-300 rounded-lg w-48 p-4 text-center shadow-md hover:scale-105 transform transition-transform duration-200"
            >
              <img
                src={logo}
                alt={alt}
                className="w-20 h-20 object-contain mx-auto mb-3"
              />
              <div className="font-semibold text-gray-700">{name}</div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Companies;
