import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { useInView, useIsMobile } from "../utils/hooks";
import { fadeIn, textVariant } from "../utils/motion";

type TechItemProps = {
  name: string;
  icon: string;
  index: number;
};

// 3D ball, mounted only once it's near the viewport (each one is a WebGL context)
const TechBall = ({ name, icon }: TechItemProps) => {
  const [ref, inView] = useInView<HTMLDivElement>("150px");

  return (
    <div ref={ref} className="w-28 h-28" title={name}>
      {inView ? (
        <BallCanvas icon={icon} />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <img src={icon} alt={name} loading="lazy" className="w-12 h-12 object-contain opacity-60" />
        </div>
      )}
    </div>
  );
};

// Lightweight tile used on phones
const TechTile = ({ name, icon, index }: TechItemProps) => (
  <motion.div
    variants={fadeIn("up", "tween", index * 0.04, 0.4)}
    className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-tertiary/70 p-4 aspect-square"
  >
    <img src={icon} alt={name} loading="lazy" className="w-10 h-10 object-contain" />
    <span className="text-secondary text-[12px] font-medium text-center leading-tight">{name}</span>
  </motion.div>
);

// Technologies
export const Tech = () => {
  const isMobile = useIsMobile();

  return (
    <SectionWrapper idName="tech">
      <>
        <motion.div variants={textVariant()} className="mb-10 sm:mb-14">
          <p className={styles.sectionSubText}>What I work with</p>
          <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
        </motion.div>

        {isMobile ? (
          <div className="grid grid-cols-3 xs:grid-cols-4 gap-3">
            {TECHNOLOGIES.map((technology, i) => (
              <TechTile key={technology.name} index={i} {...technology} />
            ))}
          </div>
        ) : (
          <div className="flex flex-row flex-wrap justify-center gap-10">
            {TECHNOLOGIES.map((technology, i) => (
              <TechBall key={technology.name} index={i} {...technology} />
            ))}
          </div>
        )}
      </>
    </SectionWrapper>
  );
};
