import { reducerPayments } from './reducerPayments';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  reducerPayments,
});

export type TypeState = ReturnType<typeof rootReducer>;
