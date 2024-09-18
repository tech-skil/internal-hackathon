import React, { useState } from 'react';
import { useAssessment } from './useAssessment';

const AssessmentFlow = () => {
  const [step, setStep] = useState(0);
  const [responses, setResponses] = useState({});
  const { loading, error, currentAssessment, startAssessment, submitAssessment } = useAssessment();

  const assessmentTypes = ['personality', 'skills', 'interests', 'values', 'summary'];
  const questions = {
    personality: [
      "How do you prefer to work: in a team or independently?",
      "Describe your ideal work environment.",
      "How do you handle stress and pressure?",
    ],
    skills: [
      "What are your top three professional skills?",
      "Describe a recent project where you applied your skills effectively.",
      "What skill would you like to develop further?",
    ],
    interests: [
      "What topics or activities do you find most engaging?",
      "Describe your dream job.",
      "What industry trends excite you the most?",
    ],
    values: [
      "What's most important to you in a career?",
      "Describe a work situation that aligns with your values.",
      "What type of company culture do you prefer?",
    ],
  };

  const handleNext = () => {
    if (step < assessmentTypes.length - 1) {
      submitAssessment(assessmentTypes[step], responses[assessmentTypes[step]]);
      setStep(step + 1);
    } else {
      submitAssessment('summary', responses);
    }
  };

  const handleInputChange = (question, value) => {
    setResponses(prev => ({
      ...prev,
      [assessmentTypes[step]]: {
        ...prev[assessmentTypes[step]],
        [question]: value,
      },
    }));
  };

  if (step === assessmentTypes.length - 1) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Assessment Summary</h2>
        {loading ? (
          <p>Generating your personalized career insights...</p>
        ) : (
          <div>
            <p className="whitespace-pre-wrap">{currentAssessment}</p>
            <button
              onClick={() => setStep(0)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Start New Assessment
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{assessmentTypes[step].charAt(0).toUpperCase() + assessmentTypes[step].slice(1)} Assessment</h2>
      {questions[assessmentTypes[step]].map((question, index) => (
        <div key={index} className="mb-4">
          <label className="block mb-2">{question}</label>
          <textarea
            className="w-full p-2 border rounded"
            rows="3"
            value={responses[assessmentTypes[step]]?.[question] || ''}
            onChange={(e) => handleInputChange(question, e.target.value)}
          ></textarea>
        </div>
      ))}
      <button
        onClick={handleNext}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {loading ? 'Processing...' : 'Next'}
      </button>
    </div>
  );
};
export default AssessmentFlow;