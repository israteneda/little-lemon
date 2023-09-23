export const initialState = {
  tables: [
    { label: 'IDR-1', left: 10, top: 20, state: 'reserved', availableTimes: [] },
    {
      label: 'IDR-2',
      left: 40,
      top: 20,
      state: 'available',
      availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
    },
    { label: 'IDR-3', left: 70, top: 20, state: 'available', availableTimes: ['17:00', '18:00', '22:00'] },
    {
      label: 'IDR-4',
      left: 25,
      top: 50,
      state: 'available',
      availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
    },
    { label: 'IDR-5', left: 55, top: 50, state: 'reserved', availableTimes: [] },
    { label: 'OR-1', left: 15, top: 15, state: 'available', availableTimes: ['20:00', '21:00', '22:00'] },
    { label: 'ODR-2', left: 55, top: 15, state: 'available', availableTimes: ['19:00', '22:00'] },
    { label: 'ODR-3', left: 35, top: 40, state: 'reserved', availableTimes: [] },
    { label: 'ODR-4', left: 15, top: 65, state: 'available', availableTimes: ['17:00', '18:00', '19:00'] },
    { label: 'ODR-5', left: 55, top: 65, state: 'reserved', availableTimes: [] },
  ],
};

export function tablesReducer(state: any = initialState, action: { label: string; type: string; availableTimes?: string[] }) {
  switch (action.type) {
    case 'BOOK':
      return {
        tables: state.tables.map((table: { label: string; left: number; top: number; state: string }) =>
          table.label === action.label ? { ...table, state: 'booked' } : table,
        ),
      };
    case 'CANCEL_BOOK':
      return {
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
