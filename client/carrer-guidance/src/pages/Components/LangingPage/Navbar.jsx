import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-yellow-400">Career</Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-400 transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-400 transition duration-300">About</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition duration-300">Contact Us</Link>
          <Link to="/career-guide" className="hover:text-yellow-400 transition duration-300">Career Guide Suggestion</Link>
        </div>
        <Link to="/signup" className="hidden md:block bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-bold py-2 px-4 rounded transition duration-300">
          Sign/Signup
        </Link>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition duration-300">Home</Link>
          <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition duration-300">About</Link>
          <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition duration-300">Contact Us</Link>
          <Link to="/career-guide" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition duration-300">Career Guide Suggestion</Link>
          <Link to="/signup" className="block px-3 py-2 rounded-md text-base font-medium bg-yellow-400 text-blue-800 hover:bg-yellow-500 transition duration-300">Sign/Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;