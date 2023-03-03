import React from "react";
import { GitHub } from "@material-ui/icons";
import { LinkedIn } from "@material-ui/icons";
import { Email } from "@material-ui/icons";
import { AddIcCall } from "@material-ui/icons";
import "../styles/footer.css";
function footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GitHub />
        <LinkedIn />
        <Email />
        <AddIcCall />
      </div>
      <p>&copy; 2023 HartajMann.com</p>
    </div>
  );
}

export default footer;
