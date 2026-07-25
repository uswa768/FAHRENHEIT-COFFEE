import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { carouselData } from '../data/coffeeData';
import { useMouseParallax } from '../hooks/useMouseParallax';
import FloatingIngredient from './FloatingIngredient';

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const container = useRef();
  
  // Custom Hook for Mouse Parallax
  const mousePos = useMouseParallax(0.5);

  // 3s Auto Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselData.length);
    }, 3500); 
    return () => clearInterval(timer);
  }, []);

  useGSAP(() => {
    let tl = gsap.timeline();

    // Reset styles for transition
    gsap.set('.char', { y: 20, opacity: 0 });
    gsap.set('.bg-title', { x: 0, y: 0 }); // Clear any stuck HMR styles from the pan animation

    // 1. Background Typography Animation
    tl.fromTo('.bg-title', 
      { scale: 1.1, opacity: 0, x: 0 },
      { scale: 1, opacity: 0.08, duration: 1.5, ease: 'power3.out', x: 0 },
      0
    );

    // 2. Coffee Cup Entrance
    tl.fromTo('.hero-product-img',
      { scale: 0.8, y: 50, opacity: 0, rotation: -5 },
      { scale: 1, y: 0, opacity: 1, rotation: 0, duration: 1.5, ease: 'power4.out' },
      0.1
    );

    // Cup Breathing / Floating
    gsap.to('.hero-product-img', {
      y: -15,
      rotation: 1,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1.6
    });

    // 3. Staggered Tagline Animation (Letters)
    tl.to('.char', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.03,
      ease: 'power3.out',
    }, 0.5);

    // Fade in Title
    tl.fromTo('.info-title',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      0.4
    );

    // 4. Floating Ingredients Scatter & Float
    gsap.utils.toArray('.ingredient').forEach((el, i) => {
      // Entrance scatter
      tl.fromTo(el,
        { scale: 0, rotation: -90, opacity: 0, x: 0, y: 0 },
        { 
          scale: 1,
          rotation: Math.random() * 30 - 15,
          opacity: 1,
          x: (Math.random() * 40 - 20),
          y: (Math.random() * 40 - 20),
          duration: 1.2 + Math.random() * 0.5,
          ease: 'back.out(1.2)'
        },
        0.2 + (i * 0.1)
      );
      
      // Continuous drift
      gsap.to(el, {
        y: '+=25',
        x: '+=15',
        rotation: '+=20',
        duration: 4 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.5
      });
    });

    // 5. CSS Steam Rise
    gsap.utils.toArray('.steam').forEach((el, i) => {
      gsap.fromTo(el, 
        { y: 0, opacity: 0, scale: 0.5, x: i * 15 - 20 },
        { y: -150, opacity: 0.4, scale: 2, x: i * 30 - 40, duration: 3.5 + i, repeat: -1, ease: "power1.inOut" }
      );
    });
    
    return () => tl.kill();

  }, { dependencies: [currentIndex], scope: container });

  const currentItem = carouselData[currentIndex];

  // Helper to split text into spans for letter-by-letter animation
  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="char" style={{ display: 'inline-block' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section className="hero-carousel" ref={container}>
      {/* Soft Golden Glow Lighting */}
      <div className="golden-glow"></div>
      
      {/* Background Typography */}
      <div className="bg-title-container" style={{ transform: `translate(calc(-50% + ${mousePos.x * 0.5}px), calc(-50% + ${mousePos.y * 0.5}px))` }}>
        <h1 className="bg-title" style={{ '--desktop-bg-size': currentItem.bgSize }}>{currentItem.title}</h1>
      </div>

      {/* Floating Particles/Powder Container */}
      <div className="powder-container" style={{ transform: `translate(${mousePos.x * 3}px, ${mousePos.y * 3}px)` }}>
        {[...Array(20)].map((_, i) => (
          <div key={`powder-${i}`} className="coffee-powder" style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 5}s`
          }}></div>
        ))}
      </div>

      {/* Ingredients Layer */}
      <div className="ingredients-container">
        {currentItem.ingredients.map((ing, i) => (
          <FloatingIngredient 
            key={`${currentItem.id}-${ing.id}-${i}`} 
            ing={ing} 
            mousePos={mousePos} 
          />
        ))}
      </div>

      {/* Center Cup & Info */}
      <div className="hero-content">
        <div className="product-showcase" style={{ transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)` }}>
          {/* Steam */}
          <div className="steam-container">
            <div className="steam"></div>
            <div className="steam"></div>
            <div className="steam"></div>
          </div>
          
          {/* The Cup */}
          <img src={currentItem.image} alt={currentItem.name} className="hero-product-img" />
        </div>

        <div className="hero-details">
          <h2 className="info-title">{currentItem.name}</h2>
          <p className="info-desc">{splitText(currentItem.tagline)}</p>
        </div>
      </div>
    </section>
  );
}
