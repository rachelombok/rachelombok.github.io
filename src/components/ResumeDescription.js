import React from "react";

export const ResumeDescription = (props) => {
  return (
    <div className="not-prose resume-description">
      <h3>
        {!!props.resumeLink ? <a
          href={props.resumeLink}
          target="_blank"
          rel="noopener"
          className={`link ${props.id}`}
        >
          {props.company}
        </a> : <>{props.company}</>}
      </h3>
      <p className="medium">{props.subline}</p>
      {props.children}
    </div>
  );
};
