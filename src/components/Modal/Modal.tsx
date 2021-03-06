import React, { FC, useState, useCallback, useRef } from 'react';
import { startAddPayment } from '../../redux/action';
import { useDispatch } from 'react-redux';
import '../Modal/css/Modal.css';

export type TableProps = {
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
  display: string;
};

const Modal: FC<TableProps> = ({ setDisplay, display }) => {
  const dispatch = useDispatch();
  const [sumOfOrder, setSumOfOrder] = useState<number | undefined>();
  const [cardNumber, setCardNumber] = useState<number | undefined>();
  const modalWind = useRef(null)


  window.addEventListener('click', (event: MouseEvent) => {
    if (event.target === modalWind.current) {
      setDisplay('none');
    }
  });

  const sendPayment = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(startAddPayment(sumOfOrder, cardNumber));
    },
    [dispatch, sumOfOrder, cardNumber]
  );

  return (
    <>
      <div id="simpleModal" className="modal" style={{ display: display }} ref={modalWind}>
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
                      defaultValue={''}
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
                      defaultValue={''}
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
