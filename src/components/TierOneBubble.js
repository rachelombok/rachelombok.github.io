import React from "react";
import { Link } from "react-router-dom";

export const TierOneBubble = ({ project }) => {
  const bubbleLinkStyles = {
    top: project.canvasPosition[1],
    left: project.canvasPosition[0],
  };

  const tierOneBubbleStyles = {
    background: project.bgColor,
    color: project.textColor,
  };

  return (
    <Link
      to={project.linkPath}
      className="bubble-link my-4"
      style={bubbleLinkStyles}
    >
      <div className="tier-one-bubble" style={tierOneBubbleStyles}>
        {(
          <img
            alt="tier one project bubble icon"
            src={project.icon}
            className="icon"
          />
        ) ?? <div className="skeleton h-32 w-32" />}

        <p className="project-bubble-name">{project.title}</p>
        <p className="tagline">{project.tagline}</p>
      </div>
    </Link>
  );
};
