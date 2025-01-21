interface Grade {
    grade: number;
    credits: number;
  }
  
  export const calculateCGPA = (grades: Grade[]): number | null => {
    const totalPoints = grades.reduce(
      (sum, curr) => sum + curr.grade * curr.credits,
      0
    );
    const totalCredits = grades.reduce((sum, curr) => sum + curr.credits, 0);
  
    if (totalCredits === 0) return null;
    return parseFloat((totalPoints / totalCredits).toFixed(2));
  };
  