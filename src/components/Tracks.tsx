import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flower2, Focus, Heart, Smile } from "lucide-react";

const tracks = [
  {
    icon: Flower2,
    title: "Trilha da Calma",
    description: "Encontre serenidade no caos do dia a dia com práticas de respiração e presença.",
    duration: "21 dias",
    color: "from-primary/20 to-accent/20",
  },
  {
    icon: Focus,
    title: "Trilha do Foco",
    description: "Desenvolva clareza mental e produtividade consciente com técnicas de concentração.",
    duration: "21 dias",
    color: "from-accent/20 to-primary/20",
  },
  {
    icon: Heart,
    title: "Trilha do Amor-Próprio",
    description: "Cultive autocompaixão e construa uma relação saudável consigo mesmo.",
    duration: "21 dias",
    color: "from-primary/20 to-secondary/40",
  },
  {
    icon: Smile,
    title: "Trilha da Gratidão",
    description: "Transforme sua perspectiva reconhecendo as pequenas alegrias da vida.",
    duration: "21 dias",
    color: "from-secondary/40 to-accent/20",
  },
];

const Tracks = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Escolha sua{" "}
            <span className="text-primary">trilha de crescimento</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada trilha é cuidadosamente desenhada para guiar você em uma jornada específica
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {tracks.map((track, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border bg-card transition-all hover:shadow-[var(--shadow-soft)] hover:-translate-y-2"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-0 transition-opacity group-hover:opacity-100`}></div>
              
              <div className="relative p-6 space-y-6">
                {/* Icon */}
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110 group-hover:rotate-6">
                  <track.icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    {track.duration}
                  </div>
                  <h3 className="text-xl font-semibold">{track.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {track.description}
                  </p>
                </div>

                {/* CTA */}
                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Começar trilha
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
