import React, { useState } from 'react';
import { Button } from '@components/common';
import styles from './Create.module.scss';
import FormTable from '@components/booking/FormTable/FormTable';
import FormUser from '@components/booking/FormUser/FormUser';
import { useNavigate } from 'react-router-dom';
import Tables from '@components/common/Tables/Tables';

type Props = {
  state: {
    selectedTable: string;
    tables: {
      label: string;
      left: number;
      top: number;
      state: string;
      availableTimes: string[];
    }[];
  };
  dispatch: React.Dispatch<{ label: string; type: string }>;
};

function Create({ state, dispatch }: Props) {
  const navigate = useNavigate();
  const { selectedTable, tables } = state;

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
    navigate('/reservation/confirm', {
      state: {
        table: selectedTable,
        occasion,
        date,
        time,
        guests,
        name,
        email,
        phone,
        comments,
      },
    });
  };

  return (
    <div>
      <h1 className={styles.title}>Book your table</h1>
      <Tables tables={tables} dispatch={dispatch} selectedTable={selectedTable} />
      {selectedTable && (
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
              table={tables.filter((table) => table.label === selectedTable)[0]}
            />
            <FormUser setName={setName} setEmail={setEmail} setPhone={setPhone} setComments={setComments} />
          </div>
          <div className={styles['button-container']}>
            <Button type='submit'>Make Your reservation</Button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Create;
