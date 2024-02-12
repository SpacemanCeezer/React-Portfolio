import React from 'react';
import profileImage from '../assets/gon.webp';

const AboutMe = () => {
  return (
    <div style={containerStyle}>
      <img src={profileImage} alt="Profile" style={imageStyle} />
      <h2>About Me</h2>
          <p>My journey into web development began with a desire to channel my technical skills and creative energy into meaningful projects.</p>
          <p> Through self-study, intensive training programs, and real-world experience, I've honed my abilities in HTML, CSS, JavaScript, React, and beyond.</p>
          <p>In addition to my technical skills, I bring strong communication skills, teamwork, and leadership experience cultivated during my service.</p>
          <p> I understand the importance of clear communication, adaptability, and staying calm under pressure – qualities that are invaluable in the fast-paced world of web development.</p>

          <p>I am excited about the opportunity to bring my unique perspective and skill set to your team, contributing to innovative projects and driving success in a collaborative environment.</p>
          <p> Let's connect and explore how my background and expertise can help achieve your company's goals.</p>
      
    </div>
  );
};

const containerStyle = {
  background: '#c4be6a',
  padding: '1.5rem',
  margin: '1rem 0',
  borderRadius: '8px',
  textAlign: 'center', 
  border: '2px solid #000000', 
};

const imageStyle = {
  width: '150px', 
  borderRadius: '50%', 
  marginBottom: '1rem', 
};

export default AboutMe;
