import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact container">
        <div>
          <h1 className="section-title">Contact <span>info</span></h1>
        </div>
        <div className="contact-items">
          <div className="contact-item">
            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" alt="Phone" /></div>
            <div className="contact-info">
              <h1>Phone</h1>
              <h2>+639927201893</h2>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" alt="Email" /></div>
            <div className="contact-info">
              <h1>Email</h1>
              <h2>conchavaughn@gmail.com</h2>
              <h2>conchasolutions@gmail.com</h2>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" alt="Address" /></div>
            <div className="contact-info">
              <h1>Address</h1>
              <h2>LUCENA CITY, QUEZON</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
