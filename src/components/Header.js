import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <div className="app__header">
      <div className="header__wrapper">
        <img
          className="header__image"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="logo"
        />
        <div className="header__search">
          <input className="search__input" />
        </div>
        <div className="header__links">
          <a className="header__link" href="/">
            1
          </a>
          <a className="header__link" href="/">
            2
          </a>
          <a className="header__link" href="/">
            3
          </a>
          <a className="header__link" href="/">
            4
          </a>
          <a className="header__link" href="/">
            5
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
