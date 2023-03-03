import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CheckoutSummary from '@/components/Order/CheckoutSummary/CheckoutSummary';

import styles from './Checkout.module.css';

const Checkout = () => {
  const ings = useSelector((store) => store.pizza.ings);

  const navigate = useNavigate();
  const cancelCheckout = () => {
    navigate('/');
  };
  const continueCheckout = () => {
    navigate('/checkout/contact-data');
  };

  return (
    <div className={styles.checkout}>
      <CheckoutSummary
        ings={ings}
        cancel={cancelCheckout}
        ordered={continueCheckout}
      />
    </div>
  );
};

export default Checkout;
