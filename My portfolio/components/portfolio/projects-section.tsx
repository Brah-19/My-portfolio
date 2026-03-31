"use client"

import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Noteeey",
    description:
      "A responsive note-taking web app with real-time collaboration, allowing 1000+ users to create, edit, and share notes seamlessly.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Firebase"],
    github: "https://github.com/Brah-19",
    live: "https://noteeey.com",
  },
  {
    title: "Support Hive",
    description:
      "A global crowdfunding platform enabling users to raise funds for personal initiatives and charitable projects.",
    tech: ["React", "Tailwind CSS", "Sanity CMS", "Paystack", "Firebase"],
    github: "https://github.com/Brah-19",
    live: "https://supporthivee.org",
  },
  {
    title: "SeaBlue Recipes",
    description:
      "A responsive recipe sharing web application with intuitive card-based interface and dynamic recipe data fetching.",
    tech: ["React", "Tailwind CSS", "JavaScript ES6+", "Vite"],
    github: "https://github.com/Brah-19",
    live: "https://seabluerecipes.com",
  },
  {
    title: "Hadi Finance",
    description:
      "Optimized admin dashboard with data queuing from backend, reducing data retrieval time by 50% for managing 850+ informal retailers.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/Brah-19",
    live: "https://example.com",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold text-foreground">Projects</h2>
        <a href="https://github.com/Brah-19" target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-medium hover:underline">
          See all projects
        </a>
      </div>

      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group relative bg-card/40 backdrop-blur-xl border border-white/5 rounded-2xl p-8 md:p-10 transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,209,178,0.15)] hover:bg-card/60 overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors duration-500" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-foreground group-hover:text-primary transition-colors duration-300 tracking-tight">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-[10px] md:text-xs font-bold px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-300"
                    title="View Source"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary/10 rounded-xl text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    title="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="max-w-3xl">
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-0">
                  {project.description}
                </p>
              </div>
              
              {/* Optional Decoration */}
              <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between text-xs text-muted-foreground/50 uppercase tracking-widest font-bold">
                <span>Featured Project</span>
                <span className="group-hover:text-primary transition-colors duration-300">Case Study Coming Soon</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
