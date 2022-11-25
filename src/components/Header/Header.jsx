import eye from '../../assets/icons/eye.svg'
import magnifier from '../../assets/icons/magnifier.svg'
import post from '../../assets/icons/post.svg'
import phone from '../../assets/icons/phone.svg'

import './Header.scss';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={eye} alt="eye" className="header__left-eye" />
        <div className="header__left__search">
          <input type="text" className="header__left__search-input" placeholder='Поиск по сайту'/>
          <img src={magnifier} alt="magnifier" className="header__left__search-magnifier" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__right__contact">
          <img src={post} alt="post" className="header__right__contact-icon" />
          <p className="header__right__contact-post">metod-centr@yandex.ru</p>
        </div>
        <div className="header__right">
          <div className="header__right__contact">
            <img src={phone} alt="post" className="header__right__contact-icon" />
            <p className="header__right__contact-phone">8 (8452) 44-80-60</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;