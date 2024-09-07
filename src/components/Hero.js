// src/components/Hero.js
import React from 'react';
import { Link } from 'react-scroll';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center bg-gray-50 text-nord0 dark:bg-nord3 dark:text-nord4">
      <h2 className="text-center text-4xl md:text-6xl font-bold mb-4">Hello, I'm Nhat Minh</h2>
      <p className="text-xl md:text-2xl mb-8">I'm a student who have the enthusiasm in computer</p>
      <Link to="projects" smooth={true} duration={500} className="flex items-center text-nord10 dark:text-nord7 cursor-pointer0">
        View My Profile <FaArrowDown className="ml-2 animate-bounce" />
      </Link>
    </section>
  );
};

export default Hero;
