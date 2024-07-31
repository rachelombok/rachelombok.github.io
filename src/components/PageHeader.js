import React from "react";

export const PageHeader = (props) => {
  return (
    <div class="page-title">
                <h1 className="content-web emoji">{props.emoji}</h1>
                
                    <h1 class="content-mobile">{props.emoji}</h1>
                    <div className='mb-14'>
                    <h1 className={`${props.stylename}`}>{props.lineOne}</h1>
                    <h1 className={`medium-font ${props.stylename}`}>{props.lineTwo}</h1>
                    </div>
                
            </div>
  );
};