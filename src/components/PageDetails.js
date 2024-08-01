import React from "react";

export const PageDetails = (props) => {
  return (
    <>
    <div className="c12">
      <div className="summary">
        <div class="summary-section">
          <div class="section summary-item">
            <h5 className="subtitle base-300">Overview</h5>
            <p className='description-text'>
              {props.overview}
            </p>
          </div>
          {props.roles ? 
          <div className="section summary-item">
          <h5 className="subtitle">Roles</h5>
          <p className='description-text'>{props.roles}</p>
        </div>
          : ''}

          {props.team ? 
          <div className="section summary-item">
          <h5 className="subtitle">Team</h5>
          <p className='description-text'>{props.team}</p>
        </div>
          : ''}

{props.timeline ? 
          <div className="section summary-item">
          <h5 className="subtitle">Timeline</h5>
          <p className='description-text'>{props.timeline}</p>
        </div>
          : ''}

          {props.listen ? 
          <div className="section summary-item">
          <h5 className="subtitle">Listen</h5>
          <p className='description-text'>{props.listen}</p>
        </div>
          : ''}

{props.connect ? 
          <div className="section summary-item">
          <h5 className="subtitle">Connect</h5>
          <p className='description-text'>{props.connect}</p>
        </div>
          : ''}
        
        </div>
        <img src={props.icon} className={`${props.id}-description-img ml-8`}/>
      </div>
    </div>
    <div className="divider neutral-content">

    </div>
    </>
  );
};
