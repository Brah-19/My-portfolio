"use client"

import { Github, Linkedin, Twitter, Heart } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Brah-19",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/emmanuel-opare-717066285?",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://x.com/oparexoxo?s=11",
    icon: Twitter,
  },
]

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a
              href="#"
              className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
            >
              JD
            </a>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Software Engineer building accessible, pixel-perfect digital experiences for the web.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-secondary rounded-lg text-muted-foreground hover:text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="flex items-center gap-1">
            © {currentYear} Emmanuel Opare. Built with
            <Heart size={14} className="text-red-500 fill-red-500" />
            using Next.js
          </p>
          <p>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <span className="mx-2">·</span>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
