import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/theme/mode-toggle"
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
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Processo", href: "#processo" },
]

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300 px-4 pt-4",
                isScrolled ? "pt-2" : "pt-4"
            )}
        >
            <nav
                className={cn(
                    "mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md transition-all duration-300 dark:border-white/10 dark:bg-black/20",
                    isScrolled ? "shadow-lg shadow-black/5" : "shadow-sm"
                )}
            >
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <span className="font-bodoni text-2xl font-bold tracking-tight text-primary group-hover:text-primary/80 transition-colors">
                        Cortinas<span className="text-foreground font-light">Elegance</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            to={item.href}
                            className={cn(
                                "font-jost text-sm font-medium transition-colors hover:text-primary",
                                location.pathname === item.href || location.hash === item.href
                                    ? "text-primary"
                                    : "text-muted-foreground"
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 md:gap-4">
                    <div className="hidden sm:block">
                        <ModeToggle />
                    </div>

                    <Button
                        asChild
                        className="hidden rounded-full bg-primary px-6 hover:bg-primary/90 text-primary-foreground md:flex"
                    >
                        <Link to="/#contato" className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            <span>Orçamento</span>
                        </Link>
                    </Button>

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden rounded-full hover:bg-white/20">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] border-l-border bg-background/80 backdrop-blur-xl">
                            <SheetHeader className="text-left border-b border-border pb-6 mb-6">
                                <SheetTitle className="font-bodoni text-2xl font-bold text-primary">
                                    Menu
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col gap-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        to={item.href}
                                        className={cn(
                                            "font-jost text-lg font-medium p-2 rounded-xl transition-all hover:bg-accent",
                                            location.pathname === item.href || location.hash === item.href
                                                ? "text-primary bg-accent"
                                                : "text-foreground"
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                <div className="mt-8 pt-8 border-t border-muted flex flex-col gap-4">
                                    <div className="flex items-center justify-between px-2">
                                        <span className="text-sm text-muted-foreground">Tema</span>
                                        <ModeToggle />
                                    </div>
                                    <Button
                                        asChild
                                        className="w-full rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg"
                                    >
                                        <Link to="/#contato" className="flex items-center justify-center gap-3">
                                            <Phone className="h-5 w-5" />
                                            <span>Solicitar Orçamento</span>
                                        </Link>
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