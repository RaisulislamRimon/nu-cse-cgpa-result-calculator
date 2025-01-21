'use client';

import React from 'react';

interface ResultDisplayProps {
  cgpa: number | null;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ cgpa }) => {
  return (
    <div className="mt-6 text-center">
      {cgpa !== null ? (
        <h2 className="text-2xl font-bold">Your CGPA: {cgpa}</h2>
      ) : (
        <h2 className="text-lg">Enter grades to calculate your CGPA</h2>
      )}
    </div>
  );
};

export default ResultDisplay;
