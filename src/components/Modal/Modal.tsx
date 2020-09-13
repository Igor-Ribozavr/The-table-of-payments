import React, { FC, useState, useCallback } from 'react';
import { fetchAddPayment } from '../../redux/action';
import { useDispatch } from 'react-redux';
import '../Modal/css/Modal.css';

export type TableProps = {
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
  display: string;
};

const Modal: FC<TableProps> = ({ setDisplay, display }) => {
  const dispatch = useDispatch();
  const [sumOfOrder, setSumOfOrder] = useState<number>();
  const [cardNumber, setCardNumber] = useState<number>();

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
      <div id="simpleModal" className="modal" style={{ display: display }}>
        <div className="modal-content">
          <span className="closeBtn" onClick={() => setDisplay('none')}>
            X
          </span>
          <div className="form">
            <form method="POST" onSubmit={sendPayment}>
              <div className="test">
                <div>
                  <label className="label">Сумма к оплате</label>
                  <div>
                    <input
                      type="text"
                      onChange={(e) => {
                        setSumOfOrder(parseInt(e.target.value));
                      }}
                      className="input-sum"
                    ></input>
                  </div>
                </div>
                <div className="container-input-sum">
                  <label className="label">Номер карты</label>
                  <div>
                    <input
                      type="text"
                      onChange={(e) => {
                        setCardNumber(parseInt(e.target.value));
                      }}
                      className="input-card"
                    ></input>
                  </div>
                </div>
                <button
                  className="button-modal"
                  onClick={() => setDisplay('none')}
                >
                  Оплатить
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
