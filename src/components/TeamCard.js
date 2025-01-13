import React from "react";
import "../styles/Team.css";
import linkedin from "../assets/Social icon.png";
import instagram from "../assets/Component 6.png";

const TeamCard = ({ name, image, links }) => {
  return (
    <div className="team-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <div className="social-links">
        {links.instagram && <a href={links.instagram}><img src={instagram} alt="" /></a>}
        {links.linkedin && <a href={links.linkedin}><img src={linkedin} alt="" /></a>}
      </div>
    </div>
  );
};

export default TeamCard;