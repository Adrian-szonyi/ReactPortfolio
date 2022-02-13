import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div></div>
      <a href="https://adrian-szonyi.github.io/AdrianSzonyiPortfolio/" className="logo">Adrian Szonyi</a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
      <ul className="menu">
      <li><Link  to="/Portfolio">
                Portfolio
              </Link></li>
              <li><Link  to="/">
                About
              </Link></li>
              <li><Link  to="/contact">
                Contact
              </Link></li>
      </ul>
      </div>

  );
};

export default Header;
