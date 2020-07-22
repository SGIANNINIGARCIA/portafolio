import React from "react";
import ProjectCard from "../components/ProjectCard";
import HorizontalScroll from "react-scroll-horizontal";

function Projects() {
  const projects = require("../data/projects.json");

  return (
    <div className="condiv">
      <h1 className="subtopic">My Projects</h1>
        <HorizontalScroll
        reverseScroll = {true}
        >
          {projects.map((project) => {
            return <ProjectCard project={project} />;
          })}
        </HorizontalScroll>
    </div>
  );
}
export default Projects;
