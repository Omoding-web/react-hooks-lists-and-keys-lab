import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
{/*Mapping over the projects array to create a ProjectItem component for each project*/}
  const ProjectItems = projects.map((project) => (
  <ProjectItem
  /*Us the id of each project as the key prop*/
  key={project.id}
  /*Passing the name, description, and technologies arrays of the project as a prop */
  name={project.name}
  about={project.about}
  technologies={project.technologies} />
));
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{ProjectItems}</div>
    </div>
  );
}

export default ProjectList;
