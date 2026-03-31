"use client"

import { Download } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="relative group animate-in fade-in duration-1000">
      {/* Banner Background */}
      <div className="h-48 md:h-64 w-full rounded-2xl overflow-hidden relative border border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-purple-600/20 to-transparent" />
        <div className="absolute top-[-50%] left-[-20%] w-[100%] h-[200%] bg-[radial-gradient(circle,rgba(0,209,178,0.15)_0%,transparent_60%)] animate-pulse" />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 -mt-16 md:-mt-20 flex flex-col md:flex-row items-end justify-between gap-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end gap-6 w-full md:w-auto">
          {/* Overlapping Avatar Profile */}
          <div className="relative group/avatar mx-auto md:mx-0">
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary via-purple-500 to-pink-500 rounded-full opacity-60 group-hover/avatar:opacity-100 transition-all blur-md duration-700 animate-pulse" />
            <div className="h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-background bg-card overflow-hidden relative shadow-2xl z-10">
              <Image
                src="https://github.com/Brah-19.png"
                alt="Emmanuel Opare"
                fill
                className="object-cover transition-transform duration-700 group-hover/avatar:scale-110"
                priority
              />
            </div>
            <div className="absolute bottom-2 right-2 h-5 w-5 bg-emerald-500 border-2 border-background rounded-full shadow-lg" />
          </div>

          <div className="pb-2 text-center md:text-left flex-1">
            <h1 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Emmanuel Opare
            </h1>
            <p className="text-primary font-bold text-lg md:text-xl tracking-wide uppercase mt-1">
              Software Engineer
            </p>
          </div>
        </div>

        <div className="pb-4 w-full md:w-auto flex justify-center">
          <a
            href="/emmanuel-resume.pdf"
            download
            className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-bold rounded-xl shadow-[0_0_20px_rgba(0,209,178,0.3)] hover:shadow-[0_0_30px_rgba(0,209,178,0.5)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Download Resumer
            <Download size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
