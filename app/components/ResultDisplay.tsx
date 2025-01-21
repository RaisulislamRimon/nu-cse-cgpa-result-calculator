'use client';

import React from 'react';

interface ResultDisplayProps {
  cgpa: number | null;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ cgpa }) => {
  return (
    <div className="mt-10 text-center">
      {cgpa !== null ? (
        <h2 className="text-3xl font-bold text-green-600">
          Your CGPA: <span className="text-blue-500">{cgpa}</span>
        </h2>
      ) : (
        <h2 className="text-xl text-gray-600">
          Enter grades and credits to calculate your CGPA.
        </h2>
      )}
    </div>
  );
};

export default ResultDisplay;
