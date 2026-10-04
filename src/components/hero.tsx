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
    <section className="relative w-full min-h-[100svh] mx-auto flex flex-col justify-center items-center overflow-hidden">
      <div
        className={cn(
          styles.paddingX,
          "max-w-7xl mx-auto flex flex-col items-center justify-center gap-4 sm:gap-5 text-center z-10 -mt-10 sm:-mt-20",
        )}
      >
        {/* Title Indicator */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-20 h-10 violet-gradient" />
        </div>

        {/* About Me Text */}
        <div>
          <h1 className={cn(styles.heroHeadText, "text-white flex flex-col xl:flex-row items-center justify-center gap-1 xl:gap-4")}>
            <span className="whitespace-nowrap">Hi, I'm</span>
            <span className="relative flex min-w-0 max-w-full justify-center xl:justify-start overflow-hidden">
              {/* Invisible sizer: all titles stacked in one grid cell, so the slot fits the widest */}
              <span className="grid opacity-0 pointer-events-none" aria-hidden>
                {titles.map((title) => (
                  <span key={title} className="col-start-1 row-start-1 whitespace-nowrap">
                    {title}
                  </span>
                ))}
              </span>
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute left-0 top-0 w-full font-bold text-white whitespace-nowrap text-center xl:text-left"
                  initial={{ opacity: 0, y: "-100%" }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
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
          <p className={cn(styles.heroSubText, "mt-4 text-white-100 max-w-3xl mx-auto")}>
            AI & Data Systems Engineer building intelligent architectures, scalable web apps, and machine learning models.
          </p>
        </div>
      </div>

      {/* Animated Shader Background */}
      <div className="absolute inset-0 z-0 flex justify-center items-center overflow-hidden mix-blend-screen">
        <AnimatedShaderBackground />
      </div>

      {/* Scroll cue: a quiet chevron that gently breathes */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 p-3 text-white/40 hover:text-white/80 transition-colors duration-300"
      >
        <motion.svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ y: [0, 4, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </a>

      {/* Fade to bottom */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-primary to-transparent z-10 pointer-events-none" />

    </section>
  );
};
