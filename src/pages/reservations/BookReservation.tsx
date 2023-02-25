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
      <section>
        <h2>Booking Information</h2>
        <label>Occasion</label>
        <select name='occasion' id='occasion'>
          <option value='default'>Occasion</option>
          <option value='Birthday'>Birthday</option>
          <option value='Engagement'>Engagement</option>
          <option value='Anniversary'>Anniversary</option>
        </select>
        <label>Date</label>
        <input type='datetime-local' id='Test_DatetimeLocal' required />
        <label>Time</label>
        <input type='time' id='appt' name='appt' min='09:00' max='18:00' required />
        <label>Dinners</label>
        <input type='number' id='dinners' name='dinners' min='1' max='10' required />
        <label>Additional Comments</label>
        <textarea name='comments' id='comments' cols={30} rows={10} />
      </section>
      <section>
        <h2>Customer Information</h2>
        <label>First Name</label>
        <input type='text' placeholder='Enter first name' />
        <label>Last Name</label>
        <input type='text' placeholder='Enter last name' />
        <label>Email</label>
        <input type='email' placeholder='Enter email' />
        <label>Postal Code</label>
        <input type='text' placeholder='Enter postal code' />
        <label>Card Number</label>
        <input type='text' placeholder='Enter card number' />
        <label>Expiration Date</label>
        <input type='date' placeholder='Enter expiration date' />
        <label>CVV/CVC{/*TODO: Add question mark*/}</label>
        <input type='text' placeholder='Enter CVV/CVC' />
      </section>
      <Button>Submit</Button>
    </div>
  )
}

export default BookReservation
