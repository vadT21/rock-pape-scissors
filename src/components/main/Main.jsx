import {useState} from 'react';
import './style.module.css';
import ListItems from './ListItems';
import SelectItem from './SelectItem';

const Main = () => {

    const initState = {
        select: false,
        value: '',
        src: '',
    }
  const [selectedItem, setSelectedItem] = useState(initState);

  const handlerSelectedItem = (item) => setSelectedItem({
    select: true,
    value: item.value,
    src: item.src,
  });


  return (
    <main>
    {
        selectedItem.select 
        ?
        <SelectItem />
        :
        <ListItems handlerSelectedItem={handlerSelectedItem}/>
    }
      
      
      <span>{selectedItem.value}</span>
    </main>
  );
};

export default Main;