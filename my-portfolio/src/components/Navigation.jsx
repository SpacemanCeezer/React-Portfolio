import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav style={navStyle}>
      <NavLink to="/about-me" style={linkStyle}>About Me</NavLink>
      <NavLink to="/portfolio" style={linkStyle}>Portfolio</NavLink>
      <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
      <NavLink to="/resume" style={linkStyle}>Resume</NavLink>
    </nav>
  );
};

const navStyle = {
  background: '#333',
  padding: '1rem',
  textAlign: 'center',
  border: '2px solid black', 
  borderRadius: '5px',
};

const linkStyle = {
  color: '#fff',
  margin: '0 1rem',
  textDecoration: 'none',
};

export default Navigation;