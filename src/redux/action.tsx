import {
  RECEIVE_ALL_PAYMENTS,
  ADD_PAYMENT,
  WorkingDispatchTypes,
 
} from './actionTypes';
import { Dispatch } from 'react';

export const fetchReceiveData = () => {
  return async (dispatch: Dispatch <WorkingDispatchTypes>) => {
    const response = await fetch('http://localhost:4000');
    const result = await response.json();
    dispatch({
      type: RECEIVE_ALL_PAYMENTS,
      payload: result,
    });
  };
};

export const fetchAddPayment = (sumOfOrder:number | undefined, cardNumber:number | undefined) => {
  return async (dispatch: Dispatch<WorkingDispatchTypes>) => {
    const response = await fetch(`http://localhost:4000/payments`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        sumOfOrder: sumOfOrder,
        cardNumber: cardNumber,
      }),
    });
    const result = await response.json();
    dispatch({
      type: ADD_PAYMENT,
      payload: result,
    });
  };
};
