import * as React from 'react';
import { Button } from '@components/common';

function ConfirmReservation() {
  return (
    <div>
      <h1>Confirm your reservation</h1>
      <main>
        <section>
          <div>
            <h2>Indoors</h2>
          </div>
          <div>
            <h2>Outdoors</h2>
          </div>
        </section>
      </main>
      <section>
        <div>
          <h2>Booking Confirmation</h2>
          <ul>
            <li>First Name: </li>
            <li>Last Name: </li>
            <li>Email: </li>
            <li>Postal Code: </li>
            <li>Card Number: </li>
            <li>Expiration Date: </li>
            <li>CVV/CVC: </li>
            <li>Date: </li>
            <li>Time: </li>
            <li>Dinners: </li>
            <li>Table: </li>
          </ul>
        </div>
      </section>
      <section>
        <h2>Service Conditions</h2>
        <ul>
          <li>You cannot cancel your reservation within 24 hours of your reservation time.</li>
          <li>The service charge is 10% of the total bill.</li>
          <li>The service includes a 10% gratuity.</li>
        </ul>
      </section>
      <Button>Edit</Button>
      <Button>Confirm</Button>
    </div>
  );
}

export default ConfirmReservation;
