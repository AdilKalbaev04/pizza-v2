import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { OrderList } from '@/components/Order';
import { Loader } from '@/components/UI/Loader/Loader';
import { orderFetch } from '@/store/reducers/order.reducer';

export const Orders = () => {
  const { loading, orders } = useSelector((store) => store.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderFetch());
  }, []);

  if (loading) return <Loader />;

  if (!orders.length) return <h1>Заказов нет</h1>;

  return <OrderList orders={orders} />;
};
