import * as React from 'react';
import { Button, Modal } from '@components/common';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Confirm.module.scss';
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

const ConfrimationModal = ({ selectedTable, email, dispatch }: { selectedTable: string; email: string; dispatch: React.Dispatch<{ label: string; type: string }> }) => {
  const navigation = useNavigate();
  return (
    <Modal>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3.2rem'}}>
        <img src='/images/checkmark.png' alt='Check Mark' width={80} height={80} />
        <p>{`You booked the order successfully. We sent all the information to ${email}`}</p>
        <Button 
          ariaLabel="Close Modal"
          extraClasses={styles.confirmButton} 
          onClick={
            () => {
              dispatch({ label: selectedTable, type: 'CANCEL_BOOK' });
              navigation('/', { replace: true })
            }
          }
        >
          Close
        </Button>
      </div>
    </Modal>
  )
}

function Confirm({ state, dispatch }: Props) {
  const location = useLocation();
  const navigation = useNavigate();
  const { state: navigationState } = location;
  const { table, occasion, date, time, guests, name, email, phone, comments } = navigationState || {};
  const [ modalOpen, setModalOpen ] = React.useState(false);

  const selectedTable = table || localStorage.getItem('table');

  React.useEffect(() => {
    if (!table) {
      localStorage.removeItem('table');
      navigation('/reservation/create');
    }
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Confirm your reservation</h1>
      <Tables state={state} dispatch={dispatch} disabled />
      <section className={styles.confirmation}>
        <h2 className={styles.sectionTitle}>Booking Confirmation</h2>
        <ul className={styles.list}>
          <li>
            <b>Name:</b> {name}
          </li>
          <li>
            <b>Email:</b> {email}
          </li>
          <li>
            <b>Phone:</b> {phone}
          </li>
          <li>
            <b>Ocassion:</b> {occasion}
          </li>
          <li>
            <b>Date:</b> {date}
          </li>
          <li>
            <b>Time:</b> {time}
          </li>
          <li>
            <b>Guests:</b> {guests}
          </li>
          <li>
            <b>Table:</b> {selectedTable}
          </li>
          <li>
            {comments && (
              <>
                <b>Comments:</b> {comments}
              </>
            )}
          </li>
        </ul>
      </section>
      <section className={styles.conditions}>
        <h2 className={styles.sectionTitle}>Service Conditions</h2>
        <ul className={styles.list}>
          <li>You cannot cancel your reservation within 24 hours of your reservation time.</li>
          <li>The service charge is 10% of the total bill.</li>
          <li>The service includes a 10% gratuity.</li>
        </ul>
      </section>
      <div className={styles.buttons}>
        <Button
          ariaLabel="Edit Reservation"
          onClick={() =>
            navigation('/reservation/create', {
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
            })
          }
        >
          Edit
        </Button>
        <Button 
        ariaLabel="Confirm Reservation"
        onClick={() => setModalOpen(true)}>Confirm</Button>
        {modalOpen && <ConfrimationModal selectedTable={selectedTable} email={email} dispatch={dispatch}/>}
      </div>
    </div>
  );
}

export default Confirm;
