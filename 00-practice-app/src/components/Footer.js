import React from 'react';



const styles = {
  footerStyle: {
    background: 'red',
  },
  footingStyle: {
    fontSize: '100px',
  },
};


function Footer() {
  return (
    <footer style={styles.footerStyle} className="footer">
      <h1 style={styles.footingStyle}>Welcome</h1>
    </footer>
  );
}

export default Footer;