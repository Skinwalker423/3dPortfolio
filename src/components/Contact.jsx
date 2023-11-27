import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {}
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        variants={slideIn("left", "tween", 0.2, 1)}
      >
        <p className={styles.sectionSubText}>
          Get in Touch
        </p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          className='mt-12 flex flex-col gap-8'
          onSubmit={handleSubmit}
        >
          <label htmlFor='name' className='flex flex-col'>
            <span className='text-white'>Name</span>
            <input
              type='text'
              name='name'
              id='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label htmlFor='email' className='flex flex-col'>
            <span className='text-white'>Email</span>
            <input
              type='text'
              name='email'
              id='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label
            htmlFor='message'
            className='flex flex-col'
          >
            <span className='text-white'>Message</span>
            <textarea
              rows={"7"}
              name='message'
              id='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Description'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-black-200'
            type='submit'
          >
            {loading ? "Sending" : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] bg-black-100 p-8 rounded-2xl'
        variants={slideIn("right", "tween", 0.2, 1)}
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
