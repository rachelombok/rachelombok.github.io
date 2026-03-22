import React from "react";

export const ProjectSectionDescription = (props) => {
  return (
    <div className="mb-14">
      {!!props.subtitle ? (
        <h5 className="subtitle base-300 font-body">{props.subtitle}</h5>
      ) : (
        ""
      )}
      {!!props.heading ? (
        <h3 className={`${props.id} project-heading not-prose mb-2 font-display leading-[1.3]`}>
          {props.heading}
        </h3>
      ) : (
        ""
      )}
      <p className="not-prose space-y-8 font-body">{props.children}</p>
    </div>
  );
};
