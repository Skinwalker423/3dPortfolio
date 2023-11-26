import { motion } from "framer-motion";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion";

const TestimonialCard = ({ testimonial }) => {
  return <motion.div>{testimonial.name}</motion.div>;
};

export default TestimonialCard;
