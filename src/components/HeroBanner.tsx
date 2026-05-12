import { MessageCircle } from "lucide-react";

const HeroBanner = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center bg-background">
      {/* Background with Elegant Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/src/assets/heroBanner.webp')" }}
      >
        {/* Liquid Glass Overlay */}
        <div className="absolute inset-0 bg-background/40 lg:bg-linear-to-r lg:from-background lg:via-background/60 lg:to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cta/20 bg-cta/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-cta uppercase backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cta opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cta"></span>
            </span>
            Excelência em Design de Interiores
          </div>

          <h1 className="mb-6 font-heading text-6xl font-bold leading-none text-foreground md:text-8xl lg:text-9xl">
            A Arte do <br />
            <span className="text-cta italic font-light">Refinamento</span> <br />
            em Janelas
          </h1>

          <p className="mb-10 max-w-xl font-sans text-lg text-muted-foreground md:text-xl leading-relaxed">
            Elegância sob medida para os ambientes mais exclusivos.
            Descubra coleções que unem tecnologia e sofisticação artesanal.
          </p>

          <div className="flex flex-col gap-5 sm:flex-row">
            <a
              href="https://wa.me/5511932289158?text=Olá! Gostaria de agendar uma consultoria para cortinas na Casa Cort."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium-cta group"
            >
              <MessageCircle className="h-6 w-6 transition-transform group-hover:rotate-12" />
              Solicitar Orçamento
            </a>

            <a
              href="#categories"
              className="btn-premium border border-foreground/10 bg-white/20 backdrop-blur-xl text-foreground hover:bg-white/40 cursor-pointer"
            >
              Explorar Coleções
            </a>
          </div>

          <div className="mt-16 flex items-center gap-10">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-foreground font-heading">500+</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted-foreground/80">Ambientes de Luxo</span>
            </div>
            <div className="h-12 w-px bg-foreground/10" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-foreground font-heading">4.9★</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted-foreground/80">Satisfação Premium</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Refined */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-foreground">Discover</span>
        <div className="h-16 w-px bg-linear-to-b from-foreground to-transparent" />
      </div>
    </section>
  );
};

export default HeroBanner;