import { motion } from "framer-motion";
import { EDUCATION } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

export const Education = () => {
    return (
        <SectionWrapper idName="education">
            <>
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>Academic Background</p>
                    <h2 className={styles.sectionHeadText}>Education.</h2>
                </motion.div>

                <div className="mt-10 flex flex-col gap-7">
                    {EDUCATION.map((edu, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn("up", "tween", index * 0.5, 0.75)}
                            className="bg-[#1d1836] p-5 sm:p-8 rounded-2xl w-full border border-white/10 transition-colors duration-300 hover:border-[#915eff]/40"
                        >
                            <h3 className="text-white text-[19px] sm:text-[24px] font-bold leading-snug">{edu.degree}</h3>
                            <p className="text-secondary text-[16px] font-semibold mt-2">
                                {edu.institution}
                            </p>
                            <p className="text-[#915eff] text-[14px] font-medium mt-1">
                                {edu.years}
                            </p>
                            {("gpa" in edu || "percentage" in edu) && (
                                <p className="text-white text-[14px] font-medium mt-2">
                                    {"gpa" in edu ? "CGPA" : "Grade"}: {typeof edu !== 'string' && 'gpa' in edu ? (edu as any).gpa : ('percentage' in edu ? (edu as any).percentage : '')}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </>
        </SectionWrapper>
    );
};
