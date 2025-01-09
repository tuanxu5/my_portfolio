import { SeeMoreProjectOne } from "@/app/sections/app-pages/project/widget/see-more/see-more-project-one";
import { Project } from "../interface/model";
import { SeeMoreProjectFive } from "../sections/app-pages/project/widget/see-more/see-more-project-five";
import { SeeMoreProjectFour } from "../sections/app-pages/project/widget/see-more/see-more-project-four";
import { SeeMoreProjectSix } from "../sections/app-pages/project/widget/see-more/see-more-project-six";
import { SeeMoreProjectThree } from "../sections/app-pages/project/widget/see-more/see-more-project-three";
import { SeeMoreProjectTwo } from "../sections/app-pages/project/widget/see-more/see-more-project-two";

export const dataMockProject: Project[] = [
  {
    id: 1,
    company: "Personal Project",
    name: "My Portfolio",
    descriptions:
      "Welcome to my portfolio! This project highlights my journey in software development, showcasing my skills in creating efficient, innovative, and user-friendly solutions. I focus on crafting impactful applications that solve real-world problems and deliver great user experiences. Explore my work to see how I bring ideas to life with creativity and precision. Let's connect and build something amazing together.",
    banner: "https://i.pinimg.com/736x/89/d1/cb/89d1cb2ea0744383e0fc658587c3eec0.jpg",
    position: "Project Creator",
    content: <SeeMoreProjectOne />
  },
  {
    id: 2,
    company: "Hong Anh Computer",
    name: "Ops Hong Anh",
    descriptions:
      "Ops Hong Anh is a cutting-edge operational solution tailored to optimize the workflow of our computer components and technology products business. By automating repetitive tasks, improving inventory management, and providing actionable insights, this project enhances efficiency and ensures smooth operations. It is designed to streamline order processing, track stock in real-time, and deliver exceptional customer service. With scalability and flexibility at its core, the Ops Hong Anh positions our company to meet the growing demands of the tech market and provide top-quality products to our customers.",
    banner: "https://i.pinimg.com/736x/85/88/cb/8588cb6aa29a654a6d975b86ff44c71d.jpg",
    position: "Frontend Developer",
    content: <SeeMoreProjectTwo />
  },
  {
    id: 3,
    company: "Libraries UI For React By Me",
    name: "Tx Design UI Libraries",
    descriptions:
      "Tx Design UI Libraries is a modern and versatile UI library designed specifically for ReactJs applications. Built with performance, scalability, and developer experience in mind, this library offers a comprehensive set of components that are easy to integrate, fully customizable, and optimized for both mobile and desktop. Whether you’re building dashboards, e-commerce platforms, or enterprise applications,Tx Design UI Libraries empowers developers to create stunning, responsive user interfaces with minimal effort. With clean documentation and ongoing support, this library is your ultimate tool for crafting modern web experiences.",
    banner: "https://i.pinimg.com/736x/7f/17/59/7f175992875ca71e07f5730900a442f6.jpg",
    position: "Project Creator",
    content: <SeeMoreProjectThree />
  },
  {
    id: 4,
    company: "Hong Anh Computer",
    name: "Hong Anh Seller Mobile App",
    descriptions:
      "Hong Anh Seller Mobile App is an innovative e-commerce platform designed to simplify shopping for both customers and dealers. This app creates a seamless connection between buyers and sellers, offering a wide range of products with intuitive navigation and secure payment options. Built for convenience and efficiency, it enables customers to browse, compare, and purchase with ease, while providing dealers with tools to showcase products, track orders, and reach a larger audience. With a focus on user-friendly design and real-time updates, this app redefines the shopping experience and empowers businesses to thrive in the digital age.",
    banner: "https://i.pinimg.com/736x/a4/44/95/a4449575c6266d1061067ac473e7465c.jpg",
    position: "Flutter Developer",
    content: <SeeMoreProjectFour />
  },
  {
    id: 5,
    company: "Freelancer Project",
    name: "SPG Manager",
    descriptions:
      "SPG Manager is a freelance project designed to empower employees to efficiently manage products across popular e-commerce platforms such as WooCommerce, Shopify, and more. With a user-friendly interface and essential tools, this project simplifies product listing, updating, and tracking, making operations smoother and more streamlined. Built with flexibility and scalability in mind, SPG Manager enables businesses to optimize their workflows, save time, and focus on growth in the competitive e-commerce market.",
    banner: "https://i.pinimg.com/736x/54/8b/d8/548bd8fa3dd452030869da376c272bab.jpg",
    position: "Frontend Developer",
    content: <SeeMoreProjectFive />
  },
  {
    id: 6,
    company: "Libraries For Flutter By Me",
    name: "Some Flutter libraries",
    descriptions:
      "Flutter libraries crafted to enhance development efficiency and simplify common tasks. These libraries are built with a focus on modularity, performance, and ease of use, offering solutions for seamless UI design, state management, data handling, and more. Designed to address real-world challenges, each library comes with clear documentation, customizable features, and compatibility with modern Flutter projects. Whether you’re building small apps or large-scale solutions, these libraries empower developers to create robust, high-quality applications faster and more effectively.",
    position: "Project Creator",
    banner: "https://i.pinimg.com/736x/ac/3d/de/ac3dde32b4214fe77baac9d7dd746a3f.jpg",
    content: <SeeMoreProjectSix />
  }
];
