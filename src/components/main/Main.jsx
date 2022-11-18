import { useState } from 'react';
import cl from './main.module.css';
import ItemsSection from './ItemsSection';
import CompareSection from './CompareSection';

const Main = () => {

  const initState = {
    select: false,
    value: '',
    src: '',
  };
  const [selectedItem, setSelectedItem] = useState(initState);

  const handlerSelectedItem = (item) => setSelectedItem({
    select: true,
    value: item.value,
    src: item.src,
  });


  return (
    <main className={cl.main}>
      {
        selectedItem.select 
          ?
          <CompareSection item = {selectedItem} resetGame = {setSelectedItem}/>
          :
          <ItemsSection handlerSelectedItem={handlerSelectedItem}/>
      }
    </main>
  );
};

export default Main;