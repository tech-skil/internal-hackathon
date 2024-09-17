import React from 'react';
import { ChevronRight } from 'lucide-react';

const ScrollingImageSection = () => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-96 md:h-screen overflow-y-scroll">
          {[1, 2, 3, 4, 5].map((index) => (
            <img
              key={index}
              src={`/api/placeholder/800/600?text=Career+Image+${index}`}
              alt={`Career Image ${index}`}
              className="w-full h-96 object-cover"
            />
          ))}
        </div>
        <div className="w-full md:w-1/2 bg-white p-8 md:p-16 flex items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 animate-fadeIn">Explore Diverse Career Paths</h2>
            <p className="text-gray-600 mb-6 animate-slideUp">
              Discover a world of opportunities across various industries and professions. Our platform helps you navigate through different career options tailored to your skills and interests.
            </p>
            <button className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300 transform hover:translate-x-2">
              Learn More <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollingImageSection;