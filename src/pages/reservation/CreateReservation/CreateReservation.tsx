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
        <span className={styles.labels}>
          <label>Occasion</label>
          <label>Date</label>
          <label>Time</label>
          <label>Dinners</label>
          <label>Additional Comments</label>
        </span>
        <span className={styles.inputs}>
          <select name='occasion' id='occasion'>
            <option value='default'>Occasion</option>
            <option value='Birthday'>Birthday</option>
            <option value='Engagement'>Engagement</option>
            <option value='Anniversary'>Anniversary</option>
          </select>
          <input type='datetime-local' id='Test_DatetimeLocal' required />

          <input type='time' id='appt' name='appt' min='09:00' max='18:00' required />
          <input type='number' id='dinners' name='dinners' min='1' max='10' required />

          <textarea name='comments' id='comments' cols={30} rows={10} />
        </span>
      </section>
      <section className={styles['customer-information']}>
        <h2>Customer Information</h2>
        <span className={styles.labels}>
          <label>First Name</label>
          <label>Last Name</label>
          <label>Email</label>
          <label>Postal Code</label>
          <label>Card Number</label>
          <label>Expiration Date</label>
          <label>CVV/CVC{/*TODO: Add question mark*/}</label>
        </span>
        <span className={styles.inputs}>
          <input type='text' placeholder='Enter first name' />
          <input type='text' placeholder='Enter last name' />
          <input type='email' placeholder='Enter email' />
          <input type='text' placeholder='Enter postal code' />
          <input type='text' placeholder='Enter card number' />
          <input type='date' placeholder='Enter expiration date' />
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
