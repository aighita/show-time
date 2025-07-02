"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
    {
        name: "Elena Popescu",
        role: "Festival Goer",
        image: "/avatars/elena.jpg",
        text: "This was hands down the best event platform I've used. Booking was seamless, and the vibe at the venue was just unreal.",
    },
    {
        name: "Andrei Ionescu",
        role: "DJ & Performer",
        image: "/avatars/andrei.jpg",
        text: "Working with this platform was incredibly smooth. Communication, scheduling, and logistics were all perfectly handled.",
    },
    {
        name: "Mara Georgescu",
        role: "Vendor",
        image: "/avatars/mara.jpg",
        text: "I sold out everything! The festival traffic was massive and the booth placement was spot-on. Definitely signing up again!",
    },
];

export function Testimonials() {
    return (
        <section className="w-full py-20 bg-muted/10">
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 space-y-12">
                {/* Heading */}
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        What People Are Saying
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-base">
                        Hear from those who made the most of the experience.
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <Card
                            key={i}
                            className="bg-background border border-border shadow-sm hover:shadow-md transition rounded-lg"
                        >
                            <CardContent className="p-6 space-y-4">
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    “{t.text}”
                                </p>
                                <div className="flex items-center gap-4 pt-4">
                                    <Avatar>
                                        <AvatarImage src={t.image} alt={t.name} />
                                        <AvatarFallback>
                                            {t.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")
                                                .toUpperCase()}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium text-foreground">
                                            {t.name}
                                        </p>
                                        <p className="text-xs text-muted-foreground">{t.role}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
