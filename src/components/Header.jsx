import React from 'react';
import './Header.css';  // Import the CSS for the header

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* College Logo */}
        <div className="logo">
          <img 
            src="https://www.static-contents.youth4work.com/university/Documents/Colleges/CollegeBanner/74705281-5325-4e4d-9573-e673bb423cf6.png" 
            alt="College Logo"
            className="logo-img"
          />
          <h1>GNIT College</h1>
        </div>

        {/* Navigation Bar */}
        <nav className="nav">
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/admissions">Admissions</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        {/* Call to Action Button */}
        <div className="cta-button">
          <a href="/apply" className="apply-now">Apply Now</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
