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
    <section id="diferenciais" className="bg-secondary/30 py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-20 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              Nossos Valores
            </div>
            <h2 className="font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              O Padrão de Qualidade da <span className="text-primary italic">Casa Cort</span>
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="max-w-xl font-sans text-lg text-muted-foreground">
              Muito além de simples cortinas, oferecemos uma experiência completa de design 
              que une tradição têxtil com a mais alta tecnologia de automação.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {differences.map((item, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col items-start rounded-[2rem] bg-background p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
            >
              {/* Icon Container */}
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                <item.icon className="h-8 w-8" />
              </div>

              <h3 className="mb-4 font-heading text-xl font-bold text-foreground">
                {item.title}
              </h3>
              
              <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              {/* Decorative accent */}
              <div className="absolute right-8 top-8 h-2 w-2 rounded-full bg-primary/20 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differences;