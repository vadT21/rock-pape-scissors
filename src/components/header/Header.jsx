import React from 'react';
import cl from './header.module.css';
import logo from '../../images/logo.svg';
import { useSelector } from 'react-redux';

const Header = () => {

  const title = 'ROCK, PAPER, SCISSORS';
  const score = useSelector(state => state.score.score);
  return (
    <header className={cl.header}>
      <h1 className={cl.h1}>{title}</h1>
      <img 
        className={cl.img}
        src={logo} 
        alt="logo" 
      />
      <section className={cl.section}>
        <h2 className={cl.h2}>
          SCORE
        </h2>
        <span className={cl.span}>
          {
            score
          }
        </span>
      </section>
    </header>
  );
};

export default Header;