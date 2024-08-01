import React from "react";

export const CollapsibleSection = (props) => {

    return(
        <div className="collapse bg-neutral-content collapse-arrow mb-10 border border-base-200">
  <input type="checkbox" />
  <div className="collapse-title text-xl font-medium my-0">{props.title}</div>
  <div className="collapse-content px-8">
   {props.children}
  </div>
</div>
    );
};