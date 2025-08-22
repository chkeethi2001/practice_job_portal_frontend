import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto h-96 md:h-[32rem] overflow-hidden p-4 md:p-6">
      {/* Background image */}
      <img
        src="https://media.istockphoto.com/id/1322854789/photo/portrait-of-diverse-business-people-giving-fist-bump-in-cirle.jpg?s=612x612&w=0&k=20&c=HzfiSIG4qGpoEjRKUliJOTkyaX53qEAYlRxklRLLAQg="
        alt="Job portal banner"
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
    </div>
  );
};

export default Banner;
