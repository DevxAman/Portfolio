import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import { AnimatedShaderBackground } from "./animated-shader-background";
import { styles } from "../styles";
import { cn } from "../utils/lib";

// Hero
export const Hero = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      "Amandeep Singh",
      "an AI Engineer",
      "a Data Scientist",
      "an ML Engineer",
      "a DRDO Ex-Intern",
      "a Problem Solver",
      "a Developer",
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="relative w-full h-screen mx-auto flex flex-col justify-center items-center">
      <div
        className={cn(
          styles.paddingX,
          "max-w-7xl mx-auto flex flex-col items-center justify-center gap-5 text-center z-10 -mt-20",
        )}
      >
        {/* Title Indicator */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-20 h-10 violet-gradient" />
        </div>

        {/* About Me Text */}
        <div>
          <h1 className={cn(styles.heroHeadText, "text-white flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4")}>
            <span>Hi, I'm</span>
            <span className="relative flex justify-center sm:justify-start overflow-hidden">
              <span className="opacity-0 pointer-events-none">Amandeep Singh</span>
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute left-0 top-0 font-bold text-white whitespace-nowrap w-full text-center sm:text-left"
                  initial={{ opacity: 0, y: "-100%" }}
                  transition={{ type: "spring", stiffness: 50 }}
                  animate={
                    titleNumber === index
                      ? { y: 0, opacity: 1 }
                      : { y: titleNumber > index ? "-100%" : "100%", opacity: 0 }
                  }
                >
                  {title}
                </motion.span>
              ))}
            </span>
          </h1>
          <p className={cn(styles.heroSubText, "mt-4 text-white-100 max-w-3xl mx-auto leading-relaxed")}>
            AI & Data Systems Engineer building intelligent architectures, scalable web apps, and machine learning models.
          </p>
        </div>
      </div>

      {/* Animated Shader Background */}
      <div className="absolute inset-0 z-0 flex justify-center items-center overflow-hidden mix-blend-screen">
        <AnimatedShaderBackground />
      </div>

      {/* Fade to bottom */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-primary to-transparent z-10 pointer-events-none" />

    </section>
  );
};
