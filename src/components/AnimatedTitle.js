import React from 'react';
import { motion } from 'framer-motion';
import Png2 from '../assets/bg 3.png';
import Png from '../assets/bg.png';
import HackerText from '../components/HackerText.js';

const AnimatedTitle = () => {
  return (
    <>
      {/* <Hero/> */}
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
    </>
  );
};

export default AnimatedTitle;