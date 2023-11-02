import { initialState, tablesReducer } from './tables';

describe('tables reducer', () => {
  it('should return the initial state', () => {
    // check the each object in the array has the same properties (label, left, top, state, availableTimes)
    expect(initialState.tables).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          label: expect.any(String),
          left: expect.any(Number),
          top: expect.any(Number),
          state: expect.any(String),
          availableTimes: expect.any(Array),
        }),
      ]),
    );
  });

  it('should update available times', () => {
    const state = tablesReducer(
      { tables: [{ label: 'IDR-3', left: 70, top: 20, state: 'available', availableTimes: ['17:00', '18:00', '22:00'] }] },
      { label: 'IDR-3', type: 'UPDATE_AVAILABLE_TIMES', availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'] },
    );

    expect(state).toEqual({
      tables: [
        {
          label: 'IDR-3',
          left: 70,
          top: 20,
          state: 'available',
          availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
        },
      ],
    });
  });
});
