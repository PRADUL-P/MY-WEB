import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import Image from '../assets/web1.png';
import { fadeIn } from '../variants';

const HeroPage = () => {
  return (
    <div
    id="home"
    className="h-screen flex flex-col items-center justify-center bg-cover bg-center"
    style={{
      backgroundImage: "url('https://example.com/path/to/your/image.jpg')",
    }}
  >
         <div className="flex items-center gap-y-8 lg:flex-row lg:items-center">
            <div className="flex-1 font-secondary lg:text-center items-center mt-12">
              <motion.h1
                variants={fadeIn('down', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className="text-[55px] leading-[0.8] lg:text-[110px] m-5 font-nme uppercase"
              >
                pradul p
              </motion.h1>
              <motion.div
                variants={fadeIn('up', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
              >
                <span className="text-white mr-4 m-5">i am a </span>
                <TypeAnimation
                  sequence={["civil engineer", 2000, "web developer", 2000]}
                  speed={50}
                  className="text-accent font-Nabla"
                  wrapper="span"
                  repeat={Infinity}
                />
              </motion.div>
              <motion.div
                variants={fadeIn('up', 0.7)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className="flex max-w-max gap-x-6 items-center m-5 mb-12 mx-auto  text-center"
              >
                <a
                  href={require('../resume.pdf')}
                  className="text-gradient btn-link lg:item-center text-center uppercase"
                  onClick={(e) => {
                    e.preventDefault();
                    const link = document.createElement('a');
                    link.download = 'pradul_cv.pdf';
                    link.href = e.target.href;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  download cv
                </a>
                <a href="#contact" className="text-gradient btn-link">
                  contact
                </a>
              </motion.div>
              <motion.div
                variants={fadeIn('left', 0.5)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className="flex max-w-max gap-x-6 items-center m-5 mb-12 mx-auto  text-center"
              >
                <a
                  href="https://github.com/PRADUL-P"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/pradul/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/pradul_prashandan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
    
  );
};

export default HeroPage;
