// Home.js

import React from 'react';
import '../styles/Home.css';
import VideoBackground from '../data/VideoBackground';

function Home() {
  return (
    <div className="container">
      <VideoBackground />
      <div className="header-container">
        <div className="team-title">
          <div className="matcom">Team MATCOM</div>
          <div className="nit-hamirpur">NIT Hamirpur</div>
          <div className="description">
            A technical initiative associated with The Department of Mathematics and Scientific Computing
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Home;