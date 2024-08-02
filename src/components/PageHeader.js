import React from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
export const PageHeader = (props) => {
  const container = {
    hidden: {opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.08,
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: '50%' },
    show: { y: '0%', transition: { duration: .6 }}
  };
  /*
  animate={{y: 0}}
    initial={{ y: '30%'}}
    transition={{ delay: 0.1, duration: 0.4}}
  */
  return (
    <motion.div className="page-title overflow-hidden" variants={container} initial='hidden' animate='show'>
      <motion.h1
variants={item}
        className="content-web emoji"
      >
        {props.emoji}
      </motion.h1>

      <motion.h1 variants={item} className="content-mobile">{props.emoji}</motion.h1>
      <motion.div variants={item} className="mb-14">
        <h1 className={`${props.stylename}`}>{props.lineOne}</h1>
        <h1 className={`medium-font ${props.stylename}`}>{props.lineTwo}</h1>
      </motion.div>
    </motion.div>
  );
};
