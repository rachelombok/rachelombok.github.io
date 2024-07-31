import React from "react";
import { Link } from "react-router-dom";

export const TierOneBubble = ({ project }) => {
  const bubbleLinkStyles = {
    top: project.canvasPosition[1],
    left: project.canvasPosition[0],
  };

  const tierOneBubbleStyles = { background: project.bgColor, color: project.textColor, };

  return (
    <Link to={project.linkPath} className="bubble-link" style={bubbleLinkStyles}>
   
      <div
        className="tier-one-bubble"
        style={tierOneBubbleStyles}
      >
        <img alt="project icon" src={project.icon} class="icon"/>
        <p className="project-bubble-name">{project.title}</p>
          <p className="tagline">{project.tagline}</p>
      </div>
   
    </Link>
  );
};
