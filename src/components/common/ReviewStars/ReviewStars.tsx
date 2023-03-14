import React from 'react';
import { BsStar, BsStarFill } from 'react-icons/all';
import styles from './ReviewStars.module.scss';

function ReviewStars({ score }: { score: number }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < score) {
      stars.push(<BsStar key={i} size='2em' color='gold' />);
    } else {
      stars.push(<BsStarFill key={i} size='2em' color='gray' />);
    }
  }
  return <div className={styles.stars}>{stars}</div>;
}

export default ReviewStars;
