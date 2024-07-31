import React from "react";

export const ProjectSectionDescription = (props) => {
  return (
    <div className="mb-14">
        {props.subtitle ? <h5 className="subtitle base-300">{props.subtitle}</h5> : ''}
        {props.heading ? <h3 className={`${props.id} project-heading not-prose mb-0`}>{props.heading}</h3> : ''}
      <p className="not-prose space-y-8">{props.children}</p>
    </div>
  );
};
