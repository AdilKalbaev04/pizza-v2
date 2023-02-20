import { ControlItem } from './ControlItem/ControlItem';
import styles from './Controls.module.css';

export const Controls = ({
  ings,
  price,
  add,
  remove,
  purchasable,
  ordered,
}) => {
  return (
    <div>
      <h2 className={styles.title}>Выберите ингредиенты</h2>
      <div className={styles.controls}>
        {Object.keys(ings).map((type) => {
          return (
            <ControlItem
              key={type}
              type={type}
              title={ings[type].name}
              count={ings[type].count}
              add={() => add(type)}
              remove={(event) => remove(type, event)}
            />
          );
        })}
      </div>

      <div className={styles.price}>
        Общая стоимость: <span>{price}</span> сом
      </div>

      <div className={styles.pizzaOrder}>
        <button
          className={styles.pizzaOrderBtn}
          disabled={!purchasable}
          onClick={ordered}
        >
          Оформить заказ
        </button>
      </div>
    </div>
  );
};
