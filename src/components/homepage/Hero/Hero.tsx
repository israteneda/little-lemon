import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@components/common';
import styles from './Hero.module.scss';

function Hero() {
  const navigation = useNavigate();

  return (
    <div className={styles.hero}>
      <div className={styles.text}>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a
          modern twist.
        </p>
      </div>
      <img className={styles.image} src='./images/waiter.png' height={300} width={250} />
      <Button extraClasses={styles.button} onClick={() => navigation('/reservation/create')}>Reserve a Table</Button>
    </div>
  );
}

export default Hero;
