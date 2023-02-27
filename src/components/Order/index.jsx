import { Item } from './Item';
import styles from './style.module.css';

export const OrderList = ({ orders }) => {
  return (
    <ul className={styles.list}>
      {orders.map((item, index) => {
        return <Item key={item.id} number={index + 1} {...item} />;
      })}
    </ul>
  );
};
