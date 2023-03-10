import React, { useEffect, useState } from "react";
import { Link,useLocation } from "react-router-dom";
import "../styles/navbar.css";
import { Toc } from "@material-ui/icons";
function Navbar() {
  const [expandNavbar, setExpandNavbar]=useState(false);
  const loc=useLocation();
  useEffect(()=>{setExpandNavbar(false)},[loc])
  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={()=>{setExpandNavbar((prev)=>!prev)}}><Toc/></button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Experience">Experience</Link>
      </div>
    </div>
  );
}

export default Navbar;
