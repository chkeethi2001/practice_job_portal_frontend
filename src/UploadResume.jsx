import React, { useState } from 'react';

const UploadResume = ({ onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedFile) {
      alert('Please select a file before submitting.');
      return;
    }
    // Add your upload logic here (e.g., API call)
    alert(`Uploading: ${selectedFile.name}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 hover:text-red-600 text-3xl font-bold"
          aria-label="Close Upload Resume"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-violet-900">Upload Resume</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="mb-4"
          />
          
          {selectedFile && (
            <div className="mb-4 p-3 border rounded bg-gray-50 text-gray-700">
              <p><strong>File Name:</strong> {selectedFile.name}</p>
              <p><strong>File Type:</strong> {selectedFile.type || 'N/A'}</p>
              <p><strong>File Size:</strong> {(selectedFile.size / 1024).toFixed(2)} KB</p>
            </div>
          )}

          <button
            type="submit"
            className="bg-violet-900 text-white px-4 py-2 rounded hover:bg-violet-700 transition"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadResume;
