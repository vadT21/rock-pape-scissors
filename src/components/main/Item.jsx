import React from 'react';
import cl from './style.module.css';

const Item = ({src, onClick, value='default'}) => {
  const item = {
    src,
    value,
  };

  const handler = (value, func) => {
    if (func){
      func(value);
    }
  };

  return (
    <div 
      className={cl[value]} 
      onClick={() => handler(item, onClick)}
    >
      {
        src &&
          <img  src={src} alt={value}/>
      }
    </div>
  );
};

export default Item;