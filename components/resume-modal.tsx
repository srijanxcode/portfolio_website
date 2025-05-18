"use client"

import { useState, useEffect } from "react"
import { X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/Srijan_Sharma_Resume.pdf"
    link.download = "Srijan_Sharma_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!mounted) return null
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl h-[90vh] bg-background rounded-lg shadow-lg">
        <div className="absolute right-2 top-2 z-10 flex gap-2">
          <Button variant="outline" size="icon" onClick={handleDownload} className="bg-background/80 backdrop-blur-sm">
            <Download className="h-5 w-5" />
            <span className="sr-only">Download Resume</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={onClose} className="bg-background/80 backdrop-blur-sm">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <iframe src="/Srijan_Sharma_Resume.pdf" className="w-full h-full rounded-lg" title="Resume PDF"></iframe>
      </div>
    </div>
  )
}
