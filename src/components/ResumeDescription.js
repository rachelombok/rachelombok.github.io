import React from "react";

export const ResumeDescription = (props) => {
  return (
    <div className="not-prose resume-description font-body my-12">
      <div className="text-6xl font-semibold mb-2 font-display">
        {!!props.resumeLink ? (
          <a
            href={props.resumeLink}
            target="_blank"
            rel="noopener"
            className={`link ${props.id} leading-none`}
          >
            {props.company}
          </a>
        ) : (
          <>{props.company}</>
        )}
      </div>
      <p className="medium">{props.subline}</p>
      {props.children}
    </div>
  );
};
