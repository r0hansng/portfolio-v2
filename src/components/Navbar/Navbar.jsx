"use client";
import React from 'react';
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import '../../global.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 0.5 }}
                className="relative z-50 bg-black bg-opacity-50 border-b border-gray-900">
                <div className="flex items-center justify-between w-full p-5 mx-auto max-w-7xl">
                    <div className="flex items-center gap-5">
                        <a href="/">
                            <img src="src/public/letter-r.png" alt="Logo" width={27} height={27} style={{ borderRadius: "4px" }} />
                        </a>
                        <div className="items-center hidden gap-5 sm:flex">
                            <Link
                                to="/projects"
                                className="text-sm cursor-pointer hover:text-gray-400"
                            >
                                Projects
                            </Link>
                            <Link
                                to="/#experience"
                                className="text-sm cursor-pointer hover:text-gray-400"
                            >
                                Experience
                            </Link>
                            <Link
                                to="/about"
                                className="text-sm cursor-pointer hover:text-gray-400"
                            >
                                About Me
                            </Link>
                            <Link
                                to="/#contact"
                                className="text-sm cursor-pointer hover:text-gray-400"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div className="items-center hidden gap-3 sm:flex sm:gap-5">
                        <Link
                            to="https://github.com/r0hansng"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub className="text-2xl" />
                        </Link>
                        <Link
                            to="https://www.linkedin.com/in/rohansng/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin className="text-2xl" />
                        </Link>
                        <Link
                            to="https://x.com/r0hansng"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaXTwitter className="text-2xl" />
                        </Link>
                    </div>
                </div>
            </motion.div>
        </>
    )
}