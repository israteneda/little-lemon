import { Testimonial } from '@components/common';
import * as React from 'react';
import { TestimonialProps } from '@components/common/Testimonial/Testimonial';
import styles from './Testimonials.module.scss';

function Testimonials({ testimonials }: { testimonials: TestimonialProps[] }) {
  return (
    <section className={styles.testimonials}>
      <h2>Testimonials</h2>
      <div className={styles.testimonials__list}>
        {testimonials.map((testimonial) => (
          <Testimonial
            key={testimonial.name}
            avatarUrl={testimonial.avatarUrl}
            score={testimonial.score}
            text={testimonial.text}
            name={testimonial.name}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
