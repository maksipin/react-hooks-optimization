import React from "react";
import classes from "./style.module.css";

const ContentSection = ({ img, title, secondary, invert }) => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
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
      </div>
    </div>
  );
};

export default ContentSection;
