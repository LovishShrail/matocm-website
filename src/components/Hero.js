import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">
      <div className="snow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1536" preserveAspectRatio="xMidYMax slice">
          <g fill="#4b1b88" fillOpacity="0.8" transform="translate(55 42)">
            <g id="snow-bottom-layer">
              {Array.from({ length: 30 }).map((_, i) => (
                <motion.ellipse
                  key={i}
                  cx={Math.random() * 1024}
                  cy={Math.random() * 1536}
                  rx="6"
                  ry="5.5"
                  animate={{
                    y: [-1536, 0], // Move upwards from bottom to top
                  }}
                  transition={{
                    duration: 10 + Math.random() * 5, // Randomized speed for variety
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
            </g>
          </g>
          <g fill="#FFF" fillOpacity="0.4" transform="translate(65 63)">
            <g id="snow-top-layer">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.circle
                  key={i}
                  cx={Math.random() * 1024}
                  cy={Math.random() * 1536}
                  r="8"
                  animate={{
                    y: [-1536, 0], // Move upwards
                  }}
                  transition={{
                    duration: 8 + Math.random() * 4, // Randomized upward animation speed
                    repeat: Infinity,
                    ease: "linear",
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
