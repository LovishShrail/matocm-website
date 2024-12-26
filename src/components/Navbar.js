import React from 'react';
import './../styles/Navbar.css'; // Import the CSS file for styling
import logo from '../assets/matcom logo white (1) 1.png'; // Import the logo image

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container"> 
        <img src={logo} alt="MATCOM Logo" /> {/* Display the logo */}
      </div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/our-work">Our Work</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/team">Team</a></li>
        <li><a href="/about-us">About Us</a></li>
      </ul>
      {/* <div className="social-media">
        <a href="https://www.linkedin.com/company/matcom-nit-hamirpur" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:matcom.nit.hamirpur@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://github.com/matcom-nit-hamirpur" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.instagram.com/matcom_nit_hamirpur" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div> */}
    </nav>
  );
}

export default Navbar;