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
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" className="bg-muted/30 py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_30%,rgba(0,191,255,0.05),transparent)]"></div>
      <motion.div
        className="container px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            <span className="relative">
              About Me
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30"></span>
            </span>
          </h2>
          <div className="mt-4 h-1 w-12 bg-primary mx-auto"></div>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-lg text-muted-foreground">
              Hello! I'm{" "}
              <motion.span
                className="font-semibold text-foreground relative"
                whileHover={{ color: "hsl(var(--primary))" }}
              >
                Srijan Sharma
              </motion.span>
              , an Electronics and Communication Engineering student with a passion for technology and innovation.
            </p>
            <motion.p className="text-lg text-muted-foreground" variants={itemVariants}>
              I enjoy creating elegant solutions to complex problems and am constantly exploring new technologies to
              expand my skill set. My approach to development focuses on writing clean, maintainable code that delivers
              exceptional user experiences.
            </motion.p>
            <motion.p className="text-lg text-muted-foreground" variants={itemVariants}>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              enjoying outdoor activities. I believe in continuous learning and staying updated with the latest industry
              trends.
            </motion.p>
            <motion.div className="pt-4" variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <ul className="space-y-2">
                <motion.li
                  className="rounded-lg bg-muted p-4 border border-primary/10 transition-all duration-300 hover:shadow-md hover:shadow-primary/5"
                  whileHover={{ y: -5 }}
                >
                  <p className="font-medium">B.E. in Electronics and Communication Engineering</p>
                  <p className="text-muted-foreground">RV College of Engineering</p>
                  <p className="text-muted-foreground">CGPA: 8.4/10</p>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
