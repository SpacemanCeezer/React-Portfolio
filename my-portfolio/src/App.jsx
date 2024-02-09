import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/ContactMe';
import Resume from './components/Resume';
import './App.css';
import './profile.css';

const App = () => {
  return (
    <Router>
      
        <Header />
        <Navigation />
        <Routes>
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={<AboutMe />} />
        </Routes>
      
    </Router>
  );
};



export default App;
