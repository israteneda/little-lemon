import * as React from 'react';
import { Testimonials } from '@components/common';
import { Hero, Dishes } from '@components/homepage';

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
      <section>
        <Testimonials testimonials={testimonials} />
      </section>
      <section>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <img src='./images/mario-and-adrian-a.png' width={350} height={250} />
        <img src='./images/mario-and-adrian-b.png' width={350} height={250} />
        <p>
          Mario and Adrian are the dynamic duo behind the success of Little Lemon restaurant. They
          have a deep love and passion for food, and it shows in the quality and attention to detail
          that they put into every dish. Mario brings his expertise as a seasoned chef, while
          Adrian's background in hospitality ensures that every customer feels welcome and
          well-cared for.
        </p>
      </section>
    </div>
  );
}

export default Home;
