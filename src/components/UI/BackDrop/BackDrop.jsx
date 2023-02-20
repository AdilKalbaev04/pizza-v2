import styles from './BackDrop.module.css';

const BackDrop = ({ isVisible, close }) => {
  return isVisible && <div className={styles.backDrop} onClick={close} />;
};

export default BackDrop;
