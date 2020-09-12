import React, { FC, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAddPayment } from '../../redux/action';
import '../Modal/Modal.css';

export type TableProps = {
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
  display: string;
};

const Modal: FC<TableProps> = ({ setDisplay, display }) => {
  const dispatch = useDispatch();
  const [sumOfOrder, setSumOfOrder] = useState<number>();
  const [cardNumber, setcardNumber] = useState<number>();

  const modal = document.querySelector('.modal');

  window.addEventListener('click', (event: MouseEvent) => {
    if (event.target === modal) {
      setDisplay('none');
    }
  });

  const sendPayment = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(fetchAddPayment(sumOfOrder, cardNumber));
    },
    [dispatch, sumOfOrder, cardNumber]
  );

  return (
    <>
      <form method="POST" onSubmit={sendPayment}>
        <div id="simpleModal" className="modal" style={{ display: display }}>
          <div className="modal-content">
            <span className="closeBtn" onClick={() => setDisplay('none')}>
              X
            </span>
           
            <input
              type="text"
              onChange={(e) => {
                setSumOfOrder(parseInt(e.target.value));
              }}
              className="cardNumber"
            ></input>
            <input
              type="text"
              onChange={(e) => {
                setcardNumber(parseInt(e.target.value));
              }}
              className="cardNumber"
            ></input>
            <button className="buttonModal" onClick={() => setDisplay('none')}>
              Оплатить
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Modal;
