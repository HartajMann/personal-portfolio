import React from "react";
import { GitHub } from "@material-ui/icons";
import { Email } from "@material-ui/icons";
import { LinkedIn } from "@material-ui/icons";
import "../styles/home.css";
function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Hartaj</h2>
        <div className="prompt">
          <p>
            I am a software development student, eager to gain hands-on
            experience through a cooperative education opportunity.
          </p>
          <Email />
          <GitHub />
          <LinkedIn />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Languages</h2>
            <span>C, C++, C#, Java, Python, Javascript</span>
          </li>
          <li className="item">
            <h2>Web-Technologies</h2>
            <span>
              HTML, CSS, NodeJS, ReactJS, ExpressJS, SQL, MySQL, MUI, Bootstarp,
              JQurey, NPM, YARN, TailWindCSS, MongoDB
            </span>
          </li>
          <li className="item">
            <h2>Technologies</h2>
            <span>
              Git, Github, JavaFX, Aws Cloud, Visual Studio Code, Visual Studio,
              Eclipse, SceneBuilder
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
