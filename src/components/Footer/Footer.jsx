import logo from '../../assets/icons/logo-mini-white.svg';
import post from '../../assets/icons/post.svg'
import phone from '../../assets/icons/phone.svg'
import youtube from '../../assets/icons/YouTube-white.svg';
import facebook from '../../assets/icons/facebook-white.svg';
import instagram from '../../assets/icons/instagram-white.svg';
import vk from '../../assets/icons/vk-white.svg';

import './Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__head">
        <div className="footer__head__left">
          <img src={logo} alt="logo" className="footer__head__left-logo" />
          <h3 className="footer__head__left-title">
            Саратовский областной учебно-методический центр
          </h3>
        </div>

        <div className="footer__head__right">
          <div className="footer__head__right__contact">
            <img src={post} alt="post" className="footer__head__right__contact-icon" />
            <p className="footer__head__right__contact-post">metod-centr@yandex.ru</p>
          </div>
          <div className="footer__head__right">
            <div className="footer__head__right__contact">
              <img src={phone} alt="post" className="footer__head__right__contact-icon" />
              <p className="footer__head__right__contact-phone">8 (8452) 44-80-60</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__main">
        <div className="footer__main__contacts">
          <div className="footer__main__contacts__item">
            <p className="footer__main__contacts__item-text">
              Саратовский областной учебно-методический центр
            </p>
            <div className="footer__main__contacts__item__socials">
              <img src={youtube} alt="icon" className="footer__main__contacts__item__socials-icon" />
              <img src={facebook} alt="icon" className="footer__main__contacts__item__socials-icon" />
              <img src={instagram} alt="icon" className="footer__main__contacts__item__socials-icon" />
              <img src={vk} alt="icon" className="footer__main__contacts__item__socials-icon" />
            </div>
          </div>
          <div className="footer__main__contacts__item">
            <p className="footer__main__contacts__item-text">
              Региональный центр поддержки одаренных детей
            </p>
            <div className="footer__main__contacts__item__socials">
              <img src={facebook} alt="icon" className="footer__main__contacts__item__socials-icon" />
              <img src={instagram} alt="icon" className="footer__main__contacts__item__socials-icon" />
              <img src={vk} alt="icon" className="footer__main__contacts__item__socials-icon" />
            </div>
          </div>
        </div>

        <div className="footer__main__nav">
          <div className="footer__main__nav__left">
            <p className="footer__main__nav__left-item">Сведения</p>
            <p className="footer__main__nav__left-item">Деятельность</p>
            <p className="footer__main__nav__left-item">Противодействие корупции</p>
          </div>
          <div className="footer__main__nav__right">
            <p className="footer__main__nav__right-item">Контакты</p>
            <p className="footer__main__nav__right-item">Карта сайта</p>
          </div>
        </div>
      </div>

      <div className="footer__end">
        <p className="footer__end-text">
          2021 ©  Саратовский областной учебно-методический центр. Все права защищены.
        </p>
        <p className="footer__end-text">
          Разработка сайта: Сорокин Леонид
        </p>
      </div>
    </div>
  );
}

export default Footer;
