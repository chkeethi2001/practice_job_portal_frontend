import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto p-6">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left: Image */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="md:w-1/2 flex flex-col items-center text-center space-y-6">
            {/* Heading aligned center only relative to text */}
            <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
              About us
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed max-w-prose">
              At <span className="font-semibold text-violet-800">JobPortal</span>, our passion is connecting exceptional talent with the right opportunities. We understand that a fulfilling career is about more than just a paycheck — it’s about growth, purpose, and community.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed max-w-prose">
              Founded in 2022, we have rapidly grown into a trusted platform used by thousands of job seekers and top-tier companies. Our innovative matching algorithms and dedicated team work tirelessly to simplify the job search process.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed max-w-prose">
              Whether you’re hunting for full-time roles, part-time gigs, freelance contracts, or internships, <span className="font-semibold text-violet-800">JobPortal</span> is your go-to partner. We also empower employers by helping them find skilled candidates who fit their culture and goals.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed max-w-prose">
              Join us and experience a smarter, more personal way to navigate the job market — because your career deserves the best.
            </p>

            <div className="mt-6">
              <a
                href="/signup"
                className="inline-block bg-violet-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-violet-700 transition"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
