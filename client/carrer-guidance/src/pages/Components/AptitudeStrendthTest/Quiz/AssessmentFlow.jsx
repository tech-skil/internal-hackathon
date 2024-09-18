import React, { useState } from 'react';
import MCQComponent from './MCQComponent';
import ResultChart from './ResultChart';
import Recommendations from './Recommendations';
import cseQuestions from './cseQuestions';

const AssessmentFlow = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
  };

  const handleNext = () => {
    if (currentQuestion < cseQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    Object.keys(answers).forEach(questionIndex => {
      if (answers[questionIndex] === cseQuestions[questionIndex].correctAnswer) {
        score++;
      }
    });
    return score;
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="max-w-2xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Assessment Results</h2>
        <p className="mb-4">Your score: {score} out of {cseQuestions.length}</p>
        <ResultChart score={score} total={cseQuestions.length} />
        <Recommendations score={score} total={cseQuestions.length} />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">CSE Assessment</h2>
      <MCQComponent
        question={cseQuestions[currentQuestion].question}
        options={cseQuestions[currentQuestion].options}
        selectedAnswer={answers[currentQuestion]}
        onSelectAnswer={handleAnswer}
      />
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {currentQuestion === cseQuestions.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default AssessmentFlow;