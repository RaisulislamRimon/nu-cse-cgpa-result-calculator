
  import React, { useState } from "react";
  
  const SemesterGPAAndCreditHours = () => {
    // Default credit hours for 8 semesters
    const defaultCreditHours = [18, 16.5, 18, 16.5, 16.5, 16.5, 18, 18];
  
  const [creditHours, setCreditHours] = useState<number[]>(defaultCreditHours);
  const [gpas, setGPAs] = useState<(number | "")[]>(Array(8).fill("")); // No default GPA

  // Handle input change for credit hours of a specific semester
  const handleCreditChange = (index: number, value: number) => {
    const updatedCreditHours = [...creditHours];
    updatedCreditHours[index] = value; // Update the specific semester's credit hours
    setCreditHours(updatedCreditHours);
  };

  // Handle input change for GPA of a specific semester
  const handleGPAChange = (index: number, value: number | "") => {
    const updatedGPAs = [...gpas];
    updatedGPAs[index] = value; // Update the specific semester's GPA
    setGPAs(updatedGPAs);
  };

  // Reset all credit hours and clear GPA inputs
  const resetToDefault = () => {
    setCreditHours(defaultCreditHours);
    setGPAs(Array(8).fill(""));
  };

  // Calculate CGPA
  const calculateCGPA = () => {
    // Ensure all GPA values are entered
    if (gpas.includes("") || gpas.some((gpa) => gpa === null || gpa < 0 || gpa > 4)) {
      return "Please enter valid GPAs for all semesters.";
    }

    const totalGradePoints = gpas.reduce(
      (sum, gpa, index) => sum + (Number(gpa) * creditHours[index]),
      0
    );
    const totalCreditHours = creditHours.reduce((sum, credit) => sum + credit, 0);
    return totalCreditHours ? (totalGradePoints / totalCreditHours).toFixed(2) : "0.00";
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Semester GPA and Credit Hours</h2>
      <div className="space-y-6">
        {creditHours.map((credits, index) => (
          <div key={index} className="grid grid-cols-3 items-center gap-4">
            <span className="font-medium text-lg">Semester {index + 1}:</span>
            {/* <label htmlFor="creditHours">Total Credit Hours</label> */}
            <input
              type="number"
              value={credits}
              // id="creditHours"
              onChange={(e) => handleCreditChange(index, Number(e.target.value))}
              className="border rounded-md w-full p-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Credit Hours"
              min="0"
            />
            <input
              type="number"
              step="0.01"
              value={gpas[index]}
              onChange={(e) => handleGPAChange(index, e.target.value ? Number(e.target.value) : "")}
              className="border rounded-md w-full p-2 text-base focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="GPA"
              min="0"
              max="4.00"
            />
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button
          onClick={resetToDefault}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none mr-4"
        >
          Reset to Default
        </button>
        <button
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none"
          onClick={() => {
            const result = calculateCGPA();
            alert(typeof result === "string" ? result : `Your CGPA is: ${result}`);
          }}
        >
          Calculate CGPA
        </button>
      </div>
    </div>
  );
};

export default SemesterGPAAndCreditHours;
