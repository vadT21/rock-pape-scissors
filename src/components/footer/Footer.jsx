import {useState} from 'react';
import cl from './footer.module.css';
import Modal from './Modal';

const Footer = () => {
  const [visible, setVisible] = useState(false);

  const handlerVisibility = () => {
    console.log('change');
    setVisible(true);
  };


  return (
    <footer className={cl.footer}>
      <button 
        className={cl.button}
        onClick={handlerVisibility}  
      >
        RULES
      </button>
      <Modal 
        visible={visible}
        setVisible={setVisible}
      />
    </footer>
    
  );
};

export default Footer;