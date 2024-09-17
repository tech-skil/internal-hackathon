import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-yellow-400">Career</div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-yellow-400 transition duration-300">Home</a>
          <a href="#" className="hover:text-yellow-400 transition duration-300">About</a>
          <a href="#" className="hover:text-yellow-400 transition duration-300">Contact Us</a>
          <a href="#" className="hover:text-yellow-400 transition duration-300">Privacy Policy</a>
        </div>
        <button className="hidden md:block bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-bold py-2 px-4 rounded transition duration-300">
          Sign/Signup
        </button>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition duration-300">Home</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition duration-300">About</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition duration-300">Contact Us</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition duration-300">Privacy Policy</a>
          <a href="#SignUp" className="block px-3 py-2 rounded-md text-base font-medium bg-yellow-400 text-blue-800 hover:bg-yellow-500 transition duration-300">Sign/Signup</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
