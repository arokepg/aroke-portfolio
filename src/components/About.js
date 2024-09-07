// src/components/About.js
import React from 'react';
import profilePic from '../assets/images/profile.jpg'; // Add your profile picture in the specified path

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 text-nord1 dark:bg-nord1 dark:text-nord4 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <img src={profilePic} alt="Your Name" className="w-48 h-48 rounded-full border-4 border-nord0 dark:border-nord6 mx-auto md:mx-0 md:mr-16" />
        <div className="mt-8 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            I'm a student who have the enthusiasm in computer
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
