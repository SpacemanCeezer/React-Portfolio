import React from 'react';
import recipeasy from '../assets/recipeasy.png';
import gamehub from '../assets/gamehub.png';

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
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
            <img src={gamehub} alt="Project 2" />
            <h3>Game Hub</h3>
            <p>Brief description of Project 2.</p>
          </a>
        </div>
        <div className="project">
          <a href="project3-link">
            <img src="project3-image" alt="TBD" />
            <h3>Work in Progress</h3>
            <p>TBD</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;