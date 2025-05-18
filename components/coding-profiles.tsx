"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Code2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CodingProfiles() {
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
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.5,
      },
    },
  }

  const profiles = [
    {
      name: "HackerRank",
      username: "blitzkreigiit",
      url: "https://www.hackerrank.com/profile/blitzkreigiit",
      icon: <Code className="h-8 w-8 text-primary" />,
      badges: ["C++", "Python"],
      imageUrl:
        "https://sjc.microlink.io/h96_qMnPPkKhgUiQNSWZEMuLLFUtJGF9qyU5xmgkkADbT6JbjM-4ZDYhDYBGrEDZStQtZQyvh6uF0M_Lufp_2A.jpeg",
    },
    {
      name: "LeetCode",
      username: "srijanx35",
      url: "https://leetcode.com/u/srijanx35/",
      icon: <Code2 className="h-8 w-8 text-primary" />,
      stats: "26 problems solved",
      imageUrl:
        "https://sjc.microlink.io/mTOW4UP1O5bynfasBAqyMrlTzKJwf26kUdOsHNHdCj-O1fo9RbLxEb8u2S9CCI-8z5Kl_b7mZZy1fHK59MRk0Q.jpeg",
    },
  ]

  return (
    <section id="coding-profiles" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_70%,rgba(0,191,255,0.05),transparent)]"></div>
      <div className="container px-4 md:px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            <span className="relative">
              Coding Profiles
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30"></span>
            </span>
          </h2>
          <div className="mt-4 h-1 w-12 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Check out my problem-solving skills and coding challenges on these platforms.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {profiles.map((profile, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }} className="group">
              <Link href={profile.url} target="_blank" rel="noopener noreferrer">
                <div className="rounded-lg border border-primary/10 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-primary/10 h-full">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 p-3">{profile.icon}</div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{profile.name}</h3>
                  </div>

                  <div className="mb-4">
                    <p className="text-muted-foreground">
                      Username: <span className="text-foreground font-medium">@{profile.username}</span>
                    </p>
                    {profile.badges && (
                      <div className="mt-2">
                        <p className="text-sm text-muted-foreground mb-1">Badges:</p>
                        <div className="flex flex-wrap gap-2">
                          {profile.badges.map((badge, badgeIndex) => (
                            <span
                              key={badgeIndex}
                              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {profile.stats && (
                      <p className="mt-2 text-sm text-muted-foreground">
                        <span className="text-primary font-medium">{profile.stats}</span>
                      </p>
                    )}
                  </div>

                  <div className="relative aspect-video overflow-hidden rounded-md border border-primary/10">
                    <Image
                      src={profile.imageUrl || "/placeholder.svg"}
                      alt={`${profile.name} Profile`}
                      width={600}
                      height={400}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                      <p className="text-white text-sm font-medium">Click to view profile</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
