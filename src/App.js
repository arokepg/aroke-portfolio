import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

import Navbar from "./components/Navbar.js"
import About from "./components/About.js"
import Hero from "./components/Hero.js"
import Activities from "./components/Activities.js"
import Skills from "./components/Skills.js"
import Contact from "./components/Contact.js"
import Footer from "./components/Footer.js"

const App = () => {
  useEffect(() => {
    ReactGA.initialize('YOUR_GOOGLE_ANALYTICS_TRACKING_ID');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Helmet>
        <title>Aroke</title>
        <meta name="description" content="Website of Aroke, a tech enthusiasm student" />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Activities />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
