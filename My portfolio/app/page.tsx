import { Sidebar } from "@/components/portfolio/sidebar"
import { HeroSection } from "@/components/portfolio/hero-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { BlogSection } from "@/components/portfolio/blog-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Footer } from "@/components/portfolio/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white">
      <Sidebar />
      <main className="flex-1 md:ml-64 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-24 space-y-20 md:space-y-32">
          <HeroSection />
          
          <div className="grid lg:grid-cols-[1fr_350px] gap-12 md:gap-24">
            <div className="space-y-20 md:space-y-32">
              <AboutSection />
              <ExperienceSection />
              <ProjectsSection />
              <BlogSection />
            </div>
            
            <aside className="space-y-32">
              <div className="sticky top-24 space-y-32">
                <SkillsSection />
              </div>
            </aside>
          </div>

          <ContactSection />
          
          <Footer />
        </div>
      </main>
    </div>
  )
}
