interface Grade {
  grade: number;
  credits: number;
}

export const calculateCGPA = (grades: number[]) => {
  const totalGradePoints = grades.reduce(
    (sum, grade, index) => sum + grade * creditHours[index],
    0
  );
  const totalCreditHours = creditHours.reduce((sum, credit) => sum + credit, 0);
  return totalGradePoints / totalCreditHours;
};
