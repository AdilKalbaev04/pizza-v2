import Button from '@/components/UI/Button/Button';

import styles from './OrderInfo.module.css';

const OrderInfo = ({ ings, price, cancelled, continued }) => {
  return (
    <div className={styles.orderInfo}>
      <h3 className={styles.orderTitle}>
        Ваша пицца состоит из слудующих ингредиентов
      </h3>
      <ul className={styles.orderList}>
        {Object.keys(ings).map((ingItem) => {
          return (
            <li key={ings[ingItem].name} className={styles.orderItem}>
              <span>{ings[ingItem].name}</span>
              <span>{ings[ingItem].count}</span>
            </li>
          );
        })}
      </ul>
      <div className={styles.orderPrice}>
        {price} <strong>сом</strong>
      </div>
      <div>
        <Button type="danger" click={cancelled}>
          Отмена
        </Button>
        <Button type="success" click={continued}>
          Продолжить
        </Button>
      </div>
    </div>
  );
};

export default OrderInfo;
