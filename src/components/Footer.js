// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaGithub, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-nord6  text-nord0 dark:bg-nord2 dark:text-nord4 py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.facebook.com/losiucute/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <FaFacebook size={30} />
          </a>
          <a href="https://github.com/arokepg" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black dark:text-nord6">
            <FaGithub size={30} />
          </a>
          <a href="https://www.youtube.com/@arokepg" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800">
            <FaYoutube size={30} />
          </a>
          {/* Add more social links as needed */}
        </div>
        <p className="text-nord0 dark:text-nord4">&copy; {new Date().getFullYear()} Aroke. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
