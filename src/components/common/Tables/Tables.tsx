import Table from '../Table/Table';
import styles from './Tables.module.scss';

const Tables = ({ tables, dispatch, selectedTable, disabled }: any) => {
  const indoorTables = tables.filter((table: any) => table.label[0] === 'I');
  const outdoorTables = tables.filter((table: any) => table.label[0] === 'O');

  return (
    <main className={styles.main}>
      <section className={styles.tables}>
        <h2 className={styles.indoorsLabel}>Indoors</h2>
        <h2 className={styles.outdoorsLabel}>Outdoors</h2>
        <div className={styles.indoors}>
          {indoorTables.map((table: any) => (
            <Table
              key={table.label}
              label={table.label}
              state={table.state}
              left={table.left}
              top={table.top}
              dispatch={dispatch}
              selectedTable={selectedTable}
              disabled={disabled}
            />
          ))}
          <span className={styles.door} />
        </div>
        <div className={styles.outdoors}>
          {outdoorTables.map((table: any) => (
            <Table
              key={table.label}
              label={table.label}
              state={table.state}
              left={table.left}
              top={table.top}
              dispatch={dispatch}
              selectedTable={selectedTable}
              disabled={disabled}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Tables;
