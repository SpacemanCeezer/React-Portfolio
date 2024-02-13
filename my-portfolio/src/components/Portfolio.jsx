import React from 'react';
import recipeasy from '../assets/recipeasy.png';
import gamehub from '../assets/gamehub.png';
import project3Image from '../assets/project3.png'; 
import socialnetwork from '../assets/socialnetwork.png';
import ecommerce from '../assets/ecommerce.png';
import svg from '../assets/svg.png';

const Portfolio = () => {
  return (
    <section>
      <h2 className="portfolio-heading">Portfolio</h2>
      <div className="project-container">
        <div className="project">
          <a href="https://recipeasy-7c2ada1905ec.herokuapp.com">
            <img src={recipeasy} alt="Recipeasy" />
            <h3>Recipeasy</h3>
            <p>An app made to search recipes using the ingredients in your kitchen.</p>
          </a>
        </div>
        <div className="project">
          <a href="https://github.com/crockevin/Game-Hub?tab=readme-ov-file">
            <img src={gamehub} alt="Game Hub" />
            <h3>Game Hub</h3>
            <p>Brief description of Game Hub.</p>
          </a>
        </div>
        <div className="project">
          <a href="https://github.com/SpacemanCeezer/SQL-Employee">
            <img src={project3Image} alt="Project 3" />
            <h3>Employee Tracker</h3>
            <p>This is CMS for a company to be able to view easily view their employee database. </p>
            <p> It can be used to View 'Departments, Roles, and Employees (Salaries and Managers). This CMS can also be used to update said items.</p>
          </a>
        </div>
        <div className="project">
          <a href="https://github.com/SpacemanCeezer/Social-Network">
            <img src={socialnetwork} alt="Project 4" />
            <h3>Social Network API</h3>
            <p>This Social Network API allows the user to model the basic functions of modern day social media, </p>
              <p>where users can add their friends and post thoughts so those friends can react to them, or view those friends thoughts.</p>
          </a>
        </div>
        <div className="project">
          <a href="https://github.com/SpacemanCeezer/E-Commerce">
            <img src={ecommerce} alt="Project 5" />
            <h3>E-Commerce API</h3>
            <p>This E-Commerce site uses a backend API to keep track of its Tags, Categories, and Products using the latest technologies. </p>
          </a>
        </div>
        <div className="project">
          <a href="https://github.com/SpacemanCeezer/SVG-gen">
            <img src={svg} alt="Project 6" />
            <h3>SVG Generator</h3>
            <p>This is a simple SVG generator.</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;