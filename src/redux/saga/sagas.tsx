import { put, takeLatest, all, call } from 'redux-saga/effects';
import {
  START_FETCH_RECEIVE_ALL_PAYMENTS,
  START_ADD_PAYMENT,
} from '../actionTypes';
import { receiveDataFunc, addPaymentFunc } from '../action';

const fetchReceiveData = async () => {
  const response = await fetch('http://localhost:4000');
  const result = await response.json();
  return result;
};

const fetchAddPayment = async (action: any) => {
  console.log(action);

  const response = await fetch(`http://localhost:4000/payments`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      cardNumber: action.cardNumber,
      sumOfOrder: action.sumOfOrder,
    }),
  });
  const result = await response.json();
  return result;
};

function* fetchData() {
  const data = yield call(fetchReceiveData);
  yield put(receiveDataFunc(data));
}

function* fetchResponse(action: any) {
  const response = yield call(fetchAddPayment, action.payload);
  yield put(addPaymentFunc(response));
}

function* actionWatcher() {
  yield takeLatest(START_FETCH_RECEIVE_ALL_PAYMENTS, fetchData);
  yield takeLatest(START_ADD_PAYMENT, fetchResponse);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
