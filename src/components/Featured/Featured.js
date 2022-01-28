import React from "react";
import classes from "./Featured.module.css";

const Featured = ({ subtitle, link, projName, desc, gitHubLink, img }) => {
  return (
    <section className={classes.featured}>
      <div className={classes.left}>
        <div className={classes.inner}>
          <p className={classes.subtitle}>{subtitle}</p>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={classes["featured-title"]}
          >
            {projName}
          </a>
          {desc}
          <a
            href={gitHubLink}
            target="_blank"
            rel="noreferrer"
            className={classes.button}
          >
            GitHub
          </a>
        </div>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={classes["featured-title"]}
      >
        <img src={img} alt="Featured Project" className={classes.right} />
      </a>
    </section>
  );
};

export default Featured;
