import { PaymentPost, CurrentData, ResponseCreate } from '../actionTypes';

//GET

export const fetchReceiveData = async (): Promise<CurrentData> => {
  const response = await fetch('http://localhost:4000');
  const result = await response.json();
  return result;
};

//POST

export const fetchAddPayment = async (action: PaymentPost): Promise<ResponseCreate> => {
  const response = await fetch(`http://localhost:4000/payments`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      cardNumber: action.payload.cardNumber,
      sumOfOrder: action.payload.sumOfOrder,
    }),
  });
  const result = await response.json();
  return result;
};
