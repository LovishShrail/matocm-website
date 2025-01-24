import React ,{ useEffect, useState }from "react";
import { motion } from "framer-motion";

const Hero = () => {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Ensures it runs only on the client side
      }, []);

      if (!isClient) return null;
      
  return (
    <section className="hero">
      <div className="snow" style={{
          pointerEvents: "none", // Ensure snow doesn't block interactions
          zIndex: -1, // Push snow behind other content
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 400" preserveAspectRatio="xMidYMax slice">
          <g fill="#4b1b88" fillOpacity="0.8" transform="translate(55 42)">
            <g id="snow-bottom-layer">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.ellipse
                  key={i}
                  cx={Math.random() * 1024}
                  cy={Math.random() * 400}
                  rx="6"
                  ry="5.5"
                  animate={{
                    y: [200, -400], // Move upwards from bottom to top
                  }}
                  transition={{
                    duration: 20 + Math.random() * 10,
                     // Randomized speed for variety
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
            </g>
          </g>
          <g fill="#FFF" fillOpacity="0.4" transform="translate(65 63)">
            <g id="snow-top-layer">
              {Array.from({ length: 10 }).map((_, i) => (
                <motion.circle
                  key={i}
                  cx={Math.random() * 1024}
                  cy={Math.random() * 400}
                  r="8"
                  animate={{
                    y: [200,-400], // Move upwards
                  }}
                  transition={{
                    duration: 20 + Math.random() * 10,
                     // Randomized upward animation speed
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
