import React, { useState } from 'react';
import { ChevronRight, Clock, BookOpen, Briefcase, Pause, Play } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const TimelineItem = ({ month, title, isActive }) => (
  <div className={`flex flex-col items-center ${isActive ? 'text-blue-600' : 'text-gray-400'}`}>
    <div className={`w-4 h-4 rounded-full mb-1 ${isActive ? 'bg-blue-600' : 'bg-gray-300'}`} />
    <span className="text-sm font-medium">{month}</span>
    <span className="text-xs">{title}</span>
  </div>
);

const RoadmapItem = ({ title, duration, description, topics, isNextStage }) => (
  <div className={`mb-8 border-l-2 border-blue-500 pl-4 ${isNextStage ? 'bg-blue-50 p-4 rounded-lg' : ''}`}>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-2 flex items-center">
      <Clock className="w-4 h-4 mr-2" /> {duration}
    </p>
    <p className="mb-2">{description}</p>
    {topics && (
      <div className="mt-2">
        <h4 className="font-semibold mb-1">Topics Covered:</h4>
        <ul className="list-disc list-inside">
          {topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </div>
    )}
    {isNextStage && (
      <div className="mt-4 text-blue-600 font-semibold">
        Next to second stage
      </div>
    )}
  </div>
);

const CareerGuidanceRoadmap = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [activeMonth, setActiveMonth] = useState(1);
  const location = useLocation();
  const formData = location.state?.formData || {};

  const roadmapData = [
    {
      title: `1. ${formData.skills || 'Basics and Fundamentals'}`,
      duration: `${formData.timeline || '4 weeks'} (2-3 hours daily)`,
      description: `Learn the foundational concepts and tools required for ${formData.interest || 'your chosen career path'}.`,
      topics: ["HTML", "CSS", "JavaScript basics", "Version control (Git)"]
    },
    {
      title: "Assessment + Guided Project",
      duration: "1 week",
      description: "Evaluate your understanding of the basics and apply your knowledge in a guided project.",
      isNextStage: true
    },
    {
      title: "2. Core Skills Development",
      duration: "4 weeks (3-4 hours daily)",
      description: "Deep dive into core skills and technologies specific to your field.",
      topics: ["React.js", "Node.js", "Express.js", "MongoDB"]
    },
    {
      title: "Assessment + Guided Project",
      duration: "1 week",
      description: "Evaluate your core skills and apply them in a more complex guided project."
    },
    {
      title: "3. Advanced Topics and Specialization",
      duration: "4 weeks (4-5 hours daily)",
      description: "Explore advanced concepts and specialize in specific areas of interest.",
      topics: ["GraphQL", "Docker", "CI/CD", "Cloud deployment (AWS/Azure)"]
    },
    {
      title: "Final Assessment + Capstone Project",
      duration: "2 weeks",
      description: "Demonstrate your full-stack skills in a comprehensive capstone project."
    }
  ];

  const timelineData = [
    { month: 1, title: "Basic" },
    { month: 2, title: "Core Skills" },
    { month: 3, title: "Advanced" }
  ];

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-600">Career Guidance Roadmap</h1>
        <button
          onClick={togglePause}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          {isPaused ? <Play className="w-4 h-4 mr-2" /> : <Pause className="w-4 h-4 mr-2" />}
          {isPaused ? 'Resume' : 'Pause'}
        </button>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Full Stack Tracking</h2>
        <div className="flex justify-between items-center mb-8">
          {timelineData.map((item) => (
            <TimelineItem
              key={item.month}
              month={item.month}
              title={item.title}
              isActive={activeMonth >= item.month}
            />
          ))}
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <BookOpen className="w-6 h-6 mr-2 text-blue-500" />
          Learning Path
        </h2>
        {roadmapData.map((item, index) => (
          <RoadmapItem key={index} {...item} />
        ))}
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Briefcase className="w-6 h-6 mr-2 text-blue-500" />
          Next Steps
        </h2>
        <ul className="space-y-2">
          <li className="flex items-center">
            <ChevronRight className="w-4 h-4 mr-2 text-blue-500" />
            Apply for internships or entry-level positions
          </li>
          <li className="flex items-center">
            <ChevronRight className="w-4 h-4 mr-2 text-blue-500" />
            Build a professional portfolio
          </li>
          <li className="flex items-center">
            <ChevronRight className="w-4 h-4 mr-2 text-blue-500" />
            Network with industry professionals
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CareerGuidanceRoadmap;