import { renderHook } from '@testing-library/react';
import useTables from './useTables';
import { initialState } from '../reducers/tables';

describe('tables reducer', () => {
  it('should return the initial state', () => {
    const { result } = renderHook(useTables);
    expect(result.current[0]).toEqual(initialState);
  });
});
