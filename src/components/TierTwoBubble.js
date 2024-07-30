import React from "react";
import { Link } from "react-router-dom";

export const TierTwoBubble = ({ project }) => {
  const bubbleLinkStyles = {
    top: project.canvasPosition[1],
    left: project.canvasPosition[0],
  };

  const tierTwoBubbleStyles = { background: project.bgColor, color: project.textColor, };

  return (
    <Link to={project.linkPath}>
    <a  className="bubble-link" style={bubbleLinkStyles}>
      <div
        className="tier-two-bubble"
        style={tierTwoBubbleStyles}
      >
        <img alt="project icon" src={project.icon} class="icon"/>
        <p className="project-bubble-name">{project.title}</p>
          <p className="tagline">{project.tagline}</p>
      </div>
    </a>
    </Link>
  );
};
