export const RECEIVE_ALL_PAYMENTS = 'RECEIVE_ALL_PAYMENTS';
export const ADD_PAYMENT = 'ADD_PAYMENT';


export interface CurrentData {
  numberOfOrder: number;
  dateOfOrder: Date;
  sumOfOrder: number;
  cardNumber: number;
}

export interface ResponseCreate {
  success: boolean;
}

interface ReceiveData {
  type: typeof RECEIVE_ALL_PAYMENTS;
  payload: CurrentData[];
}

interface AddPayment {
  type: typeof ADD_PAYMENT;
  payload: ResponseCreate;
}

export type WorkingDispatchTypes = ReceiveData | AddPayment;
