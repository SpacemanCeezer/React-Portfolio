import React from 'react';
import profileImage from '../assets/gon.webp';

const AboutMe = () => {
  return (
    <div style={containerStyle}>
      <img src={profileImage} alt="Profile" style={imageStyle} />
      <h2>About Me</h2>
      <p>
        Hi there! I'm Cesar Castro, a passionate software developer with a love for creating innovative and efficient solutions.
        My journey in the world of programming began with Javascript.
      </p>
      <p>
        I specialize in React, Node.js, and MongoDB. I'm constantly learning, and I enjoy tackling challenges that
        require creative problem-solving. Whether it's building user-friendly web applications or optimizing backend processes,
        I strive for excellence in every project.
      </p>
      <p>
        When I'm not coding, you can find me [mention any hobbies or interests related to technology or your personality].
        I believe in the power of continuous learning and staying up-to-date with the latest trends in the tech industry.
        Let's connect and build something amazing together!
      </p>
    </div>
  );
};

const containerStyle = {
  background: '#f4f4f4',
  padding: '1.5rem',
  margin: '1rem 0',
  borderRadius: '8px',
  textAlign: 'center', // Center align content
};

const imageStyle = {
  width: '150px', // Adjust image width as needed
  borderRadius: '50%', // Make the image circular
  marginBottom: '1rem', // Add some space below the image
};

export default AboutMe;