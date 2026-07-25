import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Statement() {
  const container = useRef();
  
  useGSAP(() => {
    gsap.from('.statement-text', {
      scrollTrigger: {
        trigger: '.statement-section',
        start: 'top 75%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section className="statement-section" ref={container}>
      <div className="container">
        <h2 className="statement-text">
          ESPRESSO, MACCHIATO AND CORTADO SHOULD NEVER BE SERVED TO GO.
        </h2>
      </div>
    </section>
  );
}
