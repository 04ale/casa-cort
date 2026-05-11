import { MessageSquare, Ruler, Scissors, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Consultoria",
    description: "Iniciamos com uma conversa para entender seu estilo e as necessidades do seu ambiente.",
  },
  {
    icon: Ruler,
    title: "Medição & Escolha",
    description: "Levamos nosso showroom até você para escolha dos tecidos e medição técnica milimétrica.",
  },
  {
    icon: Scissors,
    title: "Alta Costura",
    description: "Suas cortinas são produzidas artesanalmente com acabamento impecável e rigoroso controle.",
  },
  {
    icon: CheckCircle2,
    title: "Instalação Perfeita",
    description: "Finalizamos com a montagem profissional, garantindo o caimento e a funcionalidade ideal.",
  },
];

const Process = () => {
  return (
    <section id="processo" className="bg-background py-24 lg:py-40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-24 text-center">
          <div className="mb-8 inline-block rounded-full bg-cta/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-cta border border-cta/20">
            Passo a Passo
          </div>
          <h2 className="font-heading text-5xl font-bold text-foreground md:text-7xl lg:text-8xl leading-tight">
            Sua jornada para um <br />
            <span className="text-cta italic font-light">Ambiente Exclusivo</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-sans text-xl text-muted-foreground leading-relaxed">
            Um processo meticuloso e transparente, desenhado para garantir 
            sua total tranquilidade, da concepção à instalação final.
          </p>
        </div>

        <div className="relative">
          {/* Refined Connecting Line (Desktop) */}
          <div className="absolute left-0 top-12 hidden h-px w-full bg-linear-to-r from-transparent via-primary/20 to-transparent lg:block" />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Refined Step Circle with Glass Effect */}
                <div className="relative z-10 mb-10 flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl text-primary shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-12">
                  <step.icon className="h-10 w-10" />

                  {/* Step Number Badge */}
                  <div className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-cta text-xs font-bold text-white shadow-lg shadow-cta/20">
                    0{index + 1}
                  </div>
                </div>

                <h3 className="mb-6 font-heading text-2xl font-bold text-foreground tracking-tight">
                  {step.title}
                </h3>

                <p className="max-w-[280px] font-sans text-base leading-relaxed text-muted-foreground/80">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;