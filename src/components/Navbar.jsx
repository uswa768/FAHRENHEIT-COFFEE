import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo">
          <h2>FAHRENHEIT</h2>
        </div>
        <div className="mobile-menu" onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer', zIndex: 300 }}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#about">About</a>
          <a href="#locations">Locations</a>
          <a href="https://www.omniacoffeeroasters.com/" target="_blank" rel="noreferrer">Order Beans</a>
          <a href="https://www.omniacoffeeroasters.com/products/barista-fundamentals-and-foundation" target="_blank" rel="noreferrer">Barista Classes</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
