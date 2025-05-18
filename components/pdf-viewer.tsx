"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface PDFViewerProps {
  pdfUrl: string
  scale: number
  rotation: number
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl, scale, rotation }) => {
  // Add a loading state
  const [loading, setLoading] = useState(true)

  // Add a useEffect to simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      style={{
        transform: `scale(${scale}) rotate(${rotation}deg)`,
        transformOrigin: "center center",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="w-full h-full"
    >
      {loading ? (
        <motion.div
          className="w-full h-[calc(100vh-150px)] flex items-center justify-center bg-muted/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16">
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-primary/20"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </div>
            <motion.p
              className="mt-4 text-primary font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Loading Resume...
            </motion.p>
          </div>
        </motion.div>
      ) : (
        <iframe
          src={`${pdfUrl}#toolbar=0&navpanes=0`}
          className="w-full h-[calc(100vh-150px)]"
          title="Resume PDF"
          onLoad={() => setLoading(false)}
        ></iframe>
      )}
    </motion.div>
  )
}

export default PDFViewer
