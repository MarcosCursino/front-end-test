import React, { useEffect, useState } from "react";
import { API_URL } from '../../env';
import styles from './DetailOrder.module.scss';

export function DetailOrder() {

  function handleData() {
    fetch(`${API_URL}/293140.json`)
    .then(res => res.json())
    .then(
      (data) => {
       console.log('Resultado: ', data);
      },
      (err) => {
        console.log('Erro', err)
      }
    )
  }

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className={styles.container}>

      <div className={styles.containerName}>
        <h2>OLÁ, MARIA!</h2>
        <h2>SAIR</h2>
      </div>

      <section className={styles.containerItens}>
        <div className={styles.containerOrderNumber}>
          <strong>NÚMERO DO PEDIDO:</strong>
          <span>234567876</span>
        </div>

        <div className={styles.resumeOrder}>
          <span>RESUMO DA COMPRA</span>
          <div className={styles.divider} />

          <div className={styles.containerOrderItens}>
            <span>1x Booster 30ml</span>
            <span>R$ 199,90</span>
          </div>

          <div className={styles.divider} />

          <div className={styles.containerOrderItens}>
            <span>1x Booster 30ml</span>
            <span>R$ 199,90</span>
          </div>
          
          <div className={styles.divider} />
        </div>

        <div className={styles.containerDelivery}>

          <div className={styles.containerInfo}>
            <span>Prazo de entrega</span>
            <span>de 5 a 7 dias</span>
          </div>

          <div className={styles.containerInfo}>
            <span>Frete</span>
            <span>R$ 20,00</span>
          </div>

          <div className={styles.containerInfo}>
            <strong>Total</strong>
            <strong>R$ 420,00</strong>
          </div>

          <div className={styles.divider} />
        </div>

        <div className={styles.containerFollowUp}>
          <strong>ACOMPANHE SEU PEDIDO</strong>

          <div className={styles.followUpItem}>
            <div></div>
            <strong>AGUARDANDO PAGAMENTO</strong>
          </div>

          <div className={styles.followUpItem}>
            <div></div>
            <strong>CONFIRMAÇÃO DE PAGAMENTO</strong>
          </div>

          <div className={styles.followUpItem}>
            <div></div>
            <strong>PEDIDO EM SEPAÇÃO</strong>
          </div>

          <div className={styles.followUpItem}>
            <div></div>
            <strong>PEDIDO EM TRANSPORTE</strong>
          </div>

          <div className={styles.followUpItem}>
            <div></div>
            <strong>PEDIDO ENTREGUE</strong>
          </div>

        </div>

        <div className={styles.containerDeliver}>
          <strong>ENTREGAR EM:</strong>
          <span>Av. Mofarrej, 825 - Galpão 5 - Vl. Leopodina</span>
          <span>São Paulo  - SP  - 03342-010</span>
        </div>
        
        <div className={`${styles.containerDeliver} ${styles.containeterPagament}`}>
          <strong>FORMA DE PAGAMENTO</strong>
          <span>Cartão de crédito</span>
        </div>
        
      </section>
    </div>
  );
}
