import React from 'react';
import '../styles/VideoBackground.css'; 
import bgVideo from '../assets/bgMatcom.mp4';

function VideoBackground() {
  return (
    <div className="video-background-container">
      <video autoPlay loop muted className="video-background">
        <source src={bgVideo} type="video/mp4" />
        <source src="path-to-your-video.webm" type="video/webm" />
        <source src="path-to-your-video.ogv" type="video/ogv" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoBackground;
