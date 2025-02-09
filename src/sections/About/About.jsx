import React, { useEffect } from 'react'
import BentoGrid from './bento'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'

export const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <div className="width-full mx-auto p-4 flex items-center justify-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <>
            <BentoGrid />
          </>
        </motion.div>
      </div>
    </>
  )
}
