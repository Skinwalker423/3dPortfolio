import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a web developer with 3+ years of experience in
        React, Next.js, CSS, HTML, and JavaScript. I have a
        strong understanding of the fundamentals of web
        development, and I am proficient in using a variety
        of modern web development tools and frameworks. I am
        also a highly motivated and results-oriented
        individual with a proven track record of success.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, i) => {
          return (
            <ServiceCard
              key={service.title}
              index={i}
              {...service}
            />
          );
        })}
      </div>
    </>
  );
};

export default About;
