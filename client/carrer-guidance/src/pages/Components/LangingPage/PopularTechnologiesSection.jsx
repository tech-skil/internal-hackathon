import React from 'react';
import { Code, Database, PenTool, MessageSquare, Briefcase, BarChart, Search, Book } from 'lucide-react';

const PopularTechnologiesSection = () => {
  const domains = [
    { icon: <Code size={32} />, title: "Web Development" },
    { icon: <Database size={32} />, title: "Data Science" },
    { icon: <PenTool size={32} />, title: "UX/UI Design" },
    { icon: <MessageSquare size={32} />, title: "AI & ML" },
    { icon: <Briefcase size={32} />, title: "Business Analytics" },
    { icon: <BarChart size={32} />, title: "Digital Marketing" },
    { icon: <Search size={32} />, title: "Cybersecurity" },
    { icon: <Book size={32} />, title: "E-learning" },
  ];

  return (
    <section className="py-16 bg-white px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fadeIn">Trending Technologies & Job Domains</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {domains.map((domain, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg text-center hover:bg-blue-100 transition duration-300 cursor-pointer transform hover:scale-105"
            >
              <div className="text-blue-600 mb-2 flex justify-center">{domain.icon}</div>
              <h3 className="font-semibold">{domain.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTechnologiesSection;
