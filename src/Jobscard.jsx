import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import CompanyBadge from './CompanyBadge';
import JobApplicationModal from './JobApplicationModal';
import { Heart } from 'lucide-react';
import Tools from './Tools'; // ⬅️ Import the Tools component

const Jobscard = () => {
  const Navigate = useNavigate();

  const [selectedJob, setSelectedJob] = useState(null);
  const [savedJobs, setSavedJobs] = useState([]);
  const [filters, setFilters] = useState({
    location: 'All',
    company: 'All',
    salary: 'All',
    type: 'All',
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const job = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'InnovateX',
      companyUrl: 'https://innovatex.com',
      location: 'Hyderabad',
      salary: '₹6 - ₹10 LPA',
      type: 'Full-time',
      posted: '2 days ago',
    },
    {
      id: 2,
      title: 'Backend Engineer',
      company: 'DevSolutions',
      companyUrl: 'https://devsolutions.io',
      location: 'Remote',
      salary: '₹8 - ₹12 LPA',
      type: 'Remote',
      posted: '5 days ago',
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'CreativeEdge',
      companyUrl: 'https://creativeedge.co.in/',
      location: 'Bangalore',
      salary: '₹5 - ₹9 LPA',
      type: 'Contract',
      posted: '1 week ago',
    },
    {
      id: 4,
      title: 'Mobile App Developer',
      company: 'PixelMob',
      companyUrl: 'https://www.pixlmob.com/',
      location: 'Pune',
      salary: '₹7 - ₹11 LPA',
      type: 'Full-time',
      posted: '3 days ago',
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      company: 'CloudCore',
      companyUrl: 'https://cloudcore.com.sa/',
      location: 'Remote',
      salary: '₹10 - ₹14 LPA',
      type: 'Remote',
      posted: '4 days ago',
    },
    {
      id: 6,
      title: 'Data Analyst',
      company: 'InsightIQ',
      companyUrl: 'https://www.insightiq.ai/',
      location: 'Gurgaon',
      salary: '₹6 - ₹9 LPA',
      type: 'Full-time',
      posted: '2 days ago',
    },
  ];

  const uniqueLocations = ['All', ...new Set(job.map((job) => job.location))];
  const uniqueCompanies = ['All', ...new Set(job.map((job) => job.company))];
  const uniqueSalaries = [
    'All',
    '₹5 - ₹9 LPA',
    '₹6 - ₹10 LPA',
    '₹7 - ₹11 LPA',
    '₹8 - ₹12 LPA',
    '₹10 - ₹14 LPA',
  ];
  const jobTypes = ['All', 'Full-time', 'Remote', 'Contract', 'Part-time'];

  const isFilterActive = Object.values(filters).some((value) => value !== 'All');

  const filteredJobs = useMemo(() => {
    return job.filter((job) => {
      return (
        (filters.location === 'All' || job.location === filters.location) &&
        (filters.company === 'All' || job.company === filters.company) &&
        (filters.salary === 'All' || job.salary === filters.salary) &&
        (filters.type === 'All' || job.type === filters.type)
      );
    });
  }, [filters, job]);

  const toggleSaveJob = (jobId) => {
    setSavedJobs((prev) =>
      prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]
    );
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-gray-100 dark:bg-white min-h-screen py-10 px-4">
      {/* Mobile Hamburger */}
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-6 md:hidden">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 bg-violet-900 text-white rounded-md"
        >
          ☰ Filters
        </button>
        <Tools /> {/* Using Tools component here */}
      </div>

      <div className="max-w-7xl mx-auto flex gap-6">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 bg-white p-6 rounded-lg shadow-md sticky top-20 self-start h-fit">
          <h2 className="text-lg font-semibold mb-4 text-violet-900">Filter Jobs</h2>

          <FilterSelect
            label="Location"
            name="location"
            value={filters.location}
            options={uniqueLocations}
            onChange={handleFilterChange}
          />
          <FilterSelect
            label="Company"
            name="company"
            value={filters.company}
            options={uniqueCompanies}
            onChange={handleFilterChange}
          />
          <FilterSelect
            label="Salary"
            name="salary"
            value={filters.salary}
            options={uniqueSalaries}
            onChange={handleFilterChange}
          />
          <FilterSelect
            label="Job Type"
            name="type"
            value={filters.type}
            options={jobTypes}
            onChange={handleFilterChange}
          />

          {/* Tools button in sidebar */}
          <Tools className="mt-6 w-full py-2 rounded hover:bg-violet-700" />
        </aside>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-40 z-40"
              onClick={() => setSidebarOpen(false)}
            />
            <aside className="fixed top-0 left-0 bottom-0 w-64 bg-white p-6 z-50 overflow-auto shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-violet-900">Filters</h2>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="text-2xl font-bold text-gray-700"
                >
                  &times;
                </button>
              </div>

              <FilterSelect
                label="Location"
                name="location"
                value={filters.location}
                options={uniqueLocations}
                onChange={handleFilterChange}
              />
              <FilterSelect
                label="Company"
                name="company"
                value={filters.company}
                options={uniqueCompanies}
                onChange={handleFilterChange}
              />
              <FilterSelect
                label="Salary"
                name="salary"
                value={filters.salary}
                options={uniqueSalaries}
                onChange={handleFilterChange}
              />
              <FilterSelect
                label="Job Type"
                name="type"
                value={filters.type}
                options={jobTypes}
                onChange={handleFilterChange}
              />

              <Tools
                className="mt-6 w-full py-2 rounded hover:bg-violet-700"
                onClick={() => setSidebarOpen(false)} // Close sidebar on tools click
              />
            </aside>
          </>
        )}

        {/* Job Cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.length === 0 ? (
            <p className="text-center col-span-full text-gray-600">No jobs match the filters.</p>
          ) : (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className={`bg-white rounded-lg shadow-md hover:scale-95 hover:bg-violet-50 transition duration-300 border border-gray-200 relative ${
                  isFilterActive ? 'p-4 text-sm' : 'p-6 text-base'
                }`}
              >
                <button
                  onClick={() => toggleSaveJob(job.id)}
                  className="absolute top-3 right-3"
                  aria-label={savedJobs.includes(job.id) ? 'Unsave Job' : 'Save Job'}
                >
                  <Heart
                    size={22}
                    className={`transition-colors duration-300 ${
                      savedJobs.includes(job.id)
                        ? 'text-red-500 fill-red-500'
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                    fill={savedJobs.includes(job.id) ? 'currentColor' : 'none'}
                  />
                </button>

                <span className="absolute bottom-10 right-10 text-sm text-gray-500">{job.posted}</span>

                <h2 className="text-xl font-semibold text-violet-900 mb-2">{job.title}</h2>
                <p className="text-gray-700">
                  <span className="font-medium">Company:</span>{' '}
                  <CompanyBadge company={job.company} url={job.companyUrl} />
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Location:</span> {job.location}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Type:</span> {job.type}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Salary:</span> {job.salary}
                </p>
                <button
                  className="mt-4 inline-block bg-violet-900 hover:bg-violet-700 text-white font-medium py-2 px-4 rounded transition duration-300"
                  onClick={() => setSelectedJob(job)}
                >
                  Apply
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Job Application Modal */}
      <JobApplicationModal isOpen={!!selectedJob} onClose={() => setSelectedJob(null)} job={selectedJob} />
    </div>
  );
};

const FilterSelect = ({ label, name, value, options, onChange }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default Jobscard;
