import React from 'react';

export const TierOneBubble = () => {
    return(
      <div className='tier-one-bubble'>
        <svg xmlns="http://www.w3.org/2000/svg" className='icon'>
  <circle r="45" cx="50" cy="50" stroke="green" stroke-width="3" fill="red" opacity="0.5" />
  Sorry, your browser does not support inline SVG.  
</svg> 
        <p className='project-bubble-name'>Project 1</p>
        <p>Subtitle line about project</p>
      </div>
    );
}