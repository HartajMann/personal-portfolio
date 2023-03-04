import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({image,name,id}) {
  const navi=useNavigate();
  return (
    <div className="projectItem" onClick={()=>navi("/project/"+id)}>
        <div  style={{backgroundImage:`url(${image})`}} className="bgImage"/>
      <h1>{name}</h1>
    </div>
  );
}

export default ProjectItem;
