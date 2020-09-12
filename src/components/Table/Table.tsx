import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TypeState } from '../..';
import './css/Table.css';
import { fetchReceiveData } from '../../redux/action';
import Modal from '../Modal/Modal';

const Table: FC = () => {
  const [display, setDisplay] = useState<string>('none');
  const dispatch = useDispatch();
  const data = useSelector((state: TypeState) => state.data);
  const response = useSelector((state: TypeState) => state.creature);
  
  useEffect(() => {
    dispatch(fetchReceiveData());
  }, [dispatch, response]);
  
 

  return (
    <>
      <div className="container">
        <button className="btn-open-modal" onClick={() => setDisplay('block')}>Совершить платеж</button>
      </div>
      <table className="main-table">
        <tbody>
          <tr>
            <th className="th-head">Номер заказа</th>
            <th className="th-head">Дата операции</th>
            <th className="th-head">Сумма</th>
            <th className="th-head">Номер карты</th>
          </tr>
          {/* <tr>
            <td className="td-table">1</td>
            <td className="td-table">2</td>
            <td className="td-table">3</td>
            <td className="td-table">4</td>
          </tr> */}
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
      <Modal setDisplay={setDisplay} display={display}/>
    </>
  );
};

export default Table;
