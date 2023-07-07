import React from "react";
import classes from "./style.module.css";

const DescriptionSection = ({title, secondary}) => {
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.title}>{title}</div>
                <div className={classes.secondary}>{secondary}</div>
            </div>
        </div>
    );
};

export default DescriptionSection;
