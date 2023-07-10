import React from "react";
import classes from "./style.module.css";
import { motion } from "framer-motion";

const ContentSection = ({ img, title, secondary, invert }) => {
  return (
    <motion.div className={classes.container}>
      <motion.div
        className={classes.wrapper}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 2.0 } }}
        viewport={{ amount: "some" }}
      >
        {invert && (
          <div>
            <img src={img} alt={title} width={"600px"} />
          </div>
        )}
        <div className={classes.titleWrapper}>
          <div className={classes.title}>{title}</div>
          <div className={classes.secondary}>{secondary}</div>
        </div>
        {!invert && (
          <div>
            <img src={img} alt={title} width={"600px"} />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ContentSection;
