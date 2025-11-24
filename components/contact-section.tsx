import { Mail, Github, MapPin, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contacto</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Estoy abierto a nuevas oportunidades y colaboraciones. No dudes en contactarme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <a
            href="mailto:carlosdelarosa1009@gmail.com"
            className="flex items-center gap-4 p-6 bg-background border border-border rounded-lg hover:border-accent transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <Mail className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Email</p>
              <p className="text-foreground font-medium">carlosdelarosa1009@gmail.com</p>
            </div>
          </a>

          <a
            href="https://github.com/Carlos-Dev09"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-background border border-border rounded-lg hover:border-accent transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <Github className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">GitHub</p>
              <p className="text-foreground font-medium">Carlos-Dev09</p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-6 bg-background border border-border rounded-lg">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <MapPin className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Ubicación</p>
              <p className="text-foreground font-medium">Cartagena de Indias, Colombia</p>
            </div>
          </div>

          <a
            href="https://www.linkedin.com/in/carlos-de-la-rosa-banquez-b669b7209/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-background border border-border rounded-lg hover:border-accent transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <Linkedin className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
              <p className="text-foreground font-medium">Carlos De La Rosa</p>
            </div>
          </a>
        </div>

        <div className="flex justify-center gap-4">
          <Button asChild size="lg" className="gap-2">
            <a href="mailto:carlosdelarosa1009@gmail.com">
              <Mail className="h-4 w-4" />
              Enviar un correo
            </a>
          </Button>
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Carlos Alberto De La Rosa Banquez. Todos los derechos reservados.</p>
      </footer>
    </section>
  )
}
