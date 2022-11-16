import React from 'react';
import cl from './style.module.css';

const Header = () => {

  const title = `
    ROCK  
    PAPER 
    SCISSORS
  `;

  return (
    <header>
      <h1>{title}</h1>
      <section className={cl.score}>
        <h2>
          SCORE
        </h2>
        <span>
            12
        </span>
      </section>
    </header>
  );
};

export default Header;