import React from 'react';
import './style.module.css';
import logo from '../../images/logo.svg';

const Header = () => {

  const title = 'ROCK, PAPER, SCISSORS';

  return (
    <header>
      <h1>{title}</h1>
      <img src={logo} alt="logo" />
      <section>
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