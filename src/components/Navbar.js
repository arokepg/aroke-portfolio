// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => setNav(!nav);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="cursor-pointer fixed w-full bg-nord6 text-nord0 dark:bg-nord0 dark:text-nord6 shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Aroke</h1>
        <ul className="hidden md:flex">
          <li className="mx-4 hover:bg-nord4 dark:hover:bg-nord3">
            <Link to="hero" smooth={true} duration={500}>Home</Link>
          </li>
          <li className="mx-4 hover:bg-nord4 dark:hover:bg-nord3">
            <Link to="about" smooth={true} duration={500}>About</Link>
          </li>
          <li className="mx-4 hover:bg-nord4 dark:hover:bg-nord3">
            <Link to="projects" smooth={true} duration={500}>Projects</Link>
          </li>
          <li className="mx-4 hover:bg-nord4 dark:hover:bg-nord3">
            <Link to="skills" smooth={true} duration={500}>Skills</Link>
          </li>
          <li className="mx-4 hover:bg-nord4 dark:hover:bg-nord3">
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="md:mr-2 mr-14 p-2 bg-gray-200 dark:bg-nord2 rounded-full shadow-md absolute top-2 right-2"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
        <div className="md:hidden mr-2" onClick={handleClick}>
          {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
        </div>
      </div>
      {nav && (
        <ul className="absolute top-16 left-0 w-full bg-nord6 text-nord0 dark:bg-nord0 dark:text-nord6 flex flex-col items-center">
          <li className="py-4">
            <Link onClick={handleClick} to="hero" smooth={true} duration={500}>Home</Link>
          </li>
          <li className="py-4">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link>
          </li>
          <li className="py-4">
            <Link onClick={handleClick} to="projects" smooth={true} duration={500}>Projects</Link>
          </li>
          <li className="py-4">
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link>
          </li>
          <li className="py-4">
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;

