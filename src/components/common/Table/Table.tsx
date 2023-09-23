import React from 'react';
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
}

function Table({ label, top, right, bottom, left, state, dispatch }: TableProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const topSpace = isMobile ? 20 : 10;

  return (
    <>
      <img
        style={{ top: `${top}%`, right: `${right}%`, bottom: `${bottom}%`, left: `${left}%` }}
        className={styles.tableImg}
        src={`/images/table-${state}.png`}
        width={10}
        alt={`${state} table`}
        onClick={() =>
          state !== 'reserved' && state === 'available'
            ? dispatch({ label: label, type: 'BOOK' })
            : dispatch({ label: label, type: 'CANCEL_BOOK' })
        }
      />
      <span
        style={{ top: `${top + topSpace}%`, right: `${right}%`, bottom: `${bottom}%`, left: `${left + 5}%` }}
        className={styles.label}
      >
        {label}
      </span>
    </>
  );
}

export default Table;
