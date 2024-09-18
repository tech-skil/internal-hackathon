import React from 'react';

const Recommendations = ({ score, total }) => {
  const percentage = (score / total) * 100;

  const getRecommendations = () => {
    if (percentage >= 80) {
      return [
        "Consider advanced courses in algorithms and data structures",
        "Explore internship opportunities in top tech companies",
        "Start working on complex projects to challenge yourself"
      ];
    } else if (percentage >= 60) {
      return [
        "Focus on strengthening your understanding of core CS concepts",
        "Practice coding problems regularly",
        "Consider joining coding competitions or hackathons"
      ];
    } else {
      return [
        "Review fundamental CS concepts and algorithms",
        "Spend more time on hands-on coding exercises",
        "Consider finding a study group or mentor for additional support"
      ];
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-2">Recommendations</h3>
      <ul className="list-disc pl-5">
        {getRecommendations().map((recommendation, index) => (
          <li key={index} className="mb-1">{recommendation}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;