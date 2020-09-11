import { put, takeLatest, all, call } from 'redux-saga/effects';
import { START_FETCH_RECEIVE_ALL_PAYMENTS } from '../actionTypes';
import { receiveDataFunc, addPaymentFunc } from '../action';


const fetchReceiveData = async () => {
  const response = await fetch('http://localhost:4000');
  const result = await response.json();
  return result;
}


// const fetchAddPayment = async (titlenumberOfOrder:number, dateOfOrder:Date, sumOfOrder:number,cardNumber:number )=>{
//   const response = await fetch(`URL`, {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: JSON.stringify({
//         titlenumberOfOrder: titlenumberOfOrder,
//         dateOfOrder: dateOfOrder,
//         sumOfOrder: sumOfOrder,
//         cardNumber: cardNumber,
//       }),
//     });
//     const result = await response.json();
//     return result;
// }


function* fetchData() {
  const data = yield call(fetchReceiveData);
  yield put(receiveDataFunc(data));
}

// function* fetchResponse() {
//   const response = yield call(fetchAddPayment);
//   yield put(addPaymentFunc(response));
// }


function* actionWatcher() {
  yield takeLatest(START_FETCH_RECEIVE_ALL_PAYMENTS, fetchData);
  // yield takeLatest(ADD_PAYMENT, fetchAddPayment);
}

export default function* rootSaga(){
  yield all([
    actionWatcher()
  ])
}
