import React, { useEffect, useState } from 'react';
import styles from './FormUser.module.scss';

function FormUser({
  name,
  nameError,
  setName,
  setNameError,
  email,
  setEmail,
  phone,
  phoneError,
  setPhone,
  setPhoneError,
  comments,
  setComments,
}: {
  name: string;
  nameError: string;
  setName: (value: string) => void;
  setNameError: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  phone: string;
  phoneError: string;
  setPhone: (value: string) => void;
  setPhoneError: (value: string) => void;
  comments: string;
  setComments: (value: string) => void;
}) {

  useEffect(() => {
    if (name && name.length < 3) {
      setNameError('Name must be at least 3 characters long.')
    } else {
      setNameError('')
    }
    if (phone && (phone.length > 10 || phone.length < 10)) {
      setPhoneError('Phone number must be at least 10 characters long.')
    } else {
      setPhoneError('')
    }
  }, [name, phone]);
    

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
        <div style={{position: 'relative'}}>
          <input
            id='name'
            type='text'
            placeholder='Enter your name'
            value={name}
            onChange={(e) => {
              e.preventDefault();
              setName(e.currentTarget.value);
            }}
            required
          />
          <span className={styles.error}>{nameError}</span>
        </div>
        <input
          id='email'
          type='email'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div style={{position: 'relative'}}>
          <input
            id='phone'
            type='tel'
            placeholder='Enter your phone number'
            value={phone}
            onChange={(e) => {
              e.preventDefault();
              setPhone(e.currentTarget.value);
            }}
            required
          />
          <span className={styles.error}>{phoneError}</span>
        </div>
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
