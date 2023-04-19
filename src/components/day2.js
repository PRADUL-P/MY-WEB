import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { Sday } from "../database/datas";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ day2 }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={day2.date}
       iconStyle={{ background: day2.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <h1  className='w-[60%] h-[60%] object-contain '> {day2.activity_points} </h1>
          {/* <img
            src={day2.icon}
            alt={day2.company_name}
            className='w-[60%] h-[60%] object-contain'
          /> */}
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{day2.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {day2.activity_points}
        </p>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {day2.fee}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {day2.points.map((point, index) => (
          <li
            key={`day2-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
         education
        </p>
        {/* <h2 className={`${styles.sectionHeadText} text-center`}>
         events
        </h2> */}
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {Sday.map((day2, index) => (
            <ExperienceCard
              key={`day2-${index}`}
              day2={day2}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
