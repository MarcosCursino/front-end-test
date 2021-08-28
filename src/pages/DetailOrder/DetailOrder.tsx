import React, { useEffect, useState } from "react";
import { API_URL } from '../../env';
import styles from './DetailOrder.module.scss';
import { Link, useParams } from 'react-router-dom'
import Testimonial03 from '../../assets/clear.svg'
  

type Props ={};

type ParamsProps = {
  id: string;
}

type OrderProps  = {
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
  items: CartItemsProps[];
  address: {
    street: string;
    number: number;
    city: string;
    state: string;
    postcode: string;
  }
}

type CartItemsProps = {
  name: string;
  qty: number;
  price: number;
}


export function DetailOrder(props: Props) {
  const [users, setUsers] = useState<OrderProps[]>([]);
  const { id } = useParams<ParamsProps>()


  useEffect(() => {
    fetch(`${API_URL}/${id}.json`)
    .then(response => response.json())
    .then(data => {
      console.log('data', data)
      setUsers([data])
    })
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
    {users.map((item) => (
      
    
    <div className={styles.container} key={item.id}>
    
      
      <div className={styles.containerName}>
        <h2>OLÁ, {item.name}</h2>
        <Link to="/" >
          <img 
            src={Testimonial03} 
            alt="Sair" 
            width="30" 
            height="30"
          />
        </Link>
      </div>

      <section className={styles.containerItens}>
        <div className={styles.containerOrderNumber}>
          <strong>NÚMERO DO PEDIDO:</strong>
          <span>{item.id}</span>
        </div>

        <div className={styles.resumeOrder}>
          <span>RESUMO DA COMPRA</span>
          <div className={styles.divider} />

         {item.items.map((item) => (
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
            <span>de {item.freight.from} a {item.freight.to} dias</span>
          </div>

          <div className={styles.containerInfo}>
            <span>Frete</span>
            <span>R$ {item.freight.price}</span>
          </div>

          <div className={styles.containerInfo}>
            <strong>Total</strong>
            <strong>R$ {item.total}</strong>
          </div>

          <div className={styles.divider} />
        </div>

        <div className={styles.containerFollowUp}>
          
          <strong>ACOMPANHE SEU PEDIDO</strong>

          

          <div className={`${styles.followUpItem} ${item.status === "Aguardando pagamento" ? styles.active : styles.inactive}`}>
            <div></div>
            <strong>AGUARDANDO PAGAMENTO</strong>
          </div>

            <div className={`${styles.followUpItem} ${item.status === "Pagamento aprovado" ? styles.active : styles.inactive}`}>
            <div></div>
            <strong>PAGAMENTO APROVADO</strong>
          </div>

          <div className={`${styles.followUpItem} ${item.status === "Pedido em separação" ? styles.active : styles.inactive}`}>
            <div></div>
            <strong>PEDIDO EM SEPAÇÃO</strong>
          </div>

          <div className={`${styles.followUpItem} ${item.status === "Pedido em transporte" ? styles.active : styles.inactive}`}>
            <div></div>
            <strong>PEDIDO EM TRANSPORTE</strong>
          </div>

          <div className={`${styles.followUpItem} ${item.status === "Pedido entregue" ? styles.active : styles.inactive}`}>
            <div></div>
            <strong>PEDIDO ENTREGUE</strong>
          </div>  
        </div>

        <div className={styles.containerDeliver}>
          <strong>ENTREGAR EM:</strong>
          <span>{item.address.street}, {item.address.number}</span>
          <span>{item.address.city} - {item.address.state}  - {item.address.postcode}</span>
        </div>
        
        <div className={`${styles.containerDeliver} ${styles.containeterPagament}`}>
          <strong>FORMA DE PAGAMENTO</strong>
          <span>{item.payment_method}</span>
        </div>
        
      </section>
    </div>
    ))}
    </>
  );
}
