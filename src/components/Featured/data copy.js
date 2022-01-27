import proj1img from "../../img/project-1.png";
import proj2img from "../../img/project-2.png";
import proj3img from "../../img/project-3.png";

import classes from "./Featured.module.css";
export const latest = {
  subtitle: "Featured Project",
  link: "https://macronutrient.herokuapp.com/",
  projName: "Food Logger Web App",
  desc: (
    <p className={classes["featured-desc"]}>
      Having trouble tracking your meals and macronutrients? Check out this food
      logger I made using React.js! I Created a food logger web app using
      <b>
        React which utilizes useState, useReducer, useEffect, and custom hooks
        to save food data and validate forms.
      </b>
      The web app connects to a food API using <b>Fetch api</b> to allow users
      to search for foods to add to their food list.
      <b> Incorporates CRUD functionality.</b>
    </p>
  ),
  gitHubLink: "https://github.com/malikrawashdeh/MacroTracker",
  img: proj1img,
};

export const featuredProjects = [
  {
    subtitle: "Landing Page",
    link: "https://acc-csso.netlify.app/",
    projName: "Austin Community College Computer Science Student Organization",
    desc: (
      <p className={classes["featured-desc"]}>
        Want your organization landing page to wow your clients? Checkout this
        beautiful responsive landing page I created for my school's computer
        science student organization. The website was created using react and
        styled using styled-components. The website is uses react smooth scroll
        for smooth transitions between sections.
      </p>
    ),
    gitHubLink: "https://github.com/malikrawashdeh/acc-csso-website",
    img: proj1img,
  },
];
