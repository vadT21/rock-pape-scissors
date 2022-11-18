import Item from './Item';
import cl from './main.module.css';
import { ROCK, PAPER, SCISSORS } from '../../constants';


const ItemsSection = ({handlerSelectedItem}) => {
  return (
    <section className={cl.listContainer}>
      <Item 
        onClick={handlerSelectedItem}
        {...ROCK}
      />
      <Item 
        onClick={handlerSelectedItem}
        {...PAPER}
      />
      <Item 
        onClick={handlerSelectedItem}
        {...SCISSORS}
      />
    </section>
  );
};

export default ItemsSection;