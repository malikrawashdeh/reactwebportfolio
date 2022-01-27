import React from "react";
import Featured from "./components/Featured/Featured";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import { latest } from "./components/Featured/data";
import { featuredProjects } from "./components/Featured/data2";
import Resume from "./components/Resume.js/Resume";

const projSection = featuredProjects.map((sectionData) => (
  <Featured key={sectionData.projName} {...sectionData} />
));
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Featured {...latest} />
      <Skills />
      {projSection}
      <Resume />
    </React.Fragment>
  );
}

export default App;
