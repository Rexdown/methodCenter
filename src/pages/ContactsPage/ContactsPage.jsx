import { Link  } from 'react-router-dom';

import SecondHeader from '../../components/SecondHeader/SecondHeader'

import { personalArr, personalDepartamentArr } from '../../constants'

import post from '../../assets/icons/post.svg'
import phone from '../../assets/icons/phone.svg'
import clock from '../../assets/icons/clock.svg'

import './ContactsPage.scss';

const PersonalItem = (item) => {
  return (
    <div className="contactsPage__personal__item">
      <div className="contactsPage__personal__item-box">
        <h3 className="contactsPage__personal__item-name">{item.name}</h3>
        <p className="contactsPage__personal__item-post">{item.post}</p>
      </div>
      <div className="contactsPage__personal__item-box">
        <div className="contactsPage__personal__item__info">
          <img src={post} alt="post" className="contactsPage__personal__item__info-icon" />
          <p className="contactsPage__personal__item__info-text">{item.mail}</p>
        </div>
        <div className="contactsPage__personal__item__info">
          <img src={phone} alt="phone" className="contactsPage__personal__item__info-icon" />
          <p className="contactsPage__personal__item__info-text">{item.phone}</p>
        </div>
      </div>
    </div>
  )
}

const DeportamentItem = (item) => {
  return (
    <div className="contactsPage__personal__department">
      <div className="contactsPage__personal__department-box">
        <h2 className="contactsPage__personal__department-title">{item.title}</h2>
        <h3 className="contactsPage__personal__department-name">{item.name}</h3>
        <p className="contactsPage__personal__department-post">{item.post}</p>
      </div>
      <div className="contactsPage__personal__department-box">
        <div className="contactsPage__personal__department__info">
          <img src={post} alt="post" className="contactsPage__personal__department__info-icon" />
          <p className="contactsPage__personal__department__info-text">{item.mail}</p>
        </div>
        <div className="contactsPage__personal__department__info">
          <img src={phone} alt="phone" className="contactsPage__personal__department__info-icon" />
          <p className="contactsPage__personal__department__info-text">{item.phone}</p>
        </div>
      </div>
    </div>
  )
}

function ContactsPage() {
  return (
    <div className="contactsPage">
      <SecondHeader activeNav='contacts' />
      <div className="contactsPage__adress">
        <div className="contactsPage__adress__content">
          <h2 className="contactsPage__adress__content-title">«Саратовский областной учебно-методический центр»</h2>
          <p className="contactsPage__adress__content-text">410031, г. Саратов, ул. Волжская, д.32</p>
          <div className="contactsPage__adress__content__info">
            <img src={clock} alt="clock" className="contactsPage__adress__content__info-icon" />
            <p className="contactsPage__adress__content__info-text">9:00-18:00</p>
          </div>
          <div className="contactsPage__adress__content__info">
            <img src={phone} alt="phone" className="contactsPage__adress__content__info-icon" />
            <p className="contactsPage__adress__content__info-text">8 (8452) 44-80-60</p>
          </div>
          <div className="contactsPage__adress__content__info">
            <img src={post} alt="post" className="contactsPage__adress__content__info-icon" />
            <p className="contactsPage__adress__content__info-text">metod-centr@yandex.ru</p>
          </div>
        </div>
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A500541d36f9e338c7d4ceaa21440837a47ae942705cf14e69838354e86f5412a&amp;source=constructor" width="600" height="380" frameborder="0"></iframe>
      </div>

      <div className="contactsPage__personal">
        {personalArr.map((item) => (
          PersonalItem(item)
        ))}
      </div>

      <div className="contactsPage__personal-deportament">
          {personalDepartamentArr.map((item) => (
            DeportamentItem(item)
          ))}
      </div>
    </div>
  );
}

export default ContactsPage;
