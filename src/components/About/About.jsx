import React from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';
import './About.css';

const cards = [
  { icon: '🎯', title: 'Frontend Development', text: 'Building responsive, pixel-perfect UIs with React, HTML, CSS and modern JS.' },
  { icon: '⚙️', title: 'Backend & APIs',       text: 'REST APIs, Node.js, databases — end-to-end full-stack development.' },
  { icon: '🚀', title: 'Performance & SEO',    text: 'Optimised loading, accessibility, and search-engine-friendly architecture.' },
];

export default function About() {
  const [headRef, headVisible] = useScrollReveal();
  const [leftRef, leftVisible] = useScrollReveal();
  const [rightRef, rightVisible] = useScrollReveal();

  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div ref={leftRef} className={`about__text reveal-left${leftVisible ? ' visible' : ''}`}>
          <span className="section-label">About Me</span>
          <h2 className="section-title" style={{ marginBottom: '1.2rem' }}>
            Crafting digital<br />experiences with care
          </h2>
          <p>
            I'm <strong>Mohammed Asif</strong>, a passionate frontend developer based in Chennai, India.
            I specialise in building modern web applications that are fast, accessible, and visually compelling.
          </p>
          <p>
            With a strong foundation in React and full-stack development, I love turning complex
            problems into clean, elegant solutions — always exploring new technologies to stay cutting-edge.
          </p>
          <p>When I'm not coding, you'll find me exploring open-source projects or sipping filter coffee.</p>
        </div>

        <div ref={rightRef} className="about__cards">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`about__card reveal-right d${i+1}${rightVisible ? ' visible' : ''}`}
            >
              <span className="about__card-icon">{card.icon}</span>
              <div>
                <div className="about__card-title">{card.title}</div>
                <div className="about__card-text">{card.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
