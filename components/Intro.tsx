"use client";
import React from 'react';
import Image from 'next/image';
import {motion} from "framer-motion";
import {BsArrowRight, BsLinkedin} from "react-icons/bs";
import {HiDownload} from "react-icons/hi";
import Link from "next/link";
import { FaGitSquare } from 'react-icons/fa';

export default function Intro() {
  return (
    <div>
      <section>
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
                    <Image src="/pp.png" 
                    alt="portrait"
                    width="190"
                    height="190"
                    quality="95"
                    priority={true}
                    className="h-24 w-24 rounded-full border-[0.35rem] border-whit
                    object-cover shadow-xl"
                    />

                    <motion.span className="absolute bottom-0 right-0 text-4xl
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
        <span className="font-bold">Hello, I'm Rammohan.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">3 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
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
               active:scale-105 transition cursor-pointer border border-black/10 " href="/CV.pdf" download> Download CV 
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
