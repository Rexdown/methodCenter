import React from 'react';
import { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';

import close from '../../assets/icons/close.svg'
import check from '../../assets/icons/check.svg'

import './Modal.scss';

class PhoneInput extends React.Component {
  render() {
    return <InputMask {...this.props} mask="+7 (999) 999-99-99"  maskChar="_" />;
  }
}

const html  = document.getElementsByTagName('html')[0];

function Modal(props) {
  const [completeState, setCompleteState] = useState(false)
  const [activeButton, setActiveButton] = useState(false)
  const [modalData, setModalData] = useState({
    name: '',
    phone: '',
    mail: '',
    message: '',
    checkbox: false,
  })

  useEffect(() => {
    if (props.activeModal) {
      html.style = 'overflow: hidden';
    } else {
      html.style = 'overflow: auto';
    }
  }, [props.activeModal])

  useEffect(() => {
    if (modalData.name !== '' && modalData.phone !== '' && modalData.mail !== '' && 
        modalData.message !== '' && modalData.checkbox) {
      setActiveButton(true)
    } else {
      setActiveButton(false)
    }
  }, [modalData])
  
  return (
    <div className={`modal ${props.activeModal ? 'modal-active' : ''}`} onClick={() => props.setActiveModal(false)}>
      <div 
      className="modal__container" onClick={(e) =>{e.stopPropagation()}}>
        {!completeState
          ? <>
              <img src={close} alt="close" className="modal__container-close" onClick={() => props.setActiveModal(false)}/>
              <h2 className="modal__container-title">ОБРАТНАЯ СВЯЗЬ</h2>

              <div className="modal__container__form">
                <p className="modal__container__form-text">Имя</p>
                <input
                  type="text"
                  className="modal__container__form-input"
                  placeholder='Укажите имя'
                  value={modalData.name}
                  onChange={(e) => setModalData({
                    ...modalData,
                    name: e.target.value,
                  })}
                />
              </div>

              <div className="modal__container__form">
                <p className="modal__container__form-text">Телефон</p>
                <PhoneInput
                  className="modal__container__form-input"
                  placeholder='+7 (___) ___-__-__'
                  value={modalData.phone}
                  onChange={(e) => setModalData({
                    ...modalData,
                    phone: e.target.value,
                  })}
                />
              </div>

              <div className="modal__container__form">
                <p className="modal__container__form-text">Email</p>
                <input
                  type="text"
                  className="modal__container__form-input"
                  placeholder='Укажите почтовый адрес'
                  value={modalData.mail}
                  onChange={(e) => setModalData({
                    ...modalData,
                    mail: e.target.value,
                  })}
                />
              </div>

              <div className="modal__container__form">
                <p className="modal__container__form-text">Сообщение</p>
                <textarea
                  className="modal__container__form-message" 
                  placeholder='Ваше сообщение' 
                  value={modalData.message}
                  onChange={(e) => setModalData({
                    ...modalData,
                    message: e.target.value,
                  })}
                />
              </div>

              <div className="modal__container__checkbox">
                <div 
                  className={`modal__container__checkbox-icon ${modalData.checkbox ? 'active-checkbox' : ''}`}
                  onClick={() => setModalData({
                    ...modalData,
                    checkbox: !modalData.checkbox,
                  })}
                >
                  <img src={check} alt="check" className="modal__container__checkbox-check" />
                </div>
                <div className="modal__container__checkbox__text">
                  <p className="modal__container__checkbox_text-main">Даю согласие на обработку</p>
                  <a href="#" className="modal__container__checkbox__text-link">персональных данных</a>
                </div>
              </div>

              <button
                className={`modal__container-submit ${activeButton ? 'activeButton' : ''}`}
                onClick={() => {
                  setModalData({
                    name: '',
                    phone: '',
                    mail: '',
                    message: '',
                    checkbox: false,
                  });
                  setCompleteState(true);
                }}
              >
                Отправить
              </button>
            </>
          : <>
              <div className="modal__container__complete">
                <h3 className="modal__container__complete-title">СООБЩЕНИЕ ОТПРАВЛЕНО!</h3>
                <p className="modal__container__complete-text">Мы ответим вам в ближайшее время</p>
                <button
                className='modal__container-submit completeButton'
                onClick={() => {
                  setCompleteState(false);
                  props.setActiveModal(false)
                }}
              >
                Закрыть
              </button>
              </div>
            </>
        }
      </div>
    </div>
  );
}

export default Modal;
