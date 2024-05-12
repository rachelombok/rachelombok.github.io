import React from 'react';
import { TierOneBubble } from './TierOneBubble';
import { projectBubbleInfo } from '../fileinfo/projectbubbleinfo';

export const Canvas = () => {
    return(
      <div className='site-background'>
        <div className='canvas'>
            {projectBubbleInfo.map((project) => {
                return <TierOneBubble project={project}/>
            })}
        </div>

      </div>
    );
}