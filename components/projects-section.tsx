"use client"

import { Card } from "@/components/ui/card"
import { ExternalLink, Star, Github } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function ProjectsSection() {
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
    <section ref={sectionRef} id="projects" className="py-24 px-6 lg:px-8 border-t border-border relative">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-transparent" />

      <div
        className={`max-w-4xl mx-auto relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 relative inline-block">
          Proyectos
          <div className="absolute -bottom-2 left-0 w-20 h-1 bg-accent rounded-full animate-expand-width" />
        </h2>

        <div className="grid gap-8 md:gap-12">
          {/* ProAula - Nuevo proyecto */}
          <Card className="p-8 border-2 border-accent/30 relative overflow-hidden group hover:border-accent/60 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute -inset-1 bg-gradient-to-r from-accent/50 via-accent to-accent/50 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

            <div className="absolute top-4 right-4 z-10">
              <div className="flex items-center gap-1 px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full border border-accent/40 animate-pulse-slow backdrop-blur-sm">
                <Star className="h-3 w-3 fill-accent animate-spin-slow" />
                <span>En Vivo</span>
              </div>
            </div>

            <div className="space-y-6 relative z-10">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3 flex items-center gap-2 group-hover:text-accent transition-colors duration-300">
                  <a 
                    href="https://proaula.tecnologicocomfenalco.edu.co/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:underline"
                  >
                    ProAula
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </a>
                </h3>
                <p className="text-lg text-accent font-medium mb-4">
                  Gestor de Proyectos de Aula - Tecnológico Comfenalco
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                ProAula es un sistema gestor de proyectos de aula desarrollado para la Fundación Universitaria Tecnológico Comfenalco, que permite a los estudiantes gestionar y realizar seguimiento de sus proyectos académicos de manera eficiente.
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                {["Laravel", "PostgreSQL", "Blade", "PHP"].map((tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-accent text-accent-foreground rounded-md font-medium text-sm hover:scale-110 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 cursor-default"
                    style={{
                      animation: isVisible ? `fadeInUp 0.5s ease-out ${index * 0.1}s both` : "none",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Card>

          {/* MMC Shipping */}
          <Card className="p-8 border-2 border-accent/30 relative overflow-hidden group hover:border-accent/60 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute -inset-1 bg-gradient-to-r from-accent/50 via-accent to-accent/50 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

            <div className="absolute top-4 right-4 z-10">
              <div className="flex items-center gap-1 px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full border border-accent/40 animate-pulse-slow backdrop-blur-sm">
                <Star className="h-3 w-3 fill-accent animate-spin-slow" />
                <span>En Vivo</span>
              </div>
            </div>

            <div className="space-y-6 relative z-10">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3 flex items-center gap-2 group-hover:text-accent transition-colors duration-300">
                  <a 
                    href="https://mmcshipping.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:underline"
                  >
                    MMC Shipping
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </a>
                </h3>
                <p className="text-lg text-accent font-medium mb-4">
                  Landing Page - Marine Management Company
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                Landing page profesional para Marine Management Company, empresa especializada en asesoría virtual en procesos marítimos. Diseño moderno y responsive que presenta los servicios de la compañía de manera clara y atractiva.
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                {["Astro", "Tailwind CSS", "TypeScript"].map((tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-accent text-accent-foreground rounded-md font-medium text-sm hover:scale-110 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 cursor-default"
                    style={{
                      animation: isVisible ? `fadeInUp 0.5s ease-out ${index * 0.1}s both` : "none",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Card>

          {/* EcoSwap - Proyecto existente */}
          <Card className="p-8 border-2 border-accent/30 relative overflow-hidden group hover:border-accent/60 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute -inset-1 bg-gradient-to-r from-accent/50 via-accent to-accent/50 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

            <div className="absolute top-4 right-4 z-10">
              <div className="flex items-center gap-1 px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full border border-accent/40 animate-pulse-slow backdrop-blur-sm">
                <Star className="h-3 w-3 fill-accent animate-spin-slow" />
                <span>Destacado</span>
              </div>
            </div>

            <div className="space-y-6 relative z-10">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3 flex items-center gap-2 group-hover:text-accent transition-colors duration-300">
                  EcoSwap
                  <Github className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </h3>
                <p className="text-lg text-accent font-medium mb-4">
                  Plataforma de intercambio de artículos
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href="https://github.com/Carlos-Dev09/ecoswap-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20 hover:bg-accent/20 hover:border-accent/40 transition-all duration-300"
                  >
                    <Github className="h-3 w-3" />
                    Frontend
                  </a>
                  <a
                    href="https://github.com/Carlos-Dev09/ecoswap-backend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20 hover:bg-accent/20 hover:border-accent/40 transition-all duration-300"
                  >
                    <Github className="h-3 w-3" />
                    Backend
                  </a>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                EcoSwap es una plataforma con una API REST que permite a los usuarios intercambiar artículos que aún
                tienen vida útil, promoviendo la sostenibilidad y reduciendo el desperdicio.
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                {["Java", "Spring Boot", "Next.js", "MySQL"].map((tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-accent text-accent-foreground rounded-md font-medium text-sm hover:scale-110 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 cursor-default"
                    style={{
                      animation: isVisible ? `fadeInUp 0.5s ease-out ${index * 0.1}s both` : "none",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
