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
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-6 sm:p-10 flex flex-col items-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-10 text-center">
        National University CSE CGPA Calculator
      </h1>
      <h3 className="text-2xl sm:text-2xl font-extrabold text-orange-700 mb-3 text-center">
        How to calculate  your CGPA?
      </h3>
      <p className="text-xl sm:text-xl font-extrabold text-orange-700 mb-10 text-center">
        Here you will see two boxes. The first box is for your gpa - grade point of the current semester
        & the second box is for total credit hours of the semester. If you have multiple semester, then 
        you have to click on the Add Semester button to add the previous semester result. 
        Finally when all the results are given you have to click on calculate button. 
      </p>
      {/* bottom drawer */}
      {/* <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div> */}
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6 sm:p-10">
        {grades.map((_, index) => (
          <GradeInput key={index} index={index} updateGrade={updateGrade} />
        ))}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          {/* <button
            onClick={addGradeField}
            className="w-full sm:w-auto px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600"
          >
            Add Semester
          </button>
          <button
            onClick={calculateResult}
            className="w-full sm:w-auto px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600"
          >
            Calculate CGPA
          </button> */}
        </div>
        <ResultDisplay cgpa={cgpa} />
      </div>
    </div>
  );
};

export default Home;
