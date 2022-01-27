import React from "react";
import "./resume.scss";
import malikImg from "../../img/malik.jpeg";
/*
var select = function (s) {
  return document.querySelector(s);
};

function randomBetween(min, max) {
  var number = Math.floor(Math.random() * (max - min + 1) + min);

  if (number !== 0) {
    return number;
  } else {
    return 0.5;
  }
}

var tl = new TimelineMax();

for (var i = 0; i < 20; i++) {
  var t = TweenMax.to(select(".bubble" + i), randomBetween(1, 1.5), {
    x: randomBetween(12, 15) * randomBetween(-1, 1),
    y: randomBetween(12, 15) * randomBetween(-1, 1),
    repeat: -1,
    repeatDelay: randomBetween(0.2, 0.5),
    yoyo: true,
    ease: Elastic.easeOut.config(1, 0.5),
  });

  tl.add(t, (i + 1) / 0.6);
}

tl.seek(50);
*/
const Resume = () => {
  return (
    <section id="about" className="resume-wrapper">
      <section className="profile section-padding">
        <div className="container">
          <div className="picture-resume-wrapper">
            <div className="picture-resume">
              <span>
                <img src={malikImg} alt="Image of Malik" />
              </span>
              <svg version="1.1" viewBox="0 0 350 350">
                <defs>
                  <filter id="goo">
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation="8"
                      result="blur"
                    />
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9"
                      result="cm"
                    />
                  </filter>
                </defs>

                <g filter="url(#goo)">
                  <circle
                    id="main_circle"
                    className="st0"
                    cx="171.5"
                    cy="175.6"
                    r="130"
                  />

                  <circle
                    id="circle"
                    className="bubble0 st1"
                    cx="171.5"
                    cy="175.6"
                    r="122.7"
                  />
                  <circle
                    id="circle"
                    className="bubble1 st1"
                    cx="171.5"
                    cy="175.6"
                    r="122.7"
                  />
                  <circle
                    id="circle"
                    className="bubble2 st1"
                    cx="171.5"
                    cy="175.6"
                    r="122.7"
                  />
                  <circle
                    id="circle"
                    className="bubble3 st1"
                    cx="171.5"
                    cy="175.6"
                    r="122.7"
                  />
                  <circle
                    id="circle"
                    className="bubble4 st1"
                    cx="171.5"
                    cy="175.6"
                    r="122.7"
                  />
                  <circle
                    id="circle"
                    className="bubble5 st1"
                    cx="171.5"
                    cy="175.6"
                    r="122.7"
                  />
                  <circle
                    id="circle"
                    className="bubble6 st1"
                    cx="171.5"
                    cy="175.6"
                    r="122.7"
                  />
                  <circle
                    id="circle"
                    className="bubble7 st1"
                    cx="171.5"
                    cy="175.6"
                    r="122.7"
                  />
                  <circle
                    id="circle"
                    className="bubble8 st1"
                    cx="171.5"
                    cy="175.6"
                    r="122.7"
                  />
                  <circle
                    id="circle"
                    className="bubble9 st1"
                    cx="171.5"
                    cy="175.6"
                    r="122.7"
                  />
                  <circle
                    id="circle"
                    className="bubble10 st1"
                    cx="171.5"
                    cy="175.6"
                    r="122.7"
                  />
                </g>
              </svg>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="name-wrapper">
            <h1>
              Malik <br />
              Rawashdeh
            </h1>
            {/*  YOUR NAME AND LAST NAME  */}
          </div>
          <div className="clearfix"></div>

          <div className="contact-presentation">
            {" "}
            {/*  YOUR PRESENTATION RESUME  */}
            <p>
              <span className="bold">Hello</span> I am a student at Texas A&M
              studying Computer Science and am very interested in Software
              Developement and Machine Learning.{" "}
            </p>
          </div>
          <div className="contact-social clearfix">
            <ul className="list-titles">
              <li>GitHub</li>
              <li>LinkedIn</li>
            </ul>
            <ul className="list-content">
              {" "}
              {/* REMEMBER TO PUT THE URL ON THE HREF TAG */}
              <li>
                <a href="https://github.com/malikrawashdeh" target="_blanck">
                  malikrawashdeh
                </a>
              </li>{" "}
              {/* YOUR TWITTER USER */}
              <li>
                <a
                  href="https://www.linkedin.com/in/malik-rawashdeh-a5678b1b6/"
                  target="_blanck"
                >
                  Malik Rawashdeh
                </a>
              </li>{" "}
              {/* YOUR DRIBBBLE USER */}
            </ul>
          </div>
        </div>
      </section>

      <section className="experience section-padding">
        <div className="container">
          <h3 className="experience-title">Experience</h3>
          <div className="experience-wrapper">
            <div className="company-wrapper clearfix">
              <div className="experience-title">My Coding Place</div>
              {/* NAME OF
              THE COMPANY YOUWORK WITH  */}
              <div className="time">Sep 2021 - Present</div>{" "}
              {/* THE TIME YOU
              WORK WITH THE COMPANY */}
            </div>

            <div className="job-wrapper clearfix">
              <div className="experience-title">Coding Instructor</div>{" "}
              {/*
              JOB TITLE */}
              <div className="company-description">
                <p>
                  Planned and instructed private lessons teaching programming
                  fundamentals to 7–14-year-old children using{" "}
                  <b>Python, Lua, and Scratch</b>
                </p>
                {/* JOB DESCRIPTION */}
              </div>
            </div>

            <div className="company-wrapper clearfix">
              <div className="experience-title">Meroney Public Affairs</div>{" "}
              {/* NAME OF
              THE COMPANY YOUWORK WITH */}
              <div className="time">Spring 2021</div>{" "}
              {/* THE TIME YOU
              WORK WITH THE COMPANY */}
            </div>

            <div className="job-wrapper clearfix">
              <div className="experience-title">Administrative Intern</div>{" "}
              {/* JOB TITLE */}
              <div className="company-description">
                <p>
                  Reached out to state legislator offices to pushed for client
                  interests
                </p>{" "}
                {/* JOB DESCRIPTION */}
              </div>
            </div>
            <h3 className="experience-title">ExtraCurriculars</h3>
            <div className="company-wrapper clearfix">
              <div className="experience-title">
                ACC Computer Science Organization
              </div>{" "}
              {/* NAME OF
              THE COMPANY YOUWORK WITH */}
              <div className="time">Sep 2021 - Present</div>{" "}
              {/* THE TIME YOU
              WORK WITH THE COMPANY */}
            </div>

            <div className="job-wrapper clearfix">
              <div className="experience-title">Vice President</div>{" "}
              {/* JOB TITLE
               */}
              <div className="company-description">
                <p>
                  Managed and orchestrated efforts to upskill organization
                  members in HTML and CSS through lessons and projects.
                  <b>Designed, Developed, and deployed</b> the organization
                  landing page
                </p>{" "}
                {/* JOB DESCRIPTION */}
              </div>
            </div>
          </div>
          {/*Skill experience */}
          <div className="section-wrapper clearfix">
            <h3 className="section-title">Skills</h3> {/* YOUR SET OF SKILLS */}
            <ul>
              <li>Python</li>
              <li>C++</li>
              <li>Javascript</li>
              <li>HTML/CSS</li>
              <li>Lua</li>
              <li>C++</li>
            </ul>
          </div>
          <div className="section-wrapper clearfix">
            <h3 className="section-title">Technical Interests</h3>{" "}
            {/* DESCRIPTION OF YOUR
            HOBBIES */}
            <p>
              Full Stack Web Development: I am interested in working on full
              stack webapps that use the MERN stack.
            </p>
            <p>
              I am also interested in Machine Learning and Data Analasys using
              Python libraries like Tensorflow.
            </p>
          </div>
        </div>
      </section>

      <div className="clearfix"></div>
    </section>
  );
};

export default Resume;
