"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ProjectsSection() {
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

  const projects = [
    {
      title: "Satellite-Based Marine Ecosystem Monitoring",
      description:
        "A web application that uses satellite data and AI models to monitor marine ecosystem issues including chlorophyll concentration, ocean currents, and plastic debris detection.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "TensorFlow", "Satellite Data", "Environmental Monitoring", "Web Development"],
      liveUrl: "#",
      githubUrl: "https://github.com/srijanxcode/marine-ecosystem-monitoring",
    },
    {
      title: "EV Battery Health Monitoring System",
      description:
        "A system that monitors electric vehicle battery health in real-time, providing predictive maintenance insights and optimizing performance to extend battery life.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["IoT", "Data Analytics", "Embedded Systems", "Predictive Maintenance"],
      liveUrl: "#",
      githubUrl: "https://github.com/srijanxcode/ev-battery-monitoring",
    },
    {
      title: "Handwritten Digit Recognition",
      description:
        "A deep learning model that recognizes handwritten digits using convolutional neural networks. Trained on the MNIST dataset with high accuracy.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Deep Learning", "CNN", "Computer Vision", "TensorFlow", "Python"],
      liveUrl: "#",
      githubUrl: "https://github.com/srijanxcode/digit-recognition",
    },
    {
      title: "Smart Home Automation",
      description:
        "An IoT-based smart home automation system that controls lighting, temperature, and security features through a mobile application interface.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["IoT", "Arduino", "Embedded Systems", "Mobile App"],
      liveUrl: "#",
      githubUrl: "https://github.com/srijanxcode/smart-home",
    },
    {
      title: "Weather Prediction Model",
      description:
        "A machine learning model that predicts weather conditions based on historical data, providing accurate forecasts for temperature, humidity, and precipitation.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Machine Learning", "Data Analysis", "Python", "Scikit-learn"],
      liveUrl: "#",
      githubUrl: "https://github.com/srijanxcode/weather-prediction",
    },
    {
      title: "PCB Design for Sensor Array",
      description:
        "Custom PCB design for a sensor array used in environmental monitoring applications, featuring multiple sensor interfaces and low power consumption.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["PCB Design", "Electronics", "Sensors", "Embedded Systems"],
      liveUrl: "#",
      githubUrl: "https://github.com/srijanxcode/sensor-pcb",
    },
  ]

  return (
    <section id="projects" className="bg-muted/30 py-20" ref={ref}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Featured Projects</h2>
          <div className="mt-4 h-1 w-12 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new
            technologies.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="flex flex-col flex-grow p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button asChild size="sm">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="https://github.com/srijanxcode" target="_blank" rel="noopener noreferrer">
              View More Projects on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
