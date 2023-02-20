import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import CheckoutSummary from '@/components/Order/CheckoutSummary/CheckoutSummary';

import styles from './Checkout.module.css';

const Checkout = () => {
  const [ings, setIngs] = useState({
    cheese: { count: 0 },
    olives: { count: 0 },
    sausage: { count: 0 },
    mushrooms: { count: 0 },
  });

  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const ings = {};

    for (const [ingName, count] of params.entries()) {
      ings[ingName] = { count: parseInt(count) };
    }

    setIngs(ings);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
