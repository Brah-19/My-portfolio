"use client"

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <h2 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
        <span className="w-8 h-px bg-primary/50" />
        About me
      </h2>
      <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg max-w-3xl">
        <p>
          {"I'm a front-end developer with 5+ years of experience building responsive, user-friendly web and mobile applications. I specialize in React, Next.js, and modern frontend technologies, with a proven track record of improving website performance by 30% through code optimization and best practices."}
        </p>
        <p>
          {"My journey in tech has taken me from web development internships at iBrand Ghana and Vandzilah Technology to building scalable user interfaces for fintech platforms like Hadi Finance."}
        </p>
      </div>
    </section>
  )
}
