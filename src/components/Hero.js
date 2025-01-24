import React, { useEffect, useState } from "react";
import '../styles/Hero.css'; // Import the CSS file

const Hero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures it runs only on the client side
  }, []);

  if (!isClient) return null;

  return (
    <section className="hero">
      <div className="snow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 400" preserveAspectRatio="xMidYMax slice">
          <g fill="#4b1b88" fillOpacity="0.8" transform="translate(55 42)">
            <g id="snow-bottom-layer">
              {Array.from({ length: 20 }).map((_, i) => (
                <ellipse
                  key={i}
                  className="snowflake"
                  cx={Math.random() * 1024}
                  cy={Math.random() * 400}
                  rx="6"
                  ry="5.5"
                  style={{
                    animationDuration: `${20 + Math.random() * 10}s`, // Randomized speed for variety
                    animationDelay: `${Math.random() * 5}s`, // Randomized delay for variety
                  }}
                />
              ))}
            </g>
          </g>
          <g fill="#FFF" fillOpacity="0.4" transform="translate(65 63)">
            <g id="snow-top-layer">
              {Array.from({ length: 10 }).map((_, i) => (
                <circle
                  key={i}
                  className="snowflake"
                  cx={Math.random() * 1024}
                  cy={Math.random() * 400}
                  r="8"
                  style={{
                    animationDuration: `${20 + Math.random() * 10}s`, // Randomized speed for variety
                    animationDelay: `${Math.random() * 5}s`, // Randomized delay for variety
                  }}
                />
              ))}
            </g>
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Hero;