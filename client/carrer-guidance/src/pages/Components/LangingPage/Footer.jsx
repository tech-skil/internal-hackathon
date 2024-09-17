import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-xl font-bold mb-4">About Us</h4>
          <p className="text-gray-400">Empowering careers through AI-driven guidance and expert insights.</p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="text-gray-400">
            <li className="mb-2"><a href="#" className="hover:text-white transition duration-300">Home</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white transition duration-300">Services</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white transition duration-300">AI Tools</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white transition duration-300">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Legal</h4>
          <ul className="text-gray-400">
            <li className="mb-2"><a href="#" className="hover:text-white transition duration-300">Terms of Service</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white transition duration-300">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Newsletter</h4>
          <p className="text-gray-400 mb-4">Stay updated with the latest career trends and opportunities.</p>
          <div className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-2 rounded-md sm:rounded-r-none text-gray-800 mb-2 sm:mb-0"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md sm:rounded-l-none transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; 2024 Career Guidance Platform. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;