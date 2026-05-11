import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Compass, MoveLeft } from "lucide-react"

export default function NotFound() {
    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background font-sans">
            {/* Background Blobs (Liquid Glass Aesthetic) */}
            <div className="absolute top-[-10%] left-[-10%] h-[50%] w-[50%] animate-pulse rounded-full bg-primary/5 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] h-[50%] w-[50%] animate-pulse rounded-full bg-cta/10 blur-[120px]" />

            {/* Main Content Card (Glassmorphism) */}
            <div className="container relative z-10 mx-auto px-6">
                <div className="mx-auto max-w-2xl overflow-hidden rounded-[4rem] border border-white/10 bg-white/5 p-12 shadow-3xl backdrop-blur-3xl transition-all duration-700 hover:border-cta/20 md:p-20 text-center">
                    <div className="flex flex-col items-center">
                        {/* Animated Icon Container */}
                        <div className="group relative mb-12 flex h-28 w-28 items-center justify-center rounded-4xl bg-white/5 shadow-inner backdrop-blur-md transition-all duration-700 hover:scale-110 hover:rotate-6">
                            <Compass className="h-14 w-14 text-cta animate-[spin_12s_linear_infinite]" />
                            <div className="absolute inset-0 rounded-4xl bg-cta/10 blur-2xl group-hover:bg-cta/20" />
                        </div>

                        <div className="space-y-8">
                            <h1 className="font-heading text-8xl font-bold tracking-tighter text-foreground md:text-[10rem] leading-none">
                                404
                            </h1>

                            <div className="space-y-4">
                                <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl text-foreground">
                                    Página não encontrada
                                </h2>
                                <p className="mx-auto max-w-md text-lg leading-relaxed text-muted-foreground/80 font-medium">
                                    Parece que você se perdeu entre as dobras de nossas cortinas exclusivas.
                                    Vamos levar você de volta ao refúgio do design.
                                </p>
                            </div>
                        </div>

                        <div className="mt-14 flex flex-col gap-5 sm:flex-row">
                            <Button
                                asChild
                                size="lg"
                                className="btn-premium-cta h-14 px-10"
                            >
                                <Link to="/" className="flex items-center gap-3">
                                    <MoveLeft className="h-5 w-5 transition-transform group-hover:-translate-x-2" />
                                    Voltar ao Início
                                </Link>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                className="h-14 rounded-full border-foreground/10 bg-white/5 px-10 hover:bg-white/10 transition-all duration-500 text-foreground font-bold uppercase tracking-widest text-xs"
                            >
                                <Link to="/#contato">
                                    Falar com Especialista
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative text watermark */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 select-none font-heading text-xs italic tracking-[0.5em] text-foreground/20 uppercase font-bold">
                Casa Cort • Luxury Design
            </div>
        </div>
    )
}