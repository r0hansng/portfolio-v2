import React from 'react';
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import '../../global.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { SmallNav } from '../RetractableNav';

export const Navbar = () => {

    const navigate = useNavigate();

    const handleScrollNavigation = (id) => {
        navigate(`/?scrollTo=${id}`);
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 0.5 }}
                className="relative z50 bg-black/50 border-b border-gray-800">
                <div className="flex items-center justify-between p-5 mx-auto lg:container">
                    <div className="flex items-center gap-5">
                        <a href="/">
                            <img src="/assets/images/favicon.png" alt="Logo" width={27} height={27} style={{ borderRadius: "4px" }} />
                        </a>
                        <div className="items-center hidden gap-5 sm:flex">
                            <Link
                                to="/projects"
                                className="text-sm cursor-pointer hover:text-gray-400"
                            >
                                Projects
                            </Link>
                            <span onClick={() => handleScrollNavigation('experience')} className="text-sm cursor-pointer hover:text-gray-400">
                                Experience
                            </span>
                            <Link
                                to="/about"
                                className="text-sm cursor-pointer hover:text-gray-400"
                            >
                                About Me
                            </Link>
                            <span onClick={() => handleScrollNavigation('contact')} className="text-sm cursor-pointer hover:text-gray-400">
                                Contact
                            </span>
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
                    <SmallNav />
                </div>
            </motion.div>
        </>
    )
}