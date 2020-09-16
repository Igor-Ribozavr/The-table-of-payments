import {
  START_FETCH_RECEIVE_ALL_PAYMENTS,
  RECEIVE_ALL_PAYMENTS,
  START_ADD_PAYMENT,
  ADD_PAYMENT,
  CurrentData,
  PaymentPost,
  ResponseCreate,
  StertFetchReceiveData,
  ReceiveDataFunc,
  AddPayment,
} from './actionTypes';

export const startFetchReceiveData = ():StertFetchReceiveData => {
  return {
    type: START_FETCH_RECEIVE_ALL_PAYMENTS,
  };
};

export const receiveDataFunc = (payload: CurrentData):ReceiveDataFunc=> {
  return {
    type: RECEIVE_ALL_PAYMENTS,  
    payload,  
  };
};

export function startAddPayment(sumOfOrder: number | undefined, cardNumber:number | undefined):PaymentPost {
  return {
    type: START_ADD_PAYMENT,
    payload: {sumOfOrder,cardNumber}
  }; 
};

export const addPaymentFunc = (payload: ResponseCreate):AddPayment => {
  return {
    type: ADD_PAYMENT,
    payload,
  };
}; 
