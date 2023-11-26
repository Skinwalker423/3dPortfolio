import { motion } from "framer-motion";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion";

const TestimonialCard = ({
  name,
  testimonial,
  designation,
  company,
  image,
  index,
}) => {
  return (
    <motion.div
      variants={fadeIn("left", "spring", index * 0.5, 0.75)}
      className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
    >
      <p className='text-[48px] text-white font-black'>
        &#8220;
      </p>
      <div className='mt-1'>
        <p
          className={
            "text-slate-400 tracking-wider text-lg"
          }
        >
          {testimonial}
        </p>
        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='text-white font-medium text-md'>
              <span className='blue-text-gradient'>@</span>{" "}
              {name}
            </p>
            <p className='mt-1 text-secondary text-xs'>
              {designation} of {company}
            </p>
          </div>
          <img
            src={image}
            alt={`feedback by ${name}`}
            className='w-10 h-10 rounded-full object-cover'
          />
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
