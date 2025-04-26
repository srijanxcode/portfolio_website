"use client"

import { ArrowLeft, Download, Printer } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function ResumePage() {
  // Function to handle printing
  const handlePrint = () => {
    window.print()
  }

  // Function to handle download (in a real implementation, this would download a PDF)
  const handleDownload = () => {
    // Create a link to download the resume
    const link = document.createElement("a")
    link.href = "/Srijan_Sharma_Resume.pdf" // This would be the path to your actual PDF
    link.download = "Srijan_Sharma_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  useEffect(() => {
    // Set the document title
    document.title = "Srijan Sharma - Resume"
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation bar */}
      <div className="sticky top-0 z-50 flex items-center justify-between bg-background/80 p-4 backdrop-blur-md print:hidden">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80">
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Portfolio</span>
        </Link>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handlePrint}>
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
          <Button size="sm" onClick={handleDownload}>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* Resume content */}
      <div className="mx-auto max-w-4xl p-8 print:p-0">
        <div className="rounded-lg border bg-card p-8 shadow print:border-none print:shadow-none">
          {/* Header */}
          <div className="mb-8 border-b pb-6 print:mb-6 print:pb-4">
            <h1 className="text-3xl font-bold">SRIJAN SHARMA</h1>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-muted-foreground">
              <p>Bengaluru, India</p>
              <p>8271572816</p>
              <p>blitzkreigiit@gmail.com</p>
              <p>srijansharma.ec23@rvce.edu.in</p>
            </div>
            <div className="mt-2 flex gap-4">
              <Link
                href="https://linkedin.com/in/srijan-sharma-2a4456290/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/srijanxcode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GitHub
              </Link>
            </div>
          </div>

          {/* Profile */}
          <div className="mb-6">
            <h2 className="mb-3 text-xl font-semibold">PROFILE</h2>
            <p className="text-muted-foreground">
              Sophomore at RV College of Engineering pursuing a Bachelor of Engineering in Electronics and Communication
              (ECE). Enthusiastic about Machine Learning and Competitive Programming, with hands-on experience in
              relevant projects. Passionate about leveraging analytical and problem-solving skills in the fields of
              Electronics, Embedded Systems, and Technical Sales, aiming to contribute to innovative solutions and
              technology advancements.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h2 className="mb-3 text-xl font-semibold">EXPERIENCE</h2>
            <div className="space-y-4">
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-medium">Team Leader — CraftNCode Hackathon, IIIT Bhubaneswar</h3>
                  <span className="text-sm text-muted-foreground">Nov 2024</span>
                </div>
                <p className="mt-1 text-muted-foreground">
                  Secured 5th position among multiple teams, showcasing leadership, teamwork, and problem-solving
                  skills.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-medium">Project Developer, BMSCE Hackaphasia</h3>
                  <span className="text-sm text-muted-foreground">Dec 2024</span>
                </div>
                <p className="mt-1 text-muted-foreground">
                  Developed a website using satellite data and AI models to monitor marine ecosystem issues, including
                  chlorophyll concentration, ocean currents, and plastic debris.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-medium">Project Developer, RVCE</h3>
                  <span className="text-sm text-muted-foreground">Jan 2025</span>
                </div>
                <ul className="mt-1 list-disc pl-5 text-muted-foreground">
                  <li>Developed a system to monitor EV battery health, improving efficiency and safety.</li>
                  <li>
                    Used data analytics for predictive maintenance, optimizing performance and extending battery life.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="mb-3 text-xl font-semibold">EDUCATION</h2>
            <div className="space-y-4">
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-medium">RV College of Engineering</h3>
                  <span className="text-sm text-muted-foreground">Sep 2023 — Sep 2027</span>
                </div>
                <p className="text-muted-foreground">BE in Electronics and Communication</p>
                <p className="text-muted-foreground">CGPA 8.38</p>
                <p className="text-sm text-muted-foreground">Bengaluru</p>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-medium">Jamshedpur Public School</h3>
                  <span className="text-sm text-muted-foreground">Mar 2023</span>
                </div>
                <p className="text-muted-foreground">Intermediate</p>
                <p className="text-muted-foreground">Percentage 89%</p>
                <p className="text-sm text-muted-foreground">Jamshedpur</p>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-medium">Jamshedpur Public School</h3>
                  <span className="text-sm text-muted-foreground">Mar 2021</span>
                </div>
                <p className="text-muted-foreground">Matriculation</p>
                <p className="text-muted-foreground">Percentage 96%</p>
                <p className="text-sm text-muted-foreground">Jamshedpur</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="mb-3 text-xl font-semibold">SKILLS</h2>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex items-center gap-2">
                <span className="font-medium">Deep Learning</span>
                <span className="text-sm text-muted-foreground">Experienced</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Machine Learning</span>
                <span className="text-sm text-muted-foreground">Beginner</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Generative AI</span>
                <span className="text-sm text-muted-foreground">Experienced</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Vivado</span>
                <span className="text-sm text-muted-foreground">Expert</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Web Development</span>
                <span className="text-sm text-muted-foreground">Expert</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Matlab</span>
                <span className="text-sm text-muted-foreground">Experienced</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Logisim</span>
                <span className="text-sm text-muted-foreground">Expert</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">AWS</span>
                <span className="text-sm text-muted-foreground">Skillful</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
