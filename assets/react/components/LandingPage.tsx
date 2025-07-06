import {Navbar} from "@/react/components/common/Navbar"
import {Hero} from "@/react/components/sections/Hero"
import {HowItWorks} from "@/react/components/sections/HowItWorks";

// interface LandingPageProps {
//     festivals: Festival[];
// }

export default function LandingPage() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <HowItWorks/>
            {/*<FeaturedFestivals festivals={festivals}/>*/}
            {/*<Footer/>*/}
        </>
    );
}
