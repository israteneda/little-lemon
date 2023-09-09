import React from 'react';
import styles from './Table.module.scss';

export interface TableProps {
  state: 'available' | 'booked' | 'reserved';
}

function Table({ state }: TableProps) {
  switch (state) {
    case 'available':
      return <img className={styles.tableImg} src='/images/table-available.png' width={10} alt='Available table' />;
    case 'booked':
      return <img className={styles.tableImg} src='/images/table-booked.png' alt='Booked table' />;
    case 'reserved':
      return <img className={styles.tableImg} src='/images/table-reserved.png' alt='Reserved table' />;
    default:
      return <img className={styles.tableImg} src='/images/table-available.png' alt='Available table' />;
  }
}

export default Table;
