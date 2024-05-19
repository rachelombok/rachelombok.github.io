import React from 'react';
import { TierOneBubble } from './TierOneBubble';
import { projectBubbleInfo } from '../fileinfo/projectbubbleinfo';

export const Canvas = () => {
    return(
      <div className='site-background'>
        <div className='canvas'>
          <div className='container'>

         
          <div className='scrollable-area'>
            {projectBubbleInfo.map((project) => {
                return <TierOneBubble project={project}/>
            })}
            </div>
            </div>
        </div>

      </div>
    );
}