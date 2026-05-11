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
    <section id="depoimentos" className="bg-background py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-24 text-center">
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Quote className="h-6 w-6" />
          </div>
          <h2 className="font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            A Experiência <span className="text-primary italic">Casa Cort</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-muted-foreground">
            A satisfação de quem confia a estética e o conforto de seus ambientes em nossas mãos
            é o que nos move a buscar a excelência em cada detalhe.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center"
            >
              {/* Rating */}
              <div className="mb-8 flex gap-1">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="relative mb-10">
                <p className="font-heading text-xl italic leading-relaxed text-foreground md:text-2xl lg:text-3xl">
                  "{item.content}"
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center">
                <div className="mb-4 h-[2px] w-12 bg-primary/20 transition-all duration-500 group-hover:w-24 group-hover:bg-primary" />
                <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-foreground">
                  {item.name}
                </h4>
                <p className="mt-1 font-sans text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
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