// Home.js

import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="container">
      <div className="text-container">
        <h1>Team MATCOM</h1>
        <h2>NIT Hamirpur</h2>
        <p>A technical initiative associated with The Department of Mathematics and Scientific Computing</p>
      </div>
      <div className="robot-container">
        <div className="robot">
          <div className="head"></div>
          <div className="body"></div>
          <div className="arm left"></div>
          <div className="arm right"></div>
        </div>
        <div className="robot">
          <div className="head"></div>
          <div className="body"></div>
          <div className="arm left"></div>
          <div className="arm right"></div>
        </div>
      </div>
      <div className="infinity-symbol"></div>
    </div>
  );
}

export default Home;