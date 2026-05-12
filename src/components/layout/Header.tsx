import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navItems = [
    { label: "Início", href: "#home" },
    { label: "Categorias", href: "#categorias" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Processo", href: "#processo" },
    { label: "Depoimentos", href: "#depoimentos" },
]

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const whatsappUrl = "https://wa.me/5511999999999?text=Olá! Vim pelo site e gostaria de solicitar um orçamento para cortinas."

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-500 px-4 pt-4",
                isScrolled ? "pt-2" : "pt-4"
            )}
        >
            <nav
                className={cn(
                    "mx-auto flex max-w-7xl items-center justify-between rounded-full px-6 py-3 transition-all duration-700",
                    isScrolled
                        ? "bg-background/80 shadow-lg shadow-primary/5 border border-primary/10 backdrop-blur-md"
                        : "bg-transparent border border-transparent shadow-none"
                )}
            >
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg transition-transform group-hover:rotate-12">
                        <span className="font-heading text-xl font-bold">C</span>
                    </div>
                    <span className="font-heading text-2xl font-bold tracking-tighter text-foreground">
                        CASA<span className="font-light text-cta">CORT</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "relative font-jost text-sm font-medium transition-colors hover:text-cta group text-foreground/80"
                            )}
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 h-px w-0 bg-cta transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 md:gap-4">
                    <div className="hidden sm:block">
                    </div>

                    <Button
                        asChild
                        className="hidden rounded-full bg-cta px-6 py-6 hover:bg-cta/90 text-cta-foreground shadow-lg shadow-cta/20 hover:shadow-cta/40 hover:scale-105 active:scale-95 md:flex transition-all duration-300"
                    >
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            <span>Orçamento</span>
                        </a>
                    </Button>

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className={cn(
                                    "md:hidden rounded-full transition-colors hover:bg-primary/10 text-foreground"
                                )}
                            >
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] border-l-border bg-background/95 backdrop-blur-xl">
                            <SheetHeader className="text-left border-b border-border pb-6 mb-6">
                                <SheetTitle className="font-heading text-2xl font-bold">
                                    CASA<span className="font-light text-cta">CORT</span>
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col gap-4">
                                {navItems.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "font-jost text-lg font-medium p-3 rounded-2xl transition-all hover:bg-accent hover:text-cta",
                                            location.hash === item.href
                                                ? "text-cta bg-accent"
                                                : "text-foreground"
                                        )}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                                <div className="mt-8 pt-8 border-t border-muted flex flex-col gap-6">
                                    <div className="flex items-center justify-between px-2">
                                        <span className="text-sm text-muted-foreground">Alternar Tema</span>
                                    </div>
                                    <Button
                                        asChild
                                        className="w-full rounded-2xl bg-cta hover:bg-cta/90 text-cta-foreground py-7 text-lg shadow-xl shadow-cta/20"
                                    >
                                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                                            <Phone className="h-5 w-5" />
                                            <span>Solicitar Orçamento</span>
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    )
}