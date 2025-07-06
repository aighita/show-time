import {Button} from "@/components/ui/button";

export function Hero() {
    return (
        <section className="w-full relative py-20 px-6 md:px-12 bg-muted rounded-xl overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0 scale-125"
            >
                <source src="/videos/auth-background.webm" type="video/webm"/>
                Your browser does not support the video tag.
            </video>

            {/* Overlay to darken the video slightly for better contrast */}
            <div className="absolute inset-0 bg-black/40 z-0"></div>

            {/* Foreground Content */}
            <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                {/* Left: Text Content */}
                <div className="space-y-6 text-white">
                    <p className="text-sm font-medium">Show Time</p>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                        Join the experience
                    </h1>
                    <p className="text-lg leading-relaxed text-white/90">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
                        doloremque mollitia fugiat omnis! Porro facilis quo animi
                        consequatur. Explicabo.
                    </p>
                    <Button className="mt-2 bg-white text-black hover:bg-gray-200">
                        <span className="mr-1">→</span> Buy Tickets
                    </Button>
                </div>

                {/* Right: Gallery Images */}
                <div className="grid grid-cols-2 grid-rows-3 gap-4">
                    <img
                        src="/images/festival-1.jpg"
                        alt="Gallery 1"
                        className="h-28 w-full object-cover rounded-lg"
                    />
                    <img
                        src="/images/festival-2.jpg"
                        alt="Gallery 2"
                        className="h-48 w-full object-cover rounded-lg"
                    />
                    <img
                        src="/images/festival-3.webp"
                        alt="Gallery 3"
                        className="h-64 w-full object-cover rounded-lg col-span-2"
                    />
                    <img
                        src="/images/festival-4.jpeg"
                        alt="Gallery 4"
                        className="h-28 w-full object-cover rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
}
