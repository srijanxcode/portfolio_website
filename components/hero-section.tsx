"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"

// Dynamically import Particles with no SSR
const Particles = dynamic(() => import("@/components/particles"), { ssr: false })

export default function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const [isMounted, setIsMounted] = useState(false)
  const fullText = "Electronics & Communication Engineer"
  const typingSpeed = 100
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)

    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, typingSpeed)
      return () => clearTimeout(timeout)
    }
  }, [typedText])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-20">
      {isMounted && <Particles />}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(0,191,255,0.05),transparent)]"></div>
      <div className="container px-4 md:px-6">
        <motion.div
          ref={containerRef}
          className="mx-auto max-w-3xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-4" variants={itemVariants}>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Hi, I'm{" "}
              <span className="text-primary relative inline-block">
                Srijan Sharma
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/30 animate-shimmer"></span>
              </span>
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">
              {typedText}
              <span className="animate-blink ml-1">|</span>
            </p>
            <motion.p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl" variants={itemVariants}>
              I build exceptional and accessible digital experiences. Passionate about creating solutions that are both
              beautiful and functional.
            </motion.p>
            <motion.div className="flex flex-col gap-2 justify-center sm:flex-row" variants={itemVariants}>
              <Button asChild size="lg" className="group">
                <Link href="#contact">
                  Contact Me{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="group">
                <Link href="#projects">
                  <span className="relative z-10">View Projects</span>
                  <span className="absolute inset-0 z-0 scale-0 rounded-md bg-primary/10 transition-transform duration-300 group-hover:scale-100"></span>
                </Link>
              </Button>
            </motion.div>
            <motion.div className="flex gap-4 pt-4 justify-center" variants={itemVariants}>
              <Link
                href="https://github.com/srijanxcode"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/srijan-sharma-2a4456290/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:blitzkreigiit@gmail.com"
                className="rounded-full p-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
