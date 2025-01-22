'use client';

import React from 'react';

interface GradeInputProps {
  index: number;
  updateGrade: (index: number, field: string, value: string) => void;
}

const GradeInput: React.FC<GradeInputProps> = ({ index, updateGrade }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
      <input
        type="number"
        placeholder="Your Grade (e.g., 4)"
        className="w-full sm:w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => updateGrade(index, 'grade', e.target.value)}
      />
      <input
        type="number"
        placeholder="Total Credit Hours"
        className="w-full sm:w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => updateGrade(index, 'credits', e.target.value)}
      />
    </div>
  );
};

export default GradeInput;
