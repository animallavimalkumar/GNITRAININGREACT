// Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css'; // Optional: you can style this using CSS

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h1>GNIT</h1>
        <img src="https://www.static-contents.youth4work.com/university/Documents/Colleges/CollegeBanner/74705281-5325-4e4d-9573-e673bb423cf6.png" ></img></div>
        <ul className={`nav-links ${isMobile ? 'mobile' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
        </div>
    </nav>
  );
};

export default Navbar;
