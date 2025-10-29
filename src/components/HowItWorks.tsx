import { CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Descubra seu perfil emocional",
    description: "Responda perguntas simples e receba uma trilha personalizada para você.",
  },
  {
    number: "02",
    title: "Pratique diariamente",
    description: "Receba exercícios de reflexão, ação prática e meditação todos os dias.",
  },
  {
    number: "03",
    title: "Acompanhe sua evolução",
    description: "Veja seu progresso, celebre conquistas e ganhe recompensas pela constância.",
  },
  {
    number: "04",
    title: "Conecte-se com a comunidade",
    description: "Participe de grupos, compartilhe experiências e inspire outras pessoas.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Como funciona o{" "}
            <span className="text-primary">GROWME</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Quatro passos simples para iniciar sua jornada de transformação
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative flex gap-8 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-soft)]"
            >
              {/* Step Number */}
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-2xl font-bold text-primary-foreground shadow-[var(--shadow-soft)]">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3">
                <h3 className="text-2xl font-semibold flex items-center gap-3">
                  {step.title}
                  <CheckCircle className="h-5 w-5 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="absolute left-[4.5rem] top-[6rem] h-12 w-0.5 bg-gradient-to-b from-primary/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
