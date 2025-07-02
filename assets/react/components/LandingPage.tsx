// LandingPage.tsx
import {Navbar} from "@/react/components/common/Navbar"
import {Hero} from "@/react/components/sections/Hero"
import {HowItWorks} from "@/react/components/sections/HowItWorks"
import {Footer} from "@/react/components/common/Footer"

export default function LandingPage() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <HowItWorks/>
            {/*<FeaturedFestivals/>*/}
            {/*<Timeline/>*/}
            {/*<Testimonials/>*/}
            <Footer/>
        </>
    )
}
