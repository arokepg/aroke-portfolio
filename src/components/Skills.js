// src/components/Skills.js
import React from 'react';
import { FaReact, FaJsSquare, FaPython, FaLinux  } from 'react-icons/fa';

import { SiValorant, SiGnubash  } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: 'Python', icon: <FaPython size={40} color="#5E81AC" /> },
    { name: 'JavaScript', icon: <FaJsSquare size={40} color="#EBCB8B" /> },
    { name: 'Linux', icon: <FaLinux size={40} /> },
    { name: 'React', icon: <FaReact size={40} color="#88C0D0" /> },
    { name: 'Valorant', icon: <SiValorant size={40} color="#BF616A" /> },
    // Add more skills as needed
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 text-nord0 dark:bg-nord2 dark:text-nord4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center mx-5 m-4">
              {skill.icon}
              <p className="mt-2 text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
