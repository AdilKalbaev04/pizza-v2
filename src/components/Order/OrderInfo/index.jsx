import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Loader } from '@/components/UI/Loader/Loader';
import { orderFetchById } from '@/store/reducers/order.reducer';

import { Item } from '../Item';

export const OrderInfo = () => {
  const { loading, currentOrder, errors } = useSelector(
    (store) => store.orders
  );

  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderFetchById(params.id));
  }, [params.id]);

  if (loading) return <Loader />;

  if (errors) return <h1>{errors.message}</h1>;

  return currentOrder && <Item number={1} {...currentOrder} />;
};
