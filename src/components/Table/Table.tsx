import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TypeState } from '../..';
import './css/Table.css';
import { fetchReceiveData } from '../../redux/action';
import Modal from '../Modal/Modal';

const Table: FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: TypeState) => state.data);
  const [state, setState] = useState();

  useEffect(() => {
    dispatch(fetchReceiveData());
  }, [dispatch]);

  if (data !== undefined) {
    console.log(data[0].dateOfOrder);
    let test = data[0].dateOfOrder;
    console.log(test.toString().substring(0, 10));
    console.log(data[0].cardNumber);
  }

  return (
    <>
      <div className="container">
        <button className="btn-open-modal">Совершить платеж</button>
      </div>
      <table className="main-table">
        <tbody>
          <tr>
            <th className="th-head">Номер заказа</th>
            <th className="th-head">Дата операции</th>
            <th className="th-head">Сумма</th>
            <th className="th-head">Номер карты</th>
          </tr>
          <tr>
            <td className="td-table">1</td>
            <td className="td-table">2</td>
            <td className="td-table">3</td>
            <td className="td-table">4</td>
          </tr>
          {data &&
            data.map((el, index) => (
              <tr key={index}>
                <td className="td-table">{el.numberOfOrder}</td>
                <td className="td-table">
                  {el.dateOfOrder.toString().substring(0, 10)}
                </td>
                <td className="td-table">{el.sumOfOrder}</td>
                <td className="td-table">{`${el.cardNumber
                  .toString()
                  .substring(0, 1)}xxxx${el.cardNumber
                  .toString()
                  .substring(8, 9)}`}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <Modal />
    </>
  );
};

export default Table;
