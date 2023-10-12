import React, { useState } from 'react';
import styles from './FormUser.module.scss';

function FormUser({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  comments,
  setComments,
}: {
  name: string;
  setName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  comments: string;
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
        <input
          id='name'
          type='text'
          placeholder='Enter your name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          id='email'
          type='email'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          id='phone'
          type='tel'
          placeholder='Enter your phone number'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <textarea
          name='comments'
          id='comments'
          value={comments}
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
