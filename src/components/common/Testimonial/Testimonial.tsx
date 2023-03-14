import React from 'react';
import styles from './Testimonial.module.scss';
import { ReviewStars } from '@components/common';

export interface TestimonialProps {
  avatarUrl: string;
  score: number;
  text: string;
  name: string;
}

function Testimonial({ avatarUrl, score, text, name }: TestimonialProps) {
  return (
    <div className={styles.testimonial}>
      <img src={avatarUrl} alt='avatar' className={styles.avatar} />
      <div className={styles.text}>
        <ReviewStars score={score} />
        <p>{text}</p>
        <p className={styles.author}>{name}</p>
      </div>
    </div>
  );
}

export default Testimonial;
