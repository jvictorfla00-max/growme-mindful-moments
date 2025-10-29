import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Leaf className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">GROWME</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Cresça por dentro 🌿
            </p>
          </div>

          {/* Links - Plataforma */}
          <div className="space-y-4">
            <h3 className="font-semibold">Plataforma</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Como funciona</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Trilhas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Planos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Comunidade</a></li>
            </ul>
          </div>

          {/* Links - Recursos */}
          <div className="space-y-4">
            <h3 className="font-semibold">Recursos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Meditações</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Dicas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Links - Empresa */}
          <div className="space-y-4">
            <h3 className="font-semibold">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Termos</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 GROWME. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
