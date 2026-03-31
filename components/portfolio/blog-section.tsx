"use client"

import { ArrowRight, Calendar } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "From Bootcamp to Landing Your First Tech Job",
    excerpt:
      "My journey through ALX Software Development program and how it prepared me for real-world frontend development. I share the challenges, breakthroughs, and practical lessons that helped me secure my first internship at iBrand Ghana.",
    date: "March 2024",
    readTime: "8 min read",
    category: "Career",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "Building Fintech UIs: Lessons from Hadi Finance",
    excerpt:
      "Working on a platform serving 850+ informal retailers taught me crucial lessons about user-centric design in fintech. Discover how we optimized dashboards by 50%, the importance of data visualization, and why accessibility matters in financial apps.",
    date: "February 2025",
    readTime: "10 min read",
    category: "Frontend",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: 3,
    title: "The Power of Small Tech Communities in Ghana",
    excerpt:
      "Why I co-founded Splendor Charity and how local tech communities are shaping the next generation of developers. Breaking down barriers to tech education and mentorship in developing markets, one person at a time.",
    date: "January 2025",
    readTime: "6 min read",
    category: "Community",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 4,
    title: "React Performance Optimization: From Theory to Production",
    excerpt:
      "A deep dive into the performance optimizations I implemented at Vandzilah Technology that resulted in 30% improvement. Learn about code splitting, lazy loading, memoization, and how to measure what actually matters for your users.",
    date: "December 2024",
    readTime: "12 min read",
    category: "Technical",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 5,
    title: "Mobile Web Development: React Native vs Web Technologies",
    excerpt:
      "Exploring when to use React Native versus web technologies for cross-platform development. Based on real projects including mobile app development experience and lessons learned from building responsive web applications.",
    date: "November 2024",
    readTime: "9 min read",
    category: "Frontend",
    color: "from-indigo-500/20 to-blue-500/20",
  },
  {
    id: 6,
    title: "Sustainable Tech: My Journey as an Environmental Advocate",
    excerpt:
      "Balancing a career in tech with environmental activism as a Mini-Plastic Ambassador. How climate consciousness is shaping decisions in my development work and why sustainable coding practices matter.",
    date: "October 2024",
    readTime: "7 min read",
    category: "Sustainability",
    color: "from-green-500/20 to-lime-500/20",
  },
]

const categoryColors: Record<string, string> = {
  Career: "bg-blue-500/10 text-blue-300",
  Frontend: "bg-emerald-500/10 text-emerald-300",
  Community: "bg-purple-500/10 text-purple-300",
  Technical: "bg-orange-500/10 text-orange-300",
  Sustainability: "bg-green-500/10 text-green-300",
}

export function BlogSection() {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
            Blog
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-balance">Thoughts & Insights</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Articles about my journey in tech, frontend development best practices, and building communities in the developing world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Color bar */}
              <div className={`h-1 bg-gradient-to-r ${post.color}`} />

              <div className="p-6 flex flex-col h-full">
                {/* Category tag */}
                <div className="mb-3">
                  <span
                    className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                      categoryColors[post.category] ||
                      "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <a
                    href="#"
                    className="text-primary opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 duration-300"
                    aria-label={`Read ${post.title}`}
                  >
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
