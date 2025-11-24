import { Card } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 lg:px-8 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Educación</h2>

        <Card className="p-8 border-border">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-accent" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-foreground mb-2">Tecnólogo en Desarrollo de Software</h3>
              <p className="text-lg text-accent font-medium mb-4">Fundación Universitaria Tecnológico Comfenalco</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Graduación: Octubre 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Cartagena, Colombia</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
