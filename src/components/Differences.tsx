import { ShieldCheck, Ruler, Settings, HeartHandshake } from "lucide-react";

const differences = [
  {
    icon: HeartHandshake,
    title: "Atendimento de Luxo",
    description: "Consultoria técnica personalizada para garantir que cada detalhe atenda exatamente às suas necessidades.",
  },
  {
    icon: ShieldCheck,
    title: "Excelência em Materiais",
    description: "Curadoria rigorosa de tecidos nobres e componentes premium com garantia de durabilidade superior.",
  },
  {
    icon: Ruler,
    title: "Precisão Técnica",
    description: "Medição milimétrica e instalação profissional por equipe própria altamente qualificada.",
  },
  {
    icon: Settings,
    title: "Inovação & Conforto",
    description: "Sistemas de automação modernos e integrados para o máximo de praticidade no seu dia a dia.",
  },
];

const Differences = () => {
  return (
    <section id="diferenciais" className="bg-background py-24 lg:py-40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-8 inline-block rounded-full bg-cta/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-cta border border-cta/20">
              DNA de Exclusividade
            </div>
            <h2 className="font-heading text-5xl font-bold text-foreground md:text-7xl lg:text-8xl leading-tight">
              O Padrão de Luxo <br />
              <span className="text-cta italic font-light">Casa Cort</span>
            </h2>
          </div>
          <div className="lg:pb-4">
            <p className="max-w-xl font-sans text-xl text-muted-foreground leading-relaxed">
              Elevamos a experiência de decoração a um novo patamar, onde a tradição do toque 
              artesanal encontra a inovação tecnológica mais avançada do mercado.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {differences.map((item, index) => (
            <div 
              key={index} 
              className="glass-card group p-10 hover:border-cta/20"
            >
              {/* Icon Container */}
              <div className="mb-10 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/5 text-primary transition-all duration-700 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-6 shadow-sm group-hover:shadow-primary/20">
                <item.icon className="h-10 w-10" />
              </div>

              <h3 className="mb-6 font-heading text-2xl font-bold text-foreground tracking-tight">
                {item.title}
              </h3>
              
              <p className="font-sans text-base leading-relaxed text-muted-foreground/80">
                {item.description}
              </p>

              {/* Decorative accent */}
              <div className="absolute right-10 bottom-10 h-1 w-1 rounded-full bg-cta/30 transition-all duration-700 group-hover:w-12 group-hover:bg-cta" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differences;