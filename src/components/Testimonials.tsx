import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Renata Silveira",
    role: "Arquiteta de Interiores",
    content: "A Casa Cort superou todas as minhas expectativas. O atendimento foi impecável e as cortinas de linho transformaram a sala do meu cliente em um ambiente de revista.",
    rating: 5,
  },
  {
    name: "Marcelo Oliveira",
    role: "Proprietário de Imóvel",
    content: "Trabalho profissional e pontual. A automação das persianas motorizadas funciona perfeitamente. Recomendo para quem busca tecnologia e design de alto padrão.",
    rating: 5,
  },
  {
    name: "Camila Mendes",
    role: "Designer de Interiores",
    content: "A consultoria técnica foi o diferencial. Eles entenderam exatamente o que eu precisava para o projeto corporativo. Qualidade têxtil e acabamento sem igual.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="bg-background py-24 lg:py-40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-24 text-center">
          <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-cta/10 text-cta border border-cta/20 shadow-lg shadow-cta/5">
            <Quote className="h-8 w-8" />
          </div>
          <h2 className="font-heading text-5xl font-bold text-foreground md:text-7xl lg:text-8xl leading-tight">
            Vozes da <br />
            <span className="text-cta italic font-light">Exclusividade</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-sans text-xl text-muted-foreground leading-relaxed">
            A verdadeira medida do nosso sucesso é a satisfação daqueles que confiam 
            no padrão Casa Cort para transformar seus espaços mais preciosos.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group glass-card flex flex-col items-center text-center p-12 hover:border-cta/20"
            >
              {/* Rating */}
              <div className="mb-10 flex gap-1.5">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-cta text-cta transition-transform duration-500 group-hover:scale-125" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="relative mb-12">
                <p className="font-heading text-2xl italic leading-relaxed text-foreground md:text-3xl">
                  "{item.content}"
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center mt-auto">
                <div className="mb-6 h-px w-12 bg-foreground/10 transition-all duration-700 group-hover:w-32 group-hover:bg-cta" />
                <h4 className="font-sans text-sm font-bold uppercase tracking-[0.3em] text-foreground">
                  {item.name}
                </h4>
                <p className="mt-2 font-sans text-[10px] text-muted-foreground uppercase tracking-[0.4em] font-semibold">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;