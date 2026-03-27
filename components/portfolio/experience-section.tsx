"use client"

import { ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "November 2024 — March 2025",
    role: "Frontend Developer Intern",
    company: "Vandzilah Technology",
    companyUrl: "https://vandzilah.com",
    description:
      "Designed and built scalable user interfaces for Hadi Finance's web platforms, improving navigation for 850+ informal retailers. Built optimized admin dashboard reducing data retrieval time by 50% and developed interactive loan application dashboard reducing processing time by 40%.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    period: "March 2024 — October 2024",
    role: "Web Development Intern",
    company: "iBrand Ghana",
    companyUrl: "https://ibrandghana.com",
    description:
      "Created and maintained responsive websites using HTML, CSS, and JavaScript. Identified and rectified bugs across browsers and devices. Collaborated with designers to bring creative concepts to life and ensured website security and compatibility.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    period: "May 2024 — August 2024",
    role: "Database Design Intern",
    company: "Glof Company",
    companyUrl: "https://example.com",
    description:
      "Designed and analyzed databases for efficient data storage and retrieval. Organized and structured data for businesses and organizations to optimize performance.",
    tech: ["Database Design", "Data Analysis", "SQL"],
  },
  {
    period: "March 2024 — February 2026",
    role: "Professional Driver",
    company: "Uber",
    companyUrl: "https://uber.com",
    description:
      "Maintained 4.9+ star rating through safe, punctual, and exceptional service. Expert in urban navigation, passenger safety, and professional vehicle maintenance.",
    tech: ["Customer Service", "Urban Navigation", "Fleet Management"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="text-balance">Where I Have Worked</span>
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <article
              key={exp.role + exp.company}
              className="group bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
                {/* Period */}
                <p className="text-sm text-muted-foreground font-mono">
                  {exp.period}
                </p>

                {/* Details */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {exp.role}
                    <span className="text-primary"> · </span>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-primary"
                    >
                      {exp.company}
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
