import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tools = ({ className, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    navigate('/tools');
  };

  return (
    <button
      onClick={handleClick}
      className={`p-2 bg-violet-900 text-white rounded-md ${className || ''}`}
    >
      Tools
    </button>
  );
};

export default Tools;
