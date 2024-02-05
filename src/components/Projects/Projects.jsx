import React from "react";

import "./Projectsmodule.css"

import projects from "../../data/projects.js";
import { ProjectCard } from "./ProjectCard.jsx";

export const Projects = () => {
  return (
    <section className="container" id="projects">
      <h2 className="title">Projects</h2>
      <div className="projects">
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
