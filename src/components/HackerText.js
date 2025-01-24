import React, { useState, useEffect } from 'react';


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


export default HackerText;