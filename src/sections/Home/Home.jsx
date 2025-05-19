import React from 'react'
import { FaCircle, FaDownload } from "react-icons/fa6";
import { GrContactInfo } from "react-icons/gr";
import Button from '../../components/Button/Button';
import { motion } from "framer-motion";
import HoverBorderGradient from './border-hover';
import { Spotlight } from "./Spotlight";


export const Home = () => {
    return (
        <>
            <section className="relative flex items-center justify-center rounded-md bg-background/[0.96] py-16 md:py-48">
                <Spotlight
                    className="left-0 z-10 -top-20 md:left-60 md:-top-20"
                    fill="white"
                />
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeOut", duration: 1.5 }}
                    className="flex flex-col items-center gap-4 sm:mt-[-70px]"
                >
                    <HoverBorderGradient className="flex items-center gap-2 text-sm">
                        <FaCircle className="text-green-600 size-2 animate-pulse fill-green-600" />
                        Available for work
                    </HoverBorderGradient>
                    <div className="text-3xl font-bold sm:text-5xl md:text-7xl">Rohan Singh</div>
                    <div className="text-3xl font-bold sm:text-5xl md:text-7xl">Front-End Developer</div>
                    <p className="text-xs text-center text-gray-400 sm:text-sm">I’m passionate about crafting innovative frontend web applications, blending<br />creativity and functionality to deliver seamless and visually engaging user experiences.</p>
                    <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-5">
                        <Button asChild className={"bg-white text-black cursor-pointer hover:bg-gray-200 duration-300"}>
                            <a
                                href="/Rohan_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaDownload className="mr-2" />
                                Download My Resume
                            </a>
                        </Button>
                        <Button asChild className={"bg-white text-black cursor-pointer hover:bg-gray-200 duration-300"}>
                            <a href="/#contact">
                                <GrContactInfo className="mr-2 text-xl" />
                                Contact Me
                            </a>
                        </Button>
                    </div>
                </motion.div>
            </section>
        </>
    )
}