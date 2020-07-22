import React from "react";
import { FaGithub } from "react-icons/fa";

function CardHeader(props) {
  const image = props.image;
  var style = {
    backgroundImage: `url(${require("../img/projects/" + image)})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return <header style={style} id={image} className="card-header"></header>;
}

function Button(props) {
  return (
    <a href={props.url} target="_blank" rel="noreferrer noopener">
      <button className="button button-primary">
      <FaGithub/> Github 
      </button>
    </a>
  );
}

function CardBody(props) {
  return (
    <div className="card-body">
      <p className="date">{props.date}</p>
      <h2>{props.title}</h2>
      <p className="body-content">{props.description}</p>
      <br></br>
      <hr></hr>
      <p className="body-content">{props.tools}</p>
      <br></br>
      <Button url={props.url} />
    </div>
  );
}

function ProjectCard(props) {
  const project = props.project;

  return (
    <article className="card">
      <CardHeader image={props.project.image} />
      <CardBody
        title={project.name}
        description={project.description}
        date={project.date}
        url={project.url}
        tools={project.tools}
      />
    </article>
  );
}
export default ProjectCard;
