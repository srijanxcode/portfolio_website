"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Electronics & Communication Engineer"
  const typingSpeed = 100

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, typingSpeed)
      return () => clearTimeout(timeout)
    }
  }, [typedText])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent)]"></div>
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Hi, I'm <span className="text-primary">Srijan Sharma</span>
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">
              {typedText}
              <span className="animate-blink ml-1">|</span>
            </p>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              I build exceptional and accessible digital experiences. Passionate about creating solutions that are both
              beautiful and functional.
            </p>
            <div className="flex flex-col gap-2 justify-center sm:flex-row">
              <Button asChild size="lg">
                <Link href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
            <div className="flex gap-4 pt-4 justify-center">
              <Link
                href="https://github.com/srijanxcode"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/srijan-sharma-2a4456290/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:your.email@example.com"
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
