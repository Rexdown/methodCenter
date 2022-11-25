import { Link  } from 'react-router-dom';
import {HandySvg} from 'handy-svg';

import bg from '../../assets/imgs/bg-two.png'
import logo from '../../assets/icons/logo.svg';
import logoMini from '../../assets/icons/logo-mini.svg';
import youtube from '../../assets/icons/YouTube.svg';
import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import vk from '../../assets/icons/vk.svg';

import './SecondHeader.scss';

function SecondHeader(props) {
  return (
    <div className="secondHeader">
      <div className="secondHeader__top">
        <img src={bg} alt="bg" className="secondHeader__top-bg" />
        <img src={logo} alt="logo" className="secondHeader__top-logo" />
        <div className="secondHeader__top__controls">
            <div className="secondHeader__top__controls__logo">
            <Link to="/" className="secondHeader__top__controls__logo-icon">
              <img src={logoMini} alt="logo" />
            </Link>
            <h2 className="secondHeader__top__controls__logo-title">
                Саратовский областной учебно-методический центр
            </h2>
            </div>
            <div className="secondHeader__top__controls__contacts">
                <div className="secondHeader__top__controls__contacts__item">
                    <p className="secondHeader__top__controls__contacts__item-text">
                        Саратовский областной учебно-методический центр
                    </p>
                    <div className="secondHeader__top__controls__contacts__item__socials">
                        <HandySvg src={youtube}  width="18" height="18" className="secondHeader__top__controls__contacts__item__socials-youtube" />
                        <HandySvg src={facebook}  width="18" height="16" className="secondHeader__top__controls__contacts__item__socials-facebook" />
                        <HandySvg src={instagram}  width="18" height="18" className="secondHeader__top__controls__contacts__item__socials-instagram" />
                        <HandySvg src={vk}  width="18" height="19" className="secondHeader__top__controls__contacts__item__socials-vk" />
                    </div>
                </div>
                <div className="secondHeader__top__controls__contacts__item">
                    <p className="secondHeader__top__controls__contacts__item-text">
                        Региональный центр поддержки одаренных детей
                    </p>
                    <div className="secondHeader__top__controls__contacts__item__socials">
                        <HandySvg src={facebook}  width="18" height="16" className="secondHeader__top__controls__contacts__item__socials-facebook" />
                        <HandySvg src={instagram}  width="18" height="18" className="secondHeader__top__controls__contacts__item__socials-instagram" />
                        <HandySvg src={vk}  width="18" height="19" className="secondHeader__top__controls__contacts__item__socials-vk" />
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="secondHeader__nav">
        <Link to="/info" className={`secondHeader__nav-item${props.activeNav === 'info' ? '-active' : ''}`}>
          Сведения
        </Link>
        <Link to="/activity" className={`secondHeader__nav-item${props.activeNav === 'activity' ? '-active' : ''}`}>
          Деятельность
        </Link>
        <Link to="/management" className={`secondHeader__nav-item${props.activeNav === 'management' ? '-active' : ''}`}>
          Руководство
        </Link>
        <Link to="/education" className={`secondHeader__nav-item${props.activeNav === 'education' ? '-active' : ''}`}>
          Образование
        </Link>
        <Link to="/contacts" className={`secondHeader__nav-item${props.activeNav === 'contacts' ? '-active' : ''}`}>
          Контакты
        </Link>
      </div>
    </div>
  );
}

export default SecondHeader;
