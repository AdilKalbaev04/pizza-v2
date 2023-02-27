import { useNavigate } from 'react-router-dom';

import styles from './style.module.css';

export const Item = ({ customer, ingredients, number, id }) => {
  const navigate = useNavigate();
  return (
    <li className={styles.item} onClick={() => navigate(`/orders/${id}`)}>
      <h3 className={styles.title}>
        Заказ <strong>#{number}</strong>
      </h3>
      <div className={styles.body}>
        <div className={styles.customer}>
          <h4 className={styles.title}>Инфо о заказчике:</h4>
          <ul className={styles.cutomerList}>
            <li className={styles.customerItem}>
              Имя: <span>{customer.name}</span>
            </li>
            <li className={styles.customerItem}>
              Email: <span>{customer.email}</span>
            </li>
            <li className={styles.customerItem}>
              Адрес: <span>{customer.address}</span>
            </li>
            <li className={styles.customerItem}>
              Телефон: <span>{customer.tel}</span>
            </li>
          </ul>
        </div>
        <div className={styles.ingredients}>
          <h4 className={styles.ingredientsTitle}>Ингредиенты</h4>
          <ul className={styles.ingredientsList}>
            {Object.keys(ingredients).map((ingName) => {
              return (
                <li key={ingName} className={styles.ingredientsItem}>
                  {ingName}: <span>{ingredients[ingName].count}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </li>
  );
};
