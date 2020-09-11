import React, { FC, useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TypeState } from '../..';
import './css/Table.css';
import { startFetchReceiveData } from '../../redux/action';

const Table: FC = () => {
  const [state, setState] = useState<boolean>(false);
  const dispatch = useDispatch();
  const creature = useSelector((state: TypeState) => state.data);
  console.log(creature);

  useEffect(() => {
    dispatch(startFetchReceiveData());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <button className="btn-open-modal" onClick={() => setState(!state)}>
          Совершить платеж
        </button>
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
        </tbody>
      </table>
    </>
  );
};

export default Table;
