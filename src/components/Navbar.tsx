import { Button } from "@/components/ui/button";
import { Leaf, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Leaf className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold">GROWME</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Funcionalidades
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Como funciona
            </a>
            <a href="#tracks" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Trilhas
            </a>
            <a href="#plans" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Planos
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">Entrar</Button>
            <Button>Começar agora</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border/40">
            <a href="#features" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Funcionalidades
            </a>
            <a href="#how-it-works" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Como funciona
            </a>
            <a href="#tracks" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Trilhas
            </a>
            <a href="#plans" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Planos
            </a>
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full">Entrar</Button>
              <Button className="w-full">Começar agora</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
