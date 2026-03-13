import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import CpuArchitecture from "./ui/cpu-architecture";

import { SERVICES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

// Service Card
const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// About
export const About = () => {
  return (
    <SectionWrapper idName="about">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            {/* Body */}
            <motion.p
              variants={fadeIn(undefined, undefined, 0.1, 1)}
              className="mt-4 text-secondary text-[17px] leading-[30px]"
            >
              I am an AI and Data Systems Engineer specializing in machine learning research, data engineering,
              and robust analytical infrastructure. With foundational experience analyzing multidimensional
              defence datasets during my tenure with the DRDO, I build and deploy intelligent software,
              data pipeline architectures, and intelligent backend operations. My technical work resides
              at the intersection between backend distributed systems and deep computational models, transforming
              high-density unstructured information into structured, scalable technological operations.
            </motion.p>
          </div>
          <div className="w-full md:w-1/2 min-h-[300px] flex items-center justify-center rounded-2xl border border-white/10 bg-black-200/50 p-4">
            <CpuArchitecture />
          </div>
        </div>

        {/* Service Card */}
        <div className="mt-20 flex flex-wrap gap-10">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} index={i} {...service} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
