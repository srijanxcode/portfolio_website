"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" className="bg-muted/30 py-20" ref={ref}>
      <motion.div
        className="container px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About Me</h2>
          <div className="mt-4 h-1 w-12 bg-primary mx-auto"></div>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-lg text-muted-foreground">
              Hello! I'm <span className="font-semibold text-foreground">Srijan Sharma</span>, an Electronics and
              Communication Engineering student with a passion for technology and innovation.
            </p>
            <p className="text-lg text-muted-foreground">
              I enjoy creating elegant solutions to complex problems and am constantly exploring new technologies to
              expand my skill set. My approach to development focuses on writing clean, maintainable code that delivers
              exceptional user experiences.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              enjoying outdoor activities. I believe in continuous learning and staying updated with the latest industry
              trends.
            </p>
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <ul className="space-y-2">
                <li className="rounded-lg bg-muted p-4">
                  <p className="font-medium">B.E. in Electronics and Communication Engineering</p>
                  <p className="text-muted-foreground">RV College of Engineering</p>
                  <p className="text-muted-foreground">CGPA: 8.4/10</p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
