import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchOrderItem } from '@/api/request';
import { Loader } from '@/components/UI/Loader/Loader';

import { Item } from '../Item';

export const OrderInfo = () => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    fetchOrderItem(params.id)
      .then((data) => {
        setOrder(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params.id]);

  if (loading) return <Loader />;

  return <Item number={1} {...order} />;
};
