import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import HeroBanner from "@/components/HeroBanner"
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import Categories from "@/components/Categories"
import Differences from "@/components/Differences"
import Testimonials from "@/components/Testimonials"
import Process from "@/components/Process"
import FinalCTA from "@/components/FinalCTA"
import FloatingWhatsApp from "@/components/FloatingWhatsApp"

function Home() {
    const { hash } = useLocation()

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1))
            if (element) {
                element.scrollIntoView({ behavior: "smooth" })
            }
        }
    }, [hash])

    return (
        <div>
            <Header />
            <HeroBanner />
            <Categories />
            <Differences />
            <Testimonials />
            <Process />
            <FinalCTA />
            <Footer />
            <FloatingWhatsApp />
        </div>
    )
}

export default Home