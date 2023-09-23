import React, { useState } from 'react';
import { Button } from '@components/common';
import styles from './Create.module.scss';
import Table from '@components/common/Table/Table';
import FormTable from '@components/booking/FormTable/FormTable';
import FormUser from '@components/booking/FormUser/FormUser';

function Create() {
  // Booking Data
  const [occasion, setOccasion] = useState('Birthday');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);

  // User Data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <div>
      <h1 className={styles.title}>Book your table</h1>
      <main className={styles.main}>
        <section className={styles.tables}>
          <h2 className={styles.indoorsLabel}>Indoors</h2>
          <h2 className={styles.outdoorsLabel}>Outdoors</h2>
          <div className={styles.indoors}>
            <Table isReserved left={10} top={20} />
            <Table left={40} top={20} />
            <Table left={70} top={20} />
            <Table left={25} top={50} />
            <Table left={55} top={50} />
            <span className={styles.door} />
          </div>
          <div className={styles.outdoors}>
            <Table left={15} top={15} />
            <Table left={55} top={15} />
            <Table left={35} top={40} />
            <Table left={15} top={65} />
            <Table left={55} top={65} />
          </div>
        </section>
      </main>
      <form onSubmit={handleSubmit}>
        <div className={styles.forms}>
          <FormTable
            occasion={occasion}
            setOccasion={setOccasion}
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
            guests={guests}
            setGuests={setGuests}
          />
          <FormUser setName={setName} setEmail={setEmail} setPhone={setPhone} setComments={setComments} />
        </div>
        <div className={styles['button-container']}>
          <Button type='submit'>Make Your reservation</Button>
        </div>
      </form>
    </div>
  );
}

export default Create;
