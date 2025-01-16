import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Png2 from '../assets/bg 3.png';
import Png from '../assets/bg.png';

const HackerText = ({ text, delay = 0, className }) => {
  const [displayText, setDisplayText] = useState('');
  const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const iterations = 15;
  const iterationSpeed = 70;


  useEffect(() => {
    let timeout = setTimeout(() => {
      let currentIteration = 0;
      
      const scrambleInterval = setInterval(() => {
        const scrambledText = text.split('').map((char, index) => {
          if (currentIteration > iterations * (index / text.length)) {
            return char;
          }
          if (char === ' ') return ' ';
          return characters[Math.floor(Math.random() * characters.length)];
        }).join('');
        
        setDisplayText(scrambledText);
        currentIteration++;
        
        if (currentIteration > iterations) {
          clearInterval(scrambleInterval);
          setDisplayText(text);
        }
      }, iterationSpeed);

      return () => clearInterval(scrambleInterval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span className={className}>{displayText}</span>;
};

const AnimatedTitle = () => {
  return (
    <div className="team-title">
      <div className="matcom" style={{
        background: "linear-gradient(-45deg, #ff69b4, #e890e8, #b19cd9,rgb(90, 27, 216), #8a2be2)",
        backgroundSize: "200% 200%",
        animation: "gradient 15s ease infinite",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text"
      }}>
        <HackerText text="TEAM MATCOM" />
      </div>
      <div className="nit-hamirpur">
        <HackerText text="NIT HAMIRPUR"  />
      </div>
      <div className="description">
       A technical initiative associated with The Department of Mathematics and Scientific Computing
      </div>
      <motion.div
          className="image-container"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
           <img src={Png2} alt="large-screen-image" className="small-image" />
           <img src={Png} alt="small-screen-image" className="large-image" />
        </motion.div> 
    </div>
  );
};

export default AnimatedTitle;