import React from 'react';
import cl from './style.module.css';
import iconRock from '../../images/icon-rock.svg';
import iconPaper from '../../images/icon-paper.svg';
import iconScissors from '../../images/icon-scissors.svg';
import Item from './Item';

const SelectItem = () => {
  return (
    <div className={cl.selectContainer}>
        <Item 
        onClick={() => console.log(1)}
        value = "rock"
        src = {iconRock}
      />
      <Item 
        onClick={() => console.log(1)}
        value = "paper"
        src = {iconPaper}
      />
    </div>
  );
};

export default SelectItem;