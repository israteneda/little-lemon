import React, { useState } from 'react';
import styles from './FormUser.module.scss';

function FormUser({
  setName,
  setEmail,
  setPhone,
  setComments,
}: {
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setPhone: (value: string) => void;
  setComments: (value: string) => void;
}) {
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
        <input id='name' type='text' placeholder='Enter your name' onChange={(e) => setName(e.target.value)} required />
        <input id='email' type='email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} required />
        <input id='phone' type='tel' placeholder='Enter your phone number' onChange={(e) => setPhone(e.target.value)} required />
        <textarea
          name='comments'
          id='comments'
          cols={30}
          rows={10}
          placeholder='I would like to sit near the window.'
          onChange={(e) => setComments(e.target.value)}
        />
      </span>
    </section>
  );
}

export default FormUser;
