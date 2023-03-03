import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { HistoryEdu } from "@mui/icons-material";
import { School } from "@material-ui/icons";
function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#123C69">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021"
          iconStyle={{ background: "#AC3B61", color: "#EEE2DC" }}
          icon={<HistoryEdu/>}
        >
          <h3 className="vertical-timeline-element-title">
            St.Xavier High School, Bathinda, Punjab, India
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          High School Diploma
          </h4>
          <p>Non-Medical (Mathematics, Physics, Chemistry)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022-Present"
          iconStyle={{ background: "#123C69", color: "#EEE2DC" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
          Southern Alberta Institute of Technology
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Diploma
          </h4>

          <p> Software Development</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      
    </div>
  );
}

export default Experience;
