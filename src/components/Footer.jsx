import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="social-links">
          <a href="https://www.instagram.com/fahrenheitto" target="_blank" rel="noreferrer" aria-label="Instagram"><span>INSTAGRAM</span></a>
          <a href="https://www.facebook.com/fahrenheitto" target="_blank" rel="noreferrer" aria-label="Facebook"><span>FACEBOOK</span></a>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Fahrenheit Coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
