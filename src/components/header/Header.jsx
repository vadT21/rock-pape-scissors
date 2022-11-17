import React from 'react';
import './style.module.css';
import logo from '../../images/logo.svg';
import { useSelector } from 'react-redux';

const Header = () => {

  const title = 'ROCK, PAPER, SCISSORS';
  const score = useSelector(state => state.score.score);
  return (
    <header>
      <h1>{title}</h1>
      <img src={logo} alt="logo" />
      <section>
        <h2>
          SCORE
        </h2>
        <span>
          {
            score
          }
        </span>
      </section>
    </header>
  );
};

export default Header;