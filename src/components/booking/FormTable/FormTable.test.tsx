import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FormTable from './FormTable';

describe('Renders the BookingForm heading', () => {
  let ocassion = 'Birthday';
  let date = '2021-10-10';
  let dateError = '';
  let time = '17:00';
  let guests = 2;
  let guestsError = '';

  const setOccasion = (value: string) => {
    ocassion = value;
  };
  const setDate = (value: string) => {
    date = value;
  };
  const setDateError = (value: string) => {
    dateError = value;
  }
  const setTime = (value: string) => {
    time = value;
  };
  const setGuests = (value: number) => {
    guests = value;
  };
  const setGuestsError = (value: string) => {
    guestsError = value;
  }

  it('should render the heading', () => {
    render(
      <FormTable
        occasion={ocassion}
        setOccasion={setOccasion}
        date={date}
        dateError={dateError}
        setDate={setDate}
        setDateError={setDateError}
        time={time}
        setTime={setTime}
        guests={guests}
        guestsError={guestsError}
        setGuests={setGuests} 
        setGuestsError={setGuestsError}
        table={undefined}      
      />,
    );
    const headingElement = screen.getByText('Booking Information');
    expect(headingElement);
  });

  it('should select a table to choose a time', () => {
    const {rerender} = render(
      <FormTable
        occasion={ocassion}
        setOccasion={setOccasion}
        date={date}
        dateError={dateError}
        setDate={setDate}
        setDateError={setDateError}
        time={time}
        setTime={setTime}
        guests={guests}
        guestsError={guestsError}
        setGuests={setGuests} 
        setGuestsError={setGuestsError}
        table={undefined}      
      />,
    );
    const dateInput = screen.getAllByLabelText('Choose time');
    fireEvent.click(dateInput[0]);
    rerender(
      <FormTable
        occasion={ocassion}
        setOccasion={setOccasion}
        date={date}
        dateError={dateError}
        setDate={setDate}
        setDateError={setDateError}
        time={time}
        setTime={setTime}
        guests={guests}
        guestsError={guestsError}
        setGuests={setGuests} 
        setGuestsError={setGuestsError}
        table={undefined}      
      />,
    );
    expect(dateError).toBe('Please select a table first!');
  });

  it('should be guests between 1 and 10', () => {
    const {rerender} = render(
      <FormTable
        occasion={ocassion}
        setOccasion={setOccasion}
        date={date}
        dateError={dateError}
        setDate={setDate}
        setDateError={setDateError}
        time={time}
        setTime={setTime}
        guests={guests}
        guestsError={guestsError}
        setGuests={setGuests} 
        setGuestsError={setGuestsError}
        table={undefined}      
      />,
    );
    const guestsInput = screen.getByLabelText('Number of guests');
    fireEvent.change(guestsInput, {target: {value: 0}});
    rerender(
      <FormTable
        occasion={ocassion}
        setOccasion={setOccasion}
        date={date}
        dateError={dateError}
        setDate={setDate}
        setDateError={setDateError}
        time={time}
        setTime={setTime}
        guests={guests}
        guestsError={guestsError}
        setGuests={setGuests} 
        setGuestsError={setGuestsError}
        table={undefined}      
      />,
    );
    expect(guestsError).toBe('Please enter a number between 1 and 10');
  });

  test('guests is valid', () => {
    const {rerender} = render(
      <FormTable
        occasion={ocassion}
        setOccasion={setOccasion}
        date={date}
        dateError={dateError}
        setDate={setDate}
        setDateError={setDateError}
        time={time}
        setTime={setTime}
        guests={guests}
        guestsError={guestsError}
        setGuests={setGuests} 
        setGuestsError={setGuestsError}
        table={undefined}      
      />,
    );
    const guestsInput = screen.getByLabelText('Number of guests');
    fireEvent.change(guestsInput, {target: {value: 5}});
    rerender(
      <FormTable
        occasion={ocassion}
        setOccasion={setOccasion}
        date={date}
        dateError={dateError}
        setDate={setDate}
        setDateError={setDateError}
        time={time}
        setTime={setTime}
        guests={guests}
        guestsError={guestsError}
        setGuests={setGuests} 
        setGuestsError={setGuestsError}
        table={undefined}      
      />,
    );
    expect(guestsError).toBe('');
  });
    
});
