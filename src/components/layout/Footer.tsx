import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";


const Instagram = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Facebook = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);


const Footer = () => {
  return (
    <footer className="bg-neutral-50 pt-24 pb-12 border-t border-neutral-200">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="flex flex-col items-start">
            <h2 className="font-heading text-2xl font-bold text-foreground tracking-tight">
              CASA <span className="text-primary italic">CORT</span>
            </h2>
            <p className="mt-6 font-sans text-sm leading-relaxed text-muted-foreground max-w-[280px]">
              Elegância que inspira e transforma ambientes. 
              Especialistas em soluções sob medida com design de alto padrão e tecnologia.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-foreground shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition-all hover:scale-110 hover:bg-primary hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-foreground shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition-all hover:scale-110 hover:bg-primary hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-foreground shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition-all hover:scale-110 hover:bg-primary hover:text-white">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold text-foreground">Explore</h3>
            <ul className="mt-6 space-y-4 font-sans text-sm">
              <li><Link to="/#home" className="text-muted-foreground transition-colors hover:text-primary">Início</Link></li>
              <li><Link to="/#categorias" className="text-muted-foreground transition-colors hover:text-primary">Coleções</Link></li>
              <li><Link to="/#diferenciais" className="text-muted-foreground transition-colors hover:text-primary">Diferenciais</Link></li>
              <li><Link to="/#processo" className="text-muted-foreground transition-colors hover:text-primary">Como Funciona</Link></li>
              <li><Link to="/#depoimentos" className="text-muted-foreground transition-colors hover:text-primary">Depoimentos</Link></li>
            </ul>
          </div>

          {/* Categories Links */}
          <div>
            <h3 className="font-heading text-lg font-bold text-foreground">Coleções</h3>
            <ul className="mt-6 space-y-4 font-sans text-sm">
              <li><Link to="/#categorias" className="text-muted-foreground transition-colors hover:text-primary">Cortinas de Tecido</Link></li>
              <li><Link to="/#categorias" className="text-muted-foreground transition-colors hover:text-primary">Cortinas Blackout</Link></li>
              <li><Link to="/#categorias" className="text-muted-foreground transition-colors hover:text-primary">Persianas Rolô</Link></li>
              <li><Link to="/#categorias" className="text-muted-foreground transition-colors hover:text-primary">Persianas Horizontais</Link></li>
              <li><Link to="/#categorias" className="text-muted-foreground transition-colors hover:text-primary">Automação</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-heading text-lg font-bold text-foreground">Atendimento</h3>
            <ul className="mt-6 space-y-5 font-sans text-sm text-muted-foreground">
              <li className="flex items-start gap-4">
                <MapPin className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                <span className="leading-relaxed">Av. das Américas, 500<br />Barra da Tijuca, RJ</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <span>(21) 98765-4321</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <span>contato@casacort.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 border-t border-neutral-200 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-sans text-[10px] text-muted-foreground uppercase tracking-[0.2em] text-center md:text-left">
            © 2026 CASA CORT. TODOS OS DIREITOS RESERVADOS.
          </p>
          <p className="font-sans text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
            DESIGN BY <span className="text-foreground font-bold">PRO MAX STUDIO</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;