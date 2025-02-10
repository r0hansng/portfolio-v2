"use client";
import React from 'react';
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import '../../global.css';
import { motion } from "framer-motion";

export const Navbar = () => {
    return (
        <>
        <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="border-b border-gray-900 bg-black z-50 relative bg-opacity-50">
            <div className="flex items-center justify-between p-5 max-w-7xl mx-auto w-full">
                <div className="flex items-center gap-5">
                    <a href="/">
                        <img src="../../public/letter-r.png" alt="Logo" width={27} height={27} style={{ borderRadius: "4px" }} />
                    </a>
                    <div className="sm:flex hidden items-center gap-5">
                        <a
                            href="/"
                            className="text-sm hover:text-gray-400 cursor-pointer"
                        >
                            Projects
                        </a>
                        <a
                            href="#experience"
                            className="text-sm hover:text-gray-400 cursor-pointer"
                        >
                            Experience
                        </a>
                        <a
                            href="/"
                            className="text-sm hover:text-gray-400 cursor-pointer"
                        >
                            About Me
                        </a>
                        <a
                            href="/#contact"
                            className="text-sm hover:text-gray-400 cursor-pointer"
                        >
                            Contact
                        </a>
                    </div>
                </div>
                <div className="sm:flex hidden items-center sm:gap-5 gap-3">
                    <a
                        href="https://github.com/r0hansng"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="text-2xl" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rohansng/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="text-2xl" />
                    </a>
                    <a
                        href="https://x.com/r0hansng"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaXTwitter className="text-2xl" />
                    </a>
                </div>
            </div>
        </motion.div>
        </>
    )
}