// src/components/Projects.js
import React from 'react';
import ProjectCard from './ProjectCard';

// import project1 from '../assets/images/project1.png'; // Add your project images
// import project2 from '../assets/images/project2.png';
// import project3 from '../assets/images/project3.png';

const Activities = () => {
  const projects = [
    {
      id: 1,
      title: 'FCT Club',
      description: 'A brief description of Project One.',
//      image: project1,
    },
    {
      id: 2,
      title: 'Tin Hoc Tre',
      description: 'A brief description of Project Two.',
//      image: project2,
    },
    {
      id: 3,
      title: 'Rubiks Community',
      description: 'A brief description of Project Three.',
//      image: project3,
    },
  ];

  return (
    <section id="projects" className="py-20  bg-gray-50  text-nord0 dark:bg-nord3 dark:text-nord4">
      <div className="container md:mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Activities</h2>
        <div className="flex flex-wrap md:-mx-3">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
