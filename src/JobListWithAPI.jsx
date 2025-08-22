import React, { useState, useEffect } from 'react';

const JobListWithMockData = ({ onClose }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate async data loading with setTimeout
    const timer = setTimeout(() => {
      const mockJobs = [
        {
          id: 1,
          company: 'Google',
          position: 'Software Engineer',
          datePosted: '2025-07-10',
          location: 'Hyderabad',
        },
        {
          id: 2,
          company: 'Facebook',
          position: 'Frontend Developer',
          datePosted: '2025-07-15',
          location: 'Mumbai',
        },
        {
          id: 3,
          company: 'Amazon',
          position: 'Data Scientist',
          datePosted: '2025-07-18',
          location: 'Chennai',
        },
      ];
      setJobs(mockJobs);
      setLoading(false);
    }, 1500);

    // Cleanup timeout if unmounted early
    return () => clearTimeout(timer);
  }, []);

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

        <h2 className="text-xl font-semibold mb-4 text-violet-900">Job Listings</h2>

        {loading ? (
          <p className="text-center text-gray-600">Loading jobs...</p>
        ) : jobs.length === 0 ? (
          <p className="text-center text-gray-600">No jobs available.</p>
        ) : (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-3 py-1 text-left">Company</th>
                <th className="border border-gray-300 px-3 py-1 text-left">Position</th>
                <th className="border border-gray-300 px-3 py-1 text-left">Date Posted</th>
                <th className="border border-gray-300 px-3 py-1 text-left">Location</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td className="border border-gray-300 px-3 py-1">{job.company}</td>
                  <td className="border border-gray-300 px-3 py-1">{job.position}</td>
                  <td className="border border-gray-300 px-3 py-1">{job.datePosted}</td>
                  <td className="border border-gray-300 px-3 py-1">{job.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default JobListWithMockData;
