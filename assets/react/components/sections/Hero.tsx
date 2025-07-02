import {Button} from "@/components/ui/button";

export function Hero() {
    return (
        <section className="w-full py-20 px-6 md:px-12 bg-muted rounded-xl">
            <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                {/* Left: Text Content */}
                <div className="space-y-6">
                    <p className="text-sm font-medium text-foreground/80">Show Time</p>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                        Join the experience
                    </h1>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
                        doloremque mollitia fugiat omnis! Porro facilis quo animi
                        consequatur. Explicabo.
                    </p>
                    <Button className="mt-2">
                        <span className="mr-1">→</span> Buy Tickets
                    </Button>

                    {/*<img*/}
                    {/*    src="/images/festival-1.jpg"*/}
                    {/*    alt="Gallery 1"*/}
                    {/*    className="h-28 w-full object-cover rounded-lg"*/}
                    {/*/>*/}
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
