import { ArrowDown } from "lucide-react"
import Link from "next/link"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import ExperienceSection from "@/components/experience-section"
import Footer from "@/components/footer"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import CodingProfiles from "@/components/coding-profiles"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <div className="container mx-auto flex justify-center py-8">
          <Link
            href="#about"
            className="flex items-center gap-2 rounded-full bg-muted p-4 text-muted-foreground transition-all duration-300 hover:text-primary hover:bg-primary/10 hover:scale-110"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </Link>
        </div>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CodingProfiles />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
