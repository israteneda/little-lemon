import * as React from 'react';
import { Testimonials } from '@components/common';
import { Hero, Dishes } from '@components/homepage';
import About from '@components/homepage/About/About';

const dishes = [
  {
    name: 'Greek Salad',
    description:
      'The famous greek salad of crispy lettuce, peppe rs, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    price: '$12.99',
    imageUrl: './images/greek-salad.png',
  },
  {
    name: 'Bruchetta',
    description:
      'Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    price: '$5,99',
    imageUrl: './images/bruchetta.png',
  },
  {
    name: 'Lemon Dessert',
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can imagin ed.",
    price: '$5,00',
    imageUrl: './images/lemon-dessert.png',
  },
];

const testimonials = [
  {
    avatarUrl: './images/avatar1.jpeg',
    score: 5,
    text: 'The food was amazing! The service was great! I will definitely be back!',
    name: 'John Doe',
  },
  {
    avatarUrl: './images/avatar2.jpeg',
    score: 5,
    text: 'The food was amazing! The service was great! I will definitely be back!',
    name: 'John Doe',
  },
];

function Home() {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <main>
        <Dishes dishes={dishes} />
      </main>
      <Testimonials testimonials={testimonials} />
      <About />
    </div>
  );
}

export default Home;
