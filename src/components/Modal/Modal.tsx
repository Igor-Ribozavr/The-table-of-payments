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
  const [sumOfOrder, setSumOfOrder] = useState<number | undefined>();
  const [cardNumber, setCardNumber] = useState<number | undefined>();

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

  const btnModal = (document.querySelector('.button-modal-disabled') as HTMLButtonElement)
  
  if (
    btnModal !== null &&
    sumOfOrder !== undefined &&
    sumOfOrder <= 5000 &&
    sumOfOrder > 100 &&
    cardNumber !== undefined &&
    cardNumber < 999999 &&
    cardNumber > 111111
  ) {
    btnModal.classList.remove('button-modal-disabled');
    btnModal.classList.add('button-modal')
    btnModal.disabled = false 
  }


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
                  className="button-modal-disabled"
                  onClick={() => setDisplay('none')}
                  disabled={true} 
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
