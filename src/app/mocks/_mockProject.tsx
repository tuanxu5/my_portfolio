import { ImageDesign } from "../components/shared/banner/image-design";
import { ImageMobile } from "../components/shared/banner/image-mobile";
import { ImageWeb } from "../components/shared/banner/image-web";
import { Project } from "../interface";

export const mockDataProject: Project[] = [
  {
    id: "web",
    type: "Development",
    name: "Web Development",
    banner: <ImageWeb />,
    descriptions:
      "We can create a UI/UX design for your startup’s digital product that is visually appealing,user-friendly, and aligns with your brand identity.",
    children: [
      {
        id: 1,
        title: "Custom web app development",
        descriptions:
          "Hamperapp is a service from Florida that provides laundry and dry cleaning services to ordinary consumers as well as hotels, restaurants, and other large enterprises online. The Hamperapp team has decided to develop an application to enlarge their client base Need a helping hand to create an app? We’re always ready to help your business grow with our design and development services. Fill in the form to discuss the idea",
        company: "Hong Anh Computer",
        position: "Frontend Developer",
        techStack: ["Reactjs"],
        teamSize: "Team size: 15 personal (2️ frontend, 6 backend, 2️ tester, 3️ BA, 1️ PO, 1️ leader)"
      }
    ]
  },
  {
    id: "mobile",
    type: "Development",
    name: "Mobile App Development",
    banner: <ImageMobile />,
    descriptions:
      "We can create a UI/UX design for your startup’s digital product that is visually appealing,\nuser-friendly, and aligns with your brand identity.",
    children: [
      {
        id: 1,
        title: "HongAnh Seller App Mobile",
        descriptions:
          "A web app is a piece of software. Unlike a website, it encourages the user to manipulate the data presented in the web app. Its content is dynamic and interactive. If you need urgent web app development follow the link to learn more.",
        company: "Hong Anh Computer",
        position: "Flutter Developer",
        techStack: ["Flutter", "Rxdart", "Cubit", "BLoC", "Fvm", "Getx", "GraphQL"],
        teamSize: "Team size: 15 personal (2 mobile, 6 backend, 2️ tester, 3️ BA, 1️ PO, 1️ leader)"
      }
    ]
  },
  {
    id: "other",
    type: "Other",
    name: "Design, Tools, ...",
    banner: <ImageDesign />,
    descriptions:
      "We can create a UI/UX design for your startup’s digital product that is visually appealing,user-friendly, and aligns with your brand identity.",
    children: []
  }
];
