"use client"

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "📘" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Vue.js", icon: "💚" },
      { name: "React Native", icon: "📱" },
    ],
  },
  {
    category: "Design & Tools",
    items: [
      { name: "Figma", icon: "🎯" },
      { name: "Adobe XD", icon: "🖌️" },
      { name: "Miro", icon: "📐" },
      { name: "HTML & CSS", icon: "🎨" },
      { name: "JavaScript/ES6+", icon: "✨" },
    ],
  },
  {
    category: "Backend & Other",
    items: [
      { name: "Firebase", icon: "🔥" },
      { name: "Sanity CMS", icon: "📄" },
      { name: "PHP", icon: "🐘" },
      { name: "Database Design", icon: "🗄️" },
      { name: "Git & GitHub", icon: "📦" },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="text-balance">Technologies I Work With</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category) => (
            <div
              key={category.category}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-6 pb-3 border-b border-border">
                {category.category}
              </h3>
              <ul className="space-y-4">
                {category.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </span>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
