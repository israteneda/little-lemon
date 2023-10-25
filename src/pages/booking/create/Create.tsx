import React, { useEffect, useState } from 'react';
import { Button } from '@components/common';
import styles from './Create.module.scss';
import FormTable from '@components/booking/FormTable/FormTable';
import FormUser from '@components/booking/FormUser/FormUser';
import { useLocation, useNavigate } from 'react-router-dom';
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
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedTable, tables } = state;
  const { state: navigationState } = location;

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
    localStorage.setItem('table', selectedTable);
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

  useEffect(() => {
    const savedTable = navigationState?.table;
    localStorage.removeItem('table');
    if (savedTable) {
      dispatch({ label: selectedTable, type: 'BOOK' });
    }
  }, []);

  useEffect(() => {
    if (navigationState) {
      setOccasion(navigationState.occasion);
      setDate(navigationState.date);
      setTime(navigationState.time);
      setGuests(navigationState.guests);
      setName(navigationState.name);
      setEmail(navigationState.email);
      setPhone(navigationState.phone);
      setComments(navigationState.comments);
    }
  }, [navigationState]);

  return (
    <div>
      <h1 className={styles.title}>Book your table</h1>
      <Tables state={state} dispatch={dispatch} />
      {(selectedTable || navigationState) && (
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
              table={tables.find((table) => table.label === selectedTable)}
            />
            <FormUser
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
              comments={comments}
              setComments={setComments}
            />
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
