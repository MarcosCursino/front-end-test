import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { OrderItemProps, ParamsProps } from '../../core/orderDetail';
import { OrdemItem } from '../../pages/DetailOrder/Components/OrderItem';
import { API_URL } from '../../env';

export function DetailOrder() {
  const [order, setOrder] = useState<OrderItemProps[]>([]);
  const { id } = useParams<ParamsProps>()

  useEffect(() => {
    fetch(`${API_URL}/${id}.json`)
      .then(response => response.json())
      .then(data => {
        setOrder([data])
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro: " + err);
      });
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <OrdemItem order={order} />
    </>
  );
}
