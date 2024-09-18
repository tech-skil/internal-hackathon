import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ScrollingImageSection from './ScrollingImageSection';
import ServicesSection from './ServicesSection';
import AIComponentSection from './AIComponentSection';
import PopularTechnologiesSection from './PopularTechnologiesSection';
import Footer from './Footer';
// import {  } from "";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Router>
        {/* <Route path="/about" element={<SignIn />}/> */}
        {/* <Route path="/contact" element={<Contact />}/> */}
        </Router>
      {/* <HeroSection />
      <ScrollingImageSection />
      <ServicesSection />
      <AIComponentSection />
      <PopularTechnologiesSection />
      <Footer /> */}
    </div>
  );
};

export default HomePage;