import React from 'react';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo">
          <h2>FAHRENHEIT</h2>
        </div>
        <div className="mobile-menu">
          <Menu size={28} />
        </div>
        <div className="nav-links">
          <a href="#locations">Locations</a>
          <a href="http://omniacoffeeroasters.com" target="_blank" rel="noreferrer">Order Beans</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
