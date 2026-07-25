import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Locations() {
  const container = useRef();
  
  const locations = [
    {
      title: "LOMBARD STREET",
      subtitle: "THE OG",
      desc: "This is where Fahenheit began its journey, being the first shop in Toronto to offer multiple origins of espresso",
      address1: "120 LOMBARD ST",
      address2: "TORONTO, ON, M5C3H5"
    },
    {
      title: "RICHMOND STREET W",
      subtitle: "THE SECOND CHILD",
      desc: "Kicked off in 2016, continuing to provide the same service and quality.",
      address1: "529 RICMHOND STREET W",
      address2: "TORONTO, ON, M5V3Z8"
    },
    {
      title: "UNIVERSITY AVE",
      subtitle: "NEW DIGS",
      desc: "Located in the downtown core, giving a little more love to your morning ritual",
      address1: "181 UNIVERSITY AVE",
      address2: "TORONTO, ON, M5H3M7"
    }
  ];

  useGSAP(() => {
    // Reveal location blocks sequentially
    gsap.utils.toArray('.loc-item').forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    });

    // Move the cup down the timeline line
    gsap.to('.timeline-indicator', {
      scrollTrigger: {
        trigger: '.timeline-container',
        start: 'top center',
        end: 'bottom center',
        scrub: 0.5 // smooth scrubbing
      },
      top: '100%',
      ease: 'none'
    });

  }, { scope: container });

  return (
    <section className="locations-section" ref={container} id="locations">
      <div className="container">
        <h2 className="locations-heading">Life is too short for<br/>mediocre coffee</h2>
        
        <div className="timeline-container">
          <div className="timeline-line">
            <div className="timeline-indicator">
              <img src="/aaa/Transparent Espresso Cup.png" alt="Cup Indicator" />
            </div>
          </div>
          
          <div className="timeline-items">
            {locations.map((loc, index) => (
              <div key={index} className={`loc-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="loc-content">
                  <h3 className="loc-title">{loc.title}</h3>
                  <h4 className="loc-subtitle">{loc.subtitle}</h4>
                  <p className="loc-desc">{loc.desc}</p>
                  <p className="loc-address">
                    {loc.address1}<br />
                    {loc.address2}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
