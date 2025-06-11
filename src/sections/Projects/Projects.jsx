import React from 'react'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import ProjectCard from './ProjectCard';
import { projectsData } from '../../data/projectsData';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

export const Projects = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="w-full flex flex-col items-center justify-center mt-[200px]"
    >
      <h1 className="text-4xl font-bold mb-7">My Projects</h1>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {projectsData.map((data, index) => (
          <ProjectCard key={index} data={data} />
        ))}
      </div>
      <Link to="/projects">
        <Button className="bg-white text-black cursor-pointer hover:bg-gray-200 duration-300 mt-3" variant={"default"}>More Projects</Button>
      </Link>
    </motion.div>
  );
}
