import { put, takeLatest, call } from 'redux-saga/effects';
import { receiveDataFunc, addPaymentFunc } from '../action';
import {fetchReceiveData,fetchAddPayment} from '../saga/api'
import {
  START_FETCH_RECEIVE_ALL_PAYMENTS,
  START_ADD_PAYMENT,
  PaymentPost,
} from '../actionTypes';
import { SagaIterator } from 'redux-saga';


function* fetchData(): SagaIterator {
  const data = yield call(fetchReceiveData);
  yield put(receiveDataFunc(data)); 
}

function* fetchResponse(action: PaymentPost): SagaIterator {
  const response = yield call(fetchAddPayment, action);
  yield put(addPaymentFunc(response));
}

export function* actionWatcher(): SagaIterator {
  yield takeLatest(START_FETCH_RECEIVE_ALL_PAYMENTS, fetchData);
  yield takeLatest(START_ADD_PAYMENT, fetchResponse); 
}  
 