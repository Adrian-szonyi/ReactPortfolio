import React from 'react';


const styles = {
  navbarStyle: {
    background: 'green',
    justifyContent: 'flex-end',
  },
};


function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
      <a href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;