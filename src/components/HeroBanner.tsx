import { MessageCircle } from "lucide-react";

const HeroBanner = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background with Lighter Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/src/assets/heroBanner.png')" }}
      >
        {/* Light gradient overlay for readability on the left, but overall much brighter */}
        <div className="absolute inset-0 bg-white/20 lg:bg-linear-to-r lg:from-white/95 lg:via-white/40 lg:to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            Atendimento Personalizado
          </div>

          <h1 className="mb-6 font-heading text-5xl font-bold leading-[1.1] text-foreground md:text-7xl lg:text-8xl">
            Transforme seus <br />
            <span className="text-primary italic">Ambientes</span> com <br />
            Cortinas sob Medida
          </h1>

          <p className="mb-10 max-w-xl font-sans text-lg text-muted-foreground md:text-xl">
            Design, conforto e elegância para sua casa ou empresa. Soluções
            personalizadas com materiais premium e atendimento especializado.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/5511932289158?text=Olá! Gostaria de agendar uma consultoria para cortinas na Casa Cort."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-primary/90 animate-pulse-primary cursor-pointer"
            >
              <MessageCircle className="h-6 w-6 transition-transform group-hover:rotate-12" />
              Solicitar Orçamento no WhatsApp
            </a>

            <a
              href="#categories"
              className="flex items-center justify-center rounded-full border border-primary/20 bg-white/50 px-8 py-4 text-lg font-semibold text-foreground backdrop-blur-md transition-all hover:bg-white/80 cursor-pointer"
            >
              Conhecer Produtos
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-muted-foreground">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">500+</span>
              <span className="text-[10px] uppercase tracking-[0.2em]">Ambientes Transformados</span>
            </div>
            <div className="h-10 w-px bg-border" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">4.9★</span>
              <span className="text-[10px] uppercase tracking-[0.2em]">Avaliação dos Clientes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Darker for visibility */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/20">
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="h-12 w-px bg-linear-to-b from-foreground/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroBanner;