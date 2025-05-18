"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export default function PDFBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    if (!containerRef.current) return

    const container = containerRef.current
    const containerRect = container.getBoundingClientRect()

    // Create particles
    const newParticles: Particle[] = []
    const particleCount = 15

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: Math.random() * containerRect.width,
        y: Math.random() * containerRect.height,
        size: Math.random() * 8 + 2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.2 + 0.1,
      })
    }

    setParticles(newParticles)

    // Animation loop
    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          // Update position
          let newX = particle.x + particle.speedX
          let newY = particle.y + particle.speedY

          // Bounce off edges
          if (newX <= 0 || newX >= containerRect.width) {
            particle.speedX *= -1
            newX = particle.x + particle.speedX
          }

          if (newY <= 0 || newY >= containerRect.height) {
            particle.speedY *= -1
            newY = particle.y + particle.speedY
          }

          return {
            ...particle,
            x: newX,
            y: newY,
          }
        }),
      )

      animationRef.current = requestAnimationFrame(animateParticles)
    }

    const animationRef = { current: requestAnimationFrame(animateParticles) }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  if (!mounted) return null

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, index) => (
        <div
          key={index}
          className="pdf-particle absolute"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            transition: "left 1s ease, top 1s ease",
          }}
        />
      ))}
    </div>
  )
}
