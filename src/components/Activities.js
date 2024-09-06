// src/components/Projects.js
import React from 'react';
import ProjectCard from './ProjectCard'; // We'll create this component next
// import project1 from '../assets/images/project1.png'; // Add your project images
// import project2 from '../assets/images/project2.png';
// import project3 from '../assets/images/project3.png';

const Activities = () => {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A brief description of Project One.',
//      image: project1,
      demo: 'https://demo1.com',
      github: 'https://github.com/yourusername/project-one',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A brief description of Project Two.',
//      image: project2,
      demo: 'https://demo2.com',
      github: 'https://github.com/yourusername/project-two',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A brief description of Project Three.',
//      image: project3,
      demo: 'https://demo3.com',
      github: 'https://github.com/yourusername/project-three',
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50  text-nord0 dark:bg-nord3 dark:text-nord4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Activities</h2>
        <div className="flex flex-wrap -mx-4">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
