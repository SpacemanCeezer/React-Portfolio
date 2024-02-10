import React from 'react';
import profileImage from '../assets/gon.webp';

const AboutMe = () => {
  return (
    <div style={containerStyle}>
      <img src={profileImage} alt="Profile" style={imageStyle} />
      <h2>About Me</h2>
      <p>Hey there, I'm a web developer with a solid background in military service. Transitioning from the military to the world of web development might seem like a leap, but it's one that I've embraced with enthusiasm.</p>

<p>I pride myself on my attention to detail and problem-solving skills, traits that I honed during my time in service. Web development allows me to combine my love for technology with my passion for creating practical solutions.</p>

<p>Outside of coding, you can find me enjoying the outdoors, exploring new hiking trails, or catching up on the latest tech trends. Let's connect and see how we can collaborate on some exciting projects!</p>

      
      
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
