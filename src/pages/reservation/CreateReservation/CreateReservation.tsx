import * as React from 'react';
import { Button } from '@components/common';
import styles from './CreateReservation.module.scss';

function CreateReservation() {
  return (
    <div>
      <h1 className={styles.title}>Book your table</h1>
      <main>
        <section className={styles.tables}>
          <div>
            <h2>Indoors</h2>
          </div>
          <div>
            <h2>Outdoors</h2>
          </div>
        </section>
      </main>
      <section className={styles['booking-information']}>
        <h2>Booking Information</h2>
        <span>
          <label>Occasion</label>
          <select name='occasion' id='occasion'>
            <option value='default'>Occasion</option>
            <option value='Birthday'>Birthday</option>
            <option value='Engagement'>Engagement</option>
            <option value='Anniversary'>Anniversary</option>
          </select>
        </span>
        <span>
          <label>Date</label>
          <input type='datetime-local' id='Test_DatetimeLocal' required />
        </span>
        <span>
          <label>Time</label>
          <input type='time' id='appt' name='appt' min='09:00' max='18:00' required />
        </span>
        <span>
          <label>Dinners</label>
          <input type='number' id='dinners' name='dinners' min='1' max='10' required />
        </span>
        <span>
          <label>Additional Comments</label>
          <textarea name='comments' id='comments' cols={30} rows={10} />
        </span>
      </section>
      <section className={styles['customer-information']}>
        <h2>Customer Information</h2>
        <span>
          <label>First Name</label>
          <input type='text' placeholder='Enter first name' />
        </span>
        <span>
          <label>Last Name</label>
          <input type='text' placeholder='Enter last name' />
        </span>
        <span>
          <label>Email</label>
          <input type='email' placeholder='Enter email' />
        </span>
        <span>
          <label>Postal Code</label>
          <input type='text' placeholder='Enter postal code' />
        </span>
        <span>
          <label>Card Number</label>
          <input type='text' placeholder='Enter card number' />
        </span>
        <span>
          <label>Expiration Date</label>
          <input type='date' placeholder='Enter expiration date' />
        </span>
        <span>
          <label>CVV/CVC{/*TODO: Add question mark*/}</label>
          <input type='text' placeholder='Enter CVV/CVC' />
        </span>
      </section>
      <div className={styles['button-container']}>
        <Button>Submit</Button>
      </div>
    </div>
  );
}

export default CreateReservation;
