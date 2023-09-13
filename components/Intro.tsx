"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import {motion} from "framer-motion";
import {BsArrowRight, BsLinkedin} from "react-icons/bs";
import {HiDownload} from "react-icons/hi";
import Link from "next/link";
import { FaGitSquare } from 'react-icons/fa';
import { useActiveSectionContext } from '@/context/ActiveSection';
import { useInView } from "react-intersection-observer";

export default function Intro() {

    const {ref,inView} = useInView({
        threshold:0.5,
    });
    const{setActiveSection} = useActiveSectionContext();

    useEffect(()=> {
        if(inView){
            setActiveSection("Home");
        }
    },[inView,setActiveSection])
  return (
    <div>
      <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
        <div className="flex items-center justify-center">
            <div className="relative ">
            <motion.div
            initial={{opacity:0,scale:0}}
            animate={{opacity:1,scale:1}}
            transition = {{
                type:"tween",
                duration:0.2,

            }}
            >
                    <Image src="/DP.png" 
                    alt="portrait"
                    width="190"
                    height="190"
                    quality="95"
                    priority={true}
                    className="h-24 w-24 hover:scale-150 rounded-full border-[0.35rem] border-whit
                    object-cover shadow-xl transition"
                    />

                    <motion.span className="absolute hover:scale-150 bottom-0 right-0 text-4xl
                    " initial={{opacity:0,scale:0}}
                    animate={{opacity:1,scale:1}}
                    transition = {{
                        type:"spring",
                        stiffness:125,
                        delay:0.1,
                        duration:0.7,
        
                    }}>
                        👋
                    </motion.span>
                </motion.div>
                
            </div>

        </div>

        <motion.p
        className="text-center mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Rammohan.</span> With a proven track record of 3 years in{" "}
        <span className="font-bold"> front-end development.</span> {" "} 
       <span className='text-xl'> <span className="font-bold"> </span>My passion for crafting exceptional user interfaces and dedication to delivering high-quality web applications
         have allowed me to thrive in this 
         <span className="italic"></span> dynamic industry. My focus is{" "}
        <span className="font-bold">React (Next.js)</span>.</span>
        </motion.p>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2
        px-4 text-lg font-medium'
            initial={{opacity:0,y:100}}
            animate={{opacity:1,y:0}}
            transition={ {
                delay: 0.1,

            }}
        >
            <Link href="#contact"
              className="group bg-gray-900 text-white px-7 py-3 flex items-center
              gap-2 rounded-full outline-none 
              focus-scale-110 hover:scale-110 hover:bg-gray-950
               active:scale-105 transition">
                Contact me here
            <BsArrowRight className="opacity-70
            group-hover:translate-x-1
            " />
            </Link>
            <a className="group bg-white px-7 py-3 flex items-center
              gap-2 rounded-full text-gray-900 outline-none 
              focus-scale-110 hover:scale-110
               active:scale-105 transition cursor-pointer border border-black/10 " href="/CV.pdf" download> Download Resume 
                <HiDownload className="opacity-60 group-hover:translate-y-1 transition hover:text-gray-950" />
            </a>
            <a className="bg-white p-4 py-3 flex items-center
              gap-2 rounded-full text-gray-700 outline-none 
              focus-scale-110 hover:scale-110
               active:scale-105 transition cursor-pointer border border-black/10 hover:text-gray-950 " 
               href="https://www.linkedin.com/in/rammohan-palliyil-634398212/" target="_blank">
                <BsLinkedin/>
            </a>
            <a className="bg-white p-4 py-3 flex items-center
              gap-2 rounded-full text-gray-700 text-[1.35rem] outline-none 
              focus-scale-110 hover:scale-110
               active:scale-105 transition cursor-pointer border border-black/10 hover:text-gray-950 
               "  href="https://github.com/Rammohan9115" target="_blank">
                <FaGitSquare/>
            </a>
        </motion.div>
      </section>
    </div>
  )
}
