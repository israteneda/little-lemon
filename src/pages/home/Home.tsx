import * as React from 'react'
import { Button, Card, Testimonial } from '@components/common'
import { Hero } from '@components/homepage'

const dishes = [
  {
    name: 'Lemon Chicken',
    description:
      'Chicken breast marinated in lemon juice, garlic, and herbs, served with rice and vegetables.',
    price: '$15.99',
    imageUrl: './images/lemon-chicken.png',
  },
  {
    name: 'Lemon Chicken',
    description:
      'Chicken breast marinated in lemon juice, garlic, and herbs, served with rice and vegetables.',
    price: '$15.99',
    imageUrl: './images/lemon-chicken.png',
  },
]

const testimonials = [
  {
    avatarUrl: './images/testimonial-1.png',
    score: 5,
    text: 'The food was amazing! The service was great! I will definitely be back!',
    name: 'John Doe',
  },
  {
    avatarUrl: './images/testimonial-2.png',
    score: 5,
    text: 'The food was amazing! The service was great! I will definitely be back!',
    name: 'John Doe',
  },
]

function Home() {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <main>
        <section>
          <h2>This week specials!</h2>
          <Button>Online Menu</Button>
          {dishes.map((dish) => (
            <Card
              key={dish.name}
              description={dish.description}
              imageUrl={dish.imageUrl}
              dish={dish.name}
              price={dish.price}
            />
          ))}
        </section>
      </main>
      <section>
        <h2>Testimonials</h2>
        {testimonials.map((testimonial) => (
          <Testimonial
            key={testimonial.name}
            avatarUrl={testimonial.avatarUrl}
            score={testimonial.score}
            text={testimonial.text}
            name={testimonial.name}
          />
        ))}
      </section>
      <section>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <img src='./images/mario-and-adrian-a.png' />
        <img src='./images/mario-and-adrian-b.png' />
        <p>
          Mario and Adrian are the dynamic duo behind the success of Little Lemon restaurant. They
          have a deep love and passion for food, and it shows in the quality and attention to detail
          that they put into every dish. Mario brings his expertise as a seasoned chef, while
          Adrian's background in hospitality ensures that every customer feels welcome and
          well-cared for.
        </p>
      </section>
    </div>
  )
}

export default Home
