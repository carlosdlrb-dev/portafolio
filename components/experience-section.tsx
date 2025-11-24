import { Card } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Experiencia Laboral</h2>

        <Card className="p-8 border-border">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">Analista y Desarrollador FullStack</h3>
              <p className="text-lg text-accent font-medium mb-4">
                Fundación Universitaria Tecnológico Comfenalco | Plaza Innova
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Febrero 2024 – Noviembre 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Cartagena, Colombia</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3 leading-relaxed">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    Desarrollo de aplicaciones con Laravel, Livewire y Vue.js, priorizando escalabilidad y rendimiento
                  </span>
                </li>
                <li className="flex gap-3 leading-relaxed">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    Implementé procedimientos almacenados, reportes y dashboards para optimizar procesos académicos
                  </span>
                </li>
                <li className="flex gap-3 leading-relaxed">
                  <span className="text-accent mt-1">•</span>
                  <span>
                    Lideré la construcción de un sistema de gestión de prácticas estudiantiles, mejorando los tiempos de
                    asignación administrativa
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
