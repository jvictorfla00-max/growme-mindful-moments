import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/20">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-12 shadow-[var(--shadow-soft)] md:p-16">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
            
            <div className="relative z-10 text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Pronto para{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    crescer por dentro?
                  </span>
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  Comece hoje sua jornada de autoconhecimento e bem-estar emocional. 
                  Sem compromisso, cancele quando quiser.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" className="text-lg group">
                  Iniciar minha trilha
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  Ver planos
                </Button>
              </div>

              <div className="pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  🌿 Junte-se a mais de <span className="font-semibold text-foreground">10.000 pessoas</span> que já estão crescendo com o GROWME
                </p>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-gradient-to-tr from-accent/20 to-transparent blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
