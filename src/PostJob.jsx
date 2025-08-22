import React, { useState } from 'react';

const JobPostingForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: '',      // new field
    salary: '',    // new field
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
    setSubmitted(false);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Job title is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.type.trim()) newErrors.type = 'Job type is required';
    if (!formData.salary.trim()) newErrors.salary = 'Salary is required';
    else if (isNaN(formData.salary) || Number(formData.salary) <= 0) newErrors.salary = 'Salary must be a positive number';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setFormData({
      title: '',
      company: '',
      location: '',
      type: '',
      salary: '',
      description: ''
    });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Post a Job</h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* Job Title */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Job Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Company Name */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Company Name</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
        </div>

        {/* Job Type */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Job Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select job type</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
          {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
        </div>

        {/* Salary */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Salary ($)</label>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            min="0"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.salary && <p className="text-red-500 text-sm mt-1">{errors.salary}</p>}
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Job Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-violet-900 text-white py-2 rounded-md hover:bg-violet-700 transition duration-200"
        >
          Submit
        </button>
      </form>

      {submitted && (
        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-md border border-green-300">
          ✅ Job posted successfully!
        </div>
      )}
    </div>
  );
};

export default JobPostingForm;
