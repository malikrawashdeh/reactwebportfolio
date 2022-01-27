import classes from "./Hero.module.css";
import { motion } from "framer-motion";
const svgVariants = {
  hidden: { y: 200, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", ease: "easeIn", duration: 1 },
  },
};
const svgPartVariants = {
  hidden: { scale: 0.1, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "tween", ease: "easeOut", duration: 1 },
  },
};

export const heroPattern = (
  <motion.svg
    variants={svgVariants}
    initial="hidden"
    animate="visible"
    className={classes["hero-pattern"]}
    width="600"
    height="600"
    viewBox="0 0 600 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.rect
      variants={svgPartVariants}
      initial="hidden"
      animate="visible"
      x="300"
      width="150"
      height="150"
      rx="28"
      fill="#6E00FF"
    />
    <motion.rect
      variants={svgPartVariants}
      initial="hidden"
      animate="visible"
      x="300"
      y="300"
      width="150"
      height="150"
      rx="28"
      fill="#6E00FF"
    />
    <motion.rect
      variants={svgPartVariants}
      initial="hidden"
      animate="visible"
      x="450"
      y="150"
      width="150"
      height="150"
      rx="28"
      fill="#6E00FF"
      fillOpacity="0.49"
    />
    <motion.rect
      variants={svgPartVariants}
      initial="hidden"
      animate="visible"
      x="150"
      y="150"
      width="150"
      height="150"
      rx="28"
      fill="white"
    />
    <rect
      variants={svgPartVariants}
      initial="hidden"
      animate="visible"
      x="149"
      y="450"
      width="150"
      height="150"
      rx="28"
      fill="white"
    />
    <motion.rect
      variants={svgPartVariants}
      initial="hidden"
      animate="visible"
      y="304"
      width="150"
      height="150"
      rx="28"
      fill="#9444FD"
    />
    <motion.circle
      variants={svgPartVariants}
      initial="hidden"
      animate="visible"
      cx="374"
      cy="225"
      r="75"
      fill="#FF64CB"
    />
    <motion.circle
      variants={svgPartVariants}
      initial="hidden"
      animate="visible"
      cx="224"
      cy="377"
      r="75"
      fill="#5ED1D1"
    />
  </motion.svg>
);
