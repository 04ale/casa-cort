import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Compass, MoveLeft } from "lucide-react"

export default function NotFound() {
    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background font-jost">
            {/* Background Blobs (Liquid Glass Aesthetic) */}
            <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] animate-pulse rounded-full bg-primary/10 blur-[100px]" />
            <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] animate-pulse rounded-full bg-secondary/20 blur-[100px]" />
            <div className="absolute top-[20%] right-[10%] h-[30%] w-[30%] animate-bounce animation-duration-[8s] rounded-full bg-accent/10 blur-[80px]" />

            {/* Main Content Card (Glassmorphism) */}
            <div className="container relative z-10 mx-auto px-4">
                <div className="mx-auto max-w-2xl overflow-hidden rounded-[2.5rem] border border-border bg-card/10 p-8 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-primary/20 md:p-16">
                    <div className="flex flex-col items-center text-center">
                        {/* Animated Icon Container */}
                        <div className="group relative mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-accent/20 shadow-inner backdrop-blur-md transition-transform duration-500 hover:scale-110">
                            <Compass className="h-12 w-12 text-primary animate-[spin_10s_linear_infinite] group-hover:text-primary/80" />
                            <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl group-hover:bg-primary/20" />
                        </div>

                        <div className="space-y-6">
                            <h1 className="font-bodoni text-7xl font-bold tracking-tight text-foreground md:text-9xl">
                                404
                            </h1>

                            <div className="space-y-3">
                                <h2 className="font-bodoni text-2xl font-semibold tracking-wide md:text-3xl">
                                    Caminho não encontrado
                                </h2>
                                <p className="mx-auto max-w-md text-lg leading-relaxed text-muted-foreground/80">
                                    Parece que você se perdeu entre as dobras de nossas cortinas.
                                    A página que você procura não existe.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                            <Button
                                asChild
                                size="lg"
                                variant="default"
                                className="group h-12 rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                            >
                                <Link to="/" className="flex items-center gap-2">
                                    <MoveLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                                    Voltar ao Início
                                </Link>
                            </Button>

                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="h-12 rounded-full border-border bg-background/50 px-8 hover:bg-accent transition-all duration-300"
                            >
                                <Link to="/contato">
                                    Falar com Consultor
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative text watermark */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 select-none font-bodoni text-sm italic tracking-[0.2em] text-muted-foreground/30 uppercase">
                Cortinas Elegance & Design
            </div>
        </div>
    )
}