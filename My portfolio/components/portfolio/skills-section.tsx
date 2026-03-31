"use client"

import { Code2, Layout, Database, Terminal, Cpu, Globe } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      { name: "React", Icon: Code2 },
      { name: "Next.js", Icon: Globe },
      { name: "Tailwind CSS", Icon: Cpu },
      { name: "TypeScript", Icon: Terminal },
    ],
  },
  {
    title: "Tools & Design",
    icon: Code2,
    skills: [
      { name: "Figma", Icon: Layout },
      { name: "GitHub", Icon: Globe },
      { name: "Postman", Icon: Terminal },
      { name: "VS Code", Icon: Code2 },
    ],
  },
  {
    title: "Backend & Other",
    icon: Database,
    skills: [
      { name: "Firebase", Icon: Cpu },
      { name: "Node.js", Icon: Terminal },
      { name: "Supabase", Icon: Database },
      { name: "Sanity", Icon: Code2 },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24">
      <h2 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
        <span className="w-8 h-px bg-primary/50" />
        I write;
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="space-y-4">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
              <category.icon size={16} />
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-3 py-1.5 bg-card border border-white/5 rounded-lg hover:border-primary/30 transition-all group"
                >
                  <skill.Icon size={14} className="text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
