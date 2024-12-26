import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Menu, X, Home, FileText, LayoutGrid, Bell, Users,  Mail } from 'lucide-react';
import { Linkedin, Github, Instagram } from 'lucide-react';
import '../styles/Navbar.css';
import logo from '../assets/matcom logo white (1) 1.png';

const NAV_ITEMS = [
  { label: 'Home', icon: Home , href: '/'},
  { label: 'About us', icon: FileText , href: '/about-us'},
  { label: 'Our Work', icon: LayoutGrid , href: '/our-work'},
  { label: 'Projects', icon: Bell , href: '/projects'},
  { label: 'Team', icon: Users , href: '/team'},
];

const SOCIAL_ITEMS = [
  { label: 'Linkedin', icon: Linkedin, href: '/https://www.linkedin.com/company/matcom-nith/' },
  { label: 'Gmail', icon: Mail, href: '#' },
  { label: 'Github', icon: Github, href: '#' },
  { label: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/matcom_nith?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
];



const NavItem = ({ label, icon: Icon, href }) => (
    <a href={href} className="dropdown-item" target="_blank" rel="noopener noreferrer">
      <Icon className="dropdown-item-icon" size={18} />
      {label}
    </a>
  );
  

  

const NavSection = ({ title, items }) => (
  <div className="dropdown-section">
    <div className="dropdown-section-title">{title}</div>
    {items.map((item) => (
      <NavItem key={item.label} {...item} />
    ))}
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* <a href="/" className="logo">LOGO</a> */}
        <div className="logo-container"> 
            <img src={logo} alt="MATCOM Logo" />
        </div>
        <button className="menu-button" onClick={toggleMenu} aria-label="Toggle menu">
          <Menu />
        </button>
      </div>
      <div className={`dropdown ${isOpen ? 'open' : ''}`}>
        <div className="dropdown-header">
          <button className="close-button" onClick={toggleMenu} aria-label="Close menu">
            <X />
          </button>
        </div>
        <div className="dropdown-content">
          <NavSection title="Tabs" items={NAV_ITEMS} />
          
          <NavSection title="Socials" items={SOCIAL_ITEMS} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;