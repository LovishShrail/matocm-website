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
              data-name={name}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p>{name}</p>
            </div>
            <div className="content">
              <p className="heading"><HackerText text={name} /></p>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </StyledWrapper>
  );
}; 

const StyledWrapper = styled.div`


  .cards-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    margin-top: -100px;
  }

  .card-container {
    width: 900px;
    height: 400px;
    position: relative;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    transition: all 0.5s ease;
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
    position: relative;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card .front-content::before {
    content: attr(data-name);
    position: absolute;
    bottom: 20px;
    left: 20px;
    font-size: 24px;
    font-weight: 700;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    z-index: 2;
    background: rgba(0, 0, 0, 0.3);
    padding: 5px 10px;
    border-radius: 10px;
  }

  .card .front-content p {
    font-size: 32px;
    font-weight: 700;
    opacity: 0;
    background: linear-gradient(-45deg, #6a11cb 0%, #2575fc 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 2.5s cubic-bezier(0.23, 1, 0.32, 1);
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
    transform: translateX(-100%);
    opacity: 0;
    transition: all 2.2s cubic-bezier(0.23, 1, 0.32, 1);
    font-size: 1.2rem;
  }

  .card:hover .content {
    transform: translateX(0);
    opacity: 1;
  }

  .card:hover .front-content {
    transform: translateX(-100%);
  }


  @media (max-width: 500px) {
  .card-container {
    width: 330px;
    height: 200px;
    border-radius: 15px;
  }

  .cards-wrapper {
    height: 50vh;
    padding: 7px;
    margin-top: -20px;
    margin-bottom: -90px;
  }


  .card .content p{
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
    gap: 12px;
    background: linear-gradient(-45deg, #4c0070 0%, #1b1b2f 60%, #100f1f 100%);
    color: #e8e8e8;
    padding: 20px;
    line-height: 1.4;
    border-radius: 5px;
    pointer-events: auto; /* Allow interaction on mobile */
    max-height: 100%; /* Ensure full height */
    transform: translateX(0); /* Always visible on mobile */
    opacity: 1; /* Always visible on mobile */
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    font-size: 0.6rem;
  }

  .card .front-content {
    transform: translateX(0); /* Reset hover transform */
  }
}

@media (min-width: 500px) and (max-width: 900px) {
  .card-container {
    width: 600px;
    height: 350px;
    border-radius: 10px;
    
  }

  .cards-wrapper {
    height: 50vh;
    padding: 10px;
  }

  .card .content {
    font-size: 0.8rem;
    padding: 15px;
  }

   .card .content p{
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
    gap: 12px;
    background: linear-gradient(-45deg, #4c0070 0%, #1b1b2f 60%, #100f1f 100%);
    color: #e8e8e8;
    padding: 20px;
    line-height: 1.4;
    border-radius: 5px;
    pointer-events: auto; /* Allow interaction on mobile */
    max-height: 100%; /* Ensure full height */
    transform: translateX(0); /* Always visible on mobile */
    opacity: 1; /* Always visible on mobile */
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    font-size: 0.9rem;
  }
}

  
`;

export default Card;
