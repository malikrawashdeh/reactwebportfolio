import React from "react";
import classes from "./Skills.module.css";
import reactLogo from "../../img/reactjsSVG.svg";
import jsLogo from "../../img/javascript-logo'.svg";
import pyLogo from "../../img/python.svg";
const Skills = () => {
  return (
    <section id="skills" className={classes.skills}>
      <h2>Skills</h2>
      <div className={classes["skills-container"]}>
        <ul>
          <li className={classes.transition2}>
            <div className={`${classes["icon-container"]} ${classes.one}`}>
              <img src={reactLogo} alt="React Logo" />
            </div>
            <p className={classes["skill-title"]}>React Web Development</p>
            <p className={classes["skill-desc"]}>
              Profecient in using react with all the modern hooks (useState,
              useEffect, useContext, Context api, and more!)
            </p>
          </li>
          <li className={classes.transition2}>
            <div className={`${classes["icon-container"]} ${classes.two}`}>
              <img src={jsLogo} alt="JavaScript Logo" />
            </div>
            <p className={classes["skill-title"]}>JavaScript HTML CSS</p>
            <p className={classes["skill-desc"]}>
              Equiped with all the basic front-end stack skills. Javascript ES6,
              HTML5, and modern CSS3 (Flexbox, Grid)
            </p>
          </li>
          <li className={classes.transition2}>
            <div className={`${classes["icon-container"]} ${classes.three}`}>
              <img src={pyLogo} alt="Python Logo" />
            </div>
            <p className={classes["skill-title"]}>Python</p>
            <p className={classes["skill-desc"]}>
              Skilled in data modeling using MatPlotLib, Numpy, etc.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
