import React from 'react';
import { Button } from '@components/common';
import styles from './Hero.module.scss';

function Hero() {
  return (
    <div className={styles.hero}>
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>
        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a
        modern twist.
      </p>
      <img src='./images/waiter.png' height={300} width={250} />
      <Button>Reserve a Table</Button>
    </div>
  );
}

export default Hero;
