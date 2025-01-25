import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Menu, X, Home, FileText, LayoutGrid, Bell, Users, Mail } from 'lucide-react';
import { Linkedin, Github, Instagram } from 'lucide-react';
import '../styles/Navbar.css';
import logo from '../assets/matcom logo white (1) 1.png';

const NAV_ITEMS = [
  { label: 'Home', icon: Home, href: '/' },
  { label: 'Our Work', icon: LayoutGrid, href: '/our-work' },
  { label: 'Projects', icon: Bell, href: '/projects' },
  { label: 'Team', icon: Users, href: '/team' },
  { label: 'About Us', icon: FileText, href: '#about-us' },
];

const SOCIAL_ITEMS = [
  { label: 'Linkedin', icon: Linkedin, href: '/https://www.linkedin.com/company/matcom-nith/'  },
  { label: 'Gmail', icon: Mail, href: "mailto:matcom.nimbus@nith.ac.in" },
  { label: 'Github', icon: Github, href: 'https://github.com/team-matcom' },
  { label: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/matcom_nith?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
];

const NavItem = ({ label, href, isActive, onClick }) => (
  <a
    href={href}
    className={`nav-item ${isActive ? 'active' : ''}`}
    onClick={(e) => {
      onClick();
    }}
  >
    {label}
  </a>
);




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const activeNavItem = NAV_ITEMS.find((item) => item.href === currentPath);
    if (activeNavItem) {
      setActiveItem(activeNavItem.label);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  


  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo-container">
          <a href="/" className="logo-button">
            <img src={logo} alt="MATCOM Logo" />
          </a>
        </div>
        <div className="nav-items">
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.label}
              label={item.label}
              href={item.href}
              isActive={activeItem === item.label}
              onClick={() => setActiveItem(item.label)}
            />
          ))}
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
          <div className="dropdown-section">
            <div className="dropdown-section-title">Socials</div>
            {SOCIAL_ITEMS.map((item) => (
  <a
    key={item.label}
    href={item.href}
    className="dropdown-item"
    target="_blank"
    rel="noopener noreferrer"
  >
    <item.icon className="dropdown-item-icon" size={18} />
    {item.label}
  </a>
))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

