import React from "react";

export const CourseSectionDetails = (props) => {
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
          {props.skills ? 
          <div className="section summary-item">
          <h5 className="subtitle">Skills Learned</h5>
          <p className='description-text'>{props.skills}</p>
        </div>
          : ''}

          {props.projects ? 
          <div className="section summary-item">
          <h5 className="subtitle">Projects</h5>
          <p className='description-text'>{props.projects}</p>
        </div>
          : ''}
        
        </div>
        <div class="summary-section">
        <div className="section summary-item">
          <h5 className="subtitle">Course Objectives</h5>
          <p className='description-text'>{props.objectives}</p>
        </div>
        </div>
      </div>
    </div>
    <div className="divider neutral-content">

    </div>
    </>
  );
};
