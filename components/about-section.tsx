"use client"

import { Card } from "@/components/ui/card"
import { MapPin, Mail, Phone, Linkedin, Github } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-24 px-6 lg:px-8 border-t border-border relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent opacity-50" />

      <div
        className={`max-w-4xl mx-auto relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 relative inline-block">
          Sobre mí
          <div className="absolute -bottom-2 left-0 w-20 h-1 bg-accent rounded-full animate-expand-width" />
        </h2>

        <div className="space-y-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed text-lg hover:text-foreground transition-colors duration-300">
              Desarrollador de Software Backend con cerca de 2 años de experiencia laboral en Laravel, Java, Livewire y
              Vue.js, y más de 3 años en desarrollo de software. Especialista en integración de sistemas, optimización
              de procesos y construcción de CRM y plataformas web a medida.
            </p>
          </div>

          <Card className="p-6 border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1 group">
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              Información de Contacto
              <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse" />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 group-hover:animate-bounce" />
                <span className="text-muted-foreground">Cartagena de Indias, Colombia</span>
              </div>
              <div className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                  carlosdelarosa1009@gmail.com
              </div>
              <div className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <Github className="h-5 w-5 text-accent flex-shrink-0" />
                  <a href="https://github.com/Carlos-Dev09" target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
              </div>
              <div className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <Linkedin className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="https://github.com/carlosdlrb-dev" target="_blank" rel="noopener noreferrer">
                  <span className="text-muted-foreground">LinkedIn</span>
                </a>a
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
