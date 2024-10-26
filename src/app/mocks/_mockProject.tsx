import { SeeMoreProjectOne } from "@/app/sections/app-pages/project/widget/see-more/see-more-project-one";
import { Project } from "../interface";
import { SeeMoreProjectFive } from "../sections/app-pages/project/widget/see-more/see-more-project-five";
import { SeeMoreProjectFour } from "../sections/app-pages/project/widget/see-more/see-more-project-four";
import { SeeMoreProjectThree } from "../sections/app-pages/project/widget/see-more/see-more-project-three";
import { SeeMoreProjectTwo } from "../sections/app-pages/project/widget/see-more/see-more-project-two";

export const dataMockProject: Project[] = [
  {
    id: 1,
    company: "Personal Project",
    name: "My Portfolio",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quasi rerum quibusdam dolore, sit veniam! Nulla neque quis nobis error beatae optio ipsa quos dolorem quaerat, corrupti vel provident modi?",
    banner: "https://cruip-tutorials.vercel.app/sticky-scrolling/illustration-01.png",
    position: "Project Creator",
    content: <SeeMoreProjectOne />
  },
  {
    id: 2,
    company: "Hong Anh Computer",
    name: "Ops Hong Anh",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quasi rerum quibusdam dolore, sit veniam! Nulla neque quis nobis error beatae optio ipsa quos dolorem quaerat, corrupti vel provident modi?",
    banner: "https://cruip-tutorials.vercel.app/sticky-scrolling/illustration-01.png",
    position: "Frontend Developer",
    content: <SeeMoreProjectTwo />
  },
  {
    id: 3,
    company: "Libraries UI For React By Me",
    name: "Tx Design UI Libraries",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quasi rerum quibusdam dolore, sit veniam! Nulla neque quis nobis error beatae optio ipsa quos dolorem quaerat, corrupti vel provident modi?",
    banner: "https://cruip-tutorials.vercel.app/sticky-scrolling/illustration-01.png",
    position: "Project Creator",
    content: <SeeMoreProjectThree />
  },
  {
    id: 4,
    company: "Hong Anh Computer",
    name: "Hong Anh Seller Mobile App",
    descriptions:
      "Lorem ipsum dolor sit amen, consectetur advising edit. Pharsalus finials, purus vel facilities aliquant, libero erat phaedra just, at premium libero lacks a edit. Vivas Lucius felid non libero gravid, eger edit vulgate",
    banner:
      "https://ronasit.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fservices-mobile.54a25250.webp&w=1920&q=75",
    position: "Flutter Developer",
    content: <SeeMoreProjectFour />
  },
  {
    id: 5,
    company: "Freelancer Project",
    name: "SPG Manager",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quasi rerum quibusdam dolore, sit veniam! Nulla neque quis nobis error beatae optio ipsa quos dolorem quaerat, corrupti vel provident modi?",
    banner: "https://ronasit.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fservices-web.9441f830.webp&w=1920&q=75",
    position: "Frontend Developer",
    content: <SeeMoreProjectFive />
  }
];
