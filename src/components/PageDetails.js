import React from "react";

export const PageDetails = (props) => {
  return (
    <div className="c12">
      <div className="summary">
        <div class="summary-section">
          <div class="section summary-item">
            <h5 className="subtitle base-300">Overview</h5>
            <p className='description-text'>
              {props.overview}
            </p>
          </div>
          <div className="section summary-item">
            <h5 className="subtitle">Roles</h5>
            <p className='description-text'>{props.roles}</p>
          </div>

          <div className="section summary-item">
            <h5 className="subtitle">Timeline</h5>
            <p className='description-text'>{props.timeline}</p>
          </div>
        
        </div>
        <img src={props.icon} className={`${props.id}-description-img`}/>
      </div>
    </div>
  );
};
