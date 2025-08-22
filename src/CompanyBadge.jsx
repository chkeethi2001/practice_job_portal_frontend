// CompanyBadge.jsx
import React from 'react';

const CompanyBadge = ({ company, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-violet-100 text-violet-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide hover:bg-teal-200 transition"
    >
      {company}
    </a>
  );
};

export default CompanyBadge;
