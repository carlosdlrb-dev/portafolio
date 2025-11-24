"use client"

import { ArrowDown, Code2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-accent/10 animate-gradient-shift" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/40 rounded-full animate-float-slow" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent/30 rounded-full animate-float-slower" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-accent/40 rounded-full animate-float" />
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-accent/50 rounded-full animate-float-slow" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent/50 to-accent rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />
              <div className="relative rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 border-4 border-accent/20 hover:border-accent/40 transition-all duration-500 hover:scale-105 animate-fade-in">
                <Image
                  src="/images/carlos-profile.jpg"
                  alt="Carlos Alberto De La Rosa Banquez"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-up order-1 lg:order-2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
              <Code2 className="h-8 w-8 text-accent animate-pulse" />
              <Sparkles className="h-6 w-6 text-accent animate-bounce" />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight text-balance animate-slide-in-left">
              Carlos Alberto De La Rosa Banquez
            </h1>

            <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent text-balance animate-slide-in-right">
              Desarrollador de Software Backend
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty animate-fade-in delay-300">
              Especialista en integración de sistemas, optimización de procesos y construcción de plataformas web
              escalables
            </p>
          </div>
        </div>
        {/* </CHANGE> */}

        <div className="mt-12 animate-fade-in delay-500 text-center">
          <Button
            onClick={scrollToAbout}
            variant="ghost"
            size="icon"
            className="animate-bounce rounded-full hover:bg-accent/10 transition-all duration-300 hover:scale-110 relative group"
          >
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-lg group-hover:blur-xl transition-all opacity-0 group-hover:opacity-100" />
            <ArrowDown className="h-5 w-5 relative z-10" />
            <span className="sr-only">Scroll hacia abajo</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
