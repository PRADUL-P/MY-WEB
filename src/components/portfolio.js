import { useState } from "react";
import { motion } from "framer-motion";
import {Tilt} from "react-tilt";
import civilenggImage from "../assets/Web.png";
import webdesignImage from "../assets/stm.png";
import allImage from "../assets/projects/WebDC.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-scroll";
const Portfolio = () => {
  const [activeBtn, setActiveBtn] = useState("all");
  
  const projects = [
    { id: 1, title: "Project 1", category: "civilengg",imgSrc: civilenggImage,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat faucibus quam vitae congue. Pellentesque auctor, massa sit amet scelerisque mattis, nunc dui porta nulla, in tincidunt metus urna vel risus.",
      hostedPage:"https://pradul-p.github.io/",},
    { id: 2, title: "Project 2", category: "webdesign",imgSrc: civilenggImage,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat faucibus quam vitae congue. Pellentesque auctor, massa sit amet scelerisque mattis, nunc dui porta nulla, in tincidunt metus urna vel risus.",
        hostedPage:"/projectInfo",},
    { id: 3, title: "Project 3", category: "civilengg",imgSrc: civilenggImage,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat faucibus quam vitae congue. Pellentesque auctor, massa sit amet scelerisque mattis, nunc dui porta nulla, in tincidunt metus urna vel risus.",
      },
    { id: 4, title: "Project 4", category: "webdesign",imgSrc: allImage,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat faucibus quam vitae congue. Pellentesque auctor, massa sit amet scelerisque mattis, nunc dui porta nulla, in tincidunt metus urna vel risus.",
      },
    { id: 5, title: "Project 5", category: "civilengg" ,imgSrc: civilenggImage,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat faucibus quam vitae congue. Pellentesque auctor, massa sit amet scelerisque mattis, nunc dui porta nulla, in tincidunt metus urna vel risus.",
     },
    { id: 6, title: "Project 6", category: "webdesign" ,imgSrc: allImage,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat faucibus quam vitae congue. Pellentesque auctor, massa sit amet scelerisque mattis, nunc dui porta nulla, in tincidunt metus urna vel risus.",
     },
    { id: 7, title: "Project 7", category: "all" ,imgSrc: allImage,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat faucibus quam vitae congue. Pellentesque auctor, massa sit amet scelerisque mattis, nunc dui porta nulla, in tincidunt metus urna vel risus.",
     },
    { id: 8, title: "Project 8", category: "all",imgSrc: civilenggImage,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat faucibus quam vitae congue. Pellentesque auctor, massa sit amet scelerisque mattis, nunc dui porta nulla, in tincidunt metus urna vel risus.",
      },
    { id: 9, title: "Project 9", category: "all" ,imgSrc: civilenggImage,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat faucibus quam vitae congue. Pellentesque auctor, massa sit amet scelerisque mattis, nunc dui porta nulla, in tincidunt metus urna vel risus.",
     },
  ];

  const handleBtnClick = (category) => {
    setActiveBtn(category);
  };

  const filteredProjects = activeBtn === "all" ? projects : projects.filter(project => project.category === activeBtn);

  return (
    <div className="container mx-auto py-12" id="projects">
      <div className="flex justify-center mb-6">
        <button
          className={`mx-2 py-2 px-4 rounded-lg text-white font-medium focus:outline-none transition-colors duration-200 ${
            activeBtn === "all" ? "bg-blue-600" : "bg-gray-400 hover:bg-blue-600"
          }`}
          onClick={() => handleBtnClick("all")}
        >
          All
        </button>
        <button
          className={`mx-2 py-2 px-4 rounded-lg text-white font-medium focus:outline-none transition-colors duration-200 ${
            activeBtn === "civilengg" ? "bg-blue-600" : "bg-gray-400 hover:bg-blue-600"
          }`}
          onClick={() => handleBtnClick("civilengg")}
        >
          Civil Engineering
        </button>
        <button
          className={`mx-2 py-2 px-4 rounded-lg text-white font-medium focus:outline-none transition-colors duration-200 ${
            activeBtn === "webdesign" ? "bg-blue-600" : "bg-gray-400 hover:bg-blue-600"
          }`}
          onClick={() => handleBtnClick("webdesign")}
        >
          Web Design
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {filteredProjects.map((project) => (
    <motion.div
      key={project.id}
      className="relative rounded-lg overflow-hidden shadow-lg bg-tertiary"
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.95 }}
    >
      <Tilt className="tilt" options={{ max: 25 }}>
        <img
          className="w-full h-48 object-cover rounded-lg"
          src={project.imgSrc}
          alt={project.title}
        />
       <a
  href={project.hostedPage}
  target="_blank"
  rel="noopener noreferrer"
  className="absolute top-3 right-3 m-2 p-2 rounded-full text-gray-700  text-sm font-medium hover:bg-slate-800-800 transition-colors duration-300"
>
  <Link to={project.hostedPage}>
  <FontAwesomeIcon icon={faArrowUpRightFromSquare} beatFade />
    </Link>
</a>
      </Tilt>
      <Tilt className="tilt" options={{ max: 25 }}>
        <div className="p-4 transition-transform duration-500 ease-in-out transform hover:scale-95">
          <motion.h2
            className="font-bold text-lg mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          >
            {project.title}
          </motion.h2>
          <motion.p
            className="text-gray-700 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          >
            {project.description} <button className="text-blue-500 hover:text-blue-700 transition-colors duration-300 focus:outline-none">More</button>
          </motion.p>
        </div>
      </Tilt>
    </motion.div>
  ))}
</div>
    </div>
  );
};

export default Portfolio;
