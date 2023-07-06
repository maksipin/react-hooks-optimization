import React from "react";
import classes from "./style.module.css";

const menu = [
    {
        title: "useRef",
        link: ""
    },
    {
        title: "useMemo",
        link: ""
    }, {
        title: "useCallback",
        link: ""
    }, {
        title: "HOC",
        link: ""
    }, {
        title: "React.memo",
        link: ""
    },
]

const Navbar = () => {
    return (
        <div className={classes.container}>
            <div className={classes.logoTitle}>
                <div className={classes.primary}>
                    АЛГОНТ
                </div>
                <div className={classes.secondary}>Frontend TEAM</div>
            </div>
            <div className={classes.link}>
                {menu.map(itemLink => (
                    <div className={classes.linkItem}>{itemLink.title}</div>
                ))}
            </div>
        </div>
    )
}

export default Navbar;