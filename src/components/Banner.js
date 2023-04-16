import { motion } from "framer-motion";
import React from "react";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Image from "../assets/web1.png";
import { fadeIn } from "../variants";
const Banner = () => {
 
  return (
    <section className="min-h-[46vh] lg:min-h-[78vh]" id='home'>
  <div className="container mx-auto flex justify-center items-center text-center">
    <div className="flex items-center gap-y-8 lg:flex-row lg:items-center">
      <div className="flex-1 font-secondary lg:text-center items-center mt-12">
        <motion.h1
          variants={fadeIn('down', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7}}
          className="text-[55px] leading-[0.8] lg:text-[110px] m-5 font-monton uppercase"
        >
          pradul p
        </motion.h1>
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7}}
          className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
        >
          <span className="text-white mr-4 m-5">i am a </span>
          <TypeAnimation
            sequence={["civil engineer", 2000, "web developer", 2000]}
            speed={50}
            className="text-accent"
            wrapper="span"
            repeat={Infinity}
          />
        </motion.div>
        {/* <motion.p
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7}}
          className="mb-8 max-w-max mx-auto lg:mx-0 lg:text-center"
        >
          @ St. Thomas College of Engineering and Technology Mattannur, Kannur
        </motion.p> */}
        <motion.div
          variants={fadeIn('up', 0.7)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7}}
          className="flex max-w-max gap-x-6 items-center m-5 mb-12 mx-auto  text-center"
        >
           <button  
        className='btn btn-sm'
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href='http://google.com';
          }}
          > REGISTER</button>
<a
 href={require("../AAKRITI.pdf")}
  className="text-gradient btn-link lg:item-center text-center uppercase"
  onClick={(e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.download = "AAKRITI BROCHURE.pdf";
    link.href = e.target.href;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  brochure
</a>

        </motion.div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Banner;
