"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar } from "lucide-react"

export default function ExperienceSection() {
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

  const experiences = [
    {
      title: "Team Leader",
      company: "CraftNCode Hackathon, IIIT Bhubaneswar",
      period: "Nov 2024",
      description:
        "Secured 5th position among multiple teams, showcasing leadership, teamwork, and problem-solving skills.",
      technologies: ["Leadership", "Problem Solving", "Teamwork", "Hackathon"],
    },
    {
      title: "Project Developer",
      company: "BMSCE Hackaphasia",
      period: "Dec 2024",
      description:
        "Developed a website using satellite data and AI models to monitor marine ecosystem issues, including chlorophyll concentration, ocean currents, and plastic debris.",
      technologies: ["AI Models", "Satellite Data", "Web Development", "Environmental Monitoring"],
    },
    {
      title: "Electronics Project Lead",
      company: "College Technical Club",
      period: "Aug 2022 - Present",
      description:
        "Led a team of students in designing and implementing electronics projects. Organized workshops and training sessions for junior members on microcontroller programming and circuit design.",
      technologies: ["Arduino", "PCB Design", "Embedded Systems", "Team Leadership"],
    },
  ]

  return (
    <section id="experience" className="py-20" ref={ref}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Experience</h2>
          <div className="mt-4 h-1 w-12 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the organizations I've had the pleasure to work with.
          </p>
        </motion.div>

        <motion.div
          className="relative max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border ml-6 md:mx-auto md:left-0 md:right-0"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative grid grid-cols-[auto_1fr] gap-6 md:grid-cols-[1fr_auto_1fr] mb-12 last:mb-0"
            >
              {/* For desktop, add empty column on odd indexes */}
              {index % 2 === 0 && <div className="hidden md:block" />}

              {/* Timeline dot */}
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center z-10">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className={`bg-card rounded-lg border p-6 shadow-sm ${index % 2 === 1 ? "md:text-right" : ""}`}>
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-primary font-medium">{exp.company}</p>
                <p className="text-muted-foreground text-sm mb-4">{exp.period}</p>
                <p className="mb-4">{exp.description}</p>
                <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* For desktop, add empty column on even indexes */}
              {index % 2 === 1 && <div className="hidden md:block" />}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
