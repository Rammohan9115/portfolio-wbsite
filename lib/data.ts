import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Spot from "@/public/spot.png";
import CRUD from "@/public/CRUD.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor in Computer Engineering, Pillai College of Engineering",
    location: "Mumbai, India",
    description:
      "Acquired practical skills through project-based learning methodology. Evaluated and examined Data Structures and Algorithms (Implemented an Algorithm to find the shortest path between points in a graph). Deployed a web-based application for finding the location of books in the college library. Devised hearing assistant for the visually impaired (Text to speech, OCR using machine learning algorithms.) and achieved an accuracy of 60%. Created a parental control Android app using JAVA and android studio. Strengthened team building and collaborative abilities.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2019",
  },
  {
    title: "Front-End Developer",
    location: "Ugam Solutions, Mumbai, India",
    description:
      "performance and cross-browser compatibility,Collaborated with the design team to implement visually appealing user interfaces based on provided wireframes and mock-ups., Integrated RESTful APIs to fetch and display data from backend systems. Implemented unit tests using Jest to ensure code quality and reliability. Worked closely with the backend team to define API contracts and troubleshoot integration issues. Participated in code reviews to maintain code quality and provide feedback to team members. Contributed to the optimization of application performance through code refactoring and performance tuning.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "Computer Software and Database Development, Lambton College",
    location: "Toronto, CA",
    description:
      "Planning, programming, and hosting websites. Developing and designing a database management system for an e-commerce site. Analyzing Full Stack fundamentals. Inculcating effective communication and project management expertise.",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2024",
  } ,
] as const;

export const projectsData = [
  
  {
    title: "Spotify App Clone",
    description:
      "Using Next.js, React.js, Supabase, SQL, and Tailwind CSS, I've built a fully functional Spotify clone that allows you to listen to your favourite music seamlessly.",
    tags: ["React", "Next.js", "Supabase", "Tailwind", "SQL"],
    imageUrl: Spot,
  },
  {
    title: "Employee CRUD App",
    description:
      "Employee CRUD App With Image Upload Using NodeJs, ExpressJs, MongoDB & EJS Templating Engine.",
    tags: ["ExpressJs", "ES6", "MongoDB", "Bootstrap", "Html:5"],
    imageUrl: CRUD,
  },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "JQuery",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Data Structures",
  "Python",
  ".Net Core",
  "Android App Development"
] as const;