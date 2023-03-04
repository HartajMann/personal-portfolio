import React from "react";
import ProjectItem from "../components/ProjectItem";
//import project1 from "../assets/proj1.jpg";
import "../styles/projects.css";
import { projectList } from "../helpers/projectlist";

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projectList">
        {/* <ProjectItem name="Full Stack Website" image={project1} />
      <ProjectItem name="Blood Bank" image={project1}/>
      <ProjectItem name="Advisor App" image={project1}/> */
      projectList.map((project,indx)=>{
        return <ProjectItem id={indx} name={project.name} image={project.image}/> })}
      </div>
    </div>
  );
}

export default Projects;
