//RECEIVE AND ADD

export const RECEIVE_ALL_PAYMENTS = 'RECEIVE_ALL_PAYMENTS';
export const ADD_PAYMENT = 'ADD_PAYMENT';

//START

export const START_FETCH_RECEIVE_ALL_PAYMENTS =
  'START_FETCH_RECEIVE_ALL_PAYMENTS';
export const START_ADD_PAYMENT = 'START_ADD_PAYMENT';

export interface PaymentPost {
  type: typeof START_ADD_PAYMENT;
  payload: {
    sumOfOrder: number | undefined;
    cardNumber: number | undefined;
  };
}

export interface StertFetchReceiveData {
  type: typeof START_FETCH_RECEIVE_ALL_PAYMENTS;
}

export interface CurrentData {  
  numberOfOrder: number;
  dateOfOrder: Date;
  sumOfOrder: number;
  cardNumber: number;
}

export interface ResponseCreate {
  success: boolean;
}

export interface ReceiveData {
  type: typeof RECEIVE_ALL_PAYMENTS;
  payload: CurrentData[]; 
}

export interface ReceiveDataFunc { 
  type: typeof RECEIVE_ALL_PAYMENTS;
  payload: CurrentData; 
} 

export interface AddPayment {
  type: typeof ADD_PAYMENT;
  payload: ResponseCreate;
}

export type WorkingDispatchTypes = ReceiveData | AddPayment;
