import React from 'react';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import PopularTechnologiesSection from './PopularTechnologiesSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      <HeroSection />
      <ServicesSection />
      <PopularTechnologiesSection />

    </div>
  );
};

export default HomePage;