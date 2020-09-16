import { RECEIVE_ALL_PAYMENTS, ADD_PAYMENT, CurrentData, ResponseCreate, WorkingDispatchTypes } from './actionTypes';


interface DefaultState {
  loading: boolean;
  data?: CurrentData[];
  creature?: ResponseCreate;
}

const defaultState: DefaultState = {
  loading: false,
}; 

export const reducerPayments = (state: DefaultState = defaultState, action:WorkingDispatchTypes) => {
  switch (action.type) {
    case RECEIVE_ALL_PAYMENTS:
      return {
        ...state,
        loading: true,
        data: action.payload,
      };
    case ADD_PAYMENT:
      return {
        ...state,
        loading: true,
        creature: action.payload,
      };
    default:
      return state;
  }
};
