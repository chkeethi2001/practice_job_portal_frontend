import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const ContactUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow max-w-3xl mx-auto p-6">
        <h1 className="text-3xl text-center font-bold mb-4">Contact Us</h1>
        <p className="mb-2 text-gray-700 text-center">
          We'd love to hear from you! Whether you have questions, feedback, or want to partner with us, reach out below.
        </p>
        <p className="mb-6 text-gray-700 text-center">
          Our team is here to assist you with any inquiries about jobs, companies, or the JobPortal platform.
        </p>

        {/* Contact Form */}
        <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-600"
              placeholder="Your name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-600"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-600"
              placeholder="Write your message here"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-violet-900 text-white font-semibold py-2 rounded hover:bg-violet-800 transition-colors"
          >
            Send Message
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
