import { motion } from "framer-motion";
import { SmoothTilt } from "./ui/smooth-tilt";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { RESEARCH } from "../constants";

export const Research = () => {
    return (
        <SectionWrapper idName="research">
            <>
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>PEER-REVIEWED WORK</p>
                    <h2 className={styles.sectionHeadText}>Research & Publications.</h2>
                </motion.div>

                <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7">
                    {RESEARCH.map((pub, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn("up", "tween", index * 0.5, 0.75)}
                            className="w-full flex"
                        >
                            <SmoothTilt
                                max={8}
                                className="w-full border border-[#915eff]/60 hover:border-[#915eff] transition-colors duration-300 bg-[#1d1836] rounded-2xl p-5 sm:p-6 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                                        <div
                                            className={`px-3 py-1 rounded-full text-xs font-bold w-max flex items-center gap-2 ${(pub as any).visual === "gold"
                                                ? "bg-[#F59E0B] text-black"
                                                : (pub as any).visual === "green"
                                                    ? "bg-green-600/20 text-green-400 border border-green-500"
                                                    : "bg-white/10 text-white"
                                                }`}
                                        >
                                            {(pub as any).visual === "green" && (
                                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse block" />
                                            )}
                                            {pub.badge}
                                        </div>
                                        <span className="text-secondary text-[14px]">
                                            {pub.venue}
                                        </span>
                                    </div>
                                    <h3 className="text-white font-bold text-[20px] mb-3">
                                        {pub.title}
                                    </h3>
                                    <p className="text-secondary text-[14px] leading-relaxed">
                                        {pub.description}
                                    </p>
                                </div>

                                <div className="mt-6 flex flex-col items-start w-full">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {pub.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="text-[#915eff] bg-[#915eff]/10 px-2 py-1 rounded-md text-[12px] font-medium tracking-wide"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    {(pub as any).link && (
                                        <a
                                            href={(pub as any).link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white font-medium hover:text-[#915eff] transition-colors mt-auto text-[14px] flex items-center gap-1"
                                        >
                                            {(pub as any).link_label}
                                        </a>
                                    )}
                                </div>
                            </SmoothTilt>
                        </motion.div>
                    ))}
                </div>
            </>
        </SectionWrapper>
    );
};
