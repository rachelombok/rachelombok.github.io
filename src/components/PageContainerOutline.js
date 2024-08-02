import React from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";

export const PageContainerOutline = (props) => {
  return (
   
    <motion.div
      className={`page-container prose lg:prose-xl ${props.className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0 } } }}
      transition={{ duration: 1.5 }}
    >
      {props.children}
    </motion.div>
  );
};
