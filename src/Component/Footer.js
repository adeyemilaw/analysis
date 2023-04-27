import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <p className="footer-text">Copyright © {currentYear}</p>
    </footer>
  );
}

export default Footer;
