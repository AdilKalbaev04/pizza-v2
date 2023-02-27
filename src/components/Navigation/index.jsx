import { FaDolly, FaPizzaSlice } from 'react-icons/fa';

import { CustomLink } from './CustomLink';
import styles from './style.module.css';

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <CustomLink to="/" icon={<FaPizzaSlice />}>
        Конструктор пиццы
      </CustomLink>
      <CustomLink to="/orders" icon={<FaDolly />}>
        Заказы
      </CustomLink>
    </nav>
  );
};
