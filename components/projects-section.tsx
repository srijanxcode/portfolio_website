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
    hidden: { y: 50, opacity: 0 },
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

  const projects = [
    {
      title: "HyperspectralImageAnalysis",
      description:
        "A Streamlit web app for hyperspectral crop classification using 3D CNNs. Processes agricultural field data, visualizes crop distribution, and provides health assessments with farming recommendations.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "Streamlit", "3D CNN", "Deep Learning", "Agriculture", "Image Processing"],
      liveUrl: "#",
      githubUrl: "https://github.com/srijanxcode/HyperspectralImageAnalysis",
    },
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
  ]

  return (
    <section id="projects" className="bg-muted/30 py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_70%,rgba(0,191,255,0.05),transparent)]"></div>
      <div className="container px-4 md:px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            <span className="relative">
              Featured Projects
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30"></span>
            </span>
          </h2>
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
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }} className="h-full">
              <Card className="overflow-hidden h-full flex flex-col border-primary/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  </div>
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
                    <Button asChild variant="outline" size="sm" className="group">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                        Code
                      </Link>
                    </Button>
                    <Button asChild size="sm" className="group">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button asChild variant="outline" size="lg" className="group relative overflow-hidden">
              <Link href="https://github.com/srijanxcode" target="_blank" rel="noopener noreferrer">
                <span className="relative z-10">View More Projects on GitHub</span>
                <span className="absolute inset-0 z-0 bg-primary/10 translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
