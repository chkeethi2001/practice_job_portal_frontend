import React, { useEffect, useState } from 'react';

const AnimatedJobCounter = ({ totalJobs, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalTime = 30; // ms
    const steps = Math.ceil(duration / intervalTime);
    const increment = Math.ceil(totalJobs / steps);

    const interval = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= totalJobs) {
          clearInterval(interval);
          return totalJobs;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [totalJobs, duration]);

  return (
    <div className="text-3xl font-bold text-violet-900">
      {count.toLocaleString()} Jobs Available
    </div>
  );
};

export default AnimatedJobCounter;
