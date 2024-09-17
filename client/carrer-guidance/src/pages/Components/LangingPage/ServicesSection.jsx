import React from 'react';
import { Search, Book, BarChart } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    { icon: <Search size={40} />, title: "Career Assessment", description: "Discover your ideal career path through our comprehensive assessment tools." },
    { icon: <Book size={40} />, title: "Resume Builder", description: "Create a professional resume that stands out with our AI-powered builder." },
    { icon: <BarChart size={40} />, title: "Job Market Insights", description: "Stay informed about the latest trends and opportunities in your field." },
  ];

  return (
    <section className="py-16 bg-gray-100 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fadeIn">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition duration-300">
              <div className="text-blue-600 mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="text-blue-600 hover:text-blue-800 transition duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;