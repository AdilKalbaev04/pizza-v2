import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Controls } from '@/components/Controls/Controls';
import OrderInfo from '@/components/Pizza/OrderInfo/OrderInfo';
import { Pizza } from '@/components/Pizza/Pizza';
import Modal from '@/components/UI/Modal/Modal';
import { addIng, removeIng } from '@/store/reducers/pizza.reducer';

import styles from './PizzaBuilder.module.css';

const PizzaBuilder = () => {
  const { ings, price } = useSelector((store) => store.pizza);

  const [isPurchasing, setIsPurchasing] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addIngredient = (type) => {
    dispatch(addIng(type));
  };

  const removeIngredient = (type, event) => {
    event.stopPropagation();
    dispatch(removeIng(type));
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
    // setPrice(100);
    // setIngs((ings) => {
    //   const copy = JSON.parse(JSON.stringify(ings));
    //   for (const ingKey in copy) {
    //     copy[ingKey].count = 0;
    //   }
    //   return copy;
    // });
    setIsPurchasing(false);
  };

  const purchaseContunieHandler = () => navigate('/checkout');

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
