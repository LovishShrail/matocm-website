import React from 'react';
import '../styles/AboutSection.css';
import logo from '../assets/matcom logo white (1) 1.png';
// import FAQSection from '../components/Faq';

const AboutSection = () => {
  return (
    <>
    <div className="about-us-section">

      {/* <div className="vertical-text">
        <p>NIMBUS </p>
        <p>MATCOM</p>
        <p>TECH</p>
      </div> */}
      <div className="logo-section">
        <img src={logo} alt="MATCOM Logo" />

      </div>

      <div className="content-section">
        <h2 className="about-us-heading">About Us</h2>
        <div className="about-us-content">
          <p>
            Our Society was established with the goal of creating a community of like-minded
            individuals who are enthusiastic about exploring the vast potential of mathematics
            and scientific computing. We strive to foster an environment of collaboration,
            creativity, and innovation that inspires our members to push the boundaries of
            knowledge and make groundbreaking discoveries.
            <br></br>

            One of the core missions of our society is to promote mathematical and scientific
            literacy among the general public. We believe that everyone should have access to
            the knowledge and tools needed to understand and engage with these fields, and
            we are committed to sharing our passion and expertise with the wider community.
          </p>
        </div>
      </div>
    </div>
    <div className='faq-Card'>

    </div>
      
    </>
    
  );
};

export default AboutSection;
