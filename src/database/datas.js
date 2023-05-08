
import web from "../assets/Web.png";
// import sattva from "../assets/stm.png";
// import iedc from "../assets/iedc.png";
import civilenggImage from "../assets/Web.png";
import webdesignImage from "../assets/stm.png";
import allImage from "../assets/projects/vblaze.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight ,faGlobe,faImage,faDesktop,faCode,faDraftingCompass,faCube,faMobileAlt} from '@fortawesome/free-solid-svg-icons';
import  H11  from "../assets/projects/h1.1.png";
import  H12  from "../assets/projects/h1.2.png";
import H21  from "../assets/projects/h2.1.png";
import  H22  from "../assets/projects/h2.2.png";
import  H31  from "../assets/projects/h3.1.png";
import  H32  from "../assets/projects/h3.2.png";

import  Ignite  from "../assets/projects/ignite.png";
import  Ignite2  from "../assets/projects/ignite2.png";
import  IEDC  from "../assets/projects/IEDC.png";
import  IEDC2  from "../assets/projects/IEDC2.png";
import  VBLAZE  from "../assets/projects/vblaze.png";
import  VBLAZE2  from "../assets/projects/vblaze2.png";

const Fday = [
  {
    title: "VBLAZE",
    position: "project head",
    icon:civilenggImage,
    //  fee: "fui",
    iconBg: "#383E56",
    years: "JUN 2022 TO PRESENT",
    
   
    points: [
      {
        header: "Project Head",
        paragraph: "",
        date: "january 2023 - Present",
      },
      {
        header: "Frontend Developer",
        paragraph: "",
        date: "June 2022 - Present",
       },
      

    ],
  },
  {
    title: "Traffic survey",
    position: "KSCSTE-NATPAC internship",
    icon:civilenggImage,
    //  fee: "fui",
    iconBg: "#383E56",
    years: "SEPT 2022 - 5 DAYS",
    
   
    points: [
      // {
      //   header: "",
      //   paragraph: "",
      //   date: "",
      // },
      {
        header: "",
        paragraph: "I have recently completed a five-day internship from 4 September 2022 to 8 September 2022, where I had the opportunity to undertake a task related to traffic data collection. The task was part of the Development Plan for the selected roads leading to Muzhappilangad Beach In Kannur district carrying out Traffic Surveys and Data Compilation.I was responsible for collecting traffic data by conducting surveys on the selected roads.The report included crucial information such as traffic volume, vehicle types, peak hours, and other relevant data that would aid in the development plan.Overall, the internship was an excellent learning experience that allowed me to gain valuable skills and knowledge in traffic data collection and analysis. I look forward to utilizing this experience in my future endeavors",
        date: "",
       },
      

    ],
  },
  // {
  //   title: "NAME",
  //   position: ".....",
  //    fee: "YEAR",
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   ],
  // },{
  //   title: "NAME",
  //   position: ".....",
  //    fee: "YEAR",
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  //     // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     // "Implementing responsive design and ensuring cross-browser compatibility.",
      
  //   ],
  // },
 
];
const Sday = [
  {
    title: "BTECH in Civil Engineering",
    college: "St Thomas Engineering College, Sivapuram, Mattannur",
    //  fee: "YEAR",
    iconBg: "#383E56",
    icon:civilenggImage,
    date: "2020 - present",
    points: ["Currently pursuing a Bachelor of Technology degree in Civil Engineering from STM"
     ],
  },
  {
    title: "Plus Two",
    college: "anjarakandy higher secondary school",
    //  fee: "",
    iconBg: "#383E56",
    icon:civilenggImage,
    date: "2018-2020",
    points: [
      "Completed high secondary education with a focus on science and mathematics."
          ],
  },
  // {
  //   title: "NAME",
  //   position: ".....",
  //    fee: "YEAR",
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   ],
  // },{
  //   title: "NAME",
  //   position: ".....",
  //    fee: "YEAR",
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      
  //   ],
  // },
 
];

// const projects = [
//   {
//     name: "web",
//     image: web,
//     source_code_link: "#",
//   },
//   {
//     name: "web2",
//     image: web,
//     source_code_link: "#",
//   }, {
//     name: "web4",
//     image: web,
//     source_code_link: "#",
//   }, {
//     name: "web3",
//     image: web,
//     source_code_link: "#",
//   }, {
//     name: "web3",
//     image: web,
//     source_code_link: "#",
//   },
// ];

const contact = [
  {
    title: "name",
    role:"coodinator",
    contact:"8078376902",
    whatsapp:"8078376902",
  },
  // {
  //   title: "name",
  //   role:"coodinator",
  //   contact:"8078376902",
  //   whatsapp:"8078376902",
  // },{
  //   title: "name",
  //   role:"coodinator",
  //   contact:"8078376902",
  //   whatsapp:"8078376902",
  // },{
  //   title: "name",
  //   role:"coodinator",
  //   contact:"8078376902",
  //   whatsapp:"8078376902",
  // },
];

const services = [
  {
      id: 1,
      title: 'Web Design',
      description: 'We design beautiful and responsive websites tailored to your business needs.',
      amount: '₹8000',
      projects: '6+',
      icon: faDesktop
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'We develop and maintain robust web applications using cutting-edge technologies.',
      amount: '₹15000',
      projects: '10+',
      icon: faGlobe
    },
    {
      id: 3,
      title: '2D Drafting',
      description: 'We create accurate 2D drawings and blueprints for engineering and construction projects.',
      amount: '₹5000',
      projects: '3+',
      icon: faDraftingCompass
    },
    {
      id: 4,
      title: '3D Modeling',
      description: 'We produce high-quality 3D models and animations for architecture, product design, and more.',
      amount: '₹10000',
      projects: '7+',
      icon: faCube
    },
    {
      id: 5,
      title: 'UI/UX Design',
      description: 'We design intuitive and engaging user interfaces for web and mobile applications.',
      amount: '₹2500',
      projects: '4+',
      icon: faMobileAlt
    },
    {
      id: 6,
      title: 'Video/Photo Editing',
      description: 'We edit and enhance videos and photos to create stunning visual content for your business.',
      amount: '₹1500',
      projects: '2+',
      icon: faImage
    }
];

const projects = [
  { id: 1, title: "HOME1",link: 'https://youtu.be/jggHA0tyi4I',  category: "civilengg",image: H11,
    description:
      "A Revit 3D house design project would involve using Autodesk Revit software to create a detailed, accurate, and interactive 3D model of a house. The project would begin with creating a conceptual design and developing the model using Revit's parametric tools, which allow for easy modification and updating of the design. The 3D model would be used to create detailed drawings, plans, elevations, and sections, as well as schedules and quantities, which can be used for construction documentation and cost estimates.This would also use Revit's built-in visualization and rendering tools,and enscape plugin to create realistic images and animations of the design, which would be useful for presentations and visualizing the design in context.",
      images: [
        H12,
       
      ],
    },
  { id: 2, title: "ignite2k22",link: 'https://www.stthomaskannur.ac.in/ignite2022/',  category: "webdesign",image: Ignite,
    description:
      "An Ignite website for college sports events, designed in association with the V Blaze team, would be a platform created to promote and highlight upcoming sports events at the college. The website would be a collaborative effort between the college's athletic department and the V Blaze team, with the goal of providing a comprehensive and engaging resource for students of the college's sports teams to stay informed and up-to-date on upcoming events.The V Blaze team, with their expertise in website design and development, would work closely with the college's athletic department to create a visually appealing, user-friendly, and functional website that promotes the college's sports events. The website would feature information about the upcoming events, such as game schedules, team information, and location of the event.",
      hostedPage:"https://www.stthomaskannur.ac.in/ignite2022/",images: [
        Ignite2,
       
      ],},
  { id: 3, title: "HOME 2",link: 'https://youtu.be/jggHA0tyi4I',  category: "civilengg",image: H21,
    description:
      "A Revit 3D house design project would involve using Autodesk Revit software to create a detailed, accurate, and interactive 3D model of a house. The project would begin with creating a conceptual design and developing the model using Revit's parametric tools, which allow for easy modification and updating of the design. The 3D model would be used to create detailed drawings, plans, elevations, and sections, as well as schedules and quantities, which can be used for construction documentation and cost estimates.This would also use Revit's built-in visualization and rendering tools,and enscape plugin to create realistic images and animations of the design, which would be useful for presentations and visualizing the design in context.",
      images: [
       H22
      ], },
  { id: 4, title: "IEDC",link: 'https://www.stthomaskannur.ac.in/stm2/IEDC/',  category: "webdesign",image: IEDC,
    description:
      "An IEDC website for a college, designed in association with the V Blaze team, would be a platform created to promote economic development opportunities for students and alumni of the college. The website would be a collaborative effort between the college's IEDC and the V Blaze team, with the goal of providing a comprehensive and easy-to-use resource for students and alumni looking for internships, job opportunities, and other resources to help them start or grow their careers.The V Blaze team, with their expertise in website design and development, would work closely with the college's IEDC to create a visually appealing, user-friendly, and functional website that meets the needs of the college's students.",
      hostedPage:"https://www.stthomaskannur.ac.in/stm2/IEDC/",images: [
       IEDC2
      ],},
  { id: 5, title: "HOME 3",link: 'https://youtu.be/jggHA0tyi4I',  category: "civilengg" ,image: H31,
    description:
    "A Revit 3D house design project would involve using Autodesk Revit software to create a detailed, accurate, and interactive 3D model of a house. The project would begin with creating a conceptual design and developing the model using Revit's parametric tools, which allow for easy modification and updating of the design. The 3D model would be used to create detailed drawings, plans, elevations, and sections, as well as schedules and quantities, which can be used for construction documentation and cost estimates.This would also use Revit's built-in visualization and rendering tools,and enscape plugin to create realistic images and animations of the design, which would be useful for presentations and visualizing the design in context.",
    images: [
      H32
    ], },
  { id: 6, title: "VBLAZE",link: 'https://vblaze.tech/',  category: "webdesign" ,image: VBLAZE,
    description:
      "The V Blaze website, designed and developed entirely using React JS, serves as a platform to showcase the design club's portfolio and provide students of St. Thomas College of Engineering and Technology, Kannur with an opportunity to learn more about the design industry. The website has been created in collaboration with the college's design club and aims to promote economic development opportunities for students .The V Blaze team, with their expertise in website design and development, has ensured that the website is visually appealing, user-friendly, and functional. The website provides a comprehensive and easy-to-use resource for students",
      images: [
        VBLAZE2
      ],},
  // { id: 7, title: "Project 7",link: 'https://project2.com',  category: "all" ,image: allImage,
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat faucibus quam vitae congue. Pellentesque auctor, massa sit amet scelerisque mattis, nunc dui porta nulla, in tincidunt metus urna vel risus.",
  //  },
  // { id: 8, title: "Project 8",link: 'https://project2.com',  category: "all",image: civilenggImage,
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat faucibus quam vitae congue. Pellentesque auctor, massa sit amet scelerisque mattis, nunc dui porta nulla, in tincidunt metus urna vel risus.",
  //   },
  // { id: 9, title: "Project 9",link: 'https://project2.com',  category: "all" ,image: civilenggImage,
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat faucibus quam vitae congue. Pellentesque auctor, massa sit amet scelerisque mattis, nunc dui porta nulla, in tincidunt metus urna vel risus.",
  //  },
];

export { Fday,Sday, projects,contact,services };
