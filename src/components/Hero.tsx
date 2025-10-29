import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-meditation.jpg";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 text-center">
        <div className="mx-auto max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            <span>Cresça por dentro</span>
          </div>
          
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Cultive o{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              equilíbrio emocional
            </span>{" "}
            em pequenos passos
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Transforme sua vida com micro-hábitos diários de bem-estar. 
            Trilhas guiadas, meditações e uma comunidade que te apoia na jornada do autoconhecimento.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="text-lg">
              Começar agora
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Conhecer o GROWME
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
