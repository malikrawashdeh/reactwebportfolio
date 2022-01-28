import React from "react";
import classes from "./Hero.module.css";
import { heroPattern } from "./heroPattern";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
const Hero = () => {
  const writer = (typewriter) =>
    typewriter
      .typeString("Malik ")
      .pauseFor(2000)
      .typeString(" Rawashdeh")
      .start();
  const variantContent = {
    visible: { y: 0 },
    hidden: { y: -200 },
  };
  const variantStagger1 = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -50, opacity: 0 },
  };

  return (
    <div className={classes.hero}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variantContent}
        transition={{
          type: "tween",
          ease: "easeIn",
          duration: 0.5,
        }}
        className={classes.content}
      >
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={variantStagger1}
          transition={{
            type: "tween",
            ease: "easeIn",
            duration: 0.5,
            delay: 0.3,
          }}
          className={`${classes["hero-title"]} ${classes.stagger1}`}
        >
          Unique Web Experience by a Student
        </motion.h1>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variantStagger1}
          transition={{
            type: "tween",
            ease: "easeIn",
            duration: 0.5,
            delay: 0.6,
          }}
          className={`${classes.meet} ${classes.stagger1}`}
        >
          <span>&#x2192;</span>
          <p>Meet</p>
          <Typewriter onInit={writer} className={classes.name} />
        </motion.div>
        <div className={classes.scroll}>&#8595;</div>
      </motion.div>
      {heroPattern}
    </div>
  );
};

export default Hero;
