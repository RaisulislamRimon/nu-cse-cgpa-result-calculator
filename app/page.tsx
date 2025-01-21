'use client';

import { useState } from 'react';
import GradeInput from './components/GradeInput';
import ResultDisplay from './components/ResultDisplay';
import { calculateCGPA } from '../utils/calculateCGPA';

interface Grade {
  grade: number | null;
  credits: number | null;
}

const Home = () => {
  const [grades, setGrades] = useState<Grade[]>([{ grade: null, credits: null }]);
  const [cgpa, setCGPA] = useState<number | null>(null);

  const addGradeField = () => {
    setGrades([...grades, { grade: null, credits: null }]);
  };

  const updateGrade = (index: number, field: string, value: string) => {
    const updatedGrades = [...grades];
    updatedGrades[index][field as keyof Grade] = value ? parseFloat(value) : null;
    setGrades(updatedGrades);
  };

  const calculateResult = () => {
    const validGrades = grades.filter(
      (grade) => grade.grade !== null && grade.credits !== null
    ) as { grade: number; credits: number }[];
    const result = calculateCGPA(validGrades);
    setCGPA(result);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">CGPA Calculator</h1>
      {grades.map((_, index) => (
        <GradeInput key={index} index={index} updateGrade={updateGrade} />
      ))}
      <div className="flex justify-center gap-4 mt-4">
        <button onClick={addGradeField} className="btn btn-primary">
          Add Subject
        </button>
        <button onClick={calculateResult} className="btn btn-success">
          Calculate CGPA
        </button>
      </div>
      <ResultDisplay cgpa={cgpa} />
    </div>
  );
};

export default Home;
