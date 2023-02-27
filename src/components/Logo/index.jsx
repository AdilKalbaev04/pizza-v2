import styles from './Logo.module.css';
import LogoImage from './logo.png';

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <img className={styles.image} src={LogoImage} alt="Pizza Builder" />
    </div>
  );
};
