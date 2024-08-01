import React from 'react';
import { TierOneBubble } from './TierOneBubble';
import { TierTwoBubble } from './TierTwoBubble';
import { TierThreeBubble } from './TierThreeBubble';
import { projectBubbleInfo } from '../fileinfo/projectbubbleinfo';

export const Canvas = () => {
    return(
      <div className='site-background'>
        <div className='canvas'>
        {/* <div className='container'>  container css was here */}

         
            {projectBubbleInfo.map((project) => {
              if (project.showOnCanvas){
                if (project.tier == 1){
                  return <TierOneBubble project={project}/>
                }
                else if(project.tier == 2){
                  return <TierTwoBubble project={project}/>
                }
                else if(project.tier == 3){
                  return <TierThreeBubble project={project}/>
                }
              }
              
            })}
          {/*  </div>*/}
        </div>

      </div>
    );
}