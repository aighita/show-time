import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
    {
        title: "Browse Festivals",
        description: "Discover hundreds of music, art, and cultural festivals worldwide.",
    },
    {
        title: "Compare & Select",
        description: "Use filters and reviews to find the perfect event for your vibe.",
    },
    {
        title: "Book Instantly",
        description: "Secure your spot with fast, secure checkout and digital tickets.",
    },
    {
        title: "Enjoy the Experience",
        description: "Show up and soak in the atmosphere with confidence.",
    },
];

export function HowItWorks() {
    return (
        <section className="w-full py-16 bg-background">
            <div className="container px-4 mx-auto text-center space-y-12">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold">How It Works</h2>
                    <p className="text-muted-foreground mt-2">
                        A simple process to get you into your favorite festivals, effortlessly.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => (
                        <Card key={index} className="bg-muted/40 border-none shadow-none text-left">
                            <CardContent className="p-6 space-y-4">
                                <CheckCircle className="text-primary w-6 h-6" />
                                <h3 className="text-lg font-semibold">{step.title}</h3>
                                <p className="text-muted-foreground text-sm">{step.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
