// JobApplicationModal.jsx
import React, { useState } from 'react';
import { showSuccessToast, showErrorToast } from './toastUtils'; 

const JobApplicationModal = ({ isOpen, onClose, job }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    resume: null,
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, resume } = formData;

    // Basic validation
    if (!fullName || !email || !resume) {
      showErrorToast("Please fill out all fields before submitting.");
      return;
    }

    // Simulate API success
    showSuccessToast(`Application submitted for ${job?.title}`);
    onClose(); // Close the modal
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold text-violet-900 mb-4">
          Apply for {job?.title}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Your full name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">Resume</label>
            <input
              type="file"
              name="resume"
              onChange={handleChange}
              className="w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-violet-900 text-white px-4 py-2 rounded-md hover:bg-violet-700 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationModal;
