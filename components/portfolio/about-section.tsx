"use client"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              <span className="text-balance">Front-End Developer & Problem Solver</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {"I'm a front-end developer with 5+ years of experience building responsive, user-friendly web and mobile applications. I specialize in React, Next.js, and modern frontend technologies, with a proven track record of improving website performance by 30% through code optimization and best practices."}
              </p>
              <p>
                {"My journey in tech has taken me from web development internships at iBrand Ghana and Vandzilah Technology to building scalable user interfaces for fintech platforms like Hadi Finance. I'm passionate about creating intuitive interfaces that not only look great but deliver measurable results—like reducing application processing time by 40%."}
              </p>
              <p>
                {"Beyond coding, I'm committed to giving back through Splendor Charity, where I co-founded an initiative empowering women and children through career-building programs. I'm also an environmental advocate as a Mini-Plastic Ambassador in Ghana."}
              </p>
            </div>
          </div>

          {/* Stats/Highlights */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <p className="text-4xl font-bold text-primary mb-2">5+</p>
              <p className="text-muted-foreground text-sm">Years of Experience</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <p className="text-4xl font-bold text-primary mb-2">30%</p>
              <p className="text-muted-foreground text-sm">Performance Improvement</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <p className="text-4xl font-bold text-primary mb-2">850+</p>
              <p className="text-muted-foreground text-sm">Users Impacted</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <p className="text-4xl font-bold text-primary mb-2">40%</p>
              <p className="text-muted-foreground text-sm">Processing Time Reduced</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
