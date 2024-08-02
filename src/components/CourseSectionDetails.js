import React from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";

export const CourseSectionDetails = (props) => {
  const container = {
    hidden: {opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.08,
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: {  y: '60%' },
    show: { y: '0%', transition: { duration: .6 }}
  };
  return (
    <>
    <div className="c12">
      <motion.div className="summary" variants={container} initial='hidden' animate='show'>
        <div className="summary-section">
          <div className="section summary-item overflow-hidden">
            <motion.h5 className="subtitle base-300" variants={item}>Overview</motion.h5>
            <motion.p className='description-text' variants={item}>
              {props.overview}
            </motion.p>
          </div>
          {props.skills ? 
          <div className="section summary-item overflow-hidden">
          <motion.h5 className="subtitle" variants={item}>Skills Learned</motion.h5>
          <motion.p className='description-text' variants={item}>{props.skills}</motion.p>
        </div>
          : ''}

          {props.projects ? 
          <div className="section summary-item overflow-hidden">
          <motion.h5 className="subtitle" variants={item}>Projects</motion.h5>
          <motion.p className='description-text' variants={item}>{props.projects}</motion.p>
        </div>
          : ''}
        
        </div>
        <div class="summary-section">
        <div className="section summary-item overflow-hidden">
          <motion.h5 className="subtitle" variants={item}>Course Objectives</motion.h5>
          <motion.p className='description-text' variants={item}>{props.objectives}</motion.p>
        </div>
        </div>
      </motion.div>
    </div>
    <div className="divider neutral-content">

    </div>
    </>
  );
};
