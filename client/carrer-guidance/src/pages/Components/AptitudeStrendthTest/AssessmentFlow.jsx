import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import MCQComponent from './Quiz/MCQComponent';
import ResultChart from './Quiz/ResultChart';
import Recommendations from './Quiz/Recommendations';

// Use an environment variable for the API key
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Check if the API key is available
if (!API_KEY) {
  console.error("API key is not set. Please set the VITE_GEMINI_API_KEY environment variable.");
}

const genAI = new GoogleGenerativeAI(API_KEY);

const AssessmentFlow = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    generateQuestions();
  }, []);

  const generateQuestions = async () => {
    if (!API_KEY) {
      setError("API key is not set. Please configure the environment variable.");
      setLoading(false);
      return;
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
    const prompt = `Generate 20 multiple-choice questions to assess general aptitude and technical skills for a CSE student. Each question should have 4 options. Format the questions as a JSON array of objects, where each object has the following structure:
    {
      "question": "The question text",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": "The correct option"
    }`;

    try {
      const result = await model.generateContent(prompt);
      const response = result.response.text();
      const cleanedResponse = response.replace(/```json|\```/g, '').trim();
      const generatedQuestions = JSON.parse(cleanedResponse);
      setQuestions(generatedQuestions);
      setLoading(false);
    } catch (error) {
      console.error('Error generating questions:', error);
      setError("Failed to generate questions. Please check your API key and try again.");
      setLoading(false);
    }
  };

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
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
      if (answers[questionIndex] === questions[questionIndex].correctAnswer) {
        score++;
      }
    });
    return score;
  };

  if (loading) {
    return <div>Loading questions...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="max-w-2xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Assessment Results</h2>
        <p className="mb-4">Your score: {score} out of {questions.length}</p>
        <ResultChart score={score} total={questions.length} />
        <Recommendations score={score} total={questions.length} />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">CSE Assessment</h2>
      {questions.length > 0 && (
        <MCQComponent
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          selectedAnswer={answers[currentQuestion]}
          onSelectAnswer={handleAnswer}
        />
      )}
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
          {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default AssessmentFlow;