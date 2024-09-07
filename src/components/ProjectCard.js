// src/components/ProjectCard.js
import React from 'react';
import { FaExternalLinkAlt, FaGithub  } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <div className="w-full md:w-1/3 px-4 mb-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <div className="flex justify-between">
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-500 flex items-center">
              Live Demo <FaExternalLinkAlt className="ml-1" />
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 flex items-center">
              GitHub <FaGithub className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
