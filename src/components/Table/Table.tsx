import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReceiveData } from '../../redux/action';
import formatDate from '../Table/formatDate';
import Modal from '../Modal/Modal';
import { TypeState } from '../..';
import './css/Table.css';

const Table: FC = () => {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState<string>('none');
  const response = useSelector((state: TypeState) => state.creature);
  const data = useSelector((state: TypeState) => state.data);

  useEffect(() => {
    dispatch(fetchReceiveData());
  }, [dispatch, response]);

  return (
    <>
      <div className="container">
        <button className="btn-open-modal" onClick={() => setDisplay('block')}>
          Совершить платеж
        </button>
      </div>
      <table className="main-table">
        <tbody>
          <tr>
            <th className="th-head">Номер заказа</th>
            <th className="th-head">Дата и время операции</th>
            <th className="th-head">Сумма</th>
            <th className="th-head">Номер карты</th>
          </tr>
          {!data && (
            <tr>
              <td className="td-table">The server</td>
              <td className="td-table">hasn't</td>
              <td className="td-table">a</td>
              <td className="td-table">connection</td>
            </tr>
          )}
          {data &&
            data.map((el, index) => (
              <tr key={index}>
                <td className="td-table">{el.numberOfOrder}</td>
                <td className="td-table">
                  {formatDate(new Date(el.dateOfOrder))}
                </td>
                <td className="td-table">{el.sumOfOrder} руб.</td>
                <td className="td-table">{`${el.cardNumber
                  .toString()
                  .match(/^\d/g)}xxxx${el.cardNumber
                  .toString()
                  .match(/\d$/g)}`}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <Modal setDisplay={setDisplay} display={display} />
    </>
  );
};

export default Table;
