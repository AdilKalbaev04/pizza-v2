import { Logo } from '../Logo';
import { Navigation } from '../Navigation';
import styles from './Toolbar.module.css';

export const Toolbar = () => {
  return (
    <header className={styles.toolbar}>
      <Logo />
      <Navigation />
    </header>
  );
};
