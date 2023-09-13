import React from 'react';
import styles from './Table.module.scss';
import useMediaQuery from '@hooks/useMediaQuery';

export interface TableProps {
  isReserved?: boolean;
  top: number;
  right?: number;
  bottom?: number;
  left: number;
}

function Table({ isReserved, top, right, bottom, left }: TableProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [state, setState] = React.useState<'available' | 'booked' | 'reserved'>(isReserved ? 'reserved' : 'available');
  const topSpace = isMobile ? 20 : 10;

  return (
    <>
      <img
        style={{ top: `${top}%`, right: `${right}%`, bottom: `${bottom}%`, left: `${left}%` }}
        className={styles.tableImg}
        src={`/images/table-${state}.png`}
        width={10}
        alt={`${state} table`}
        onClick={() => state !== 'reserved' && setState(state === 'available' ? 'booked' : 'available')}
      />
      <span style={{ top: `${top + topSpace}%`, right: `${right}%`, bottom: `${bottom}%`, left: `${left + 5}%` }} className={styles.label}>
        h1
      </span>
    </>
  );
}

export default Table;
