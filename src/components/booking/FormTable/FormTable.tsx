import { useEffect } from 'react';
import styles from './FormTable.module.scss';

function FormTable({
  occasion,
  setOccasion,
  date,
  dateError,
  setDate,
  setDateError,
  time,
  setTime,
  guests,
  guestsError,
  setGuests,
  setGuestsError,
  table,
}: {
  occasion: string;
  setOccasion: (value: string) => void;
  date: string;
  dateError: string;
  setDate: (value: string) => void;
  setDateError: (value: string) => void;
  time: string;
  setTime: (value: string) => void;
  guests: number;
  guestsError: string;
  setGuestsError: (value: string) => void;
  setGuests: (value: number) => void;
  table: {
    label: string; 
    left: number; 
    top: number; 
    state: string; 
    availableTimes: string[] 
  } | undefined;
}) {
  useEffect(() => {
    if (table) {
      setDateError('');
    }
  }, [table]);

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
        <select id='occasion' name='occasion' value={occasion} onChange={(e) => setOccasion(e.target.value)}>
          <option value='Birthday'>Birthday</option>
          <option value='Anniversary'>Anniversary</option>
        </select>
        <input id='date' type='date' value={date} onChange={(e) => setDate(e.target.value)} required />
        <div style={{position: 'relative'}}>
        <select 
          id='res-time' 
          value={time} 
          onChange={(e) => {
            setDateError('');
            setTime(e.target.value)}
          } 
          onClick={() => {
            !table ? setDateError('Please select a table first!') : setDateError('');
          }}
          required
        >
          {table?.availableTimes.map((time) => {
            return <option key={time}>{time}</option>
          })}
        </select>
        <span className={styles.error}>{dateError}</span>
        </div>
        <div style={{position: 'relative'}}>
        <input
          type='number'
          id='guests'
          name='guests'
          min='1'
          max='10'
          value={guests}
          onChange={(e) => {
            const value = e.target.value;
            const parsedValue = parseInt(value);
            setGuests(parseInt(value))
            parsedValue < 1 || parsedValue > 10 ? setGuestsError('Please enter a number between 1 and 10') : setGuestsError('')
          }}
          required
        />
        <span className={styles.error}>{guestsError}</span>
        </div>
      </span>
    </section>
  );
}

export default FormTable;
