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
    <section id="categorias" className="bg-background py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 text-center lg:text-left">
          <h2 className="font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Nossas <span className="text-primary italic">Coleções</span>
          </h2>
          <p className="mt-6 max-w-2xl font-sans text-lg text-muted-foreground">
            Explore nossa curadoria de produtos desenvolvidos para elevar o padrão estético
            e o conforto de qualquer ambiente.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre ${category.title} que vi no site.`);
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

            return (
              <a
                key={index}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-[500px] block overflow-hidden rounded-[2.5rem] bg-neutral-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image Background */}
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-95" />

                {/* Content (Bottom) */}
                <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                  <h3 className="font-heading text-2xl font-bold md:text-3xl">
                    {category.title}
                  </h3>

                  <div className="mt-4 overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100">
                    <p className="font-sans text-sm text-gray-300 leading-relaxed">
                      {category.description}
                    </p>

                    <div className="mt-6 flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-primary transition-colors hover:text-white">
                      Solicitar Orçamento
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 transition-transform group-hover:translate-x-1">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle accent border on hover */}
                <div className="absolute inset-0 border-2 border-primary/0 transition-all duration-500 group-hover:border-primary/30 rounded-[2.5rem]" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;