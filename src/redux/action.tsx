import {
  RECEIVE_ALL_PAYMENTS,
  CurrentData,
  ResponseCreate,
  ADD_PAYMENT,
  START_FETCH_RECEIVE_ALL_PAYMENTS,
  START_ADD_PAYMENT,
} from './actionTypes';

export const startFetchReceiveData = () => {
  return {
    type: START_FETCH_RECEIVE_ALL_PAYMENTS,
  };
};

export const receiveDataFunc = (payload: CurrentData) => {
  return {
    type: RECEIVE_ALL_PAYMENTS,
    payload,
  };
};

export function startAddPayment(sumOfOrder: number | undefined, cardNumber:number | undefined) {
  return {
    type: START_ADD_PAYMENT,
    payload: {sumOfOrder,cardNumber}
  }; 
};

export const addPaymentFunc = (payload: ResponseCreate) => {
  return {
    type: ADD_PAYMENT,
    payload,
  };
};
