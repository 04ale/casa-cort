import { MessageSquare } from "lucide-react"

function FinalCTA() {
    return (
        <section id="contato" className="bg-background py-24 lg:py-40">
            <div className="container mx-auto px-6">
                <div className="relative overflow-hidden rounded-[4rem] bg-primary p-12 text-center text-white lg:p-32 max-w-7xl mx-auto shadow-2xl">
                    {/* Decorative Background Elements */}
                    <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cta/10 blur-3xl" />
                    <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-cta/10 blur-3xl" />
                    
                    <div className="relative z-10">
                        <div className="mb-10 inline-block rounded-full bg-white/10 px-6 py-2 text-[10px] font-bold uppercase tracking-[0.4em] text-white border border-white/20">
                            Consultoria Exclusiva
                        </div>
                        <h3 className="font-heading text-5xl font-bold md:text-7xl lg:text-8xl leading-tight">
                            Pronto para elevar o <br />
                            <span className="text-cta italic font-light">Padrão</span> do seu Espaço?
                        </h3>
                        <p className="mx-auto mt-10 max-w-2xl font-sans text-lg lg:text-xl text-white/60 leading-relaxed">
                            Agende agora uma consultoria personalizada sem compromisso e 
                            descubra por que a Casa Cort é a escolha das residências mais sofisticadas.
                        </p>
                        <div className="mt-14 flex flex-col items-center gap-6">
                            <a
                                href="https://wa.me/5511932289158?text=Olá! Gostaria de agendar uma consultoria para cortinas na Casa Cort."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-premium-cta"
                            >
                                <MessageSquare className="h-5 w-5" />
                                Falar com Especialista
                            </a>
                            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
                                Atendimento Imediato via WhatsApp
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FinalCTA