import React from 'react';


const Header = () => {
  return (
    <div className="header">
      <div></div>
      <a href="https://adrian-szonyi.github.io/AdrianSzonyiPortfolio/" className="logo">Adrian Szonyi</a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
      <ul className="menu">
        <li><a href="#MyWork">My Work</a></li>
        <li><a href="#about-me">About</a></li>
        <li><a href="#email">Contact</a></li>
      </ul>
      </div>

  );
};

export default Header;
