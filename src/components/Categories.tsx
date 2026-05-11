import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    title: "Cortinas de Tecido",
    description: "Leveza e sofisticação em tecidos nobres para transformar sua sala ou quarto.",
    image: "/src/assets/categories/fabric.png",
    link: "#fabric",
  },
  {
    title: "Cortinas Blackout",
    description: "Bloqueio total de luminosidade com elegância e conforto térmico absoluto.",
    image: "/src/assets/categories/blackout.png",
    link: "#blackout",
  },
  {
    title: "Persianas Rolô",
    description: "Design minimalista e funcionalidade para ambientes modernos e práticos.",
    image: "/src/assets/categories/roller.png",
    link: "#roller",
  },
  {
    title: "Persianas Horizontais",
    description: "Controle preciso de luz e privacidade com materiais de alta durabilidade.",
    image: "/src/assets/categories/horizontal.png",
    link: "#horizontal",
  },
  {
    title: "Persianas Motorizadas",
    description: "Conforto e tecnologia na ponta dos dedos com automação silenciosa e integrada.",
    image: "/src/assets/categories/motorized.png",
    link: "#motorized",
  },
  {
    title: "Cortinas Corporativas",
    description: "Soluções profissionais para escritórios, aliando estética e produtividade.",
    image: "/src/assets/categories/corporate.png",
    link: "#corporate",
  },
];

const whatsappNumber = "5511932289158";

const Categories = () => {
  return (
    <section id="categorias" className="bg-background py-24 lg:py-40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-5xl font-bold text-foreground md:text-7xl lg:text-8xl leading-tight">
              A Excelência em <br />
              <span className="text-cta italic font-light">Coleções</span>
            </h2>
            <p className="mt-8 max-w-xl font-sans text-lg text-muted-foreground leading-relaxed">
              Uma curadoria rigorosa de texturas e tecnologias, desenvolvida para
              clientes que não abrem mão da exclusividade em cada detalhe.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="h-px w-40 bg-foreground/10 mb-4" />
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-muted-foreground">Portfolio 2026</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre ${category.title} que vi no site.`);
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

            return (
              <a
                key={index}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group relative h-[600px] block overflow-hidden rounded-[3rem] transition-all duration-700 hover:shadow-3xl",
                  index === 0 || index === 4 ? "lg:col-span-1" : ""
                )}
              >
                {/* Image Background with Ken Burns effect on hover */}
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Liquid Glass Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/20 to-transparent opacity-80 transition-all duration-500 group-hover:opacity-100" />

                {/* Content (Bottom) */}
                <div className="absolute inset-x-0 bottom-0 p-10 text-white">
                  <div className="mb-4 inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-widest font-bold">
                    Premium Collection
                  </div>
                  <h3 className="font-heading text-3xl font-bold md:text-4xl tracking-tight">
                    {category.title}
                  </h3>

                  <div className="mt-6 overflow-hidden transition-all duration-700 max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100">
                    <p className="font-sans text-base text-white/70 leading-relaxed mb-8">
                      {category.description}
                    </p>

                    <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-cta-foreground">
                      <span className="px-6 py-3 bg-cta rounded-full shadow-lg shadow-cta/30">
                        Consultar Orçamento
                      </span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-transform group-hover:translate-x-2">
                        <ArrowUpRight className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glassy border on hover */}
                <div className="absolute inset-0 border border-white/0 transition-all duration-700 group-hover:border-white/20 rounded-[3rem]" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;