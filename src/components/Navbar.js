// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { IoMenu } from "react-icons/io5";

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
          <li className="mx-4 hover:bg-nord4 dark:hover:bg-nord3">
            <a href="https://aroke-ashen.vercel.app" target="_blank" smooth={true} duration={500}>More</a>
          </li>
        </ul>
        <button
          onClick={() => setDarkMode(!darkMode)}
          data-ripple-light="true" data-popover-target="menu"
          className="md:mr-2 mr-14 p-2 bg-gray-200 dark:bg-nord2 rounded-full shadow-md absolute top-2 right-2"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
        <div className="md:hidden mr-2" onClick={handleClick}>
          {!nav ? <IoMenu size={25} /> : <FaTimes size={22} />}
        </div>
      </div>
      {nav && (
        <ul role="menu" data-popover="menu" data-popover-placement="bottom" class="w-full absolute z-10 min-w-[180px] overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none dark:bg-nord3 dark:text-nord4">
          <li role="menuitem"
            class="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            <Link onClick={handleClick} to="hero" smooth={true} duration={500}>Home</Link>
          </li>
          <li role="menuitem"
            class="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link>
          </li>
          <li role="menuitem"
            class="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            <Link onClick={handleClick} to="projects" smooth={true} duration={500}>Projects</Link>
          </li>
          <li role="menuitem"
            class="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link>
          </li>
          <li role="menuitem"
            class="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;

