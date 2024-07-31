import React from "react";
import { Link } from "react-router-dom";
import '../styles/hover.css';

export const TierTwoBubble = ({ project }) => {
  const bubbleLinkStyles = {
    top: project.canvasPosition[1],
    left: project.canvasPosition[0],
  };

  const tierTwoBubbleStyles = { background: project.bgColor, color: project.textColor, };

  return (
    <Link to={project.linkPath} className="tier-two-bubble-link" style={bubbleLinkStyles}>
      <div
        className="tier-two-bubble"
        style={tierTwoBubbleStyles}
      >
        <div className="tier-two-description">
        <p className="tier-two-project-bubble-name">{project.title}</p>
          <p className="tier-two-tagline">{project.tagline}</p>
          </div>
        <img alt="project icon" src={project.icon} className="tier-two-icon"/> 
        </div>
        
    </Link>
  );
};
