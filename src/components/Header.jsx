import React, { useState, useEffect } from 'react';


const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [bgColor, setBgColor] = useState('transparent');

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setBgColor(scrollPosition > 250 ? '#29323c' : 'transparent');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header container" style={{ backgroundColor: bgColor }}>
      <div className="nav-bar">
        <div className="brand">
          <a href="#hero">
            <h1><span>W</span>eb <span>D</span>ev</h1>
          </a>
        </div>
        <div className="nav-list">
          <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
            <div className="bar"></div>
          </div>
          <ul className={isActive ? 'active' : ''}>
            <li><a href="#hero" data-after="Home">Home</a></li>
            <li><a href="#about" data-after="About">About</a></li>
            <li><a href="#contact" data-after="Contact">More</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
