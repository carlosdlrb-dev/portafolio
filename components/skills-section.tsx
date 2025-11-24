"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function SkillsSection() {
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

  const skills = [
    {
      category: "Backend",
      items: ["PHP", "Laravel", "Livewire", "REST APIs", "Java", ".NET", "PostgreSQL", "MySQL", "Stored Procedures"],
    },
    {
      category: "Frontend",
      items: ["Vue.js", "Blade", "Next.js", "React", "TailwindCSS", "Alpine.js"],
    },
    {
      category: "DevOps / Herramientas",
      items: ["Git", "GitHub", "GitLab", "CI/CD", "Docker (básico)", "AWS (básico)", "Postman", "PHPUnit", "cPanel"],
    },
    {
      category: "Metodologías",
      items: ["Scrum", "Kanban"],
    },
  ]

  return (
    <section ref={sectionRef} id="skills" className="py-24 px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 animate-gradient-shift" />

      <div
        className={`max-w-4xl mx-auto relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 relative inline-block">
          Habilidades Técnicas
          <div className="absolute -bottom-2 left-0 w-20 h-1 bg-accent rounded-full animate-expand-width" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillGroup, index) => (
            <Card
              key={skillGroup.category}
              className={`p-6 border-border hover:border-accent/50 transition-all duration-500 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-2 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                {skillGroup.category}
                <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-accent/10 text-accent rounded-md border border-accent/20 hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
