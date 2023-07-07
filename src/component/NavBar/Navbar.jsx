import React from "react";
import classes from "./style.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { configPages } from "../../config/configPages";

const Navbar = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.logoTitle}>
            <div className={classes.primary}>АЛГОНТ</div>
            <div className={classes.secondary}>Frontend TEAM</div>
          </div>
          <div className={classes.link}>
            {Object.keys(configPages).map((item, i) => (
              <NavLink
                key={i}
                className={classes.linkItem}
                to={`/${configPages[item].linkPage}`}
              >
                {configPages[item].title}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
