import React, { useState } from 'react';
import CompanyBadge from './CompanyBadge';
import JobApplicationModal from './JobApplicationModal';
import { Search} from 'lucide-react';


const Jobcards = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [savedJobs, setSavedJobs] = useState([]);

  const jobs = [
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



  const filteredJobs = jobs.filter((job) => {

    const matchSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.type.toLowerCase().includes(searchTerm.toLowerCase());
    return  matchSearch;
  });
  const toggleSaveJob = (jobId) => {
    setSavedJobs((prev) =>
      prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]
    );
  };

  return (
    <div className="bg-gray-100 dark:bg-white py-10 px-4 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-900">
        Latest Job Openings
      </h1>

      {/* 🔍 Search Bar */}
      <div className="relative max-w-3xl mx-auto mb-8">
  {/* Search Icon */}
  <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
    <svg
      className="w-5 h-5 text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
      />
    </svg>
  </div>

  {/* Input field */}
  <input
    type="text"
    placeholder="Search by job title, company, location, or type..."
    className="w-full p-3 pl-14 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
</div>



      {/* 💼 Job Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg shadow-md hover:scale-90 hover:bg-violet-50 transition-shadow duration-300 p-6 border border-gray-200 relative"
            >
              {/* ⭐ Save Job Button */}
              <button
                onClick={() => toggleSaveJob(job.id)}
                className={`absolute top-3 right-3 text-xl ${
                  savedJobs.includes(job.id)
                    ? 'text-yellow-500'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
                aria-label={savedJobs.includes(job.id) ? 'Unsave Job' : 'Save Job'}
              >
                {savedJobs.includes(job.id) ? '★' : '☆'}
              </button>

              {/* 🕒 Posted Time */}
              <span className="absolute bottom-10 right-10 text-sm text-gray-500">
                {job.posted}
              </span>

              <h2 className="text-xl font-semibold text-violet-900 mb-2">{job.title}</h2>
              <p className="text-gray-700">
                <span className="font-medium">Company: </span>
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
                View Job
              </button>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No jobs found matching your search.
          </p>
        )}
      </div>

      {/* 🪟 Modal */}
      <JobApplicationModal
        isOpen={!!selectedJob}
        onClose={() => setSelectedJob(null)}
        job={selectedJob}
      />
    </div>
  );
};

export default Jobcards;
