import React from 'react';

const MCQComponent = ({ question, options, selectedAnswer, onSelectAnswer }) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">{question}</h3>
      <div className="space-y-2">
        {options.map((option, index) => (
          <div key={index} className="flex items-center">
            <input
              type="radio"
              id={`option-${index}`}
              name="answer"
              value={option}
              checked={selectedAnswer === option}
              onChange={() => onSelectAnswer(option)}
              className="mr-2"
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MCQComponent;
