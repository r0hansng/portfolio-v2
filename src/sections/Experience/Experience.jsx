import React from 'react'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from '../../components/Button/Button';

export const Experience = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return (
        <>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ ease: "easeOut", duration: 0.5 }}
                className="w-full flex flex-col items-center justify-center mt-[200px]">
                <h1 className="text-4xl font-bold mb-7">My Projects</h1>
                <Button text="More Projects" href=""/>
            </motion.div>
        </>
    )
}