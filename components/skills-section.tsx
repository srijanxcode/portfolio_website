"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Brain, Database, FlaskRoundIcon as Flask, Layout, Server, Zap } from "lucide-react"

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skills = [
    {
      category: "Frontend",
      icon: <Layout className="h-8 w-8 text-primary" />,
      items: ["React", "Next.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      icon: <Server className="h-8 w-8 text-primary" />,
      items: ["Node.js", "Express", "Python", "RESTful APIs"],
    },
    {
      category: "Database",
      icon: <Database className="h-8 w-8 text-primary" />,
      items: ["MongoDB", "Firebase", "SQL"],
    },
    {
      category: "Machine Learning",
      icon: <Brain className="h-8 w-8 text-primary" />,
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Data Analysis"],
    },
    {
      category: "Deep Learning",
      icon: <Zap className="h-8 w-8 text-primary" />,
      items: ["Neural Networks", "Computer Vision", "NLP", "Transfer Learning", "CNN", "RNN"],
    },
    {
      category: "Electronics",
      icon: <Flask className="h-8 w-8 text-primary" />,
      items: ["Arduino", "Raspberry Pi", "PCB Design", "Embedded Systems", "VHDL"],
    },
  ]

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Skills & Technologies</h2>
          <div className="mt-4 h-1 w-12 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the technologies and tools I work with on a regular basis.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-3">
                {skill.icon}
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
