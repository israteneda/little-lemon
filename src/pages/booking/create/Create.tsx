import React, { useState } from 'react';
import { Button } from '@components/common';
import styles from './Create.module.scss';
import Table from '@components/common/Table/Table';
import FormTable from '@components/booking/FormTable/FormTable';
import FormUser from '@components/booking/FormUser/FormUser';

function Create({
  state,
  dispatch,
}: {
  state: {
    selectedTable: string;
    tables: { label: string; left: number; top: number; state: string; availableTimes: string[] }[];
  };
  dispatch: React.Dispatch<{ label: string; type: string }>;
}) {
  const { selectedTable, tables } = state;
  // filter indoor and outdoor tables
  // based on the first letter of the label
  const indoorTables = tables.filter((table) => table.label[0] === 'I');
  const outdoorTables = tables.filter((table) => table.label[0] === 'O');

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
            {indoorTables.map((table) => (
              <Table
                key={table.label}
                label={table.label}
                state={table.state}
                left={table.left}
                top={table.top}
                dispatch={dispatch}
                selectedTable={selectedTable}
              />
            ))}
            <span className={styles.door} />
          </div>
          <div className={styles.outdoors}>
            {outdoorTables.map((table) => (
              <Table
                key={table.label}
                label={table.label}
                state={table.state}
                left={table.left}
                top={table.top}
                dispatch={dispatch}
                selectedTable={selectedTable}
              />
            ))}
          </div>
        </section>
      </main>
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
