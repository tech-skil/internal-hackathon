import React from 'react';

const Recommendations = ({ score, total }) => {
  const percentage = (score / total) * 100;

  const getTrendingDomains = () => {
    return [
      "Artificial Intelligence and Machine Learning",
      "Cybersecurity",
      "Cloud Computing",
      "Data Science and Analytics",
      "Internet of Things (IoT)",
      "Blockchain Technology",
      "Quantum Computing",
      "Augmented and Virtual Reality",
      "Edge Computing",
      "5G and Advanced Networking"
    ];
  };

  const getRecommendations = () => {
    if (percentage >= 80) {
      return "Excellent performance! Consider exploring advanced topics in your areas of interest.";
    } else if (percentage >= 60) {
      return "Good job! Focus on strengthening your weak areas and delve deeper into your strong suits.";
    } else {
      return "There's room for improvement. Consider revisiting fundamental concepts and practice more.";
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
      <p className="mb-4">{getRecommendations()}</p>
      <h4 className="text-lg font-semibold mb-2">Trending Domains in CSE:</h4>
      <ul className="list-disc pl-5">
        {getTrendingDomains().map((domain, index) => (
          <li key={index} className="mb-1">{domain}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;