import React, { useEffect, useState } from 'react';

import { fetchOrders } from '@/api/request';
import { OrderList } from '@/components/Order';
import { Loader } from '@/components/UI/Loader/Loader';

export const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders()
      .then((data) => {
        setOrders(
          Object.keys(data)
            .map((key) => {
              return {
                ...data[key],
                id: key,
              };
            })
            .reverse()
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  return <OrderList orders={orders} />;
};
