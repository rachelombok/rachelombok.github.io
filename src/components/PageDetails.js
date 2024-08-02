import React from "react";
import { motion } from "framer-motion";

export const PageDetails = (props) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.08,
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { y: "100%" },
    show: { y: "0%", transition: { duration: 0.6 } },
  };
  const imgitem = {
    hidden: { y: "20%", opacity: 0 },
    show: { y: "0%", transition: { duration: 0.6 }, opacity: 1 },
  };
  return (
    <>
      <div className="c12">
        <motion.div
          className="summary"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="summary-section">
            <div className="section summary-item overflow-hidden">
              <motion.h5 className="subtitle base-300 " variants={item}>
                Overview
              </motion.h5>
              <motion.p className="description-text" variants={item}>
                {props.overview}
              </motion.p>
            </div>
            {!!props.roles ? (
              <div className="section summary-item overflow-hidden">
                <motion.h5 className="subtitle" variants={item}>
                  Roles
                </motion.h5>
                <motion.p className="description-text" variants={item}>
                  {props.roles}
                </motion.p>
              </div>
            ) : (
              ""
            )}

            {!!props.team ? (
              <div className="section summary-item overflow-hidden">
                <motion.h5 className="subtitle" variants={item}>
                  Team
                </motion.h5>
                <motion.p className="description-text" variants={item}>
                  {props.team}
                </motion.p>
              </div>
            ) : (
              ""
            )}

            {!!props.timeline ? (
              <div className="section summary-item overflow-hidden">
                <motion.h5 className="subtitle" variants={item}>
                  Timeline
                </motion.h5>
                <motion.p className="description-text" variants={item}>
                  {props.timeline}
                </motion.p>
              </div>
            ) : (
              ""
            )}

            {!!props.listen ? (
              <div className="section summary-item overflow-hidden">
                <motion.h5 className="subtitle" variants={item}>
                  Listen
                </motion.h5>
                <motion.p className="description-text" variants={item}>
                  {props.listen}
                </motion.p>
              </div>
            ) : (
              ""
            )}

            {!!props.connect ? (
              <div className="section summary-item overflow-hidden">
                <motion.h5 className="subtitle" variants={item}>
                  Connect
                </motion.h5>
                <motion.p className="description-text" variants={item}>
                  {props.connect}
                </motion.p>
              </div>
            ) : (
              ""
            )}
          </div>
          <motion.img
            variants={imgitem}
            src={props.icon}
            className={`${props.id}-description-img ml-8 ${props.useBorder ? 'border border-8 rounded border-neutral-content' : ''}`}
          />
        </motion.div>
      </div>
      <div className="divider neutral-content"></div>
    </>
  );
};
