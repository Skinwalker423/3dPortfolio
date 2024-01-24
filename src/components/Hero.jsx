import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas, StarsCanvas } from "./canvas";
import { slideIn } from "../utils/motion";

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto mt-20'>
      <StarsCanvas />
      <div
        className={`${styles.paddingX}  absolute inset-0 top-[150px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#f5af19]' />
          <div className='w-1 sm:h-80 h-40 orange-gradient' />
        </div>
        <div>
          <h1
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, I'm{" "}
            <span className='orange-text-gradient'>
              Art
            </span>{" "}
          </h1>
          <p className='max-w-lg'>
            I bring creative digital visions to life by
            developing user interfaces, 3d visuals, and web
            applications
          </p>
        </div>
      </div>
      {/* <ComputersCanvas /> */}
      <motion.div
        className='h-full px-8 rounded-2xl'
        variants={slideIn("right", "tween", 0.2, 1)}
      >
        <EarthCanvas />
      </motion.div>

      <div className='absolute xl:bottom-52 xs:bottom-32 bottom-10 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              className='w-3 h-3 rounded-full bg-secondary mb-1'
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
