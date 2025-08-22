// JobApplicationTracker.jsx
import React, { useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'jobApplications';

const JobApplicationTracker = ({ onClose }) => {
  const [applications, setApplications] = useState([]);
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    dateApplied: '',
    status: 'Applied',
  });
  const [editIndex, setEditIndex] = useState(null);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setApplications(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever applications change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(applications));
  }, [applications]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.company || !formData.position || !formData.dateApplied || !formData.status) {
      alert('Please fill all fields');
      return;
    }

    if (editIndex === null) {
      // Add new
      setApplications(prev => [...prev, formData]);
    } else {
      // Update existing
      const updated = [...applications];
      updated[editIndex] = formData;
      setApplications(updated);
      setEditIndex(null);
    }

    setFormData({
      company: '',
      position: '',
      dateApplied: '',
      status: 'Applied',
    });
  };

  const handleEdit = (index) => {
    setFormData(applications[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    if (window.confirm('Are you sure you want to delete this application?')) {
      setApplications(applications.filter((_, i) => i !== index));
      if (editIndex === index) {
        setEditIndex(null);
        setFormData({
          company: '',
          position: '',
          dateApplied: '',
          status: 'Applied',
        });
      }
    }
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setFormData({
      company: '',
      position: '',
      dateApplied: '',
      status: 'Applied',
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full max-h-full overflow-auto p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-xl"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-4 text-violet-900">Job Application Tracker</h2>

        <form onSubmit={handleSubmit} className="mb-6 space-y-4">
          <div>
            <label className="block font-medium mb-1" htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1" htmlFor="position">Position</label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1" htmlFor="dateApplied">Date Applied</label>
            <input
              type="date"
              id="dateApplied"
              name="dateApplied"
              value={formData.dateApplied}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1" htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            >
              <option value="Applied">Applied</option>
              <option value="Interviewing">Interviewing</option>
              <option value="Offered">Offered</option>
              <option value="Rejected">Rejected</option>
              <option value="Accepted">Accepted</option>
            </select>
          </div>

          <div className="flex space-x-3">
            <button
              type="submit"
              className="bg-violet-900 text-white px-5 py-2 rounded hover:bg-violet-700"
            >
              {editIndex === null ? 'Add Application' : 'Update Application'}
            </button>

            {editIndex !== null && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="bg-gray-400 text-white px-5 py-2 rounded hover:bg-gray-500"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-3 py-1 text-left">Company</th>
              <th className="border border-gray-300 px-3 py-1 text-left">Position</th>
              <th className="border border-gray-300 px-3 py-1 text-left">Date Applied</th>
              <th className="border border-gray-300 px-3 py-1 text-left">Status</th>
              <th className="border border-gray-300 px-3 py-1 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-3 text-gray-600">
                  No applications yet
                </td>
              </tr>
            ) : (
              applications.map((app, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-3 py-1">{app.company}</td>
                  <td className="border border-gray-300 px-3 py-1">{app.position}</td>
                  <td className="border border-gray-300 px-3 py-1">{app.dateApplied}</td>
                  <td className="border border-gray-300 px-3 py-1">{app.status}</td>
                  <td className="border border-gray-300 px-3 py-1">
                    <button
                      onClick={() => handleEdit(index)}
                      className="text-blue-600 hover:underline mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobApplicationTracker;
