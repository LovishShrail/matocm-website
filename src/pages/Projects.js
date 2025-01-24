import React from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css";
import projectData from "../data/projectData";
import HackerText from "../components/HackerText";
import Footer from "../components/Footer";

const Project = () => {
  return (
    <>
    <div className="project-section">
      {projectData.map((category, index) => (
        <div key={index} className="project-category">
          <h2 className="year-heading"  style={{
            background: "linear-gradient(-45deg, #ff69b4, #e890e8, #b19cd9,rgb(90, 27, 216), #8a2be2)",
            backgroundSize: "200% 200%",
            animation: "gradient 15s ease infinite",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text", }}><HackerText text = {category.title} /></h2>
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

      <div className="footer">

    <Footer/>

      </div>
    </div>


    </>
    
  );
};

export default Project;