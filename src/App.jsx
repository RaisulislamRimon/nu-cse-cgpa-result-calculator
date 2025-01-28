import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ResultCard from "./pages/Result";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<ResultCard />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;



// import { useState } from "react";

// function App() {
//   // Default credit hours for 8 semesters
//   const defaultCreditHours = [18, 16.5, 18, 16.5, 16.5, 16.5, 18, 18];
//   const [creditHours, setCreditHours] = useState(defaultCreditHours);
//   const [gpas, setGPAs] = useState(Array(8).fill("")); // No default GPA

//   // Handle credit hour change
//   const handleCreditChange = (index, value) => {
//     const updatedCredits = [...creditHours];
//     updatedCredits[index] = value;
//     setCreditHours(updatedCredits);
//   };

//   // Handle GPA change
//   const handleGPAChange = (index, value) => {
//     const updatedGPAs = [...gpas];
//     updatedGPAs[index] = value ? Number(value) : ""; // Allow empty inputs
//     setGPAs(updatedGPAs);
//   };

//   // Reset all values
//   const resetToDefault = () => {
//     setCreditHours(defaultCreditHours);
//     setGPAs(Array(8).fill(""));
//   };

//   // Calculate CGPA
//   const calculateCGPA = () => {
//     if (gpas.includes("") || gpas.some((gpa) => gpa < 0 || gpa > 4)) {
//       return "Please enter valid GPAs for all semesters.";
//     }

//     const totalGradePoints = gpas.reduce(
//       (sum, gpa, index) => sum + gpa * creditHours[index],
//       0
//     );
//     const totalCreditHours = creditHours.reduce((sum, credit) => sum + credit, 0);
//     return (totalGradePoints / totalCreditHours).toFixed(2);
//   };

//   return (
//     <>
//       {/* header  */}
//       <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-6 sm:p-10 flex flex-col items-center">

//       <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-10 text-center">
//         National University CSE CGPA Calculator
//       </h1>
//       <h3 className="text-2xl sm:text-2xl font-extrabold text-orange-700 mb-3 text-center">
//         How to calculate  your CGPA?
//       </h3>
//       <p className="text-xl sm:text-xl font-extrabold text-orange-700 mb-10 text-center">
//         Here you will see two boxes. The first box is for your gpa - grade point of the current semester
//         & the second box is for total credit hours of the semester. If you have multiple semester, then 
//         you have to click on the Add Semester button to add the previous semester result. 
//         Finally when all the results are given you have to click on calculate button. 
//       </p>
//       {/* </div> */}

//     {/* main  */}
//     {/* <div className="min-h-screen bg-gray-100 flex items-center justify-center"> */}
//       <div>
        
//       {/* </div> */}
      
//       <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
//         <h1 className="text-2xl font-bold mb-6 text-center">CGPA Calculator</h1>
//         <div className="space-y-6">
//           {creditHours.map((credit, index) => (
//             <div key={index} className="grid grid-cols-3 gap-4 items-center">
//               <span className="font-medium text-lg">Semester {index + 1}:</span>
//               <input
//                 type="number"
//                 value={credit}
//                 onChange={(e) => handleCreditChange(index, Number(e.target.value))}
//                 className="border rounded-md w-full p-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Credit Hours"
//                 min="0"
//                 />
//               <input
//                 type="number"
//                 step="0.01"
//                 value={gpas[index]}
//                 onChange={(e) =>
//                   handleGPAChange(index, e.target.value ? Number(e.target.value) : "")
//                 }
//                 className="border rounded-md w-full p-2 text-base focus:outline-none focus:ring-2 focus:ring-green-500"
//                 placeholder="GPA"
//                 min="0"
//                 max="4.00"
//                 />
//             </div>
//           ))}
//         </div>
//         <div className="mt-8 flex justify-center gap-4">
//           <button
//             onClick={resetToDefault}
//             className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
//             >
//             Reset to Default
//           </button>
//           <button
//             onClick={() => alert(`Your CGPA is: ${calculateCGPA()}`)}
//             className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none"
//             >
//             Calculate CGPA
//           </button>
//         </div>
//       </div>
//     </div>
//     </div>
//             </>
//   );
// }

// export default App;


