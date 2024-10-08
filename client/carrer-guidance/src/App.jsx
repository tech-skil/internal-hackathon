import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Components/LangingPage/HomePage';
import CareerGuidePage from './pages/Components/CareerForm';
import Navbar from './pages/Components/LangingPage/Navbar';
import CareerGuidanceRoadmap from './pages/Components/CareerGuidanceRoadmap';
import ChatIcon from './pages/Components/ChatIcon';
import Roadmap from './pages/Components/CareerGuidanceRoadmap';
import Footer from './pages/Components/LangingPage/Footer';
import AssessmentPage from './pages/Components/AptitudeStrendthTest/AssessmentFlow'; 
import Quiz from './pages/Components/AptitudeStrendthTest/Quiz/Main'; 
import Signup from './pages/Components/LangingPage/SignUp'; 
import SignIn from './pages/Components/LangingPage/SignIn'; 

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/career-guide" element={<CareerGuidePage />} />
          <Route path="/career-guidance-roadmap" element={<CareerGuidanceRoadmap />} />
          <Route path="/assessment" element={<AssessmentPage />} /> 
          <Route path="/quiz" element={<Quiz />} /> 
          <Route path="/roadmap" element={<Roadmap />} /> 
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/signin" element={<SignIn />} /> 
        </Routes>
        <ChatIcon />
        <Footer />
      </div>
    </Router>
  );
};

export default App;