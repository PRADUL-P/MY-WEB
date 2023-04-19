import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { Fday } from "../database/datas";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ day1 }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={day1.date}
       iconStyle={{ background: day1.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <h1  className='w-[60%] h-[60%] object-contain '> {day1.activity_points} </h1>
          {/* <img
            src={day1.icon}
            alt={day1.company_name}
            className='w-[60%] h-[60%] object-contain'
          /> */}
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{day1.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {day1.activity_points}
        </p>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {day1.fee}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {day1.points.map((point, index) => (
          <li
            key={`day1-point-${index}`}
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
    <h1 className="text-2xl font-bold mb-4 text-center">Experience</h1>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>
          
        </p>
        {/* <h2 className={`${styles.sectionHeadText} text-center`}>
        
        </h2> */}
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {Fday.map((day1, index) => (
            <ExperienceCard
              key={`day1-${index}`}
              day1={day1}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
