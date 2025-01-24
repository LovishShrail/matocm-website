import React, { useEffect } from "react";
import "../styles/Projects.css";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HackerText from "./HackerText";

const Card = ({ name, image, description, links }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the card is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <StyledWrapper>
      <motion.div
        ref={ref}
        className="cards-wrapper"
        initial="hidden"
        animate={controls}
        variants={cardVariants}
      >
        <div className="card-container">
          <div className="card">
            <div
              className="front-content"
              style={{
                backgroundImage: `url(${image})`, // Directly setting the background image
                backgroundSize: "cover", // Ensures the image covers the card
                backgroundPosition: "center", // Centers the image
                backgroundRepeat: "no-repeat", // Prevents repetition
              }}
            ></div>
            <div className="content">
              <p className="heading"><HackerText text = {name} /></p>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </StyledWrapper>
  );
};
const StyledWrapper = styled.div`
  /* Parent container for centering */
  .cards-wrapper {
    display: flex;
    justify-content: center; /* Centers the card horizontally */
    align-items: center; /* Centers the card vertically */
    height: 100vh; /* Full viewport height to center vertically */
    padding: 20px; /* Optional padding for spacing */
    box-sizing: border-box;
    margin-top: -100px;
  }

  .card-container {
    width: 900px;
    height: 400px;
    position: relative;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }

  @media (max-width: 500px) {
      .card-container {
        width: 330px;
        height: 200px;
        position: relative;
        border-radius: 10px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        overflow: hidden;
      }

      .cards-wrapper {
      display: flex;
      justify-content: center; /* Centers the card horizontally */
      align-items: center; /* Centers the card vertically */
      height: 50vh; /* Full viewport height to center vertically */
      padding: 7px; /* Optional padding for spacing */
      box-sizing: border-box;
      margin-top:-20px;
      margin-bottom: -90px;
    }

  }

  .card {
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .card .front-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card .front-content p {
    font-size: 32px;
    font-weight: 700;
    opacity: 1;
    background: linear-gradient(-45deg, #6a11cb 0%, #2575fc 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card .content {
   position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  background: linear-gradient(-45deg, #4c0070 0%, #1b1b2f 60%, #100f1f 100%);

  color: #e8e8e8;
  padding: 20px;
  line-height: 1.5;
  border-radius: 5px;
  pointer-events: none;
  transform: translateX(-96%);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card .content .heading {
    font-size: 32px;
    font-weight: 700;
  }

  .card:hover .content {
     transform: translateY(0);
  background: linear-gradient(-45deg, #4c0070 0%, #1b1b2f 60%, #100f1f 100%);

  }

  .card:hover .front-content {
    transform: translateX(-30%);
  }

  .card:hover .front-content p {
    opacity: 0;
  }
`;

export default Card;
