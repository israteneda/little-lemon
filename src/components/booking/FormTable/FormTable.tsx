import styles from './FormTable.module.scss';

function FormTable({
  occasion,
  setOccasion,
  date,
  setDate,
  time,
  setTime,
  guests,
  setGuests,
  table,
}: {
  occasion: string;
  setOccasion: (value: string) => void;
  date: string;
  setDate: (value: string) => void;
  time: string;
  setTime: (value: string) => void;
  guests: number;
  setGuests: (value: number) => void;
  table: {
    label: string; 
    left: number; 
    top: number; 
    state: string; 
    availableTimes: string[] 
  } | undefined;
}) {
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
        <select id='res-time ' value={time} onChange={(e) => setTime(e.target.value)} required>
          {table?.availableTimes.map((time) => {
            return <option key={time}>{time}</option>
          })}
        </select>
        <input
          type='number'
          id='guests'
          name='guests'
          min='1'
          max='10'
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value))}
          required
        />
      </span>
    </section>
  );
}

export default FormTable;
