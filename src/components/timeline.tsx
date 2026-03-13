import { motion } from "framer-motion";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { TIMELINE } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

export const Timeline = () => {
    return (
        <SectionWrapper idName="timeline">
            <>
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>MY JOURNEY</p>
                    <h2 className={styles.sectionHeadText}>Developer Timeline.</h2>
                </motion.div>

                <div className="mt-20 flex flex-col relative z-0">
                    <VerticalTimeline lineColor="#915EFF">
                        {TIMELINE.map((item, index) => (
                            <VerticalTimelineElement
                                key={index}
                                contentStyle={{ background: "#1d1836", color: "#fff" }}
                                contentArrowStyle={{ borderRight: "7px solid #232631" }}
                                date={item.year}
                                iconStyle={{ background: "#1d1836", border: "4px solid #915EFF" }}
                                icon={
                                    <div className="flex justify-center items-center w-full h-full rounded-full bg-[#1d1836]">
                                        <div className="w-3 h-3 rounded-full bg-[#915EFF]" />
                                    </div>
                                }
                            >
                                <div>
                                    <h3 className="text-white text-[18px] font-bold">
                                        {item.event}
                                    </h3>
                                </div>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </>
        </SectionWrapper>
    );
};
