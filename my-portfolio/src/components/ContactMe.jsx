import React, { useState } from 'react';
import '../profile.css'; 
import yourImage from '../assets/gon.webp'; 
import emailIcon from '../assets/email.png'; 
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png'; 

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
    if (!email) {
      setEmailError('Email is required');
    } else if (!isValidEmail(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
    if (name && email && isValidEmail(email)) {
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(true);
    }
  };

  const isValidEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

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
          <a href="mailto:cesarocastro115@gmail.com" title="Email">
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
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => !name && setNameError('Name is required')}
            />
            {nameError && <p className="error-message">{nameError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => !email && setEmailError('Email is required')}
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        {submitted && <p className="success-message">Form submitted successfully!</p>}
      </div>
    </div>
  );
};

export default ContactMe;