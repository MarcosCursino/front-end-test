import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import styles from './DetailOrder.module.scss';
import Clear from '../../assets/clear.svg';
import { API_URL } from '../../env';

type ParamsProps = {
  id: string;
}

type ItemsProps = {
  name: string;
  qty: number;
  price: number;
}

type CartProps  = {
  name: string;
  id: number;
  freight: {
    price: string
    from: number;
    to: number;
  }
  payment_method : string;
  total: string;
  status: string;
  items: ItemsProps[];
  address: {
    street: string;
    number: number;
    city: string;
    state: string;
    postcode: string;
  }
}

export function DetailOrder() {
  const [users, setUsers] = useState<CartProps[]>([]);
  const { id } = useParams<ParamsProps>()

  useEffect(() => {
    fetch(`${API_URL}/${id}.json`)
    .then(response => response.json())
    .then(data => {
      setUsers([data])
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro: " + err);
   });
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {users.map((cart) => (
        
      <div className={styles.container} key={cart.id}>
      
        <div className={styles.containerName}>
          <h2>OLÁ, {cart.name}</h2>
          <Link to="/" >
            <img 
              src={Clear} 
              alt="Sair" 
              width="30" 
              height="30"
            />
          </Link>
        </div>

        <section className={styles.containerItens}>
          <div className={styles.containerOrderNumber}>
            <strong>NÚMERO DO PEDIDO</strong>
            <span>{cart.id}</span>
          </div>

          <div className={styles.resumeOrder}>
            <strong>RESUMO DA COMPRA</strong>
            <div className={styles.divider} />

          {cart.items.map((item) => (
            <div className={styles.containerOrderItens} key={item.name}>
              <span>{item.qty}x {item.name}</span>
              <span>R$ {item.price}</span>
              <div className={styles.divider} />
            </div>
          ))}
          </div>

          <div className={styles.containerDelivery}>

            <div className={styles.containerInfo}>
              <span>Prazo de entrega</span>
              <span>de {cart.freight.from} a {cart.freight.to} dias</span>
            </div>

            <div className={styles.containerInfo}>
              <span>Frete</span>
              <span>R$ {cart.freight.price}</span>
            </div>

            <div className={styles.containerInfo}>
              <strong>Total</strong>
              <strong>R$ {cart.total}</strong>
            </div>

            <div className={styles.divider} />
          </div>

          <div className={styles.containerFollowUp}>
            <strong>ACOMPANHE SEU PEDIDO</strong>

            <div 
              className={`${styles.followUpItem} 
              ${cart.status === "Aguardando pagamento" ? 
              styles.active : styles.inactive}`}
             >
              <div></div>
              <strong>AGUARDANDO PAGAMENTO</strong>
            </div>

            <div 
              className={`${styles.followUpItem}
              ${cart.status === "Pagamento aprovado" ?
              styles.active : styles.inactive}`}
            >
              <div></div>
              <strong>PAGAMENTO APROVADO</strong>
            </div>

            <div 
              className={`${styles.followUpItem}
              ${cart.status === "Pedido em separação" ?
              styles.active : styles.inactive}`}
            >
              <div></div>
              <strong>PEDIDO EM SEPAÇÃO</strong>
            </div>

            <div 
              className={`${styles.followUpItem}
              ${cart.status === "Pedido em transporte" 
              ? styles.active : styles.inactive}`}
            >
              <div></div>
              <strong>PEDIDO EM TRANSPORTE</strong>
            </div>

            <div 
             className={`${styles.followUpItem}
             ${cart.status === "Pedido entregue" ?
             styles.active : styles.inactive}`}
            >
              <div></div>
              <strong>PEDIDO ENTREGUE</strong>
            </div>  
          </div>

          <div className={styles.containerDeliver}>
            <strong>ENDEREÇO DE ENTREGA</strong>
            <span>{cart.address.street}, {cart.address.number}</span>
            <span>{cart.address.city} - {cart.address.state} - {cart.address.postcode}</span>
          </div>
          
          <div className={`${styles.containerDeliver} ${styles.containeterPagament}`}>
            <strong>FORMA DE PAGAMENTO</strong>
            <span>{cart.payment_method}</span>
          </div>
          
        </section>
      </div>
      ))}
    </>
  );
}
