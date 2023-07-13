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
        {img && invert && (
          <div className={classes.image}>
            <img src={img} alt={title} />
          </div>
        )}
        {(title || secondary) && (
          <div className={classes.titleWrapper}>
            {title && <div className={classes.title}>{title}</div>}
            {secondary && <div className={classes.secondary}>{secondary}</div>}
          </div>
        )}
        {img && !invert && (
          <div className={classes.image}>
            <img src={img} alt={title} />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ContentSection;
