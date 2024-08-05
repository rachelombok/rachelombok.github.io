import React from "react";
import { TierOneBubble } from "./TierOneBubble";
import { TierTwoBubble } from "./TierTwoBubble";
import { TierThreeBubble } from "./TierThreeBubble";
import { projectBubbleInfo } from "../fileinfo/projectbubbleinfo";
import { motion } from "framer-motion";
import ReactGA from "react-ga4";

export const Canvas = () => {
  ReactGA.send({ hitType: "pageview", page: "/", title: "homepage" });

  return (
    <motion.div
      className="site-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0 } } }}
      transition={{ duration: 1.5 }}
    >
      <div className="canvas border-solid border-8 border-current rounded-sm">
        {projectBubbleInfo.map((project) => {
          if (project.showOnCanvas) {
            if (project.tier === 1) {
              return <TierOneBubble project={project} key={project.title}/>;
            } else if (project.tier === 2) {
              return <TierTwoBubble project={project} key={project.title}/>;
            } else if (project.tier === 3) {
              return <TierThreeBubble project={project} key={project.title}/>;
            }
          }
          return [];
        })}
        {/*  </div>*/}
      </div>
    </motion.div>
  );
};
