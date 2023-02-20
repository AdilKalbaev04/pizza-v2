import cn from 'clsx';

import BackDrop from './../BackDrop/BackDrop';
import styles from './Modal.module.css';

const Modal = ({ children, isVisible, close }) => {
  return (
    <>
      <BackDrop isVisible={isVisible} close={close} />
      <div className={cn(styles.modal, isVisible && styles.show)}>
        {children}
      </div>
    </>
  );
};

export default Modal;
