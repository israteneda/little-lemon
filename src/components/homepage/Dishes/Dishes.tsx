import { Button } from '@components/common';
import * as React from 'react';
import styles from './Dishes.module.scss';
import { Dish } from '@components/homepage';

function Dishes({
  dishes,
}: {
  dishes: { name: string; description: string; price: string; imageUrl: string }[];
}) {
  return (
    <section className={styles.container}>
      <h2>This week specials!</h2>
      <div className={styles.dishes}>
        {dishes.map((dish) => (
          <Dish
            key={dish.name}
            description={dish.description}
            imageUrl={dish.imageUrl}
            dish={dish.name}
            price={dish.price}
          />
        ))}
      </div>
      <Button>Online Menu</Button>
    </section>
  );
}

export default Dishes;
