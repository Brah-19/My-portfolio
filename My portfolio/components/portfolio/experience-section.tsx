"use client"

import { Briefcase } from "lucide-react"

const experiences = [
  {
    period: "Feb 2024 - Present",
    role: "Frontend Developer - Intern",
    company: "Vandzilah Technology",
  },
  {
    period: "Mar 2024 - Oct 2024",
    role: "Web Development - Intern",
    company: "iBrand Ghana",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24">
      <h2 className="text-xl font-bold text-foreground mb-8">Work Experience</h2>
      <div className="flex flex-wrap gap-12">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
              <Briefcase size={24} />
            </div>
            <div>
              <h3 className="font-bold text-foreground">
                {exp.role}
              </h3>
              <p className="text-muted-foreground text-sm">
                {exp.company}
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                {exp.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
