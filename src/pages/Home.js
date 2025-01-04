import React from 'react';
import '../styles/Home.css';
import VideoBackground from '../data/VideoBackground';
import AboutSection from './AboutUs';
import FAQSection from '../components/Faq';

function Home() {
  return (
    <>
      {/* Video Section */}
      <div className="video-section">
        <VideoBackground />
        <div className="header-container">
          <div className="team-title">
            <svg width="0" height="0">
              <defs>
                <linearGradient id="text-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#ff69b4" />
                  <stop offset="25%" stop-color="#e890e8" />
                  <stop offset="50%" stop-color="#b19cd9" />
                  <stop offset="75%" stop-color="#9370db" />
                  <stop offset="100%" stop-color="#8a2be2" />
                </linearGradient>
              </defs>
            </svg>
            <div className="matcom">Team MATCOM</div>
            <div className="nit-hamirpur">NIT Hamirpur</div>
            <div className="description">
              A technical initiative associated with The Department of Mathematics and Scientific Computing
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div id="about-us">
        <AboutSection />
      </div>

      {/* FAQ Section */}
      <div id="faq">
        <FAQSection />
      </div>
    </>
  );
}

export default Home;
