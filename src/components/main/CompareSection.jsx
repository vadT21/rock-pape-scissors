import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import cl from './main.module.css';
import Item from './Item';
import { compareElements, getRandomArbitrary } from '../../game/logics';
import { addScore } from '../../store/scoreReducer';
import { PAPER, ROCK, SCISSORS } from '../../constants';

const CompareSection = ({item, resetGame}) => {

  const [selectedHouseItem, setSelectedHouseItem] = useState({});
  const [comparisonResult, setComparisonResult] = useState('');
  const dispatch = useDispatch();

  const handlerSelectedItem = (item) => setSelectedHouseItem({
    value: item.value,
    src: item.src,
  });

  const pickedHouse = (value) => {
    switch(value){
    case 1: return handlerSelectedItem(ROCK);
    case 2: return handlerSelectedItem(PAPER);
    case 3: return handlerSelectedItem(SCISSORS);
    default: return;
    };
  };

  useEffect(() => {
    pickedHouse(getRandomArbitrary(1, 4));
  }, []); // eslint-disable-line 

  useEffect(()=> {
    setComparisonResult(compareElements(item, selectedHouseItem));
  }, [item, selectedHouseItem]);

  const playAgain = () => {
    if (comparisonResult === 'win'){
      dispatch(addScore());
    }
    resetGame({
      select: false,
    });
  };

  return (
    <section className={cl.selectContainer}>
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
      <div className={cl.total}>
        {
          comparisonResult === 'draw'
            ?
            <h2 className={cl.results}>{comparisonResult}</h2>
            :
            <h2 className={cl.results}>you {comparisonResult}</h2>
        }
        <button className={cl.playAgain} onClick = {playAgain}>play again</button> 
      </div>
    </section>
  );
};

export default CompareSection;