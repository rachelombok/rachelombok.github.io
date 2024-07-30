import React from "react";

export const PageHeader = (props) => {
  return (
    <div class="page-title">
                <h1 className="content-web emoji">{props.emoji}</h1>
                
                    <h1 class="content-mobile">{props.emoji}</h1>
                    <div className={`${props.stylename}-title`}>
                    <h1>{props.lineOne}</h1>
                    <h1 class="medium-font">{props.lineTwo}</h1>
                    </div>
                
            </div>
  );
};