// JobApplicationForm.jsx
import React, { useState } from 'react';

const Jobform = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // TODO: Send data to backend (e.g. using fetch or axios)
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-2xl font-bold mb-4">Job Application</h2>

      <div>
        <label className="block text-sm font-medium mb-1">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Resume (PDF)</label>
        <input
          type="file"
          name="resume"
          accept=".pdf"
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-gray-100"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Cover Letter</label>
        <textarea
          name="coverLetter"
          value={formData.coverLetter}
          onChange={handleChange}
          rows="4"
          className="w-full border border-gray-300 rounded px-3 py-2"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Submit Application
      </button>
    </form>
  );
};

export default Jobform;
