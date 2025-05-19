"use client"

import React from 'react'
import { motion } from "framer-motion";
import ProjectCard from '../sections/Projects/ProjectCard';
import { projectsData } from '../data/projectsData';

function ProjectPage() {
    return (
        <>
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="flex flex-col items-center justify-center p-3 mt-10 ml-25 lg:container"
        >
            <h1 className="text-3xl font-semibold underline"> More of my projects</h1>
            <div className="flex flex-wrap items-center justify-center gap-5 mt-10">
                {projectsData.map((data) => (
                    <ProjectCard key={data.title} data={data} />
                ))}
            </div>
        </motion.div>
        </>
    )
}

export default ProjectPage;
