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
        title: "My Portfolio",
        descriptions:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quam molestiae similique ex inventore iusto autem voluptatem ullam dolorem repellendus a architecto soluta, atque deleniti maxime voluptatum nihil saepe sit?",
        company: "My Portfolio",
        position: "Frontend Developer",
        techStack: ["Reactjs"],
        teamSize: "Team size: 15 personal"
      },
      {
        id: 1,
        title: "Tx Design UI",
        descriptions:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quam molestiae similique ex inventore iusto autem voluptatem ullam dolorem repellendus a architecto soluta, atque deleniti maxime voluptatum nihil saepe sit?",
        company: "My Portfolio",
        position: "Frontend Developer",
        techStack: ["Reactjs"],
        teamSize: "Team size: 15 personal"
      },
      {
        id: 1,
        title: "Ops Hong Anh",
        descriptions:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quam molestiae similique ex inventore iusto autem voluptatem ullam dolorem repellendus a architecto soluta, atque deleniti maxime voluptatum nihil saepe sit?",
        company: "My Portfolio",
        position: "Frontend Developer",
        techStack: ["Reactjs"],
        teamSize: "Team size: 15 personal"
      },
      {
        id: 1,
        title: "SPG Manager",
        descriptions:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quam molestiae similique ex inventore iusto autem voluptatem ullam dolorem repellendus a architecto soluta, atque deleniti maxime voluptatum nihil saepe sit?",
        company: "My Portfolio",
        position: "Frontend Developer",
        techStack: ["Reactjs"],
        teamSize: "Team size: 15 personal"
      },
      {
        id: 1,
        title: "Collection of Useful Tools for Frontend Dev",
        descriptions:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ab at quaerat ipsum eligendi cupiditate natus magni sint, alias architecto officiis numquam, eos odit atque, exercitationem earum est repudiandae non.",
        company: "Hong Anh Computer",
        position: "Flutter Developer",
        techStack: ["Flutter", "Rxdart", "Cubit", "BLoC", "Fvm", "Getx", "GraphQL"],
        teamSize: "Team size: 15 personal (2 mobile, 6 backend, 2️ tester, 3️ BA, 1️ PO, 1️ leader)"
      },
      {
        id: 1,
        title: "Tiktok Clone Teamplate",
        descriptions:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ab at quaerat ipsum eligendi cupiditate natus magni sint, alias architecto officiis numquam, eos odit atque, exercitationem earum est repudiandae non.",
        company: "Hong Anh Computer",
        position: "Flutter Developer",
        techStack: ["Flutter", "Rxdart", "Cubit", "BLoC", "Fvm", "Getx", "GraphQL"],
        teamSize: "Team size: 15 personal (2 mobile, 6 backend, 2️ tester, 3️ BA, 1️ PO, 1️ leader)"
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
        title: "Hong Anh Seller Mobile App",
        descriptions:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ab at quaerat ipsum eligendi cupiditate natus magni sint, alias architecto officiis numquam, eos odit atque, exercitationem earum est repudiandae non.",
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
    children: [
      {
        id: 1,
        title: "Figma Design Tx UI",
        descriptions:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ab at quaerat ipsum eligendi cupiditate natus magni sint, alias architecto officiis numquam, eos odit atque, exercitationem earum est repudiandae non.",
        company: "Hong Anh Computer",
        position: "Flutter Developer",
        techStack: ["Flutter", "Rxdart", "Cubit", "BLoC", "Fvm", "Getx", "GraphQL"],
        teamSize: "Team size: 15 personal (2 mobile, 6 backend, 2️ tester, 3️ BA, 1️ PO, 1️ leader)"
      },
      {
        id: 1,
        title: "Coding Convention",
        descriptions:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ab at quaerat ipsum eligendi cupiditate natus magni sint, alias architecto officiis numquam, eos odit atque, exercitationem earum est repudiandae non.",
        company: "Hong Anh Computer",
        position: "Flutter Developer",
        techStack: ["Flutter", "Rxdart", "Cubit", "BLoC", "Fvm", "Getx", "GraphQL"],
        teamSize: "Team size: 15 personal (2 mobile, 6 backend, 2️ tester, 3️ BA, 1️ PO, 1️ leader)"
      },
      {
        id: 1,
        title: "Custom Theme Visual Code",
        descriptions:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ab at quaerat ipsum eligendi cupiditate natus magni sint, alias architecto officiis numquam, eos odit atque, exercitationem earum est repudiandae non.",
        company: "Hong Anh Computer",
        position: "Flutter Developer",
        techStack: ["Flutter", "Rxdart", "Cubit", "BLoC", "Fvm", "Getx", "GraphQL"],
        teamSize: "Team size: 15 personal (2 mobile, 6 backend, 2️ tester, 3️ BA, 1️ PO, 1️ leader)"
      }
    ]
  }
];
