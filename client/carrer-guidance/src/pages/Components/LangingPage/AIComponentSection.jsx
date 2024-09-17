import React from 'react';

const AIComponentSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fadeIn">AI-Powered Career Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">AI Resume Review</h3>
            <p className="mb-4">Get instant feedback on your resume from our advanced AI system.</p>
            <div className="flex flex-col sm:flex-row">
              <input
                type="file"
                className="flex-grow p-2 rounded-md sm:rounded-r-none text-gray-800 mb-2 sm:mb-0"
                placeholder="Upload your resume"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-bold py-2 px-4 rounded-md sm:rounded-l-none transition duration-300">
                Analyze
              </button>
            </div>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">AI Career Prediction</h3>
            <p className="mb-4">Discover potential career paths based on your skills and interests.</p>
            <div className="flex flex-col sm:flex-row">
              <input
                type="text"
                className="flex-grow p-2 rounded-md sm:rounded-r-none text-gray-800 mb-2 sm:mb-0"
                placeholder="Enter your top skills"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-bold py-2 px-4 rounded-md sm:rounded-l-none transition duration-300">
                Predict
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AIComponentSection;