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
    <section id="processo" className="bg-secondary/20 py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center">
          <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            Como Trabalhamos
          </div>
          <h2 className="font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Sua jornada para um <br />
            <span className="text-primary italic">Ambiente Exclusivo</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-muted-foreground">
            Um processo simplificado e transparente, desenhado para garantir
            sua total tranquilidade do início ao fim.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute left-0 top-10 hidden h-px w-full bg-primary/20 lg:block" />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Step Circle */}
                <div className="relative z-10 mb-8 flex h-20 w-20 items-center justify-center rounded-full border-4 border-background bg-white text-primary shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <step.icon className="h-8 w-8" />

                  {/* Step Number Badge */}
                  <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-[10px] font-bold text-white">
                    0{index + 1}
                  </div>
                </div>

                <h3 className="mb-4 font-heading text-xl font-bold text-foreground">
                  {step.title}
                </h3>

                <p className="max-w-[250px] font-sans text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Area */}

      </div>
    </section>
  );
};

export default Process;