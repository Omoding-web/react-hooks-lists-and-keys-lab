import React from "react";

function ProjectItem({ technologies, about, name }) {
  return (
    <div className="project-item">
      /*To display the name of the project and description */
      <h3>{name}</h3>
      <p>{about}</p>
      /*Rendering the list of technologies */
      <div className="technologies">
        /*Mapping over the technologies to create spans for each technology */
        {technologies.map((technology, props) => (
          <span key={props}>{technology}</span>
        ))}
   
      </div>
    </div>
  );
}

export default ProjectItem;
