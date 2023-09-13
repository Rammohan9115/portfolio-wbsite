"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSection";


export default function About() {
  
    const {ref,inView} = useInView({
        threshold:0.75,
    });
    const{setActiveSection} = useActiveSectionContext();

    useEffect(()=> {
        if(inView){
            setActiveSection("About");
        }
    },[inView,setActiveSection])
  
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>
        About me
      </SectionHeading>
      <p className="mb-3">
      I hold a Meta <span className="font-medium">Front-end Developer Certification</span> and possess a wealth of knowledge and expertise in various aspects of web development. 
      Proficient in <span className="font-medium">HTML5, CSS3, and JavaScript</span>, I have a strong grasp of responsive web design principles and am adept at creating interfaces that seamlessly adapt to different devices and screen sizes.
       My experience extends to working with front-end frameworks such as <span className="font-medium">React, Angular, and Vue.js</span>, allowing me to craft dynamic and user-friendly web applications.
      </p>

      <p className="mb-3">
      My proficiency in version control systems like <span className="font-medium">Git and GitHub</span> ensures streamlined collaboration and efficient code management. I bring a deep understanding of browser compatibility issues and troubleshooting techniques, enabling me to deliver consistently high-quality user experiences. With a background in UI/UX design principles,
       I am focused on functionality and creating visually appealing and intuitive interfaces.
      </p>
      
       <p className="mb-3">
      My <span className="font-medium">problem-solving and analytical skills</span> are strong, and I am known for my excellent communication and collaboration abilities,
      which make me a valuable asset to any development team. Moreover, I hold certifications in <span className="font-medium">interface-building and React.js</span> Essential training, demonstrating my commitment to staying current with industry best practices. Additionally, I've acquired <span className="font-medium">IBM Developer skill network certifications</span> in Data Science Methodology and Python for Data Science, 
      highlighting my versatility and expertise across multiple technology domains.
      </p>
    </motion.section>
  );
}