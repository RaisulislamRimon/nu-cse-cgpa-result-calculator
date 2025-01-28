import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import { Helmet } from "react-helmet-async";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cgpa, gpas, creditHours } = location.state || {};

  if (!cgpa || !gpas || !creditHours) {
    navigate("/");
    return null;
  }

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("CGPA Result Card", 20, 20);
    doc.text(`CGPA: ${cgpa}`, 20, 40);

    gpas.forEach((gpa, index) => {
      doc.text(
        `Semester ${index + 1}: GPA: ${gpa}, Credit Hours: ${creditHours[index]}`,
        20,
        60 + index * 10
      );
    });

    doc.save("CGPA_Result.pdf");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-6 flex flex-col items-center">
        <Helmet>
            <title>Result - CGPA Calculator</title>
            <meta name="description" content={`Your CGPA is ${cgpa}. View detailed results for each semester.`} />
        </Helmet>
      <h1 className="text-4xl font-extrabold text-blue-700 mb-6 text-center">
        Your CGPA Result
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Cumulative GPA: {cgpa}
        </h2>
        <div className="space-y-4">
          {gpas.map((gpa, index) => (
            <div key={index} className="text-lg">
              Semester {index + 1}: GPA: {gpa}, Credit Hours: {creditHours[index]}
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={downloadPDF}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            Download PDF
          </button>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;
