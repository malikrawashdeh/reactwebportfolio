import proj2img from "../../img/project-2.png";
import proj3img from "../../img/project-3.png";
import classes from "./Featured.module.css";

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
    img: proj2img,
  },
  {
    subtitle: "Data Dashboard",
    link: "https://covidtrackingwebapp.netlify.app/",
    projName: "Covid Tracker",
    desc: (
      <p className={classes["featured-desc"]}>
        <b>Looking for seemless data display and integration?</b> Take a look at
        the covid tracker I built using
        <b>React.js, Material UI, and Chart.js.</b> The web app makes api calls
        using <b>axios</b> to connect to a covid api which displays filtered
        data based on country.
      </p>
    ),
    gitHubLink: "https://github.com/malikrawashdeh/CovidTracker",
    img: proj3img,
  },
];
