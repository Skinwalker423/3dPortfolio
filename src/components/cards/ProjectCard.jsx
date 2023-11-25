import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { Tilt } from "react-tilt";
import { github } from "../../assets";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  index,
  link = "/",
}) => {
  console.log("index", index);
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-contain'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover '>
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center'
            >
              <img
                src={github}
                alt={"github logo"}
                className='h-1/2 w-1/2 object-contain'
              />
            </a>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
