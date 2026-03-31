"use client"

import { Home, FolderOpen, User, Mail, Github, Triangle, Menu, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "#home", icon: Home, id: "home" },
  { name: "My Projects", href: "#projects", icon: FolderOpen, id: "projects" },
  { name: "About me", href: "#about", icon: User, id: "about" },
  { name: "Contact me", href: "#contact", icon: Mail, id: "contact" },
]

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    navItems.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden fixed top-6 right-6 z-[60] p-3 bg-card/80 backdrop-blur-md border border-white/10 rounded-full text-foreground shadow-xl hover:scale-105 transition-all"
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-[45]" 
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside className={cn(
        "fixed left-0 top-0 h-screen w-64 bg-background border-r border-border flex flex-col p-8 z-50 transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1)",
        mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        <div className="mb-12">
          <Link href="/" onClick={() => setMobileOpen(false)} className="text-2xl font-bold text-foreground flex items-center gap-1 group">
            Toks<span className="text-primary group-hover:animate-bounce">.</span>
          </Link>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = activeSection === item.id
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center justify-between group px-4 py-3 rounded-lg transition-all duration-300",
                isActive ? "bg-white/5 text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} className={cn("transition-colors duration-300", isActive ? "text-primary scale-110" : "group-hover:text-primary group-hover:scale-110")} />
                <span className="font-medium">{item.name}</span>
              </div>
              {isActive && (
                <Triangle className="rotate-90 fill-primary text-primary animate-in fade-in slide-in-from-right-2 duration-300" size={10} />
              )}
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto">
        <a
          href="https://github.com/Brah-19"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-foreground transition-all group hover:bg-white/5 rounded-lg"
        >
          <Github size={20} className="group-hover:text-primary transition-all duration-300 group-hover:scale-110" />
          <span className="font-medium">My Github</span>
        </a>
      </div>
    </aside>
    </>
  )
}
