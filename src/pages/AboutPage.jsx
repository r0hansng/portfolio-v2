import React from 'react'
import { IoLogoHtml5, IoLogoPython } from "react-icons/io5";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { FaReact, FaGitAlt } from "react-icons/fa6";
import {
  SiTailwindcss,
  SiCplusplus
} from "react-icons/si";
import { motion } from 'framer-motion'

const skills = [
  {
    name: "HTML",
    icon: <IoLogoHtml5 className="text-4xl" />
  },
  {
    name: "CSS",
    icon: <IoLogoCss3 className="text-4xl" />
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript className="text-4xl" />
  },
  {
    name: "ReactJS",
    icon: <FaReact className="text-4xl" />
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-4xl" />
  },
  {
    name: "Python",
    icon: <IoLogoPython className="text-4xl" />
  },
  {
    name: "C++",
    icon: <SiCplusplus className="text-4xl" />
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-4xl" />
  },
]

function AboutPage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="mt-10 lg:container w-full pl-40"
      >
        <h1 className="font-bold text-3xl mb-2 ml-3">Who am I?</h1>
        <div className="border-t border-gray-800 p-3 flex md:flex-row flex-col gap-10 items-center">
          <div>
            <p className="mt-5">
              I'm an 18-year-old college freshman who loves building web applications and solving competitive programming challenges. I started coding in Java back in 9th grade, and since then, I’ve expanded my skills to JavaScript, HTML, CSS, Python, and C++, crafting projects that merge creativity with functionality.
            </p>

            <p className="mt-5 mb-10">
              Beyond coding, I enjoy playing guitar, working out, and exploring nature—balancing my passion for tech with real-world experiences. Whether it's developing high-performance web apps or tackling complex problems, I’m always pushing myself to learn, grow, and innovate.
            </p>

            <h1 className="font-bold text-3xl mb-2">My Tech Stack</h1>
            <div className="border-t border-gray-800">
              <div className="flex md:gap-4 flex-wrap p-2 mt-5">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-2 md:p-1"
                  >
                    {skill.icon}
                    <p>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <img
            src={"https://rohan-singh.vercel.app/src/Styles/Pictures/GitHub%20Profile%20Picture.png"}
            alt="Profile"
            width={380}
            height={300}
            className="mt-3"
          />
        </div>
        <h1 className="font-bold text-3xl mb-2 mt-8 ml-2 ">About this website</h1>
        <div className="border-t border-gray-800 p-3">
          <h1 className="p-2">ReactJs</h1>
          <h1 className="p-2">Javascript</h1>
          <h1 className="p-2">Deployed on vercel</h1>
          <h1 className="p-2">Shadcn</h1>
          <h1 className="p-2">Aceternity UI</h1>
          <h1 className="p-2">Tailwind Css</h1>
        </div>
      </motion.div>
    </>
  )
}

export default AboutPage