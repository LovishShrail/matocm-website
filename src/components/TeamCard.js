import React, { useState } from "react";
import "../styles/Team.css";
import linkedin from "../assets/Social icon.png";
import instagram from "../assets/Component 6.png";

const TeamCard = ({ name, image, links }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="team-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={name} />
      <h3>
        {isHovered && (links.instagram || links.linkedin) ? (
          <div className="social-links">
            {links.instagram && (
              <a href={links.instagram} target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" />
              </a>
            )}
            {links.linkedin && (
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" />
              </a>
            )}
          </div>
        ) : (
          name
        )}
      </h3>
    </div>
  );
};

export default TeamCard;