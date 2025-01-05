import React from "react";
import "../styles/Projects.css";
import linkedin from "../assets/Social icon.png";
import instagram from "../assets/Component 6.png";

const ProjectCard = ({ name, image, links, description }) => {
  return (
    <div className="project-card">
      <img src={image} alt={name} className="project-image" />
      <div className="project-details">
        <h3>{name}</h3>
        <div className="social-links">
          {links.instagram && (
            <a href={links.instagram}>
              <img src={instagram} alt="Instagram" />
            </a>
          )}
          {links.linkedin && (
            <a href={links.linkedin}>
              <img src={linkedin} alt="LinkedIn" />
            </a>
          )}
        </div>
      </div>
      <div className="project-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;