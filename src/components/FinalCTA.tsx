import { MessageSquare } from "lucide-react"

function FinalCTA() {
    return (
        <section id="contato" className="bg-secondary/20 py-24 lg:py-32">
            <div className="mt-24 rounded-[3rem] bg-foreground p-12 text-center text-white lg:p-20 max-w-7xl mx-auto">
                <h3 className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl">
                    Pronto para transformar seu espaço?
                </h3>
                <p className="mx-auto mt-6 max-w-xl font-sans text-gray-400">
                    Agende agora sua consultoria gratuita e descubra como a Casa Cort pode
                    elevar o padrão do seu ambiente.
                </p>
                <div className="mt-10">
                    <a
                        href="https://wa.me/5511932289158?text=Olá! Gostaria de agendar uma consultoria para cortinas na Casa Cort."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:scale-105 hover:bg-primary/90 animate-pulse-primary"
                    >
                        Falar com Especialista
                        <MessageSquare className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default FinalCTA