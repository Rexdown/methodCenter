import { useState } from 'react';
import { Link } from 'react-router-dom';
import {HandySvg} from 'handy-svg';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { controls, slideInfo, newsImgs, usefulLinkArrTop, usefulLinkArrBottom } from '../../constants';

import logoMini from '../../assets/icons/logo-mini.svg';
import logo from '../../assets/icons/logo.svg';
import youtube from '../../assets/icons/YouTube.svg';
import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import vk from '../../assets/icons/vk.svg';
import bg from '../../assets/imgs/bg-main.png'
import banner from '../../assets/imgs/banner-main.png'
import director from '../../assets/imgs/director.png'

import 'swiper/css';
import 'swiper/css/navigation';

import './MainPage.scss';
import Modal from '../../components/Modal/Modal';

const ControlItem = (item, setActiveModal) => {
  return (
    <div className="mainPage__top__controls__item" onClick={() => setActiveModal(true)}>
      <img src={item.url} alt="icon" className="mainPage__top__controls__item-icon" />
      <p className="mainPage__top__controls__item-text">{item.text}</p>
    </div>
  )
}

const NewItem = (url) => {
  return (
    <div className="mainPage__news__item">
      <img src={url} alt="new-img" className="mainPage__news__item-img" />
      <p className="mainPage__news__item-date">12.05.2021</p>
      <p className="mainPage__news__item-title">
        Дорогие друзья, привествую вас в нашем Методическом центре. Третья строка заголовка.
      </p>
      <p className="mainPage__news__item-text">
        Lorem ipsum dolor sit amet consectetuer. Psum dolor sit amet, consectetuer. 
        Amet, consectetuer dolor sit amet. Lorem ipsum dolor sit amet consectetuer. 
        Psum dolor sit amet, consectetuer. Amet, consectetuer dolor sit amet. 
      </p>
      <div className="mainPage__news__item__readMore">
        <p className="mainPage__news__item__readMore-text">Читать далее</p>
        <div className="mainPage__news__item__readMore-arrow" />
      </div>
    </div>
  )
}

function MainPage() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeModal, setActiveModal] = useState(false)

  return (
    <div className="mainPage">
      <Modal activeModal={activeModal} setActiveModal={setActiveModal} />

      <div className="mainPage__header">
        <div className="mainPage__header__logo">
          <img src={logoMini} alt="logo" className="mainPage__header__logo-icon" />
          <h2 className="mainPage__header__logo-title">
            Саратовский областной учебно-методический центр
          </h2>
        </div>
        <div className="mainPage__header__contacts">
          <div className="mainPage__header__contacts__item">
            <p className="mainPage__header__contacts__item-text">
              Саратовский областной учебно-методический центр
            </p>
            <div className="mainPage__header__contacts__item__socials">
              <HandySvg src={youtube}  width="18" height="18" className="mainPage__header__contacts__item__socials-youtube" />
              <HandySvg src={facebook}  width="18" height="16" className="mainPage__header__contacts__item__socials-facebook" />
              <HandySvg src={instagram}  width="18" height="18" className="mainPage__header__contacts__item__socials-instagram" />
              <HandySvg src={vk}  width="18" height="19" className="mainPage__header__contacts__item__socials-vk" />
            </div>
          </div>
          <div className="mainPage__header__contacts__item">
            <p className="mainPage__header__contacts__item-text">
              Региональный центр поддержки одаренных детей
            </p>
            <div className="mainPage__header__contacts__item__socials">
              <HandySvg src={facebook}  width="18" height="16" className="mainPage__header__contacts__item__socials-facebook" />
              <HandySvg src={instagram}  width="18" height="18" className="mainPage__header__contacts__item__socials-instagram" />
              <HandySvg src={vk}  width="18" height="19" className="mainPage__header__contacts__item__socials-vk" />
            </div>
          </div>
        </div>
      </div>

      <nav className="mainPage__nav">
        <Link to="/info" className="mainPage__nav-item">Сведения</Link>
        <Link to="/activity" className="mainPage__nav-item">Деятельность</Link>
        <Link to="/management" className="mainPage__nav-item">Руководство</Link>
        <Link to="/education" className="mainPage__nav-item">Образование</Link>
        <Link to="/contacts" className="mainPage__nav-item">Контакты</Link>
      </nav>

      <div className="mainPage__top">
        <img src={bg} alt="bg" className="mainPage__top-bg" />
        <img src={logo} alt="logo" className="mainPage__top-logo" />
        <div className="mainPage__top__controls">
          {controls.map((item) => (
            ControlItem(item, setActiveModal)
          ))}
        </div>
      </div>
      
      <div className="mainPage__banner">
        <img src={banner} alt="banner" className="mainPage__banner-img" />
      </div>

      <div className="mainPage__about">
        <div className="mainPage__about-content">
          <div className="mainPage__about__left">
            <h2 className="mainPage__about__left-title">
              Дорогие друзья, привествую Вас в нашем Методическом центре!
            </h2>
            <p className="mainPage__about__left-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
              Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            </p>
            <p className="mainPage__about__left-text">
              In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. 
              Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. 
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, 
              viverra quis, feugiat a, tellus.
            </p>
          </div>

          <div className="mainPage__about__right">
            <Swiper
              className="mainPage__about__right-slider"
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
            >
              <SwiperSlide><img src={director} alt="director" /></SwiperSlide>
              <SwiperSlide><img src={director} alt="director" /></SwiperSlide>
              <SwiperSlide><img src={director} alt="director" /></SwiperSlide>
              <SwiperSlide><img src={director} alt="director" /></SwiperSlide>
            </Swiper>
            <p className="mainPage__about__right-name">{slideInfo[activeSlide].name}</p>
            <p className="mainPage__about__right-post">{slideInfo[activeSlide].post}</p>
          </div>
        </div>
      </div>

      <div className="mainPage__news">
        <h2 className="mainPage__news-title">Актуальные новости</h2>
        <div className="mainPage__news-wrapper">
          {newsImgs.map((url) => (
            NewItem(url)
          ))}
        </div>
        <div className="mainPage__news__item__readMore allNews">
          <p className="mainPage__news__item__readMore-text">Все новости</p>
          <div className="mainPage__news__item__readMore-arrow" />
        </div>
      </div>

      <div className="mainPage__usefulLinks">
        <h2 className="mainPage__usefulLinks-title">Полезные ссылки</h2>
        <div className="mainPage__usefulLinks__top">
          {usefulLinkArrTop.map((item) => (
            <img src={item} alt="link-icon" className="mainPage__usefulLinks__top-item" />
          ))}
        </div>
        <div className="mainPage__usefulLinks__bottom">
          {usefulLinkArrBottom.map((item) => (
            <img src={item} alt="link-icon" className="mainPage__usefulLinks__bottom-item" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;