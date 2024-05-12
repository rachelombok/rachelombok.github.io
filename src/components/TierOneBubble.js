import React from "react";

export const TierOneBubble = ({ project }) => {
  const bubbleLinkStyles = {
    top: project.canvasPosition[0],
    left: project.canvasPosition[1],
  };

  const tierOneBubbleStyles = { background: project.bgColor, color: project.textColor, };

  return (
    <a href="" className="bubble-link" style={bubbleLinkStyles}>
      <div
        className="tier-one-bubble"
        style={tierOneBubbleStyles}
      >
        <img alt="project icon" src={project.icon} class="icon" />
        <p className="project-bubble-name">{project.title}</p>
          <p className="tagline">{project.tagline}</p>
      </div>
    </a>
  );
};
