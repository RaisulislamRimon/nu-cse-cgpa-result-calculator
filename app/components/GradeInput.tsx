'use client';

import React from 'react';

interface GradeInputProps {
  index: number;
  updateGrade: (index: number, field: string, value: string) => void;
}

const GradeInput: React.FC<GradeInputProps> = ({ index, updateGrade }) => {
  return (
    <div className="flex gap-4 items-center mb-4">
      <input
        type="number"
        placeholder="Grade (e.g., 4)"
        className="input input-bordered w-full max-w-xs"
        onChange={(e) => updateGrade(index, 'grade', e.target.value)}
      />
      <input
        type="number"
        placeholder="Credit Hours"
        className="input input-bordered w-full max-w-xs"
        onChange={(e) => updateGrade(index, 'credits', e.target.value)}
      />
    </div>
  );
};

export default GradeInput;
