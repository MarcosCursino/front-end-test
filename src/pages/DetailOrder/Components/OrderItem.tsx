import React from 'react';
import { Link } from 'react-router-dom';

import styles from './DetailOrder.module.scss';
import Clear from '../../../assets/clear.svg';
import { toCurrency } from '../../../core/number';
import { OrderItemProps } from '../../../core/orderDetail';

export function OrdemItem({ order }: { order: OrderItemProps[] }) {
  return (
    <>
      {order.map(order => (
        <div className={styles.container} key={order.id}>
          <div className={styles.containerName}>
            <h2>OLÁ, {order.name}</h2>
            <Link to="/">
              <img src={Clear} alt="Sair" width="30" height="30" />
            </Link>
          </div>

          <section className={styles.containerItens}>
            <div className={styles.containerOrderNumber}>
              <strong>NÚMERO DO PEDIDO</strong>
              <span>{order.id}</span>
            </div>

            <div className={styles.resumeOrder}>
              <strong>RESUMO DA COMPRA</strong>
              <div className={styles.divider} />

              {order.items.map(item => (
                <div className={styles.containerOrderItens} key={item.name}>
                  <span>
                    {item.qty}x {item.name}
                  </span>
                  <span>{toCurrency(item.price)}</span>
                  <div className={styles.divider} />
                </div>
              ))}
            </div>

            <div className={styles.containerDelivery}>
              <div className={styles.containerInfo}>
                <span>Prazo de entrega</span>
                <span>
                  de {order.freight.from} a {order.freight.to} dias
                </span>
              </div>

              <div className={styles.containerInfo}>
                <span>Frete</span>
                <span>{toCurrency(order.freight.price)}</span>
              </div>

              <div className={styles.containerInfo}>
                <strong>Total</strong>
                <strong>{toCurrency(order.total)}</strong>
              </div>

              <div className={styles.divider} />
            </div>

            <div className={styles.containerFollowUp}>
              <strong>ACOMPANHE SEU PEDIDO</strong>

              <div
                className={`${styles.followUpItem} 
                ${order.status === 'Aguardando pagamento'
                    ? styles.active
                    : styles.inactive
                  }`}
              >
                <div></div>
                <strong>AGUARDANDO PAGAMENTO</strong>
              </div>

              <div
                className={`${styles.followUpItem}
                ${order.status === 'Pagamento aprovado'
                    ? styles.active
                    : styles.inactive
                  }`}
              >
                <div></div>
                <strong>PAGAMENTO APROVADO</strong>
              </div>

              <div
                className={`${styles.followUpItem}
                ${order.status === 'Pedido em separação'
                    ? styles.active
                    : styles.inactive
                  }`}
              >
                <div></div>
                <strong>PEDIDO EM SEPAÇÃO</strong>
              </div>

              <div
                className={`${styles.followUpItem}
                ${order.status === 'Pedido em transporte'
                    ? styles.active
                    : styles.inactive
                  }`}
              >
                <div></div>
                <strong>PEDIDO EM TRANSPORTE</strong>
              </div>

              <div
                className={`${styles.followUpItem}
               ${order.status === 'Pedido entregue'
                    ? styles.active
                    : styles.inactive
                  }`}
              >
                <div></div>
                <strong>PEDIDO ENTREGUE</strong>
              </div>
            </div>

            <div className={styles.containerDeliver}>
              <strong>ENDEREÇO DE ENTREGA</strong>
              <span>
                {order.address.street}, {order.address.number}
              </span>
              <span>
                {order.address.city} - {order.address.state} -
                {order.address.postcode}
              </span>
            </div>

            <div
              className={`${styles.containerDeliver} ${styles.containeterPagament}`}
            >
              <strong>FORMA DE PAGAMENTO</strong>
              <span>{order.payment_method}</span>
            </div>
          </section>
        </div>
      ))}
    </>
  );
}
