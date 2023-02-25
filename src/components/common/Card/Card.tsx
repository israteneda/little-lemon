import React from 'react'
import styles from './Card.module.scss'

function Card({
  imageUrl,
  dish,
  price,
  description,
}: {
  imageUrl: string
  dish: string
  price: string
  description: string
}) {
  return (
    <div className={styles.card}>
      <img src={imageUrl} />
      <h2>{dish}</h2>
      <p>{price}</p>
      <p>{description}</p>
      <p>Order a delivery {/*TODO: Add delivery icon*/}</p>
    </div>
  )
}

export default Card
