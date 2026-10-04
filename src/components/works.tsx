import { motion } from "framer-motion";

import { github, preview } from "../assets";
import { PROJECTS } from "../constants";
import { SmoothTilt } from "./ui/smooth-tilt";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";

type ProjectCardProps = (typeof PROJECTS)[number] & {
  index: number;
};

// Only show a link button when there is a real URL
const hasLink = (url?: string) => Boolean(url && url !== "#");

// Project Card
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_site_link,
}: ProjectCardProps) => (
  <motion.div variants={fadeIn("up", "tween", index * 0.5, 0.75)} className="h-full">
    <SmoothTilt className="group h-full flex flex-col bg-tertiary p-5 rounded-2xl border border-white/5 transition-[border-color,box-shadow] duration-300 hover:border-[#915eff]/40 hover:shadow-[0_20px_60px_-20px_rgba(145,94,255,0.45)]">
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl">
        {/* Work image */}
        <img
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 flex justify-end gap-2 m-3">
          {/* Live Site */}
          {hasLink(live_site_link) && (
            <a
              href={live_site_link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${name} live site`}
              title="Live Site"
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center transition-transform hover:scale-110"
            >
              <img src={preview} alt="" className="w-2/3 h-2/3 object-contain" />
            </a>
          )}

          {/* Github */}
          {hasLink(source_code_link) && (
            <a
              href={source_code_link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${name} source code`}
              title="Github"
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center transition-transform hover:scale-110"
            >
              <img src={github} alt="" className="w-1/2 h-1/2 object-contain" />
            </a>
          )}
        </div>
      </div>

      {/* Work Info */}
      <div className="mt-5 flex-1">
        <h3 className="text-white font-bold text-[20px] sm:text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px] leading-relaxed">{description}</p>
      </div>

      {/* Work Tag */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, tagIdx) => (
          <p key={`Tag-${tagIdx}`} className={cn(tag.color, "text-[14px]")}>
            #{tag.name}
          </p>
        ))}
      </div>
    </SmoothTilt>
  </motion.div>
);

// Works
export const Works = () => {
  return (
    <SectionWrapper idName="projects">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>Engineering Systems & Projects.</h2>
        </motion.div>

        {/* About */}
        <div className="w-full flex">
          <motion.p
            variants={fadeIn(undefined, undefined, 0.1, 1)}
            className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[26px] sm:leading-[30px]"
          >
            The following systems showcase my expertise in AI models, data engineering, and backend architectures.
            Each project demonstrates my ability to design scalable software, process complex datasets, and deliver
            intelligent technical solutions ready for real-world deployment.
          </motion.p>
        </div>

        {/* Project Card */}
        <div className="mt-12 sm:mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={`project-${i}`} index={i} {...project} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
