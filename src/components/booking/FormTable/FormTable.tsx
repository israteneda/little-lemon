import React from 'react';
import styles from './FormTable.module.scss';

function FormTable() {
  return (
    <section className={styles.form}>
      <h2>Booking Information</h2>
      <span className={styles.labels}>
        <label htmlFor='occasion'>Occasion</label>
        <label htmlFor='date'>Choose date</label>
        <label htmlFor='res-time'>Choose time</label>
        <label htmlFor='guests'>Number of guests</label>
      </span>
      <span className={styles.inputs}>
        <select name='occasion' id='occasion'>
          <option value='Birthday'>Birthday</option>
          <option value='Anniversary'>Anniversary</option>
        </select>
        <input id='date' type='date' required />
        <select id='res-time '>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <input type='number' id='guests' name='guests' min='1' max='10' required />
      </span>
    </section>
  );
}

export default FormTable;
