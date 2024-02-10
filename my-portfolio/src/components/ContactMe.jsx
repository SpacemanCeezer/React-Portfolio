import React from 'react';
import '../profile.css'; 
import yourImage from '../assets/gon.webp'; 
import emailIcon from '../assets/email.png'; 
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png'; 

const ContactMe = () => {
  return (
    <div className="contact-me-container">
      <div className="card-client">
        <div className="user-picture">
          <img src={yourImage} alt="Cesar Castro" className="user-image" />
        </div>
        <div className="name-client">
          <p>Cesar Castro</p>
          <span>Contact Me</span>
        </div>
        <div className="social-media">
          <a href="mailto:cesarocastro321@gmail.com" title="Email">
            <img src={emailIcon} alt="Email" />
            <span className="tooltip-social">Email</span>
          </a>
          <a href="https://www.linkedin.com/in/cesar-castro-3450232b2/" title="LinkedIn">
            <img src={linkedinIcon} alt="LinkedIn" />
            <span className="tooltip-social">LinkedIn</span>
          </a>
          <a href="https://github.com/SpacemanCeezer" title="GitHub">
            <img src={githubIcon} alt="GitHub" />
            <span className="tooltip-social">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;