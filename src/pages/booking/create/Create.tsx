import React, { useEffect, useState } from 'react';
import { Button } from '@components/common';
import styles from './Create.module.scss';
import BookingForm from '@components/booking/BookingForm/BookingForm';
import UserForm from '@components/booking/UserForm/UserForm';
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
  // Booking Data Errors
  const [dateError, setDateError] = useState('');
  const [guestsError, setGuestsError] = useState('');

  // User Data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('');
  // User Data Errors
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');

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
            <BookingForm
              occasion={occasion}
              setOccasion={setOccasion}
              date={date}
              dateError={dateError}
              setDate={setDate}
              setDateError={setDateError}
              time={time}
              setTime={setTime}
              guests={guests}
              guestsError={guestsError}
              setGuests={setGuests}
              setGuestsError={setGuestsError}
              table={tables.find((table) => table.label === selectedTable)}
            />
            <UserForm
              name={name}
              nameError={nameError}
              setName={setName}
              setNameError={setNameError}
              email={email}
              setEmail={setEmail}
              phone={phone}
              phoneError={phoneError}
              setPhone={setPhone}
              setPhoneError={setPhoneError}
              comments={comments}
              setComments={setComments}
            />
          </div>
          <div className={styles['button-container']}>
            <Button 
            ariaLabel='Make your reservation'
            type='submit'
            disabled={ 
              !selectedTable || 
              !date ||
              !!dateError || 
              !guests ||
              !!guestsError || 
              !name ||
              !!nameError || 
              !email ||
              !phone ||
              !!phoneError 
            }
            >
              Make Your reservation
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Create;
