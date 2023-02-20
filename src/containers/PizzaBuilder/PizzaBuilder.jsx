import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Controls } from '@/components/Controls/Controls';
import OrderInfo from '@/components/Pizza/OrderInfo/OrderInfo';
import { Pizza } from '@/components/Pizza/Pizza';
import Modal from '@/components/UI/Modal/Modal';

import styles from './PizzaBuilder.module.css';

const PizzaBuilder = () => {
  const [ings, setIngs] = useState({
    cheese: { name: 'Сыр', price: 15, count: 0 },
    olives: { name: 'Оливки', price: 25, count: 0 },
    sausage: { name: 'Колбаса', price: 35, count: 0 },
    mushrooms: { name: 'Грибы', price: 20, count: 0 },
  });
  const [price, setPrice] = useState(100);
  const [isPurchasing, setIsPurchasing] = useState(false);

  const navigate = useNavigate();

  const addIngredient = (type) => {
    setIngs((ings) => {
      const ing = { ...ings[type] };
      ing.count++;

      return {
        ...ings,
        [type]: { ...ing },
      };
    });
    setPrice((price) => price + ings[type].price);
  };

  const removeIngredient = (type, event) => {
    event.stopPropagation();

    setIngs((ings) => {
      const ing = { ...ings[type] };
      ing.count--;

      return {
        ...ings,
        [type]: { ...ing },
      };
    });
    setPrice((price) => price - ings[type].price);
  };

  const isPurchasable = (ings) => {
    const count = Object.values(ings).reduce((acc, item) => {
      return acc + item.count;
    }, 0);

    return count > 0;
  };

  const purchaseHandler = () => setIsPurchasing(true);

  const closeModal = () => {
    setIsPurchasing(false);
  };

  const purchaseCancelHandler = () => {
    setPrice(100);

    setIngs((ings) => {
      const copy = JSON.parse(JSON.stringify(ings));
      for (const ingKey in copy) {
        copy[ingKey].count = 0;
      }
      return copy;
    });

    setIsPurchasing(false);
  };

  const purchaseContunieHandler = () => {
    navigate({
      pathname: '/checkout',
      search: '?name=mike',
    });
  };

  return (
    <div className={styles.pizzaWrap}>
      <Modal isVisible={isPurchasing} close={closeModal}>
        <OrderInfo
          ings={ings}
          price={price}
          cancelled={purchaseCancelHandler}
          continued={purchaseContunieHandler}
        />
      </Modal>
      <Pizza ings={ings} />
      <Controls
        ings={ings}
        price={price}
        add={addIngredient}
        remove={removeIngredient}
        purchasable={isPurchasable(ings)}
        ordered={purchaseHandler}
      />
    </div>
  );
};

export default PizzaBuilder;
