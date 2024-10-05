import React from 'react';
import web from '../web1.webp';
const About = () => {
  return (
    <section id="about">
      <div className="about container">
        <div className="col-left">
          <div className="about-img">
            <img src={web} alt="Web Development" />
          </div>
        </div>
        <div className="col-right">
          <h1 className="section-title">About <span>WebDev</span></h1>
          <h2>Must Know</h2>
          <p>Web development is the process of creating and maintaining websites, involving front-end (client-side) and back-end (server-side) development to build functional, interactive, and visually appealing web applications.</p>
          <a href="#home" className="cta">Go to home</a>
        </div>
      </div>
    </section>
  );
};

export default About;
