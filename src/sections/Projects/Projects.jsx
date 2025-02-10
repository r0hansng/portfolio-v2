import React from 'react'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
    const projectsData = [
        {
            title: "Dev Union",
            description: "Dev Union is a full-stack app enabling users to create chat rooms and collaborate on projects with real-time video calls and screen-sharing.",
            tags: "",
            githubLink: "",
            liveLink: "",
            imageUrl: "https://mayank-ughade.vercel.app/dev-union.png",
        },
    ];

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
          <div className="flex flex-wrap gap-5 items-center justify-center ">
            {projectsData.map((data, index) => (
              <ProjectCard key={index} data={data} />
            ))}
          </div>
        </motion.div>
      );
    }
