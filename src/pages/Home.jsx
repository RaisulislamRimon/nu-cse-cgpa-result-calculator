import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Home() {
  const defaultCreditHours = [18, 16.5, 18, 16.5, 16.5, 16.5, 18, 18];
  const [creditHours, setCreditHours] = useState(defaultCreditHours);
  const [showDescription, setShowDescription] = useState(false);
  const [gpas, setGPAs] = useState(Array(8).fill(""));
  const navigate = useNavigate();

  // Toggle description visibility
  const toggleDescription = () => {
    setShowDescription((prev) => !prev);
  };
  

  // Handle credit hour change
  const handleCreditChange = (index, value) => {
    const updatedCredits = [...creditHours];
    updatedCredits[index] = value;
    setCreditHours(updatedCredits);
  };

  // Handle GPA change
  const handleGPAChange = (index, value) => {
    const updatedGPAs = [...gpas];
    updatedGPAs[index] = value ? Number(value) : "";
    setGPAs(updatedGPAs);
  };

  // Reset all values
  const resetToDefault = () => {
    setCreditHours(defaultCreditHours);
    setGPAs(Array(8).fill(""));
  };

  // Navigate to Result Page
  const calculateCGPA = () => {
    if (gpas.includes("") || gpas.some((gpa) => gpa < 0 || gpa > 4)) {
      alert("Please enter valid GPAs for all semesters.");
      return;
    }

    const totalGradePoints = gpas.reduce(
      (sum, gpa, index) => sum + gpa * creditHours[index],
      0
    );
    const totalCreditHours = creditHours.reduce((sum, credit) => sum + credit, 0);
    const cgpa = (totalGradePoints / totalCreditHours).toFixed(2);

    navigate("/result", {
      state: { cgpa, gpas, creditHours },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-6 flex flex-col items-center">
        {/* title & metadata  */}
        <Helmet>
            <title>Home - CGPA Calculator</title>
            <meta name="description" content="Calculate your CGPA for National University CSE program." />
        </Helmet>
        {/* header */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-10 text-center">
        National University CSE CGPA Calculator
      </h1>
      <h3 className="text-2xl sm:text-2xl font-extrabold text-orange-700 mb-3 text-center">
        How to calculate  your CGPA?
      </h3>

      {/* Toggle Button */}
      <button
        onClick={toggleDescription}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {showDescription ? "Hide Instructions" : "Show Instructions"}
      </button>

      {/* Conditional Rendering of Description */}
      {showDescription && (
        <p className="text-xl sm:text-xl font-extrabold text-orange-700 mb-10 text-center">
          Here you will see two boxes. The first box is for your total credit
          hours of the semester & the second box is for GPA - grade point of the
          current semester. When all the results are given, you have to click on the
          calculate button.
        </p>
      )}
      {/* <p className="text-xl sm:text-xl font-extrabold text-orange-700 mb-10 text-center">
        Here you will see two boxes. The first box is for your total credit hours of the semester & 
        the second box is for gpa - grade point of the current semester. 
        If you have multiple semester, then you have to click on the Add Semester button to add the 
        previous semester result. 
        Finally when all the results are given you have to click on calculate button. 
      </p> */}
      
      {/* <h1 className="text-4xl font-extrabold text-blue-700 mb-6 text-center">
        National University CSE CGPA Calculator
      </h1> */}
      <hr />
      
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Calculate Your CGPA</h2>
        <div className="space-y-6">
          {creditHours.map((credit, index) => (
            <div key={index} className="grid grid-cols-3 gap-4 items-center">
              <span className="font-medium text-lg">Semester {index + 1}:</span>
              <input
                type="number"
                value={credit}
                onChange={(e) => handleCreditChange(index, Number(e.target.value))}
                className="border rounded-md w-full p-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Credit Hours"
                min="0"
              />
              <input
                type="number"
                step="0.01"
                value={gpas[index]}
                onChange={(e) =>
                  handleGPAChange(index, e.target.value ? Number(e.target.value) : "")
                }
                className="border rounded-md w-full p-2 text-base focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="GPA"
                min="0"
                max="4.00"
              />
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={resetToDefault}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            Reset to Default
          </button>
          <button
            onClick={calculateCGPA}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none"
          >
            Calculate CGPA
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
