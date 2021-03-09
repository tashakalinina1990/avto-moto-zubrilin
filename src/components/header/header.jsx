import React from 'react';
import logo from '../../img/icon-logo.svg';
import Navigation from '../navigation/navigation';
import { HEADER_LINKS } from '../../utils/const';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <a href="/" className="header__logo">
          <img src={logo} alt="Логотип" width="130" height="55"></img>
        </a>
        <Navigation navLinks={HEADER_LINKS} />
      </div>
    </header>
  );
};

export default Header;
