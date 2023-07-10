import React from "react";
import classes from "./style.module.css";
import { Link } from "react-router-dom";
import { motion, useIsPresent } from "framer-motion";

const TitleSection = ({ icon, title, secondary, linkButton }) => {
  const isPresent = useIsPresent();
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
  return (
    <div className={classes.container}>
      {/*<div className={classes.wrapper}>*/}
      <motion.div
        className={classes.wrapper}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1.5 } }}
        variants={{ visible: { transition: { staggerChildren: 0.9 } } }}
      >
        <div className={classes.icon}>{icon}</div>
        <div className={classes.title}>{title}</div>
        <div className={classes.secondary}>{secondary}</div>
        <Link to={linkButton} target="_blank">
          <div className={classes.button}>Документация</div>
        </Link>
      </motion.div>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.8, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.8, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className={classes.privacyScreen}
      />
    </div>
  );
};

export default TitleSection;
