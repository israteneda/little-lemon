import { useReducer } from 'react';
import { initialState, tablesReducer } from '../reducers/tables';

function useTables(data: any = initialState) {
  const [state, dispatch] = useReducer(tablesReducer, data);
  return [state, dispatch];
}

export default useTables;
