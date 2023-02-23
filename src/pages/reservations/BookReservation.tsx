import * as React from 'react'
import { Button } from '@components/common'

function BookReservation() {
  return (
    <div>
      <h1>Book your seat</h1>
      <main>
        <section>
          <div>
            <h2>Indoors</h2>
          </div>
          <div>
            <h2>Outdoors</h2>
          </div>
        </section>
      </main>
      <section>Booking Information</section>
      <section>Customer Information</section>
      <Button>Submit</Button>
    </div>
  )
}

export default BookReservation
