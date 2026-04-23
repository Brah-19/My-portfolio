"use client"

import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Noteeey",
    description:
      "A responsive note-taking web app with real-time collaboration, allowing 1000+ users to create, edit, and share notes seamlessly with 30% increase in user retention.",
    image: "/projects/noteeey.jpg",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Firebase", "React Markdown"],
    github: "https://github.com/Brah-19",
    live: "https://noteeey.vercel.app/",
  },
  {
    title: "Support Hive",
    description:
      "A global crowdfunding platform enabling users to raise funds for personal initiatives and charitable projects with secure payment processing and 30% improvement in engagement.",
    image: "/projects/supporthive.jpg",
    tech: ["React", "Tailwind CSS", "Sanity CMS", "Paystack", "Firebase"],
    github: "https://github.com/Brah-19",
    live: "https://supporthivee.org",
  },
  {
    title: "SeaBlue Recipes",
    description:
      "A responsive recipe sharing web application with intuitive card-based interface, dynamic recipe data fetching, and reusable React components for improved scalability.",
    image: "/projects/seablue.jpg",
    tech: ["React", "Tailwind CSS", "JavaScript ES6+", "Vite", "Vercel"],
    github: "https://github.com/Brah-19",
    live: "https://seabluerecipes.vercel.app/",
  },
  {
    
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="text-balance">Selected Work</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-secondary overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">
                  {index === 0 && "🛒"}
                  {index === 1 && "🤖"}
                  {index === 2 && "✅"}
                  {index === 3 && "🎨"}
                </div>
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={`View ${project.title} live`}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
