"use client"

import { ArrowRight, Calendar } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "From Bootcamp to Landing Your First Tech Job",
    excerpt:
      "My journey through ALX Software Development program and how it prepared me for real-world frontend development.",
    date: "March 2024",
    readTime: "8 min read",
    category: "Career",
  },
  {
    id: 2,
    title: "Building Fintech UIs: Lessons from Hadi Finance",
    excerpt:
      "Working on a platform serving 850+ informal retailers taught me crucial lessons about user-centric design in fintech.",
    date: "February 2025",
    readTime: "10 min read",
    category: "Frontend",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="scroll-mt-24">
      <h2 className="text-xl font-bold text-foreground mb-8">Latest Articles</h2>
      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="group bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-primary mb-2 block">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-1">
                  {post.excerpt}
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground shrink-0">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <a
                  href="#"
                  className="p-2 bg-secondary rounded-full text-primary opacity-0 group-hover:opacity-100 transition-all duration-300"
                  aria-label={`Read ${post.title}`}
                >
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
