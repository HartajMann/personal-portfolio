import React from 'react'
import {useParams} from "react-router-dom";
import {projectList} from "../helpers/projectlist";
import { GitHub } from '@mui/icons-material';
import "../styles/projectdisplay.css";
function Projectdispay() {
    const{id}=useParams();
    const project=projectList[id];
  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image}/>
        <p>
            <b>Skills:</b>
            {project.skills}</p>
        <GitHub/>
    </div>
  );
}

export default Projectdispay