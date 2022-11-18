import cl from './footer.module.css';
import rules from '../../images/image-rules.svg';
import close from '../../images/icon-close.svg';

const Modal = ({visible, setVisible}) => {

  const modalClasses = [cl.modal];
    
  if (visible) {
    modalClasses.push(cl.active);
  };

  const handlerVisibility = () => {
    setVisible(false);
  };
    
  return (
    <section 
      className={modalClasses.join(' ')} 
      onClick={handlerVisibility}
    >
      <div 
        className={cl.modalContent}
        onClick={(e)=>e.stopPropagation()}
      >
        <h2 className={cl.h2}>rules</h2>
        <img 
          className={cl.img}
          src={rules} 
          alt="rules"/>
        <button
          className={cl.closeButton}
          onClick = {handlerVisibility}
        > 
          <img src={close} alt="close" />
        </button>
      </div> 
    </section>
  );
};

export default Modal;