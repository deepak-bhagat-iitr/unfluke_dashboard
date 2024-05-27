import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (event, path) => {
    event.preventDefault();
    window.location.href = path;
  };

  return (
    <header className="header-container">
      <nav className="nav-container">
        <h1 className="nav-brand">
          <Link to="/">VisionVow</Link>
        </h1>
        <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={(e) => handleNavigation(e, '/')}>Home</Link></li>
          <li><Link to="/" onClick={(e) => handleNavigation(e, '/')}>About</Link></li>
          <li><Link to="/" onClick={(e) => handleNavigation(e, '/')}>Dashboard</Link></li>
          <li><Link to="/" onClick={(e) => handleNavigation(e, '/')}>Contact Us</Link></li>
        </ul>
        <FaBars className='fabars-icon' onClick={toggleMobileMenu} />
      </nav>
    </header>
  );
};

export default Header;
