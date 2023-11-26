import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { testimonials } from "../constants";

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        {testimonials.map((testimonial, index) => {
          return (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Feedbacks;
