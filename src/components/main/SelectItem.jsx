import React, { useState, useEffect } from 'react';
import cl from './style.module.css';
import Item from './Item';
import iconRock from '../../images/icon-rock.svg';
import iconPaper from '../../images/icon-paper.svg';
import iconScissors from '../../images/icon-scissors.svg';
import { compareElements, getRandomArbitrary } from '../../game/logics';
import { useDispatch } from 'react-redux';
import { addScore } from '../../store/scoreReducer';

const SelectItem = ({item, resetGame}) => {

  const [selectedHouseItem, setSelectedHouseItem] = useState({});
  const [state, setState] = useState('')
  const dispatch = useDispatch()
  const handlerSelectedItem = (item) => setSelectedHouseItem({
    value: item.value,
    src: item.src,
  });
  const rock = {
    value: 'rock',
    src: iconRock,
  };
  const paper = {
    value: 'paper',
    src: iconPaper,
  };
  const scissors = {
    value: 'scissors',
    src: iconScissors,
  };

  const pickedHouse = (value) => {
    switch(value){
    case 1: return handlerSelectedItem(rock);
    case 2: return handlerSelectedItem(paper);
    case 3: return handlerSelectedItem(scissors);
    default: return;
    };
  };

  useEffect(() => {
    pickedHouse(getRandomArbitrary(1, 4));
  }, []);

  useEffect(()=> {
    setState(compareElements(item, selectedHouseItem));
  }, [selectedHouseItem])

  const playAgain = () => {
    if (state === 'win'){
      dispatch(addScore());
    }
    resetGame({
      select: false,
    });
  }

  return (
    <div className={cl.selectContainer}>
      <div className={cl.game}>
        <Item 
          value = {item.value}
          src = {item.src}
        />
        <p>you picked</p>
      </div>
      <div className={cl.game}>
        <Item 
          value = {selectedHouseItem.value}
          src = {selectedHouseItem.src}
        />
        <p>the house picked</p>
      </div> 
      <div>{state}</div>  
      <button onClick = {playAgain}>play again</button> 
    </div>
  );
};

export default SelectItem;