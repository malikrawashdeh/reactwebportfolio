import React from "react";
import classes from "./Navbar.module.css";
import { github, linkedin } from "./icons";
const Navbar = () => {
  return (
    <div className={classes["nav-container"]}>
      <header className={classes.header}>
        <a href="index.html" className={classes.logo}>
          Malik
        </a>
        <nav>
          <ul className={classes.links}>
            <li>
              <a href="#work" className={classes["section-links"]}>
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className={classes["section-links"]}>
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className={classes["section-links"]}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className={classes["social-header"]}>
        <ul className={classes.socials}>
          <li>
            <a
              href="https://www.linkedin.com/in/malik-rawashdeh-a5678b1b6/"
              target="_blank"
              rel="noreferrer"
            >
              {linkedin}
            </a>
          </li>
          <li>
            <a
              href="https://github.com/malikrawashdeh"
              target="_blank"
              rel="noreferrer"
            >
              {github}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
