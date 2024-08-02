import React from 'react';
import { TierOneBubble } from './TierOneBubble';
import { TierTwoBubble } from './TierTwoBubble';
import { TierThreeBubble } from './TierThreeBubble';
import { projectBubbleInfo } from '../fileinfo/projectbubbleinfo';
import { AnimatePresence, motion, useCycle } from "framer-motion";

export const Canvas = () => {
    return(
      <motion.div className='site-background' initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0 } } }}
      transition={{ duration: 1.5 }}>
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

      </motion.div>
    );
}