// JobSkeleton.jsx
import React from 'react';

const JobSkeleton = () => {
  return (
    <div className="flex flex-col bg-white p-4 mb-4 rounded-lg shadow animate-pulse max-w-xl">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full" />
        <div className="ml-4 flex-1">
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-300 rounded w-full"></div>
        <div className="h-3 bg-gray-300 rounded w-5/6"></div>
        <div className="h-3 bg-gray-300 rounded w-2/3"></div>
      </div>
    </div>
  );
};

export default JobSkeleton;
