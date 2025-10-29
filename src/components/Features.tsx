import { Card } from "@/components/ui/card";
import { Brain, Calendar, Heart, Users, Sparkles, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Trilhas Personalizadas",
    description: "Roteiros de bem-estar adaptados ao seu perfil emocional e objetivos pessoais.",
  },
  {
    icon: Calendar,
    title: "Práticas Diárias",
    description: "Reflexões, ações e meditações guiadas que cabem na sua rotina.",
  },
  {
    icon: Heart,
    title: "Autoconhecimento",
    description: "Cartas semanais e exercícios que revelam sua essência e potencial.",
  },
  {
    icon: Users,
    title: "Comunidade Acolhedora",
    description: "Conecte-se com pessoas que também estão na jornada de crescimento.",
  },
  {
    icon: Sparkles,
    title: "Recompensas e Streaks",
    description: "Celebre cada conquista e construa consistência com nosso sistema de progresso.",
  },
  {
    icon: TrendingUp,
    title: "Evolução Visível",
    description: "Acompanhe seu crescimento com gráficos de humor e calendário emocional.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Tudo que você precisa para{" "}
            <span className="text-primary">crescer por dentro</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Uma plataforma completa para transformar sua relação com suas emoções
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border bg-card p-8 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-soft)] hover:-translate-y-1"
              style={{ transitionDuration: 'var(--transition-smooth)' }}
            >
              <div className="space-y-4">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Decorative gradient on hover */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity group-hover:opacity-100"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
