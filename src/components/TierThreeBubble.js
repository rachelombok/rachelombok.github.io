import React from "react";
import { Link } from "react-router-dom";

export const TierThreeBubble = ({ project }) => {
  const bubbleLinkStyles = {
    top: project.canvasPosition[1],
    left: project.canvasPosition[0],
  };

  const tierThreeBubbleStyles = { background: project.bgColor, color: project.textColor, };

  return (
    <Link to={project.linkPath} className="tier-three-bubble-link" style={bubbleLinkStyles}>
      <div
        className="tier-three-bubble"
        style={tierThreeBubbleStyles}
      >
        <img alt="tier thre project bubble icon" src={project.icon} className="tier-three-icon"/>

        <p className="tier-three-project-bubble-name">{project.title}</p>
          {/*<p className="tagline">{project.tagline}</p>*/}
      </div>
    </Link>
  );
};
