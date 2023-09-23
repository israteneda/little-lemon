import React from 'react';
import styles from './FormUser.module.scss';

function FormUser() {
  return (
    <section className={styles.form}>
      <h2>Customer Information</h2>
      <span className={styles.labels}>
        <label htmlFor='name'>First Name</label>
        <label htmlFor='email'>Email</label>
        <label htmlFor='phone'>Phone</label>
        <label htmlFor='comments'>Additional Comments</label>
      </span>
      <span className={styles.inputs}>
        <input id='name' type='text' placeholder='Enter your name' />
        <input id='email' type='email' placeholder='Enter your email' />
        <input id='phone' type='tel' placeholder='Enter your phone number' />
        <textarea name='comments' id='comments' cols={30} rows={10} />
      </span>
    </section>
  );
}

export default FormUser;
