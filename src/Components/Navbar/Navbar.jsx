import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setPortfolioOpen(false);
  };

  return (
    <nav className='container'>
      {/* Logo */}
      <div className='logo'>
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>a</NavLink>
      </div>

      {/* Hamburger Icon */}
      <div 
        className={`hamburger ${menuOpen ? 'open' : ''}`} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Menu */}
      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <li>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        </li>

        {/* Portfolio with dropdown */}
        <li 
          className={`has-dropdown ${portfolioOpen ? 'open' : ''}`} 
          onClick={() => setPortfolioOpen(!portfolioOpen)}
        >
          <span className="dropdown-toggle">Portfolio</span>
          <div className="dropdown" role="menu" aria-label="Projects">
            <ul>
              <li><NavLink to="../Watchoutp" onClick={closeMenu}>Watchout</NavLink></li>
              <li><NavLink to="../Tmclite" onClick={closeMenu}>TMS Lite</NavLink></li>
              <li><NavLink to="../Qclear" onClick={closeMenu}>Q Clear</NavLink></li>
            </ul>
          </div>
        </li>

        <li><NavLink to="/workshop" onClick={closeMenu}>Workshop</NavLink></li>
        <li><NavLink to="/pingme" onClick={closeMenu}>Contact</NavLink></li>
        <li><NavLink to="/resume" onClick={closeMenu}>Resume</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
