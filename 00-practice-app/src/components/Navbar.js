import React from 'react';


const styles = {
  navbarStyle: {
    background: 'green',
    justifyContent: 'flex-end',
  },
};


function Navbar() {
  return (
    <header class="header">
    <a href="https://adrian-szonyi.github.io/AdrianSzonyiPortfolio/" class="logo">Adrian Szonyi</a>
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
    <ul class="menu">
      <li><a href="#MyWork">My Work</a></li>
      <li><a href="#about-me">About</a></li>
      <li><a href="#email">Contact</a></li>
    </ul>
  </header>
  );
}

export default Navbar;