import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About() {
  const container = useRef();
  
  useGSAP(() => {
    // Animate the huge statement text
    gsap.from('.about-statement .line span', {
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 70%',
        end: 'bottom 80%',
        toggleActions: 'play none none reverse'
      },
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: 'power4.out'
    });

    // Animate the supporting paragraph
    gsap.from('.about-details', {
      scrollTrigger: {
        trigger: '.about-details',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section className="about-section" ref={container} id="about">
      <div className="container">
        <div className="about-content">
          <h2 className="about-statement">
            <div className="line"><span>Specialty coffee drinks made</span></div>
            <div className="line"><span>with house-roasted beans are</span></div>
            <div className="line"><span>poured, plus light fare &</span></div>
            <div className="line"><span>artisanal baked goods.</span></div>
          </h2>
          
          <div className="about-details">
            <p>
              We believe in the perfect balance of bold flavor and smooth texture. Every cup is carefully crafted to elevate your daily ritual, using only the finest ethically sourced beans roasted in-house daily. Experience coffee, redefined.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
