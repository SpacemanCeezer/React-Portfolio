import React from 'react';
import pdf from '../assets/Cesar_Castro_Resume.pdf';
import resume from '../assets/resume.png';

const Resume = () => {
  return (
    <section className="resume-section">
      <h2>Resume</h2>
      <div className="resume-content">
        <img src={resume} alt="Resume Preview" />
        <a href={pdf} target="_blank" rel="noopener noreferrer" className="resume-download-button">Download Resume</a>
      </div>
    </section>
  );
};

export default Resume;