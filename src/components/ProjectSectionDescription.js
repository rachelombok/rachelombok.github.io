import React from "react";

export const ProjectSectionDescription = (props) => {
  return (
    <div className="mb-14">
        {props.subtitle ? <h5 className="subtitle base-300">{props.subtitle}</h5> : ''}
        {props.heading ? <h3 className={`${props.id} project-heading mb-4`}>{props.heading}</h3> : ''}
      <p className="not-prose">{props.children}</p>
    </div>
  );
};
