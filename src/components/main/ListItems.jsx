import React from 'react';
import iconRock from '../../images/icon-rock.svg';
import iconPaper from '../../images/icon-paper.svg';
import iconScissors from '../../images/icon-scissors.svg';
import Item from './Item';
import cl from './main.module.css';

const ListItems = ({handlerSelectedItem}) => {
  return (
    <div className={cl.listContainer}>
      <Item 
        onClick={handlerSelectedItem}
        value = "rock"
        src = {iconRock}
      />
      <Item 
        onClick={handlerSelectedItem}
        value = "paper"
        src = {iconPaper}
      />
      <Item 
        onClick={handlerSelectedItem}
        value = "scissors"
        src = {iconScissors}
      />
    </div>
  );
};

export default ListItems;