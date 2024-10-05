import React, { useState, useEffect } from 'react';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.querySelector('.nav-links');
      if (menu && isOpen && !menu.contains(event.target) && !event.target.closest('.menu-toggle')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav>
      <div className="brand">
        <a href="#hero">
          <h1><span>W</span>eb <span>D</span>ev</h1>
        </a>
      </div>
      <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#footer">More</a></li>
      </ul>
    </nav>
  );
};

export default Header;
