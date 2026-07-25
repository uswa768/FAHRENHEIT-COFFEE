import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Locations from './components/Locations';
import Statement from './components/Statement';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Locations />
      <Statement />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
