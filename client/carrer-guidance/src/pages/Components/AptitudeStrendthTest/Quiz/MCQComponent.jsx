import React from 'react';

const MCQComponent = ({ question, options, selectedAnswer, onSelectAnswer }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">{question}</h3>
      <div className="space-y-2">
        {options.map((option, index) => (
          <label key={index} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option}
              checked={selectedAnswer === option}
              onChange={() => onSelectAnswer(option)}
              className="form-radio text-blue-600"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default MCQComponent;