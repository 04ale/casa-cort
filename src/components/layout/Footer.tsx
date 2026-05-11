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
    <footer className="bg-background pt-24 pb-12 border-t border-foreground/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="flex flex-col items-start">
            <h2 className="font-heading text-3xl font-bold text-foreground tracking-tight">
              CASA <span className="text-cta italic font-light">CORT</span>
            </h2>
            <p className="mt-8 font-sans text-base leading-relaxed text-muted-foreground/80 max-w-[280px]">
              Elegância que inspira e transforma ambientes exclusivos.
              Referência em design de interiores e automação de luxo.
            </p>
            <div className="mt-10 flex gap-5">
              <a href="#" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/5 text-foreground transition-all duration-500 hover:scale-110 hover:bg-cta hover:text-white hover:rotate-6 shadow-sm">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/5 text-foreground transition-all duration-500 hover:scale-110 hover:bg-cta hover:text-white hover:-rotate-6 shadow-sm">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/5 text-foreground transition-all duration-500 hover:scale-110 hover:bg-cta hover:text-white hover:rotate-6 shadow-sm">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-8">Navegação</h3>
            <ul className="space-y-4 font-sans text-sm">
              <li><Link to="/#home" className="text-muted-foreground transition-colors hover:text-cta font-medium">Início</Link></li>
              <li><Link to="/#categorias" className="text-muted-foreground transition-colors hover:text-cta font-medium">Coleções</Link></li>
              <li><Link to="/#diferenciais" className="text-muted-foreground transition-colors hover:text-cta font-medium">Diferenciais</Link></li>
              <li><Link to="/#processo" className="text-muted-foreground transition-colors hover:text-cta font-medium">Como Funciona</Link></li>
              <li><Link to="/#depoimentos" className="text-muted-foreground transition-colors hover:text-cta font-medium">Depoimentos</Link></li>
            </ul>
          </div>

          {/* Categories Links */}
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-8">Soluções</h3>
            <ul className="space-y-4 font-sans text-sm">
              <li><Link to="/#categorias" className="text-muted-foreground transition-colors hover:text-cta font-medium">Cortinas de Tecido</Link></li>
              <li><Link to="/#categorias" className="text-muted-foreground transition-colors hover:text-cta font-medium">Cortinas Blackout</Link></li>
              <li><Link to="/#categorias" className="text-muted-foreground transition-colors hover:text-cta font-medium">Persianas Rolô</Link></li>
              <li><Link to="/#categorias" className="text-muted-foreground transition-colors hover:text-cta font-medium">Persianas Horizontais</Link></li>
              <li><Link to="/#categorias" className="text-muted-foreground transition-colors hover:text-cta font-medium">Automação Residencial</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-8">Atendimento</h3>
            <ul className="space-y-6 font-sans text-sm text-muted-foreground">
              <li className="flex items-start gap-4 group">
                <MapPin className="h-5 w-5 shrink-0 text-cta mt-0.5 transition-transform group-hover:scale-110" />
                <span className="leading-relaxed group-hover:text-foreground transition-colors">Av. São João, 500<br />Atibaia, SP</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Phone className="h-5 w-5 shrink-0 text-cta transition-transform group-hover:scale-110" />
                <span className="group-hover:text-foreground transition-colors font-medium">(21) 93228-9158</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Mail className="h-5 w-5 shrink-0 text-cta transition-transform group-hover:scale-110" />
                <span className="group-hover:text-foreground transition-colors font-medium">contato@casacort.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 border-t border-foreground/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="font-sans text-[10px] text-muted-foreground/50 uppercase tracking-[0.5em] text-center md:text-left font-bold">
            © {new Date().getFullYear()} CASA CORT. LUXURY CURTAINS & DESIGN.
          </p>
          <p className="font-sans text-[10px] text-muted-foreground/50 uppercase tracking-[0.5em] font-bold">
            CREATED BY <a href="https://rhema-tech.vercel.app" target="_blank" rel="noopener noreferrer" className="text-foreground/80">RHEMATECH</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;