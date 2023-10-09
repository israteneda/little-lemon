import { fetchAPI } from '@utils/fakeAPI';

export const initialState = {
  selectedTable: null,
  tables: [
    { label: 'IDR-1', left: 10, top: 20, state: 'reserved', availableTimes: await fetchAPI(new Date(), 'IDR-1') },
    {
      label: 'IDR-2',
      left: 40,
      top: 20,
      state: 'available',
      availableTimes: await fetchAPI(new Date(), 'IDR-2'),
    },
    { label: 'IDR-3', left: 70, top: 20, state: 'available', availableTimes: await fetchAPI(new Date(), 'IDR-3') },
    {
      label: 'IDR-4',
      left: 25,
      top: 50,
      state: 'available',
      availableTimes: await fetchAPI(new Date(), 'IDR-4'),
    },
    { label: 'IDR-5', left: 55, top: 50, state: 'reserved', availableTimes: await fetchAPI(new Date(), 'IDR-5') },
    { label: 'OR-1', left: 15, top: 15, state: 'available', availableTimes: await fetchAPI(new Date(), 'OR-1') },
    { label: 'ODR-2', left: 55, top: 15, state: 'available', availableTimes: await fetchAPI(new Date(), 'ODR-2') },
    { label: 'ODR-3', left: 35, top: 40, state: 'reserved', availableTimes: await fetchAPI(new Date(), 'ODR-3') },
    { label: 'ODR-4', left: 15, top: 65, state: 'available', availableTimes: await fetchAPI(new Date(), 'ODR-4') },
    { label: 'ODR-5', left: 55, top: 65, state: 'reserved', availableTimes: await fetchAPI(new Date(), 'ODR-5') },
  ],
};

export function tablesReducer(state: any = initialState, action: { label: string; type: string; availableTimes?: string[] }) {
  const bookedTableExists = state.tables.find(
    (table: { label: string; left: number; top: number; state: string }) => table.state === 'booked',
  );

  switch (action.type) {
    case 'BOOK':
      return {
        selectedTable: !bookedTableExists ? action.label : null,
        tables: state.tables.map((table: { label: string; left: number; top: number; state: string }) =>
          table.label === action.label && !bookedTableExists ? { ...table, state: 'booked' } : table,
        ),
      };
    case 'CANCEL_BOOK':
      return {
        selectedTable: null,
        tables: state.tables.map((table: { label: string; left: number; top: number; state: string; availableTimes: string[] }) =>
          table.label === action.label && table.state !== 'reserved' ? { ...table, state: 'available' } : table,
        ),
      };
    case 'UPDATE_AVAILABLE_TIMES':
      return {
        tables: state.tables.map((table: { label: string; left: number; top: number; state: string; availableTimes: string[] }) =>
          table.label === action.label ? { ...table, availableTimes: action.availableTimes } : table,
        ),
      };
    default:
      return state;
  }
}
