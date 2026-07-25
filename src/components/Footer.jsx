import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="social-links">
          <a href="#" aria-label="Instagram"><Instagram size={24} /> <span>INSTAGRAM</span></a>
          <a href="#" aria-label="Facebook"><Facebook size={24} /> <span>FACEBOOK</span></a>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Fahrenheit Coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
