import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-300 bg-[url('https://www.hubinternational.com/-/media/hub-international/Blog/Articles/Main-Images-A/2022/Main-Image-Employee-Culture-in-the-Workplace.webp?rev=e27af1f90bc6480f8d520cae55ed1ca6')] bg-cover bg-center text-white py-40 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find Your Dream Job
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Search thousands of job listings and apply with one click.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            className="bg-white text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
            onClick={() => navigate('/jobs')}
          >
            Browse Jobs
          </button>
          <button
            className="bg-white text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
            onClick={() => navigate('/PostJob')}
          >
            Post a Job
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
