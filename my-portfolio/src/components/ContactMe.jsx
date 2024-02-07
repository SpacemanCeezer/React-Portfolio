import React from 'react';
import './ContactMe.css'; 
import yourImage from './path/to/your-image.jpg'; 
import emailIcon from './email-icon.png'; 
import linkedinIcon from './linkedin-icon.png';

const ContactMe = () => {
  return (
    <div className="card-client">
      <div className="user-picture">
        <img src={yourImage} alt="Your Name" className="user-image" />
      </div>
      <div className="name-client">
        <p>Your Name</p>
        <span>Contact Me</span>
      </div>
      <div className="social-media">
        {}
        <a href="mailto:you@example.com" title="Email">
          <img src={emailIcon} alt="Email" />
          <span className="tooltip-social">Email</span>
        </a>
        <a href="https://linkedin.com/in/yourprofile" title="LinkedIn">
          <img src={linkedinIcon} alt="LinkedIn" />
          <span className="tooltip-social">LinkedIn</span>
        </a>
        {}
      </div>
    </div>
  );
};

export default ContactMe;