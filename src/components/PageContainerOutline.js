import React from "react";

export const PageContainerOutline = (props) => {
  return (
    <div className={`page-container prose lg:prose-xl ${props.className}`}>
        {props.children}
    </div>
  );
};