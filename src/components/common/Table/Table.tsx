import React, { useEffect, useState } from 'react';
import styles from './Table.module.scss';
import useMediaQuery from '@hooks/useMediaQuery';

export interface TableProps {
  label: string;
  top: number;
  right?: number;
  bottom?: number;
  left: number;
  state?: string;
  dispatch: React.Dispatch<{ label: string; type: string }>;
  selectedTable?: string;
  disabled?: boolean;
}

function Table({ label, top, right, bottom, left, state, dispatch, selectedTable, disabled }: TableProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const topSpace = isMobile ? 20 : 10;
  const [showTableSelected, setShowTableSelected] = useState(false);

  const bookTable = () => {
    if (disabled) return;
    if (state !== 'reserved' && state === 'available') {
      if (selectedTable !== null) {
        setShowTableSelected(true);
        setTimeout(() => {
          setShowTableSelected(false);
        }, 3000);
        return;
      }
      dispatch({ label: label, type: 'BOOK' });
    } else {
      dispatch({ label: label, type: 'CANCEL_BOOK' });
    }
  };

  useEffect(() => {
    if (selectedTable === label) {
      dispatch({ label: label, type: 'BOOK' });
    }
  }, []);

  return (
    <div className={styles.table}>
      <img
        title={state}
        style={{ top: `${top}%`, right: `${right}%`, bottom: `${bottom}%`, left: `${left}%` }}
        className={styles.tableImg}
        src={`/images/table-${state}.png`}
        width={10}
        alt={`${state} table`}
        onClick={bookTable}
      />
      {showTableSelected && (
        <span className={styles.tooltip}>
          You have already selected a table. <br />
          Please deselect the table to select another one.
        </span>
      )}
      <span
        style={{ top: `${top + topSpace}%`, right: `${right}%`, bottom: `${bottom}%`, left: `${left + 5}%` }}
        className={styles.label}
      >
        {label}
      </span>
    </div>
  );
}

export default Table;
