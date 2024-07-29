import React from "react";

export const PageHeader = (props) => {
  return (
    <div class="page-title">
                <h1 class="content-web emoji">{props.emoji}</h1>
                <div>
                    <h1 class="content-mobile">{props.emoji}</h1>
                    <h1>{props.lineOne}</h1>
                    <h1 class="medium-font">{props.lineTwo}</h1>
                </div>
            </div>
  );
};