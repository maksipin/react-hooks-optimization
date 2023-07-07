import React from "react";
import classes from "./style.module.css";
import { Link } from "react-router-dom";

const TitleSection = ({ icon, title, secondary, linkButton }) => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.icon}>{icon}</div>
        <div className={classes.title}>{title}</div>
        <div className={classes.secondary}>{secondary}</div>
        <Link to={linkButton} target="_blank">
          <div className={classes.button}>Документация</div>
        </Link>
      </div>
    </div>
  );
};

export default TitleSection;
