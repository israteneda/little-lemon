import * as React from 'react'
import { Button } from '@components/common'
import { Hero } from '@components/homepage'

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
          {/*TODO: Add dishes*/}
        </section>
      </main>
      <section>
        <h2>Testimonials</h2>
        {/*TODO: Add testimonials*/}
      </section>
      <section>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        {/*TODO: Add photos*/}
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
