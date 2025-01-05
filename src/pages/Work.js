import React from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css";
import projectData from "../data/projectData";

const Work = () => {
  return (
    <div className="project-section">
      {projectData.map((category, index) => (
        <div key={index} className="project-category">
          <h2 className="year-heading">{category.title}</h2>
          <div className="project-grid">
            {category.projects.map((project, idx) => (
              <ProjectCard
                key={idx}
                name={project.name}
                image={project.image}
                links={project.links}
                description={project.description}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;