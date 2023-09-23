import * as React from 'react';
import { Button } from '@components/common';
import styles from './Create.module.scss';
import Table from '@components/common/Table/Table';
import FormTable from '@components/booking/FormTable/FormTable';
import FormUser from '@components/booking/FormUser/FormUser';

function Create() {
  return (
    <div>
      <h1 className={styles.title}>Book your table</h1>
      <main className={styles.main}>
        <section className={styles.tables}>
          <h2 className={styles.indoorsLabel}>Indoors</h2>
          <h2 className={styles.outdoorsLabel}>Outdoors</h2>
          <div className={styles.indoors}>
            <Table isReserved left={10} top={20} />
            <Table left={40} top={20} />
            <Table left={70} top={20} />
            <Table left={25} top={50} />
            <Table left={55} top={50} />
            <span className={styles.door} />
          </div>
          <div className={styles.outdoors}>
            <Table left={15} top={15} />
            <Table left={55} top={15} />
            <Table left={35} top={40} />
            <Table left={15} top={65} />
            <Table left={55} top={65} />
          </div>
        </section>
      </main>
      <div className={styles.forms}>
        <FormTable />
        <FormUser />
      </div>
      <div className={styles['button-container']}>
        <Button>Make Your reservation</Button>
      </div>
    </div>
  );
}

export default Create;
