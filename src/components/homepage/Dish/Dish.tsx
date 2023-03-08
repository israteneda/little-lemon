import React from 'react';
import styles from './Dish.module.scss';

function Dish({
  imageUrl,
  dish,
  price,
  description,
}: {
  imageUrl: string;
  dish: string;
  price: string;
  description: string;
}) {
  return (
    <div className={styles.dish}>
      <img className={styles.image} src={imageUrl} alt='dish' />
      <div className={styles.body}>
        <div className={styles.heading}>
          <h2>{dish}</h2>
          <p style={{ color: 'red' }}>
            <strong>{price}</strong>
          </p>
        </div>
        <p>{description}</p>
        <div className={styles.delivery}>
          <p>Order a delivery </p>
          <img src='/icons/delivery-truck.svg' alt='delivery truck' height={50} width={50} />
        </div>
      </div>
    </div>
  );
}

export default Dish;
