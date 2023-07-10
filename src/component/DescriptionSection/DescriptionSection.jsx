import React, { useRef } from "react";
import classes from "./style.module.css";
import { motion } from "framer-motion";

const DescriptionSection = ({ title, secondary }) => {
  const scrollRef = useRef(null);
  return (
    <motion.div
      className={classes.container}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 2.5 } }}
      viewport={{ amount: "some" }}
    >
      <div className={classes.wrapper}>
        <div className={classes.title}>{title}</div>
        <div className={classes.secondary}>{secondary}</div>
      </div>
    </motion.div>
  );
};

export default DescriptionSection;
