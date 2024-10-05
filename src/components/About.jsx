// src/components/About.jsx
import React from 'react';
import webImage from './assets/web1.webp'; // Correct path

const About = () => {
  return (
    <section id="about">
      <div className="about container">
        <div className="col-left">
          <div className="about-img">
            <img src={webImage} alt="Web Development" />
          </div>
        </div>
        <div className="col-right">
          <h1 className="section-title">About <span>WebDev</span></h1>
          <h2>Must Know</h2>
          <p>
            Web development is the process of creating and maintaining websites...
          </p>
          <a href="/" className="cta">Go to home</a>
        </div>
      </div>
    </section>
  );
};

export default About;
