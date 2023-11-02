import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FormTable from './FormTable';

describe('Renders the BookingForm heading', () => {
  let ocassion = 'Birthday';
  let date = '2021-10-10';
  let time = '17:00';
  let guests = 2;

  const setOccasion = (value: string) => {
    ocassion = value;
  };
  const setDate = (value: string) => {
    date = value;
  };
  const setTime = (value: string) => {
    time = value;
  };
  const setGuests = (value: number) => {
    guests = value;
  };

  it('should render the heading', () => {
    render(
      <FormTable
        occasion={ocassion}
        setOccasion={setOccasion}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        guests={guests}
        setGuests={setGuests} 
        table={undefined}      
      />,
    );
    const headingElement = screen.getByText('Booking Information');
    expect(headingElement);
  });
});
