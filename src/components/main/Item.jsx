import React from 'react';
import cl from './style.module.css';

const Item = ({src, onClick, value}) => {
    const item = {
        src,
        value,
    }
  return (
    <div 
      className={cl[value]} 
      onClick={() => onClick(item)}
    >
      <img  src={src} alt="rock"/>
    </div>
  );
};

export default Item;