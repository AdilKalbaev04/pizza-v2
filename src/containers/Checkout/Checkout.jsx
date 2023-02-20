import React, { useState } from 'react';

import CheckoutSummary from '@/components/Order/CheckoutSummary/CheckoutSummary';

import styles from './Checkout.module.css';

const Checkout = () => {
  const [ings, setIngs] = useState({
    cheese: { count: 1 },
    olives: { count: 1 },
    sausage: { count: 1 },
    mushrooms: { count: 1 },
  });
  return (
    <div className={styles.checkout}>
      <CheckoutSummary ings={ings} />
    </div>
  );
};

export default Checkout;
